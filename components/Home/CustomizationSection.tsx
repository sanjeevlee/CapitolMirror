'use client';
import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Square,
  ShowerHead,
  PanelsTopLeft,
  Waves,
  StepForward,
  Wine,
  Frame,
  MoreHorizontal,
  MoreHorizontalIcon,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    name: "Shower Enclosures (Frameless & Framed)",
    icon: Frame,
    color: "text-cyan-500",
  },
  {
    name: "Glass Shelves",
    icon: Layers,
    color: "text-blue-500",
  },
  {
    name: "Glass Tabletops",
    icon: Square,
    color: "text-emerald-500",
  },
  
  {
    name: "Mirror Walls",
    icon: PanelsTopLeft,
    color: "text-pink-500",
  },
  {
    name: "Wine Rooms",
    icon: Wine ,
    color: "text-amber-500",
  },
  {
    name: "Wet & Dry Saunas",
    icon: Waves,
    color: "text-cyan-500",
  },
  {
    name: "Staircase Enclosures",
    icon: StepForward,
    color: "text-amber-500",
  },
 
  {
    name: "Much More",
    icon: MoreHorizontalIcon,
    color: "text-indigo-500",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const CustomizationSection = () => {
  return (
    <section className="py-24 px-4 sm:px-10 lg:px-24 ">
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        {/* Text Content */}
        <motion.div variants={fadeInUp}>
          <h2 className="text-4xl font-bold text-[var(--text)] mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500">70 Years of Customization</span>, Accuracy, & Customer Service
          </h2>
          <p className="text-[var(--text)]/85 mb-6 leading-relaxed text-md">
          Since 1956, Capitol Glass & Mirror has been the premier glass business in the Oklahoma City metro area and surrounding communities. Over the years, we have served the Texoma region and now have a warehouse and showroom in North Texas to serve the Texoma and North Texas region. We hold our glasswork to the highest standards and always produce glass and mirrors to fit perfectly for all types of commercial and residential projects. Our accuracy accommodates all variations of customization for projects of all sizes. Some of our more popular glass and mirror products include:
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={stagger}
          >
            {features.map(({ name, icon: Icon, color }, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex items-center p-4 bg-white/10 backdrop-blur-md dark:bg-gray-800/40 shadow-sm rounded-xl border border-border/20 transition hover:shadow-md"
              >
                <Icon className={`w-7 h-7 ${color} mr-3 flex-shrink-0`} suppressHydrationWarning />
                <span className="text-base font-medium text-[var(--text)]">{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

     <motion.div
  variants={fadeInUp}
  className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border/10">
 <div className="relative w-full h-[250px] sm:h-[450px] lg:h-[650px]">

    <Image
      src="/Hero4.jpg"
      alt="Custom glass staircase with modern fittings"
      fill
      sizes="(min-width: 1024px) 50vw, (min-width: 640px) 60vw, 100vw"
      className="object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
      quality={90}
      priority 
      decoding="async"
      suppressHydrationWarning />
  </div>
</motion.div>
      </motion.div>
    </section>
  );
};

export default CustomizationSection;
