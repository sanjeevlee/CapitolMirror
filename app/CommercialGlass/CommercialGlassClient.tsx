"use client";

import { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import CommercialContent from "@/components/CommercialGlass/CommercialContent";
import HeroSection from "@/components/CommercialGlass/CommercialHero";
import GlassGallery from "@/components/CommercialGlass/GlassGallery";
import SolutionsSection from "@/components/CommercialGlass/SolutionsSection";
import React from "react";

const fadeInUp: Variants = {
 hidden: { opacity: 0, y: 60 },
 visible: {
  opacity: 1,
  y: 0,
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
 },
};

export default function CommercialGlassClient() {
 // ✅ Scroll to top when page loads or refreshes
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (
  <div className="flex flex-col">
   <motion.div variants={fadeInUp} initial="hidden" animate="visible">
    <HeroSection />
   </motion.div>

   <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
   >
    <CommercialContent />
   </motion.div>

   <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
   >
    <SolutionsSection />
   </motion.div>

   <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
   >
    <GlassGallery />
   </motion.div>
  </div>
 );
}