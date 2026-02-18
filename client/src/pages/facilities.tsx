import Layout from "@/components/layout";
import { motion } from "framer-motion";
import bedroomImage from "@assets/yolli-dagritme_1765124297511.jpg";
import houseImage from "@assets/yolli-huis_1765124374502.jpg";
import pigImage from "@assets/oink-oink_1765124374503.jpg";

export default function Facilities() {
  const sections = [
    {
      title: "Indeling",
      items: [
        {
          subTitle: "Slaapkamer",
          content: "In de slaapkamer staan de bedjes: voor ieder kind een bedje. Bij ons zijn dat er vier.",
          img: bedroomImage
        },
        {
           subTitle: "Keuken",
           content: "De keuken bevindt zich in de speelruimte, zodat er dagelijks mee gekookt en gebakken kan worden.",
           img: null
        }
      ]
    },
    {
      title: "Speelruimte",
      items: [
        {
          subTitle: null,
          content: "De lichte ruimte is ingericht voor de kinderen. Er zijn blokken, camions, kookpotjes, planken om te bouwen. Ook de pop en de kinderwagen zijn aanwezig. Er is ruimte genoeg om met de loopfietsjes binnen te rijden. Het houten klimrek en de planken bevorderen de motorische vaardigheden. Het kleine tafeltje biedt plaats om te knutselen of te tekenen. Er is ook een schommelpaard en een park voor de allerkleinste. Er is geen T.V. of radio voor de kinderen.",
          img: houseImage
        }
      ]
    },
    {
      title: "De Tuin",
      items: [
        {
          subTitle: null,
          content: "De grote tuin en bos bieden veel speelruimte voor de kinderen. Er is een zandbak, klimparcours, schommel en glijbaan, gras om op te spelen. Wanneer het oogsttijd is halen we groenten uit de moestuin. Onze pony (Dario), de kippen en ons varken (Meiroos) bezoeken we samen. Nynke de hond vergezelt ons op onze wandeling.",
          img: pigImage
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="bg-accent/20 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Faciliteiten</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-hand">
            "Een omgeving die uitnodigt tot spel en ontdekking."
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="space-y-20 max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center md:text-left border-b border-primary/20 pb-2 inline-block">
                {section.title}
              </h2>
              <div className="space-y-12">
                {section.items.map((item, i) => (
                   <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-8 items-center"
                  >
                     {item.img && (
                      <div className={`w-full md:w-1/2 ${i % 2 !== 0 ? 'md:order-last' : ''}`}>
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow relative">
                          <img 
                            src={item.img} 
                            alt={item.subTitle || section.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                     )}
                     <div className={`w-full ${item.img ? 'md:w-1/2' : ''} space-y-4`}>
                       {item.subTitle && <h3 className="text-xl font-bold text-primary">{item.subTitle}</h3>}
                       <p className="text-lg text-muted-foreground leading-relaxed">
                         {item.content}
                       </p>
                     </div>
                   </motion.div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-primary/10 p-8 rounded-3xl text-center space-y-4 mt-12">
             <h3 className="font-display font-bold text-2xl">
               Ben je benieuwd of dit de plek is waar je kind zich thuis kan voelen?
             </h3>
             <p className="text-xl font-hand">
               Bel me en kom gewoon eens vrijblijvend kijken!
             </p>
             <a href="tel:0498395353" className="text-2xl font-bold text-primary hover:underline">
               0498 39 53 53
             </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
