import { Octokit } from '@octokit/rest';
import * as fs from 'fs';
import * as path from 'path';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }

  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? 'repl ' + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
    ? 'depl ' + process.env.WEB_REPL_RENEWAL
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

const IGNORE_DIRS = new Set([
  'node_modules', '.git', 'dist', '.local', '.cache',
  '.config', '.upm', '.nix'
]);

const IGNORE_FILES = new Set([
  '.replit', 'replit.nix', 'replit_zip_error_log.txt',
  '.gitattributes'
]);

function getAllFiles(dir: string, basePath: string = ''): { path: string; fullPath: string }[] {
  const results: { path: string; fullPath: string }[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const relativePath = basePath ? `${basePath}/${entry.name}` : entry.name;
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!IGNORE_DIRS.has(entry.name) && !entry.name.startsWith('.')) {
        results.push(...getAllFiles(fullPath, relativePath));
      }
    } else {
      if (!IGNORE_FILES.has(entry.name)) {
        results.push({ path: relativePath, fullPath });
      }
    }
  }
  return results;
}

function isBinary(filePath: string): boolean {
  const ext = path.extname(filePath).toLowerCase();
  const binaryExts = new Set([
    '.png', '.jpg', '.jpeg', '.gif', '.ico', '.svg', '.webp',
    '.woff', '.woff2', '.ttf', '.eot', '.otf',
    '.mp4', '.mp3', '.wav', '.ogg',
    '.pdf', '.zip', '.gz', '.tar'
  ]);
  return binaryExts.has(ext);
}

async function main() {
  const repoName = 'yolli.be';

  console.log('Getting GitHub access token...');
  const token = await getAccessToken();
  const octokit = new Octokit({ auth: token });

  const { data: user } = await octokit.users.getAuthenticated();
  const owner = user.login;
  console.log(`Authenticated as: ${owner}`);

  let repoExists = false;
  try {
    await octokit.repos.get({ owner, repo: repoName });
    repoExists = true;
    console.log(`Repository ${owner}/${repoName} already exists.`);
  } catch (e: any) {
    if (e.status !== 404) throw e;
  }

  if (!repoExists) {
    console.log(`Creating repository ${repoName}...`);
    await octokit.repos.createForAuthenticatedUser({
      name: repoName,
      description: 'Yolli Kinderopvang - Kleinschalige, huiselijke kinderopvang in Gooreind-Wuustwezel',
      private: false,
      auto_init: true,
    });
    console.log('Repository created with initial commit!');
    await new Promise(resolve => setTimeout(resolve, 3000));
  }

  let isEmpty = false;
  try {
    await octokit.repos.getContent({ owner, repo: repoName, path: '' });
  } catch (e: any) {
    if (e.status === 404) {
      isEmpty = true;
    }
  }

  if (isEmpty) {
    console.log('Initializing repository with README...');
    await octokit.repos.createOrUpdateFileContents({
      owner, repo: repoName,
      path: 'README.md',
      message: 'Initial commit',
      content: Buffer.from('# Yolli Kinderopvang\n\nKleinschalige, huiselijke kinderopvang in Gooreind-Wuustwezel\n').toString('base64'),
    });
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  const { data: refData } = await octokit.git.getRef({
    owner, repo: repoName,
    ref: 'heads/main',
  });
  const latestCommitSha = refData.object.sha;
  console.log(`Latest commit: ${latestCommitSha}`);

  const projectDir = '/home/runner/workspace';
  const files = getAllFiles(projectDir);
  console.log(`Found ${files.length} files to upload`);

  const BATCH_SIZE = 10;
  const treeItems: { path: string; mode: '100644'; type: 'blob'; sha: string }[] = [];

  for (let i = 0; i < files.length; i += BATCH_SIZE) {
    const batch = files.slice(i, i + BATCH_SIZE);
    const promises = batch.map(async (file, j) => {
      const idx = i + j + 1;
      try {
        let content: string;
        let encoding: 'base64' | 'utf-8';

        if (isBinary(file.fullPath)) {
          content = fs.readFileSync(file.fullPath).toString('base64');
          encoding = 'base64';
        } else {
          content = fs.readFileSync(file.fullPath, 'utf-8');
          encoding = 'utf-8';
        }

        const { data: blob } = await octokit.git.createBlob({
          owner, repo: repoName,
          content,
          encoding,
        });
        return { path: file.path, mode: '100644' as const, type: 'blob' as const, sha: blob.sha };
      } catch (err: any) {
        console.warn(`\nWarning: skipping ${file.path}: ${err.message}`);
        return null;
      }
    });

    const results = await Promise.all(promises);
    for (const r of results) {
      if (r) treeItems.push(r);
    }
    process.stdout.write(`\rUploaded ${Math.min(i + BATCH_SIZE, files.length)}/${files.length} files`);
  }

  console.log('\n\nCreating Git tree...');
  const { data: tree } = await octokit.git.createTree({
    owner, repo: repoName,
    tree: treeItems,
    base_tree: undefined,
  });

  console.log('Creating commit...');
  const { data: commit } = await octokit.git.createCommit({
    owner, repo: repoName,
    message: 'Yolli Kinderopvang website - full project',
    tree: tree.sha,
    parents: [latestCommitSha],
  });

  console.log('Updating main branch...');
  await octokit.git.updateRef({
    owner, repo: repoName,
    ref: 'heads/main',
    sha: commit.sha,
    force: true,
  });

  console.log(`\nDone! Your project is live on GitHub:`);
  console.log(`https://github.com/${owner}/${repoName}`);
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
