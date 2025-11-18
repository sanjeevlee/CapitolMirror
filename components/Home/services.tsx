"use client";

import { motion } from "framer-motion";

const containerVariants = {
 hidden: { opacity: 0 },
 visible: {
  opacity: 1,
  transition: {
   staggerChildren: 0.2
  }
 }
};

const itemVariants = {
 hidden: { opacity: 0, y: 30 },
 visible: {
  opacity: 1,
  y: 0,
  transition: {
   duration: 0.6
  }
 }
};

interface ServicesProps {
 subPage?: string;
}

export function Services({ subPage }: ServicesProps) {
 return (
  <motion.div
   className="grid md:grid-cols-3 gap-8"
   variants={containerVariants}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, amount: 0.3 }}
  >
   <motion.div
    className="bg-card rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border"
    variants={itemVariants}
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.2 }}
   >
    <motion.div
     className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
     whileHover={{ rotate: 360 }}
     transition={{ duration: 0.6 }}
    >
     <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
     </svg>
    </motion.div>
    <h3 className="text-xl font-semibold text-card-foreground mb-2">Residential Glass</h3>
    <p className="text-muted-foreground">Windows, doors, and custom glass solutions for your home</p>
   </motion.div>

   <motion.div
    className="bg-card rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border"
    variants={itemVariants}
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.2 }}
   >
    <motion.div
     className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
     whileHover={{ rotate: 360 }}
     transition={{ duration: 0.6 }}
    >
     <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
     </svg>
    </motion.div>
    <h3 className="text-xl font-semibold text-card-foreground mb-2">Commercial Glass</h3>
    <p className="text-muted-foreground">Professional glass solutions for businesses and offices</p>
   </motion.div>

   <motion.div
    className="bg-card rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border"
    variants={itemVariants}
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.2 }}
   >
    <motion.div
     className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
     whileHover={{ rotate: 360 }}
     transition={{ duration: 0.6 }}
    >
     <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
     </svg>
    </motion.div>
    <h3 className="text-xl font-semibold text-card-foreground mb-2">Emergency Repairs</h3>
    <p className="text-muted-foreground">24/7 emergency glass repair and replacement services</p>
   </motion.div>
  </motion.div>
 );
}