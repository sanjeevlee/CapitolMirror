"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  LucideIcon,
  ShowerHead,
  Table,
  Wrench,
  DollarSign,
  Ruler,
  Clock,
  Star,
  Shield,
  Settings,
  Info,
  Sparkles,
  Flame,
  GlassWaterIcon,
  MicrochipIcon,
  DoorClosed
} from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
  icon?: LucideIcon;
};

type FAQSection = {
  topic: string;
  items: FAQItem[];
  Icon?: LucideIcon;
};


function AccordionSection({ topic, items }: FAQSection) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const getTopicIcon = (topic: string) => {
    switch (topic) {
      case "Shower Doors": return ShowerHead;
      case "Glass": return GlassWaterIcon;
      case "Glass Table Tops": return Table;
      case "Mirrors": return MicrochipIcon;
      default: return HelpCircle;
    }
  };

  const TopicIcon = getTopicIcon(topic);

  return (
    <section className="mb-6 md:mb-10">
      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4 px-4 sm:px-6 md:px-0  m-10">
        <div className="p-2 rounded-xl shadow-lg transition-all duration-300 bg-gradient-to-br from-blue-100 to-blue-600 ">
          <TopicIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold transition-all duration-300 bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-white dark:to-zinc-300 bg-clip-text text-transparent">
          {topic}
        </h2>
      </div>
      <div className="backdrop-blur-sm rounded-2xl divide-y shadow-xl overflow-hidden transition-all duration-300 bg-white/80 dark:bg-zinc-800/80 border border-zinc-200/50 dark:border-zinc-700/50  divide-zinc-200/50 dark:divide-zinc-700/50 m-10">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          const IconComponent = item.icon || HelpCircle;
          return (
            <div key={idx} className="group">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4 text-left focus:outline-none transition-all duration-300 "
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className={`p-2 rounded-lg transition-all duration-300 ${isOpen
                    ? 'shadow-lg scale-110 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-white'
                    : 'bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-700 dark:to-zinc-600 text-gray-600 dark:text-gray-300 '
                    }`}>
                    <IconComponent className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-300" />
                  </div>
                  <span className="font-semibold text-base md:text-lg leading-relaxed transition-colors duration-300 text-gray-900 dark:text-gray-100 ">
                    {item.question}
                  </span>
                </div>
                <div className="ml-3 md:ml-4 p-1.5 md:p-2 rounded-full transition-all duration-300 bg-gray-100 dark:bg-zinc-700 ">
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 rotate-180 text-gray-600 dark:text-gray-300 " />
                  ) : (
                    <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 text-gray-600 dark:text-gray-300 " />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen
                  ? "max-h-[800px] opacity-100"
                  : "max-h-0 opacity-0"
                  }`}
              >
                <div className="px-4 sm:px-6 md:px-8 pb-5 md:pb-6">
                  <div className="rounded-xl  transition-all duration-300 ">
                    <p className="leading-relaxed text-sm md:text-base whitespace-pre-line transition-colors duration-300 text-gray-700 dark:text-gray-300">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


export default function FAQAccordion() {
  return (
    <div id="faq" className="container mx-auto min-h-screen transition-all duration-500 scroll-mt-24 md:scroll-mt-28 ">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 transition-all duration-500  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500">
          Frequently Asked Questions
        </h1>
        <p className="text-xl max-w-3xl mx-auto transition-colors duration-300 text-gray-600 dark:text-gray-300">
          Find answers to common questions about our glass services, shower doors, and custom solutions.
        </p>
      </div>
      {faqs.map((section, idx) => (
        <AccordionSection key={idx} topic={section.topic} items={section.items} />
      ))}
    </div>
  );
}


const faqs = [
  {
    topic: "Shower Doors",
    items: [
      {
        question: `What is the difference between a "framed" and a "frameless" shower door?`,
        answer: `A framed shower door will have a metal (likely aluminum) frame around all four edges of the glass door. A frameless shower door will have no metal frame.`,
        icon: ShowerHead
      },
      {
        question: `Does shower glass have to be tempered?`,
        answer: `Yes. City codes require that shower glass must be tempered as a safety precaution. The tempering process causes the glass to shatter into many small pieces if broken, rather than breaking into large, sharp and potentially dangerous pieces. The tempering process involves running the glass through a large oven, heating it to in excess of 1,000 degrees Fahrenheit, and then cooling it down quickly. This process creates the "shattering" effect if the glass is broken.`,
        icon: Shield
      },
      {
        question: `Are frameless shower doors more expensive than framed doors?`,
        answer: `Typically yes. The reason that frameless doors are more expensive is that they require thicker glass than framed doors. Framed doors are typically built with 1/4" glass, where the glass in a frameless door is typically at least 3/8" thick. The thicker the glass, the more expensive.`,
        icon: DollarSign
      },
      {
        question: `How much does a frameless glass shower door cost?`,
        answer: `There are many factors that contribute to the cost of a frameless shower door, but they typically start at around $800 for a single frameless shower door. Among the factors that affect the price are size of the door, number of panels (in addition to the door), whether a header is needed, the hardware selected and difficulty of installation.`,
        icon: DoorClosed
      },
      {
        question: `What information do I need to get a quote on a shower door?`,
        answer: `We will need to measure the opening so that we can have exact measurements for the glass. In addition, the hardware that is selected will affect the cost of the project.`,
        icon: Ruler
      },
      {
        question: `When is the right time to order a glass shower door?`,
        answer: `Contact us as soon as you know when the tile or other solid surface is being installed so that we can schedule the shower for measurement. All surrounding surfaces need to be completed so that our final measurements can be completely accurate. Once these final measurements are completed, we will begin the fabrication process and order the required hardware for installation.`,
        icon: Clock
      },
      {
        question: `Why do frameless shower quotes vary between companies?`,
        answer: `As with any other product, companies use varying qualities of materials. We use only high‑quality glass from reputable tempering facilities that hold to the highest standards of craftsmanship. In addition, the hardware (hinges, handles, clamps, etc.) that we use is of the highest quality.`,
        icon: Star
      },
      {
        question: `What is the process for getting a new frameless glass shower door?`,
        answer: `When your tile or other solid surface material is installed, we will come and take exact measurements so that we can give you an exact cost for the project. We will then order the tempered glass and required hardware. Once all of the materials have arrived, we will contact you and arrange for installation.`,
        icon: Settings
      },
      {
        question: `Will the price estimate for my frameless shower door be the final project cost?`,
        answer: `If we measure the door and or/panels and provide an estimate, that estimate will not change unless you make changes to your hardware selection or shower configuration subsequent to our final pricing.`,
        icon: Info
      },
    ],
  },
  {
    topic: "Glass",
    items: [
      {
        question: `What types of glass do you have available?`,
        answer: `We have the following styles of glass: Rain, Rain Drop, Reeded, Aquatex, 100 Cord, Bronze, Gray, Baroque, Pattern, English Flemish, Water Glass, Seedy, Krinkle, Seedy Baroque, SG Optica, Satin, Clear with Bevel.`,
        icon: Sparkles
      },
      {
        question: `What are the available thicknesses of glass that I can purchase?`,
        answer: `We carry from 1/8" inch clear glass up to 1/2" tempered glass.`,
        icon: Ruler
      },
      {
        question: `How long will it take to manufacture custom glass?`,
        answer: `Non-tempered glass is fabricated in our facility and typically takes 3‑5 business days for fabrication. Tempered glass has to be ordered and fabricated at a tempering facility, and typically takes 5‑7 business days from ordering to receipt of the glass.`,
        icon: Clock
      },
    ],
  },
  {
    topic: "Glass Table Tops",
    items: [
      {
        question: `What is the difference between a glass table top and a glass table cover?`,
        answer: `A glass table top means that your table's top is actually constructed out of glass. A glass table top cover is made of glass and rests on top of the actual table. It preserves the look and value of your wooden or metal table.`,
        icon: Table
      },
      {
        question: `What glass thickness should I choose for my table top?`,
        answer: `It depends on the table and whether the glass is being used as a table cover (protective cover) or will form the table top. For a cover, 1/4" thickness is typically sufficient. If the glass will act as the supporting table top, then a thicker glass may be needed.`,
        icon: Ruler
      },
      {
        question: `How do I keep my glass table top from cracking?`,
        answer: `Thick glass will sometimes crack when it is heated on one side. Glass does not conduct heat very quickly, so one side will expand while the other side will not. The uneven cooling process can lead to cracks in your dining table. To avoid cracks from uneven cooling, use a trivet under hot pots, pans and serving dishes when setting them on the table. This will protect your glass tabletop or table cover from heat‑induced cracks.`,
        icon: Flame
      },
    ],
  },
  {
    topic: "Mirrors",
    items: [
      {
        question: `How long will it take to manufacture my custom mirror?`,
        answer: `Depending on the size and complexity of the mirror, the fabrication process will likely take 3‑5 business days.`,
        icon: Clock
      },
      {
        question: `Do you have framed mirrors?`,
        answer: `Yes, we have a wide variety of framed mirrors in our showroom that are available for purchase.`,
        icon: HelpCircle
      },
      {
        question: `Can you bevel the edges of a mirror?`,
        answer: `Yes ‑ we are able to bevel mirror edges from 1/2" up to 2".`,
        icon: Wrench
      },
      {
        question: `What types of mirrors do you stock?`,
        answer: `We stock clear, bronze, gray, antique and micropane mirrors.`,
        icon: Sparkles
      },
    ],
  },
];
