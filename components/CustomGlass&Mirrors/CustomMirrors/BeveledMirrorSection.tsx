import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const BeveledMirrorSection = () => {
 return (
  <section className="relative  py-20">
   <div className="container mx-auto  md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">

    {/* Left Text Section */}
    <motion.div
     className="flex-1"
     initial={{ opacity: 0, x: -60 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.7, ease: "easeOut" }}
    >
     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
      Beveled Mirrors
     </h2>
     <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
      <span className="font-semibold text-gray-900 dark:text-white">Capitol Glass & Mirror</span>
      {" "}offers mirror and glass beveling from 1/2" to 2" in width with our in-house beveling equipment.
     </p>
     <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
      A beveled mirror creates a custom, elegant look that’s uniquely yours —
      adding light, depth, and a timeless touch to any room.
     </p>
    </motion.div>

    {/* Right Image Section */}
    <motion.div
     className="flex-1 flex justify-center"
     initial={{ opacity: 0, x: 60 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.7, ease: "easeOut" }}
    >
     <div className="relative w-full md:w-[90%] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-zinc-700">
      <Image
       src="/CustomMirror/Custom1.png"
       alt="Beveled Mirror"
       fill
       sizes="(min-width: 1024px) 50vw, 90vw"
       className="object-cover transform hover:scale-105 transition-transform duration-700"
       quality={90}
       loading="lazy"
       decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
     </div>
    </motion.div>
   </div>

   {/* Subtle ambient glow */}
   <div
    aria-hidden
    className="absolute top-20 right-20 w-72 h-72 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl"
   ></div>
  </section>
 );
};

export default BeveledMirrorSection;
