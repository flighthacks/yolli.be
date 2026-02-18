import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Clock, Sun, Utensils, Moon, Coffee } from "lucide-react";
import walkImage from "@assets/kinderopvang-gooreind_1765124229504.jpg";

export default function Routine() {
  const events = [
    {
      time: "08:00 - 09:30",
      title: "Aankomst & Vrij Spel",
      desc: "De kinderen komen binnen, jasjes uit, pantoffeltjes aan en dan mogen ze gaan spelen, mee helpen koken of deelnemen aan andere kleine huishoudelijke karweitjes.",
      icon: <Sun className="text-orange-400" />
    },
    {
      time: "09:30",
      title: "Kringmoment",
      desc: "Rond 9.30h gaan we samen rond de tafel zitten, zingen seizoensgebonden liedjes met bewegingen, hand- en vingerspelletjes, schootliedjes voor de kleintjes. We eten fruit en drinken thee of sap.",
      icon: <Clock className="text-blue-400" />
    },
    {
      time: "10:00 - 10:30",
      title: "Naar Buiten",
      desc: "Tussen 10h en 10.30h maken we ons klaar om naar buiten te gaan. We wandelen naar de “bergen” in het bos, begroeten alles wat we tegen komen op onze wandeling: de schapen, de postbode....",
      icon: <TreesIcon className="text-green-500" />
    },
    {
      time: "12:00",
      title: "Middagmaal",
      desc: "Wanneer we terug zijn is het tijd voor het middageten!",
      icon: <Utensils className="text-red-400" />
    },
    {
      time: "13:00",
      title: "Rusttijd",
      desc: "Na het eten, tijd voor een verhaaltje en hup naar bed.",
      icon: <Moon className="text-indigo-400" />
    },
    {
      time: "15:00",
      title: "Namiddag",
      desc: "Wanneer we wakker zijn spelen we buiten in de tuin en eten een vieruurtje. Nog even spelen en dan zijn de ouders er weer.",
      icon: <Coffee className="text-amber-500" />
    }
  ];

  return (
    <Layout>
      <div className="bg-primary/10 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Dagritme</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-hand">
            "Rust en regelmaat vormen de basis van onze dag."
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
           <div className="space-y-6 md:sticky md:top-24 h-fit">
              <div className="prose prose-lg text-muted-foreground">
                <p className="font-bold text-xl text-foreground">
                  De kinderen spelen hier met eenvoudig speelgoed uit natuurlijke materialen die hun fantasie stimuleren.
                </p>
                <p>
                  Het is heel belangrijk voor jonge kinderen dat ze de ruimte hebben om te bewegen, dus gaan wij dagelijks wandelen in weer en wind, in de natuur, en spelen veel buiten in onze prachtige tuin.
                </p>
              </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-1">
              <img src={walkImage} alt="Nature walk" className="w-full h-full object-cover aspect-[3/4]" />
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-8 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
             <h2 className="font-display font-bold text-2xl mb-6 pl-16">Het dagritme bij Kinderopvang Yolli</h2>
            {events.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start group"
              >
                <div className="absolute left-0 mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background shadow-sm group-hover:border-primary group-hover:scale-110 transition-all z-10">
                  {event.icon}
                </div>
                <div className="ml-16 bg-card rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow w-full">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <h3 className="font-display font-bold text-xl">{event.title}</h3>
                    <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{event.time}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

function TreesIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 5.3-2.1" />
      <path d="M7 16v6" />
      <path d="M13 19v3" />
      <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .9-1.7l-3.5-6a2 2 0 0 0-3.5 1l-1.6 2.9" />
    </svg>
  )
}
