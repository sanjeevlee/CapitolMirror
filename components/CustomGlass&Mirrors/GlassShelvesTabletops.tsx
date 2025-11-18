"use client";

import React from "react";
import { motion } from "framer-motion";
import { Ruler, Shield, Palette, Sparkles } from "lucide-react";
import Image from "next/image";
import GlassForHome from "./GlassForHome";

const GlassShelvesTabletops = () => {
  const features = [
    {
      icon: <Ruler className="w-8 h-8 text-sky-500" />,
      title: "Custom Measurements",
      description: "Precision-engineered glass for a seamless fit in any design.",
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-500" />,
      title: "Durable Materials",
      description: "Tempered glass that offers unmatched safety and strength.",
    },
    {
      icon: <Palette className="w-8 h-8 text-violet-500" />,
      title: "Design Options",
      description: "Choose from edge styles, tints, and finishes to match your space.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-amber-500" />,
      title: "Premium Quality",
      description: "Flawless clarity and craftsmanship in every piece we deliver.",
    },
  ];

  const projects = [
    { title: "Glass staircase panels", image: "/GlassShelves/GlassShelves3.png" },
    { title: "Glass wine room enclosures", image: "/GlassShelves/GlassShelves4.png" },
    { title: "Protective glass half walls", image: "/GlassShelves/GlassShelves5.png" },
    { title: "Glass shelves", image: "/GlassShelves/GlassShelves6.png" },
    { title: "Glass wine room enclosures", image: "/GlassShelves/GlassShelves7.png" },
    { title: "Glass for balconies and stairwells", image: "/GlassShelves/GlassShelves8.png" },
    { title: "Custom built glass doors", image: "/GlassShelves/GlassShelves9.png" },
    { title: "Childhood Glass walls and room partitions", image: "/GlassShelves/GlassShelves10.png" },
    { title: "Glass enclosure under a stairway", image: "/GlassShelves/GlassShelves11.png" },
    { title: "Custom glass enclosures", image: "/GlassShelves/GlassShelves12.png" },
    { title: "Glass storage spaces", image: "/GlassShelves/GlassShelves13.png" },
    { title: "Custom glass for your home", image: "/GlassShelves/GlassShelves14.png" },
  ];

  return (
    <div className="flex flex-col">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-b from-sky-50 via-white to-sky-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 overflow-hidden py-16 flex items-center justify-center text-center">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Background graphics */}
          <svg className="absolute top-16 left-10 w-28 h-28 text-sky-400/10 dark:text-sky-500/10 animate-[float_10s_ease-in-out_infinite]"
            viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="8" />
            <ellipse cx="60" cy="60" rx="54" ry="20" stroke="currentColor" strokeWidth="2" />
            <path d="M60,6a54,54 0 0,0 0,108" stroke="currentColor" strokeWidth="2" />
            <path d="M60,6a54,54 0 0,1 0,108" stroke="currentColor" strokeWidth="2" />
            <ellipse cx="60" cy="60" rx="34" ry="54" stroke="currentColor" strokeWidth="1" />
          </svg>

          <svg className="absolute bottom-16 right-10 w-28 h-28 text-sky-300/20 dark:text-sky-400/10 animate-[float_12s_ease-in-out_infinite_reverse]"
            viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10C50 10 10 70 10 100A40 40 0 1 0 90 100C90 70 50 10 50 10Z"
              fill="currentColor" fillOpacity="0.13" />
            <ellipse cx="60" cy="46" rx="8" ry="4" fill="#fff" fillOpacity="0.15" />
          </svg>

          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-300/30 dark:bg-sky-600/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 py-0 sm:py-24"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="text-sky-600 dark:text-sky-400">Capitol Glass & Mirror</span>{" "}
            can custom fabricate and design glass for your home, business or commercial building projects in Oklahoma City
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-6xl mx-auto">
            Our experienced team of glass professionals can create the perfect pieces of glass for your project.
            From large-scale construction to home remodeling, we’re the premier custom glass shop in Oklahoma City!
          </p>
          <a href="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-sky-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-sky-700 transition-all duration-300"
            >
              Request a Quote
            </motion.div>
          </a>
        </motion.div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Why Choose <span className="text-sky-600">Us</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16"
          >
            We combine craftsmanship, technology, and innovation to deliver glass
            solutions that redefine elegance and durability.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative bg-gradient-to-br from-white/80 to-sky-50/50 dark:from-zinc-800/80 dark:to-zinc-900/50 border border-sky-100/30 dark:border-zinc-700/60 rounded-2xl shadow-lg hover:shadow-2xl p-8 backdrop-blur-xl transition-all duration-500"
              >
                <div className="flex flex-col items-center text-center space-y-5">
                  <div className="p-4 rounded-full bg-sky-100 dark:bg-sky-900/40 ring-4 ring-sky-200/40 dark:ring-sky-800/50">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GlassForHome />

      {/* ================= GALLERY SECTION ================= */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Our Recent Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Explore a few highlights from our bespoke glass collections.
            </p>
          </div>

          {/* Gallery Grid with aligned bottom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={400}
                    quality={90}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white dark:bg-zinc-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default GlassShelvesTabletops;
