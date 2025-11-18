"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";
import Button from '../ui/button';
import { cn } from '@/lib/utils';

const investors = [
  {
    name: 'Showers - Framed & Frameless',
    image: '/Invest/Invest1.jpg',
    description: 'From glass table covers to many types of decorative, patterned & textured glass, Capitol Glass can create that special look that is distinctly yours.',
    cardClass: 'bg-pink-100/50 text-[var(--text)]',
    options: ["Frameless showers",
      "Semi-frameless showers",
      "Framed by-pass doors",
      "Frameless by-pass doors",
      "Framed & frameless pivot doors"]
  },
  {
    name: 'Custom Mirrors - Framed & Frameless',
    image: '/Invest/Invest4.jpg',
    description: 'Mirrors are not only functional, but also contribute to the beauty and uniqueness of your home. We offer a wide selection of framed mirrors in our show room, and can custom cut most any frameless mirror that you can imagine.',
    cardClass: 'bg-green-100/50 text-[var(--text)]',
  },
  {
    name: 'Commercial Glass & Mirrors',
    image: '/Invest/Invest2.jpg',
    description: 'Whether its commercial entry doors, storefronts, glass staircase enclosures or glass partitions, Capitol Glass & Mirror has over 60 years of experience in a wide variety of commercial glass and mirror installations.',
    cardClass: 'bg-blue-100/50 text-[var(--text)]',
  },
  {
    name: 'Custom Glass',
    image: '/Invest/Invest3.jpg',
    description: 'From glass table covers to many types of decorative, patterned & textured glass, Capitol Glass can create that special look that is distinctly yours.',
    cardClass: 'bg-yellow-100/50 text-[var(--text)]',
  },

];

const InvestorsSection = () => {
  // Staggered animation for the grid of investor cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Individual card animation
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row gap-12 items-start ">
      <motion.div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {investors.map((inv) => (
    <motion.div
      key={inv.name}
      variants={cardVariants}
      className={`rounded-2xl overflow-hidden shadow-lg flex flex-col ${inv.cardClass || 'bg-gray-100 text-[var(--text)] dark:bg-[#23282f] dark:text-[var(--text)]'}`}
    >
      {/* Image */}
      <div className="relative bg-[var(--bg)] dark:bg-[var(--bg)] h-70 w-full">
        <Image src={inv.image} alt={inv.name} fill className="object-cover object-center" />
      </div>

      {/* Content */}
      <div className="px-6 py-4 flex flex-col flex-1">
        <h3 className="text-2xl font-semibold mb-2">{inv.name}</h3>
        {inv.description && <p className="text-sm mb-2">{inv.description}</p>}

        {(inv.options?.length || 0) > 0 && (
          <ul className="text-sm ml-4">
            {inv.options?.map((opt) => (
              <li key={opt} className="list-disc">{opt}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  ))}
</motion.div>

      </div>
    </section>
  );
};
export default InvestorsSection;
