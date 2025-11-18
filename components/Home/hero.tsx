"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    image: "/Hero1.jpg",
    badge: "Custom Mirror Fabrication",
    descriptions: [
      "Glass Shower Doors and Enclosures",
      "Serving the Oklahoma City Metro Area And Surrounding Communities",
      "Serving North Texas and Texoma",
    ],
  },
  {
    image: "/Hero2.jpg",
    badge: "Trustworthy Experience",
    description:
      "70 years of experience in the custom glass industry in the Oklahoma City metro area and surrounding communities. Serving North Texas starting 2026",
  },
  {
    image: "/Hero3.jpg",
    title:
      "Glass entryways, glass walls and partitions for commercial buildings in Oklahoma City, North Texas and Texoma",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prev = () =>
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  return (
    <section
      className="relative w-full h-[65vh] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {heroSlides.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Background image */}
            <Image
              src={slide.image}
              alt={slide.title || slide.badge || `Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Centered text content */}
            <div className="relative z-10 text-center text-white px-4 max-w-3xl">
              {slide.badge && (
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl sm:text-4xl font-semibold mb-4"
                >
                  {slide.badge}
                </motion.h2>
              )}

              {slide.title && (
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-xl sm:text-3xl font-semibold mb-4"
                >
                  {slide.title}
                </motion.h1>
              )}

              {slide.description && (
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-base sm:text-lg text-white/90 mb-4"
                >
                  {slide.description}
                </motion.p>
              )}

              {slide.descriptions && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-1 text-base sm:text-lg text-white/90 mb-6"
                >
                  {slide.descriptions.map((d, i) => (
                    <p key={i}>{d}</p>
                  ))}
                </motion.div>
              )}

              {index === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <a href="tel:+405-789-1485">
                    <Button className="bg-white text-gray-900 hover:bg-gray-100 text-sm sm:text-base px-6 py-3 rounded-lg shadow-lg">
                      Call today: +405-789-1485
                    </Button>
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        );
      })}

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === currentSlide
                ? "bg-emerald-400 w-6 shadow-lg shadow-emerald-500/40"
                : "bg-white/50 hover:bg-white/70 w-2.5"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
