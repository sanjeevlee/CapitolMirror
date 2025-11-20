"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageCardCarousel() {
  const galleryItems = [
    { name: "Sliding glass doors for showers", image: "/Test/Test1.png" },
    { name: "Glass shower doors with top frame", image: "/Test/Test2.png" },
    { name: "Glass doors to a study room", image: "/Test/Test3.png" },
    { name: "Custom glass shower door", image: "/Test/Test4.png" },
    { name: "Frameless glass shower doors", image: "/Test/Test5.png" },
    { name: "Sliding glass shower doors", image: "/Test/Test6.png" },
  ];

  const duplicatedItems = [...galleryItems, ...galleryItems];

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 dark:text-white tracking-tight">
            Shower Door Gallery
          </h2>
          <p className="text-gray-500 dark:text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Explore our elegant glass shower door installations — combining style, clarity, and precision.
          </p>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            drag="x"
            dragConstraints={{ left: -2000, right: 2000 }}
            dragElastic={0.1}
          >
            {duplicatedItems.map((item, index) => (
              <div
                key={index}
                className="
                  relative 
                  min-w-[220px] 
                  sm:min-w-[260px] 
                  md:min-w-[330px] 
                  lg:min-w-[380px] 
                  xl:min-w-[420px]
                  h-[260px] 
                  sm:h-[300px]
                  md:h-[350px]
                  lg:h-[420px]
                  rounded-2xl overflow-hidden shadow-xl 
                  border border-white/10
                "
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, (max-width: 1024px) 330px, 420px"
                  className="object-cover w-full h-full"
                  quality={85}
                  loading="lazy"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-4">
                  <h3 className="text-white text-sm sm:text-base md:text-xl font-semibold">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
