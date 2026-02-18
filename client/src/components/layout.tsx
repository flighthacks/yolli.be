import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Sun, Menu, X, Phone, Mail, MapPin, AlertCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/yolli-retina_1765123493224.png";
import footerImage from "@assets/yollanthe_1765124077273.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Dagritme", href: "/dagritme" },
    { name: "Reglement & Info", href: "/info" },
    { name: "Faciliteiten", href: "/faciliteiten" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/30">
      {/* Alert Bar - Mobile */}
      <div className="bg-primary/20 py-2 px-4 text-sm text-primary-foreground/80 md:hidden flex justify-center items-center">
        <div className="bg-white/80 text-amber-900 rounded-full px-3 py-1 flex items-center gap-2 shadow-sm border border-amber-200/50">
          <AlertCircle size={14} className="text-amber-600" />
          <span className="font-medium text-xs tracking-wide">Yolli Kinderopvang volledig volzet</span>
        </div>
      </div>

      {/* Top Bar - Desktop */}
      <div className="bg-primary/20 py-2 px-4 text-sm text-primary-foreground/80 hidden md:flex justify-between items-center">
        <div className="bg-white/80 text-amber-900 rounded-full px-4 py-1 flex items-center gap-2 shadow-sm border border-amber-200/50">
          <AlertCircle size={14} className="text-amber-600" />
          <span className="font-medium text-xs tracking-wide">Momenteel is Yolli Kinderopvang volledig volzet.</span>
        </div>
        <div className="flex items-center gap-6">
          <span>📍 Koersdreef 88, 2990 Gooreind</span>
          <span>📞 0498 39 53 53</span>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="h-12 w-auto transition-all">
                <img 
                  src={logoImage} 
                  alt="Kinderopvang Yolli" 
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <div
                  className={cn(
                    "cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary-foreground",
                    location === item.href
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </div>
              </Link>
            ))}
            <Link href="/contact">
               <Button variant="default" className="ml-2 rounded-full font-bold shadow-md hover:shadow-lg transition-all cursor-pointer">
                 Contact
               </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background p-4 animate-in slide-in-from-top-5">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <div
                    className={cn(
                      "cursor-pointer px-4 py-3 rounded-xl text-base font-medium transition-colors",
                      location === item.href
                        ? "bg-primary/20 text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary/10 border-t border-primary/20 pt-12 pb-6 mt-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div className="space-y-4">
              <div className="h-10 w-auto">
                <img src={logoImage} alt="Yolli" className="h-full w-auto object-contain opacity-80" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Kleinschalige, huiselijke kinderopvang die staat voor: rust en regelmaat waarin het kleine kind kan gedijen.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  Koersdreef 88, 2990 Gooreind
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-primary" />
                  0498 39 53 53
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-primary" />
                  info@yolli.be
                </li>
              </ul>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg">Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/dagritme"><span className="hover:text-primary transition-colors cursor-pointer">Dagritme</span></Link></li>
                <li><Link href="/info"><span className="hover:text-primary transition-colors cursor-pointer">Reglement</span></Link></li>
                <li><Link href="/contact"><span className="hover:text-primary transition-colors cursor-pointer">Inschrijven</span></Link></li>
              </ul>
            </div>

            {/* Footer Image */}
            <div className="flex items-center justify-center md:justify-end">
               <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/50 shadow-lg">
                 <img src={footerImage} alt="Yolanthe reading to children" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
          
          <div className="border-t border-primary/20 pt-6 text-center text-xs text-muted-foreground">
            &copy; 2016-2026 Kinderopvang Yolli. Alle rechten voorbehouden.
          </div>
        </div>
      </footer>
    </div>
  );
}
