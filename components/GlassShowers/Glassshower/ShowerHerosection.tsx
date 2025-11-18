import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
const ShowerHeroSection = () => (
  <section className="relative min-h-[90vh] py-21 overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-900">

    {/* Ambient glow blobs */}
    <div aria-hidden className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl dark:bg-zinc-700/20" />
    {/* Hero Content */}
    <div className="relative z-20 flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-sm text-zinc-900 dark:text-zinc-100"
      >
        <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent dark:from-zinc-200 dark:to-zinc-400">
          Customized glass shower doors
        </span>
        <br />
        <span className="text-zinc-700 dark:text-zinc-300">
          designed to fit any space
        </span>
      </motion.h1>

      <p className="text-lg mb-6 text-center max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
      Tired of replacing shower curtains? Glass shower doors are a perfect and stylish alternative! We offer a huge selection of glass shower door options so you can create a truly unique, one-of-a-kind glass shower for your home. Provide your size dimensions, pick your glass, choose your hardware, and our team can help you design and install it!
      </p>

      {/* Call to Action */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <a href="/contact">
        <button  className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-500 transition">
          Get a Free Quote
        </button>
       </a>
      </div>
    </div>

    {/* Features Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative z-20 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
    >
      {[
        { icon: <CheckCircle className="mx-auto mb-2 text-indigo-500" size={28} />, title: "Premium Glass", desc: "Tempered, durable, and crystal-clear glass options." },
        { icon: <CheckCircle className="mx-auto mb-2 text-indigo-500" size={28} />, title: "Custom Fit", desc: "Perfectly sized for any shower or bathroom layout." },
        { icon: <CheckCircle className="mx-auto mb-2 text-indigo-500" size={28} />, title: "Professional Installation", desc: "Our experienced team ensures flawless installation." }
      ].map((feature, idx) => (
        <div key={idx} className="bg-white/80 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-md">
          {feature.icon}
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{feature.title}</h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">{feature.desc}</p>
        </div>
      ))}
    </motion.div>

    {/* Floating Card with 3 columns */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative z-30 mx-auto w-full max-w-5xl my-5"
    >
      <div className="rounded-2xl shadow-2xl flex flex-col sm:flex-row justify-between items-stretch overflow-hidden text-center divide-y sm:divide-y-0 sm:divide-x divide-zinc-100 dark:divide-zinc-700 bg-white/80 backdrop-blur-xl ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10">
        <div className="flex-1 p-8">
          <div className="font-semibold mb-2 text-zinc-900 dark:text-zinc-100">Glass shower and bath enclosures</div>
          <div className="text-zinc-600 dark:text-zinc-400 mb-4">The Capitol Glass & Mirror team have installed glass shower doors all across the Oklahoma City area.</div>
        </div>
        <div className="flex-1 p-8">
          <div className="font-semibold mb-2 text-zinc-900 dark:text-zinc-100">Customizable shower</div>
          <div className="text-zinc-600 dark:text-zinc-400 mb-4">All of our glass shower doors are custom-made to ensure a perfect fit for any sized bathroom.</div>
        </div>
        <div className="flex-1 p-8">
          <div className="font-semibold mb-2 text-zinc-900 dark:text-zinc-100">Residential Glass</div>
          <div className="text-zinc-600 dark:text-zinc-400 mb-4">Should you need custom or specialty glass for other projects in your home, give us a call!</div>
        </div>
      </div>
    </motion.div>

  </section>
);

export default ShowerHeroSection;
