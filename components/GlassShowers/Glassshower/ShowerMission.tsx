import React from "react";
import { motion } from "framer-motion";
import { Droplets, Ruler, Wrench, Palette } from "lucide-react";
import Image from "next/image";

const imageUrl = "/GlassShowerDoors/ShowerDoor.png";

const ShowerMission = () => (
 <section className="relative py-20 px-6 overflow-hidden mb-10">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
   <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative flex-1 flex justify-center items-center"
   >
    <div className="absolute w-[420px] h-[420px] bg-gradient-to-tr from-sky-200 via-cyan-200 to-indigo-300 rounded-[3rem] blur-2xl opacity-40 animate-pulse"></div>

    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 backdrop-blur-md w-[400px] h-[450px] md:w-[480px] md:h-[550px]">
     <Image
      src={imageUrl}
      alt="Glass Shower Door"
      fill
      sizes="(min-width: 1024px) 420px, 90vw"
      className="object-cover transform transition-all duration-700 hover:scale-105"
      quality={90}
      priority
      decoding="async"
     />
     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
    </div>
    <motion.div
     initial={{ opacity: 0, y: 30 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ delay: 0.5, duration: 0.6 }}
     className="absolute -bottom-8 right-6 bg-white/90 dark:bg-zinc-900/70 backdrop-blur-md px-5 py-3 rounded-2xl shadow-md border border-gray-200/20"
    >
     <h3 className="text-sm font-semibold text-gray-800 dark:text-white tracking-wide">
      Premium Glass Design
     </h3>
     <p className="text-xs text-gray-600 dark:text-gray-300">
      Crafted with precision & clarity
     </p>
    </motion.div>
   </motion.div>
   <motion.div
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex-1 max-w-3xl"
   >
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
    Glass shower and bath enclosures installed in OKC
    </h2>

    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
    The Capitol Glass & Mirror team have installed glass shower doors all across the Oklahoma City area. We provide homes of all sizes with glass doors for showers, walk-in showers, tubs and more. If you're looking for a glass enclosure to surround your shower, we can design and install those too! We are the leading glass business in OKC for a reason - we can help bring to life your dream glass projects!
    </p>
    <div className="grid sm:grid-cols-2 gap-6 mt-10">
     <div className="flex items-start space-x-4">
      <div className="p-3 rounded-xl bg-sky-100 dark:bg-sky-900/30">
       <Droplets className="text-sky-600 dark:text-sky-300 w-6 h-6" />
      </div>
      <div>
       <h4 className="font-semibold text-gray-900 dark:text-white">Frameless Elegance</h4>
       <p className="text-sm text-gray-600 dark:text-gray-400">
        Seamless modern designs that enhance light and space.
       </p>
      </div>
     </div>

     <div className="flex items-start space-x-4">
      <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/30">
       <Ruler className="text-indigo-600 dark:text-indigo-300 w-6 h-6" />
      </div>
      <div>
       <h4 className="font-semibold text-gray-900 dark:text-white">Custom Fit</h4>
       <p className="text-sm text-gray-600 dark:text-gray-400">
        Tailored glass panels built to exact dimensions.
       </p>
      </div>
     </div>

     <div className="flex items-start space-x-4">
      <div className="p-3 rounded-xl bg-cyan-100 dark:bg-cyan-900/30">
       <Wrench className="text-cyan-600 dark:text-cyan-300 w-6 h-6" />
      </div>
      <div>
       <h4 className="font-semibold text-gray-900 dark:text-white">Expert Installation</h4>
       <p className="text-sm text-gray-600 dark:text-gray-400">
        Precision-mounted hardware for lasting quality.
       </p>
      </div>
     </div>

     <div className="flex items-start space-x-4">
      <div className="p-3 rounded-xl bg-teal-100 dark:bg-teal-900/30">
       <Palette className="text-teal-600 dark:text-teal-300 w-6 h-6" />
      </div>
      <div>
       <h4 className="font-semibold text-gray-900 dark:text-white">Design Variety</h4>
       <p className="text-sm text-gray-600 dark:text-gray-400">
        Choose from brushed nickel, matte black, chrome & more.
       </p>
      </div>
     </div>
    </div>
   </motion.div>
  </div>
 </section>
);

export default ShowerMission;
