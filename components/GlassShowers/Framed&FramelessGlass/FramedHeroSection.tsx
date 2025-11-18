"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Sparkles, Star } from "lucide-react";

export default function FramedHeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-background via-background/90 to-primary/5 dark:from-background dark:to-primary/10 text-foreground overflow-hidden px-4 sm:px-6">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-background" />

      {/* Content container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-8 sm:py-10 md:py-16 gap-8 md:gap-10">
        {/* Left Image */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center relative"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Image Container with increased height */}
          <div className="relative w-full md:w-[80%] h-[360px] sm:h-[420px] md:h-[560px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 dark:border-white/20">
            <Image
              src="/FramedSection/Framedhero.jpg"
              alt="Glass Shower Example"
              fill
              sizes="(min-width: 1024px) 50vw, 90vw"
              className="object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Floating decorative light */}
          <motion.div
            className="hidden md:block absolute top-10 -left-10 w-40 h-40 bg-primary/30 blur-3xl rounded-full"
            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>


        {/* Right Content */}
        <motion.div
          className="md:w-1/2 w-full flex flex-col justify-center gap-6 md:gap-8 z-10"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm md:text-base">
            <Sparkles className="w-4 h-4" />
            Capitol Glass & Mirror designs
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Installs glass enclosures for{" "}
            <span className="text-primary">
              showers, bathtubs and more in the OKC area
            </span>
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
          The Oklahoma City glass experts at <strong>Capitol Glass & Mirror</strong> can help you with your bathroom remodeling project. Our designers are happy to lend their years of experience to assist you in creating your ideal glass shower.{" "}
            Let your imagination run wild!
          </p>

          {/* Feature Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-base text-muted-foreground">
            {[
              "Frameless Glass Showers",
              "Aluminum framed corner shower",
              "Three-sided glass shower",
              "High-End Finishing & Design",
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a href="tel:+405-789-1485"> 
            <Button size="lg" variant="outline" className="rounded-full px-6 py-3 text-base w-full sm:w-auto">
            Call:+405-789-1485
            </Button>
            </a>
             </div>
          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                feedback:
                  "Capitol Glass & Mirror transformed my bathroom with an amazing shower enclosure. Highly recommend......!",
              },
              {
                feedback:
                  "Professional, precise, and beautiful work. Our mirrors and glass walls look stunning.",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-background/80 dark:bg-background/50 border border-white/10 dark:border-white/20 rounded-xl p-4 shadow-lg"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <p className="text-muted-foreground text-sm">{testimonial.feedback}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>


    </section>
  );
}
