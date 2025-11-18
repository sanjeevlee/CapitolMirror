"use client";

import { useState, useRef, useEffect } from 'react';
import { Database, Settings, BarChart3, Building2 } from "lucide-react";


type IconWithClassName = React.ComponentType<{ className?: string }>;

type Solution = {
 title: string;
 content: string;
 icon: IconWithClassName;
};

const solutions: Solution[] = [
 {
  title: "Residential Glass Near Oklahoma City",
  content:
   "Residential glass not only includes shower doors, but also mirrors and glass tabletops. Starting a new renovation at home can be overwhelming and you may not know where to start.",
  icon: Database,
 },
 {
  title: "Glass Shower Doors and Enclosures",
  content:
   "Although clear glass for a shower is standard, there are lots of options available to personalize the glass and design of your shower doors.",
  icon: Settings,
 },
 {
  title: "Custom Cut Glass & Mirrors",
  content:
   "Capitol Glass & Mirror is an experienced and professional glass business in OKC specializing in fabricating and installing custom mirrors for all types of projects near Oklahoma City.",
  icon: BarChart3,
 },
 {
  title: "Commercial Glass",
  content:
   "We are a full service glass company able to provide you with expertly cut glass and mirrors for your commercial building project in OKC. ",
  icon: Building2,
 },
];

export default function SolutionsSection() {
 const [openIndex, setOpenIndex] = useState<number | null>(null);

 const toggle = (index: number) => {
  setOpenIndex(prev => (prev === index ? null : index));
 };

 return (
  
  <section className="px-6 py-30 bg-background text-foreground transition-colors">
   <div className="container mx-auto grid md:grid-cols-2 gap-12">
    
    {/* Left Column */}
    <div>
     <div className="flex items-center mb-4">
      <div className="w-4 h-4 bg-indigo-600 mr-3"></div>
      <h2 className="text-2xl font-bold text-foreground">
       Capitol Glass & Mirror
      </h2>
     </div>
     <p className="text-muted-foreground mb-4">
      The team at Capitol Glass & Mirror specializes in reliable, high quality commercial and residential glass fabrication, with a customer first approach. If you are near Oklahoma City, choose us to help make your vision come to life. From commercial glass to residential glass, we ensure the highest quality service that will meet your standards. Give us a call today to get started on your next glass project near OKC!
     </p>
     <p className="text-muted-foreground mb-4">
      Are you planning construction for a glass storefront, glass entry doors, or glass partitions? Our trained team of commercial glazing professionals is ready to help you on your next project near the OKC area.
     </p>
     <p className="text-muted-foreground">
      No matter how large, give us a call we would be happy to help you plan and design. We aim to exceed your expectations every time!
     </p>
    </div>

    {/* Right Column: Accordion */}
    <div className="space-y-4">
     {solutions.map((solution, index) => (
      <AccordionItem
       key={index}
       index={index}
       title={solution.title}
       content={solution.content}
       icon={solution.icon}
       isOpen={openIndex === index}
       onClick={toggle}
      />
     ))}

    </div>
   </div>
  </section>
 );
}

// AccordionItem component
type AccordionItemProps = {
 index: number;
 title: string;
 content: string;
 icon: IconWithClassName;
 isOpen: boolean;
 onClick: (index: number) => void;
};

function AccordionItem({
 index,
 title,
 content,
 icon: Icon,
 isOpen,
 onClick,
}: AccordionItemProps) {
 const contentRef = useRef<HTMLDivElement>(null);
 const [height, setHeight] = useState<string>('0px');

 useEffect(() => {
  if (contentRef.current) {
   setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
  }
 }, [isOpen]);

 return (
  <div className="bg-card text-card-foreground rounded-md overflow-hidden shadow-sm border border-border transition-all duration-300">
   <button
    onClick={() => onClick(index)}
    className="w-full flex justify-between items-center p-6 text-left cursor-pointer focus:outline-none"
   >
    <div className="flex items-center space-x-3">
     <Icon className="w-5 h-5 text-indigo-600" />
     <span className="text-lg font-semibold text-foreground tracking-wider">
      {title}
     </span>
    </div>
    <span className="text-2xl font-bold text-muted-foreground">{isOpen ? "−" : "+"}</span>
   </button>

   <div
    ref={contentRef}
    style={{ maxHeight: height }}
    className="overflow-hidden transition-all duration-300 ease-in-out px-6 text-sm text-muted-foreground"
   >
    <div className="pb-6 pt-2">{content}</div>
   </div>
  </div>
 );
}

