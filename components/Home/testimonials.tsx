"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HydrationBoundary } from "@/components/Provider/HydrationBoundary";

const galleryItems = [
  { name: "Sliding glass doors for showers", image: "/Test/Test1.png" },
  { name: "Glass shower doors with top frame", image: "/Test/Test2.png" },
  { name: "Glass doors to a study room", image: "/Test/Test3.png" },
  { name: "Custom glass shower door", image: "/Test/Test4.png" },
  { name: "Frameless glass shower doors", image: "/Test/Test5.png" },
  { name: "Sliding glass shower doors", image: "/Test/Test6.png" },
];

export default function ImageCardCarousel() {
  const duplicatedItems = [...galleryItems, ...galleryItems];

  return (
    <HydrationBoundary>
      <section className="relative py-20 overflow-hidden ">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white tracking-tight">
              Shower Door Gallery
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Explore our elegant glass shower door installations — combining style, clarity, and precision.
            </p>
          </div>

          {/* Auto-scrolling gallery */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {duplicatedItems.map((item, index) => (
                <div
                  key={index}
                  className="relative min-w-[300px] md:min-w-[350px] lg:min-w-[400px] h-[420px] rounded-2xl overflow-hidden shadow-xl border border-white/10"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 350px, 300px"
                    className="object-cover w-full h-full"
                    quality={85}
                    loading="lazy"
                    decoding="async"
                    suppressHydrationWarning
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-tb from-black/70 to-transparent p-4">
                    <h3 className="text-white text-xl font-semibold">{item.name}</h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[180px] sm:hidden" />
      </section>
    </HydrationBoundary>
  );
}
