import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Heart, Sun, Trees } from "lucide-react";
import { Link } from "wouter";
import heroBg from "@assets/bg-2026_1765124687494.jpg";
import heroImage from "@assets/generated_images/children_playing_in_a_lush_garden_with_wooden_toys_in_waldorf_style.png";
import walkImage from "@assets/kinderovang-wuustwezel_1765123808161.png";
import indoorImage from "@assets/generated_images/cozy_indoor_playroom_with_wooden_furniture_and_natural_light.png";
import dagritmeCardImage from "@assets/kinderopvang_1765123903825.png";
import infoCardImage from "@assets/kinderopvang-gooreind_1765123903824.png";
import facilitiesCardImage from "@assets/kleinscahlige-kinderopvang_1765123903826.png";

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#faf9f6]">
        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ y }}
            src={heroBg} 
            alt="Background pattern" 
            className="w-full h-full object-cover opacity-50 animate-subtle-float"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-background/80" />
        </div>
        
        <div className="container relative z-10 px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground drop-shadow-sm leading-tight">
              Kleinschalige, Huiselijke Kinderopvang
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium font-hand max-w-2xl mx-auto">
              Kinderopvang die staat voor: rust en regelmaat<br className="hidden sm:inline" /> waarin het kleine kind kan gedijen.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="rounded-full text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform bg-primary text-primary-foreground border-none cursor-pointer">
                  Maak Kennis
                </Button>
              </Link>
              <Link href="/dagritme">
                <Button variant="secondary" size="lg" className="rounded-full text-lg px-8 py-6 shadow-lg hover:bg-white/90 cursor-pointer">
                  Ons Ritme
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "ellipse(70% 100% at 50% 100%)" }}></div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-primary font-bold uppercase tracking-wider text-sm">Over Yolli</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Kleinschalige, Huiselijke Kinderopvang
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  "Yolli" is de naam die menig jong kind mij heeft gegeven! Ook wel eens Yollieke, tante Yolli of Yonnieke bij tedere momenten. Voor de volwassenen ben ik Yolanthe Grobet, geboren in 1961, oud leerling van de R.Steinerschool te Antwerpen.
                </p>
                <p>
                  Ik ben als moeder en leerkracht doordrongen van het besef hoe belangrijk de eerste drie levensjaren voor het jonge kind zijn. Daarom wil ik tijd en ruimte vrijmaken om jonge kinderen te begeleiden in hun ontwikkelingsweg.
                </p>
                <p>
                  Mijn opleidingen als kleuter- en lagere schoolleerkracht heb ik gevolgd aan de hogeschool Helicon in Nederland (in mijn tijd de VPA te Zeist). Samen met mijn levensgezel/echtgenoot, Ruben Debeer, hebben we 6 prachtige kinderen. Ruben is diegene die mijn "gekke" ideeën vorm geeft en mijn boekhouding in de gaten houdt.
                </p>
                <p>
                  Ik heb gekozen voor een kleinschalige, huiselijke kinderopvang die staat voor: rust en regelmaat waarin het kleine kind kan gedijen. En op zijn eigen ritme kan groeien, spelen, slapen en zich ontwikkelen in een groene, gezellige omgeving.
                </p>
                <p>
                  Dankzij mijn zes kinderen heb ik mogen ervaren hoe belangrijk het is dat de eerste levensjaren harmonieus en met een juiste gehechtheid verlopen. Het zijn die jaren die het fundament vormen voor het verdere leven!
                </p>
                <p>
                   Ik begeleid de kinderen in hun ontwikkeling vanuit een pedagogische visie die gebaseerd is op de pedagogie van R.Steiner.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative space-y-8"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src={walkImage} alt="Nature walk" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white p-8 rounded-xl shadow-xl border border-border/50">
                 <p className="font-hand text-xl text-primary font-bold mb-2">
                  "De kinderen spelen hier met eenvoudig speelgoed uit natuurlijke materialen die hun fantasie stimuleren."
                </p>
                <p className="font-hand text-xl text-foreground">
                  "Het is heel belangrijk voor jonge kinderen dat ze de ruimte hebben om te bewegen, dus gaan wij dagelijks wandelen in weer en wind, in de natuur, en spelen veel buiten in onze prachtige tuin."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Dagritme",
                desc: "Het dagritme bij Kinderopvang Yolli.",
                img: dagritmeCardImage,
                link: "/dagritme",
                color: "bg-primary/20"
              },
              {
                title: "Reglement & Info",
                desc: "Waarvoor staat kinderopvang Yolli? Praktische informatie en afspraken.",
                img: infoCardImage,
                link: "/info",
                color: "bg-secondary/40"
              },
              {
                title: "Faciliteiten",
                desc: "Indeling, Slaapkamer, Keuken, Speelruimte, De Tuin.",
                img: facilitiesCardImage,
                link: "/faciliteiten",
                color: "bg-accent/40"
              }
            ].map((card, i) => (
              <motion.div key={i} variants={item}>
                <Link href={card.link}>
                  <div className="block group h-full cursor-pointer">
                    <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={card.img} 
                          alt={card.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <CardContent className={`p-6 ${card.color} h-full`}>
                        <h3 className="text-2xl font-bold mb-2 flex items-center justify-between">
                          {card.title}
                          <ArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </h3>
                        <p className="text-muted-foreground font-medium">
                          {card.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground text-center relative overflow-hidden">
        {/* Animated Star Pattern Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path id="christmas-star" d="M0 -20 C0 -20 2 -5 15 0 C2 5 0 20 0 20 C0 20 -2 5 -15 0 C-2 -5 0 -20 0 -20 Z" fill="currentColor" />
            </defs>
            <pattern id="scattered-stars" x="0" y="0" width="350" height="350" patternUnits="userSpaceOnUse">
              <use href="#christmas-star" x="50" y="50" className="text-white animate-pulse-slow" style={{ animationDelay: '0s', opacity: 0.3 }} transform="scale(0.8)" />
              <use href="#christmas-star" x="280" y="40" className="text-white animate-pulse-slow" style={{ animationDelay: '1s', opacity: 0.5 }} transform="scale(1.2)" />
              <use href="#christmas-star" x="150" y="180" className="text-white animate-pulse-slow" style={{ animationDelay: '2s', opacity: 0.4 }} transform="scale(0.6)" />
              <use href="#christmas-star" x="300" y="250" className="text-white animate-pulse-slow" style={{ animationDelay: '0.5s', opacity: 0.3 }} transform="scale(1)" />
              <use href="#christmas-star" x="80" y="300" className="text-white animate-pulse-slow" style={{ animationDelay: '1.5s', opacity: 0.4 }} transform="scale(0.9)" />
              <use href="#christmas-star" x="220" y="120" className="text-white animate-pulse-slow" style={{ animationDelay: '2.5s', opacity: 0.2 }} transform="scale(0.5)" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#scattered-stars)" />
          </svg>
        </div>
        
        <div className="container mx-auto max-w-2xl space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Kom eens kijken!
          </h2>
          <p className="text-xl opacity-90">
            Benieuwd of dit de plek is waar je kind zich thuis kan voelen? Bel me en kom gewoon eens vrijblijvend kijken!
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full px-8 py-6 text-lg font-bold shadow-lg cursor-pointer">
              Neem Contact Op
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
