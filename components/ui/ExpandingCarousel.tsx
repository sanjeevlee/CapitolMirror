"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Card {
  id: number;
  category: string;
  title: string;
  time: string;
  image: string;
}

const cards: Card[] = [
  { id: 1, category: "DATA COLLECTION", title: "Create Custom Forms with Drag-and-Drop", time: "Just now", image: "/Home/Carosal/Carosal1.jpg" },
  { id: 2, category: "ASSET MANAGEMENT", title: "Track Assets in Real-Time Across Locations", time: "Today", image: "/Home/Carosal/Carosal2.jpg" },
  { id: 3, category: "CMMS MANAGEMENT", title: "Plan Preventive Maintenance Schedules", time: "1 day ago", image: "/Home/Carosal/Carosal3.png" },
  { id: 4, category: "DATA COLLECTION", title: "Collect Data Offline & Sync Automatically", time: "This week", image: "/Home/Carosal/Carosal4.png" },
  { id: 5, category: "ASSET MANAGEMENT", title: "Automate Asset Audits & Compliance Checks", time: "2 days ago", image: "/Home/Carosal/Carosal5.png" },
  { id: 6, category: "CMMS MANAGEMENT", title: "Manage Work Orders from Any Device", time: "3 days ago", image: "/Home/Carosal/Carosal6.png" },
  { id: 7, category: "ASSET MANAGEMENT", title: "Monitor Asset Health with Predictive Analytics", time: "4 days ago", image: "/Home/Carosal/Carosal7.png" },
  { id: 8, category: "DATA COLLECTION", title: "Analyze Field Data with Built-In Reports", time: "5 days ago", image: "/Home/Carosal/Carosal8.png" },
  { id: 9, category: "CMMS MANAGEMENT", title: "Reduce Equipment Downtime with Insights", time: "1 week ago", image: "/Home/Carosal/Carosal9.png" },
];

export default function ExpandingCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const CARD_WIDTH = 250;
  const ACTIVE_CARD_WIDTH = 350;
  const GAP = 24;

  // Preload images to prevent flicker
  useEffect(() => {
    cards.forEach(card => {
      const img = new Image();
      img.src = card.image;
    });
  }, []);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const offset = (index: number) => {
    const centerPoint = containerWidth / 2 - ACTIVE_CARD_WIDTH / 2;
    return -(index * (CARD_WIDTH + GAP) - centerPoint);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };


  return (
    <div ref={containerRef} className="relative container mx-auto overflow-hidden mb-10 mt-5">
      <motion.div
        className="flex gap-6"
        animate={{ x: offset(activeIndex) }}
        transition={{ type: "tween", ease: "easeInOut", duration: 0.8 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragStart={() => { /* keep autoplay running */ }}
        onDragEnd={(event, info) => {
          const swipeThreshold = 50;
          if (info.offset.x < -swipeThreshold) {
            setActiveIndex((prev) => (prev + 1) % cards.length);
          } else if (info.offset.x > swipeThreshold) {
            setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
          }
        }}
      >
        {cards.map((card, i) => {
          const isActive = i === activeIndex;
          return (
            <motion.div
              layout
              key={card.id}
              className="relative rounded-xl overflow-hidden cursor-pointer flex-shrink-0 border-2"
              style={{
                width: isActive ? ACTIVE_CARD_WIDTH : CARD_WIDTH,
                height: isActive ? 400 : 300,
              }}
              onClick={() => setActiveIndex(i)}
              transition={{ layout: { duration: 0.6, ease: "easeInOut" } }} >
              <motion.img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
                animate={{
                  scale: isActive ? 1 : 1.05,
                  filter: isActive ? "blur(0px)" : "blur(2px)",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 
    bg-gradient-to-t from-black/60 to-transparent">

                <span className="text-sm font-medium text-[var(--text)]/80">
                  {card.category}
                </span>

                <h3 className="mt-2 text-lg font-semibold text-[var(--text)] leading-snug">
                  {card.title}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 ">
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 "
      >
        <ChevronRight />
      </button>
    </div>
  );
}
