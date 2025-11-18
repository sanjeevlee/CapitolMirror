"use client";
import React from "react";
import {
  ShowerHead,
  LayoutGrid,
  BadgeCheck,
  Gem,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

function AccentShapes() {
  return (
    <div className="absolute top-0 right-0 z-0 flex gap-3 p-6">
      <Star size={42} className="text-yellow-400 opacity-30 animate-spin-slow" />
      <Gem size={32} className="text-blue-400 opacity-20" />
    </div>
  );
}

export default function GlassShowers() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex flex-col items-center justify-center bg-background my-10"
    >
      <div className="container mx-auto rounded-3xl bg-card/10 dark:bg-zinc-900/50 backdrop-blur-lg shadow-2xl border p-10 relative overflow-hidden">
        <AccentShapes />
        {/* ✅ 2-Column Grid Layout */}
        <div className="grid md:grid-cols-2 items-center">
          {/* Left Side - Image */}
          <motion.div
  transition={{ type: "spring", stiffness: 250, damping: 15 }}
  className="flex items-center justify-center overflow-hidden bg-white mr-5 rounded-md p-1 ring-1 ring-black/5 dark:ring-white/10 shadow-sm">
      <Image
       width={485}
       height={400}
    src="/capitol-logo.png"
    alt="Custom glass shower"
    className=" object-contain rounded-2xl"/>
     </motion.div>
          {/* Right Side - Content */}
          <div className="flex flex-col gap-6 z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
              <span className="inline-flex items-center gap-2">
                <ShowerHead size={44} className="text-blue-400" />
                Custom Glass for Showers & Enclosures
              </span>
              <br className="hidden md:block" />
              <span className="text-xl md:text-2xl text-foreground flex items-center gap-3 mt-2">
                <LayoutGrid size={38} className="text-yellow-400" />
                FRAMED AND FRAMELESS SHOWER OPTIONS AVAILABLE
              </span>
            </h2>

            <motion.div
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-start gap-3 bg-gray-100 dark:bg-zinc-700 rounded-xl p-5 shadow-lg"
            >
              <Gem size={36} className="text-blue-300" />
              <div className="text-lg font-semibold text-foreground flex items-center gap-2">
                Design the Shower of Your Dreams
                <BadgeCheck size={20} className="text-green-300 ml-2" />
              </div>
              <p className="text-base text-muted-foreground">
         Why settle for an ordinary bathroom? Add style, elegance and class to your bathroom space with a custom designed glass shower! Choose from a wide selection of thicknesses and glass types including frosted, etched and patterned to name a few. We also offer an incredible selection of shower hardware accessories and a variety of finishes including brushed nickel, polished brass, matte black, chrome, oil rubbed bronze and more.<br/><br/>
         
         The glass shower experts at Capitol Glass and Mirror in the Oklahoma City Metro Area and surrounding communities as well as the North Texas and Texoma region are ready to assist you!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function SparklesIcon() {
  return (
    <svg
      className="w-5 h-5 text-yellow-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 8l1.405 1.405M12 4v2m7 4l-1.405 1.405M19 16h2m-2 4v-2M4 12H2m1.405-1.405L5 8m9 12h-2m1.405-1.405L16 19"
      />
    </svg>
  );
}
