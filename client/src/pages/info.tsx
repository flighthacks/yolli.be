import Layout from "@/components/layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Info, Clock, Euro, Apple, Thermometer, FileText, Heart, Shield, Home, Users } from "lucide-react";

export default function InfoPage() {
  return (
    <Layout>
      <div className="bg-secondary/20 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Reglement & Info</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-hand">
            "Goede afspraken maken goede vrienden."
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl space-y-12">
        
        {/* Intro Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/60">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
             <Heart className="text-primary" /> Waarvoor staat kinderopvang Yolli?
          </h2>
          <ul className="space-y-3 text-muted-foreground list-disc pl-5 marker:text-primary">
            <li>Dagopvang voor kinderen van 6 maand tot 4 jaar.</li>
            <li>Kinderen worden begeleid vanuit een pedagogische visie die gebaseerd is op het antroposofische mensbeeld van Rudolf Steiner.</li>
            <li>Biologische voeding en verzorgingsproducten van Weleda</li>
            <li>Speelgoed van natuurlijke materialen.</li>
            <li>Veel buitenspel en aandacht voor beweging.</li>
            <li>Geen tv en radio.</li>
            <li>Kinderen betrekken in de dagdagelijkse karweitjes zoals; was vouwen, soep maken, broodbakken, werken in de tuin...</li>
          </ul>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="price">
          
          <AccordionItem value="price" className="border border-border/60 rounded-xl px-4 bg-card shadow-sm">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-4 text-left">
                <div className="bg-primary/10 p-2 rounded-full text-primary"><Euro size={20} /></div>
                <span className="font-display font-bold text-lg">Prijs & Betaling</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 pl-14 space-y-4">
              <div>
                <h4 className="font-bold text-foreground">Prijs voor de kinderopvang</h4>
                <p>De gewenste opvangdagen en -uren worden bij de inschrijving besproken.</p>
                <p>Het verschuldigde bedrag wordt maandelijks gefactureerd en is over te schrijven op het nummer: <strong>BE14 7350 4272 8383</strong> op naam van Kinderopvang Yolli.</p>
                <p>Bij herhaaldelijke niet-tijdige betaling kan een einde aan de opvang gemaakt worden.</p>
              </div>
              <div>
                 <h4 className="font-bold text-foreground">Openingsuren/Prijs</h4>
                 <p>• Maandag - Dinsdag - Donderdag - Vrijdag van 8h tot 17.30h: <strong>40€/dag</strong></p>
                 <p className="italic text-sm my-2">(Kinderen moeten voor 9h aanwezig zijn zodat we de dag samen kunnen beginnen)</p>
                 <p className="font-semibold">In deze prijs is het volgende inbegrepen:</p>
                 <ul className="list-disc pl-5 mt-1 space-y-1">
                   <li>10 uurtje, sap en fruit.</li>
                   <li>Warme biologische/vegetarische warme maaltijd/brood.</li>
                   <li>3 uurtje fruit/pap</li>
                   <li>Weleda verzorgingsprodukten</li>
                   <li>Dagboekje met foto's van het kind.</li>
                 </ul>
                 <p className="mt-4 font-semibold text-primary">Bij ziekte, langer dan 5 volle opvangdagen, hoeft er niet meer betaald te worden.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="hours" className="border border-border/60 rounded-xl px-4 bg-card shadow-sm">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-4 text-left">
                <div className="bg-secondary/50 p-2 rounded-full text-secondary-foreground"><Clock size={20} /></div>
                <span className="font-display font-bold text-lg">Openingsuren & Vakantie</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 pl-14 space-y-4">
              <div>
                <h4 className="font-bold text-foreground">Openingsdagen en uren</h4>
                <p>Maandag – dinsdag – donderdag - Vrijdag.</p>
                <p>Geen opvang op Woensdag</p>
                <p>Van 8h tot 17h30</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground">Vakantiedagen</h4>
                <p>Op de normale feestdagen wordt er geen opvang voorzien.</p>
                <p>Langere vakantieperioden en losse vakantiedagen worden zo snel mogelijk meegedeeld aan de ouders.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="admin" className="border border-border/60 rounded-xl px-4 bg-card shadow-sm">
            <AccordionTrigger className="hover:no-underline py-4">
               <div className="flex items-center gap-4 text-left">
                <div className="bg-accent/50 p-2 rounded-full text-accent-foreground"><FileText size={20} /></div>
                <span className="font-display font-bold text-lg">Gegevens & Attesten</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 pl-14 space-y-4">
              <div>
                <h4 className="font-bold text-foreground">Gegevens</h4>
                <p>Yolanthe Grobet</p>
                <p>Koersdreef 88, 2990 Gooreind-Wuustwezel</p>
                <p>tel. 03 633 13 75</p>
                <p>GSM 0498 39 53 53</p>
                <p>e-mail: yolanthe.grobet@gmail.com</p>
                <p>ondernemingsnummer: 0650.702.823</p>
                <p>Vergunning door Kind & Gezin: ID-nr.:8898</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground">Zelfstandige onthaalouder</h4>
                <p>Ik werk als zelfstandige begeleider in de kinderopvang, waarvoor ik een cursus “kennis maken en werken in de gezinsopvang" heb gevolgd. Een attest van Kind en Gezin krijgt een onthaalouder wanneer de opvang voldoet aan de wettelijke voorwaarde.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>De onthaalouder mag zelf de kosten van de opvang bepalen.</li>
                  <li>Ouders genieten van een fiscale aftrek voor de opvangkosten.</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="registration" className="border border-border/60 rounded-xl px-4 bg-card shadow-sm">
             <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-4 text-left">
                <div className="bg-green-100 p-2 rounded-full text-green-700"><Check size={20} /></div>
                <span className="font-display font-bold text-lg">Inschrijving & Wenning</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 pl-14 space-y-4">
              <p>Als beide partijen de schriftelijke overeenkomst hebben ondertekend en het inschrijvingsgeld is betaald, is de inschrijving definitief.</p>
              <p>De stap van thuis naar de opvang is groot, daarom bepalen ouders in overleg met mij hoeveel wen-momenten er nodig zijn, opdat het kind zich snel thuis voelt in de nieuwe omgeving en de ouders met een gerust hart hun kind kunnen achter laten.</p>
              <p>Bij nieuwe inschrijvingen geldt een voorrang voor broer of zus.</p>
              
              <div>
                <h4 className="font-bold text-foreground">Inschrijvingsgeld</h4>
                <p>Bij de inschrijving wordt 100€ inschrijvingsgeld gevraagd. Zo zijn de ouders zeker van hun opvangplaats en de onthaalouder zeker dat de opvang zal doorgaan.</p>
                <p>Deze wordt niet terug betaald, ook niet wanneer de opvang niet zou doorgaan.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="logistics" className="border border-border/60 rounded-xl px-4 bg-card shadow-sm">
             <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-4 text-left">
                <div className="bg-orange-100 p-2 rounded-full text-orange-700"><Home size={20} /></div>
                <span className="font-display font-bold text-lg">Praktische Afspraken</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 pl-14 space-y-4">
              <div>
                <h4 className="font-bold text-foreground">Brengen en halen van het kind</h4>
                <p>Het kind kan door beide ouders worden opgehaald en door derden indien dit op voorhand werd vermeld. Tijdens het brengen en halen is er altijd gelegenheid om kort informatie uit te wisselen.</p>
                <p>Bij vragen, problemen, of wensen kan er op een ander moment tijd vrij gemaakt worden voor een langer gesprek.</p>
                <p>Iedere dag gaat er ook een schriftje mee met dagdagelijkse informatie of opvallende momenten en foto's.</p>
              </div>
              
              <div>
                 <h4 className="font-bold text-foreground">Voeding</h4>
                 <p>De onthaalouder zorgt voor een gezonde gevarieerde vegetarische voeding in functie van de leeftijd van het kind.</p>
                 <p>De voeding is zoveel mogelijk biologisch.</p>
                 <p>Speciale voeding, dieetvoeding en flesvoeding wordt door de ouders meegebracht.</p>
              </div>

              <div>
                <h4 className="font-bold text-foreground">Kledij, verzorging en ziekte</h4>
                <p><strong>Meebrengen voor de verzorging:</strong></p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Warme aangepaste kleding</li>
                  <li>Aantal luiers voor de opvangdag</li>
                  <li>Knuffel/tutje</li>
                  <li>Slaapzak</li>
                  <li>Reserve kleding</li>
                  <li>Pantoffels en laarsjes</li>
                  <li>Regenbroek</li>
                </ul>
              </div>

               <div>
                 <h4 className="font-bold text-foreground">Wijzigingen aan het huishoudelijk reglement</h4>
                 <p>Indien het huishoudelijk reglement gewijzigd zou worden in het nadeel van de contracthouder(s), zal deze wijziging minimaal twee maanden op voorhand schriftelijk meegedeeld worden. Mededeling zal door de contracthouder voor kennis-name en ontvangst worden ondertekend. De contracthouder heeft in dat geval het recht om binnen deze twee maanden zijn schriftelijke overeenkomst op te zeggen zonder enige schade- of opzeggingsvergoeding.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="illness" className="border border-border/60 rounded-xl px-4 bg-card shadow-sm">
             <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-4 text-left">
                <div className="bg-red-100 p-2 rounded-full text-red-700"><Thermometer size={20} /></div>
                <span className="font-display font-bold text-lg">Ziekte</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 pl-14 space-y-4">
              <p>Medicatie zal enkel toegediend worden bij schriftelijke toelating van de ouders, behalve in noodsituaties.</p>
              <p>In noodgevallen worden de ouders zo spoedig mogelijk verwittigd.</p>
              <p>Zieke kinderen die braken, diarree of koorts zijn het liefst thuis in hun eigen omgeving en kunnen niet naar de opvang komen.</p>
              <p>En licht ziek kind kan opgevangen worden na overleg.</p>
              <p>Indien de onthaalouder het nodig vindt, kan de huisarts worden geraadpleegd. De ouders betalen de raadpleging en eventuele medicatie.</p>
              <p>Bij ziekte van uw kind verwittigt u tijdig de opvang. Bij ziekte, langer dan 5 volle opvangdagen, hoeft er niet meer betaald te worden.</p>
              <p>Bij ziekte van de onthaalouder, worden de ouders zo snel mogelijk verwittigd.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="policy" className="border border-border/60 rounded-xl px-4 bg-card shadow-sm">
             <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-4 text-left">
                <div className="bg-blue-100 p-2 rounded-full text-blue-700"><Shield size={20} /></div>
                <span className="font-display font-bold text-lg">Beleid & Veiligheid</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 pl-14 space-y-4">
              <div>
                <h4 className="font-bold text-foreground">Opvoeding</h4>
                <p>Ouders en onthaalouder werken samen aan de opvoeding en ontwikkeling van het kind.</p>
                <p>De onthaalouder stimuleert de algemene ontwikkeling van het kind.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-foreground">Toezicht</h4>
                <p>Tijdens de opvang kunnen de ouders 'te allen tijde toegang hebben tot de ruimtes waar de kinderen verblijven.</p>
                <p>De onthaalouder zorgt voor een veilige omgeving, aangepast aan de leeftijd van het kind.</p>
                <p>De onthaalouder voorziet in het normale, huiselijke toezicht op kinderen en verbindt zich ertoe om het opvangadres niet te verlaten zolang er toezicht noodzakelijk is.</p>
                <p>De ouders gaan akkoord dat de onthaalouder de woning verlaat met de opvangkinderen. Met de kinderwagen, fiets, bolderkar..etc... om een wandeling of boodschap te doen.</p>
              </div>

              <div>
                <h4 className="font-bold text-foreground">Eventuele schade en klachten / Verzekering</h4>
                <p>De onthaalouder is verzekerd voor burgerlijke aansprakelijkheid en ongevallen m.b.t. de opvangkinderen.</p>
                <p>Verzekeraar: Allianz Polisnr. NCN400223081</p>
              </div>

               <div>
                <h4 className="font-bold text-foreground">Klachtenprocedure</h4>
                <ol className="list-decimal pl-5 mt-1 space-y-1">
                  <li>klachten graag richten aan de verantwoordelijke van de kinderopvang: mondeling mag, maar best de klacht ook op papier zetten zo dat ze voor ontvangst kan afgetekend worden.</li>
                  <li>vervolgens zal de kinderopvang de klacht onderzoeken en het resultaat hiervan schriftelijk aan de desbetreffende ouders bezorgen.</li>
                  <li>behandeling ,onderzoek en resultaat zullen binnen de 7 werkdagen gebeuren.</li>
                  <li>klachten staan geregistreerd : vermelding van de inhoud van de klacht en resultaat van het onderzoek .</li>
                </ol>
                <p className="mt-2">Uiteraard kunt u steeds met al uw vragen en opmerkingen bij de onthaalouder terecht.</p>
                <p>Bovendien heeft u als ouder steeds het recht klachten te uiten bij de klachtendienst van Kind en Gezin.</p>
                <div className="mt-2 text-sm bg-muted p-3 rounded">
                  <p>Kind en gezin</p>
                  <p>Hallepoortlaan 27, 1060 Brussel</p>
                  <p>e-mail: Klachtendienst@kindengezin.be</p>
                  <p>tel: 02 533 14 14</p>
                </div>
              </div>

               <div>
                 <h4 className="font-bold text-foreground">Beroepsgeheim</h4>
                 <p>De onthaalouder verbindt zich ertoe om de veiligheid en het vertrouwelijk karakter van de persoonsgegevens te waarborgen.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </Layout>
  );
}
