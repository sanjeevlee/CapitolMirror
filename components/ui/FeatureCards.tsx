"use client"
import React from "react";
import { Users, DollarSign, Settings } from "lucide-react";
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Users size={56} className="mx-auto text-blue-400" />,
    title: "Unlimited Users",
    description: "Get your entire team on the same page and set custom user permissions.",
    side: "left",
  },
  {
    icon: <DollarSign size={56} className="mx-auto text-green-400" />,
    title: "Fast Time to Value",
    description: "Achieve high user adoption and ROI with our intuitive interface.",
    center: true,
  },
  {
    icon: <Settings size={56} className="mx-auto text-teal-400" />,
    title: "Customizable Workflows",
    description: "Configure the platform to match the way you already work.",
    side: "right",
  },
];

export default function FeatureCards() {
  return (
    <div className="w-full flex justify-center items-center  py-10 bg-[var(--bg)]">
      <motion.div
        className="flex flex-col md:flex-row gap-6 w-full max-w-6xl px-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className={
              `relative flex-1 flex flex-col items-center text-center p-8 rounded-2xl
              ${f.center
                ? "bg-gradient-to-br from-[#181d23] to-[#232a34] scale-105 z-10 shadow-2xl"
                : "bg-[#292f38] shadow-xl"}
              text-[var(--text)]
              transition-transform duration-300 ease-out
              hover:scale-[1.04] hover:shadow-2xl
              ${f.center ? "min-h-[340px]" : "min-h-[300px]"}
              ${f.side === "left" ? "clip-left" : ""}
              ${f.side === "right" ? "clip-right" : ""}
            `
            }
            style={{
              boxShadow: f.center
                ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
                : "0 4px 16px 0 rgba(31, 38, 135, 0.17)",
            }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: 'easeOut' }}
            >
              {f.icon}
            </motion.div>
            <h3 className="mt-6 text-2xl font-bold">{f.title}</h3>
            <p className="mt-3 text-base opacity-80">{f.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <style jsx global>{`
        .clip-left {
          clip-path: polygon(0 0, 95% 0, 100% 100%, 0% 100%);
        }
        .clip-right {
          clip-path: polygon(5% 0, 100% 0, 100% 100%, 0% 100%);
        }
        @media (max-width: 768px) {
          .clip-left, .clip-right {
            clip-path: none;
          }
        }
      `}</style>
    </div>
  );
}