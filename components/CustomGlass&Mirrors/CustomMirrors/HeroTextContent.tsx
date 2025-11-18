import { motion, easeInOut, type Variants } from 'framer-motion';
import Image from 'next/image';
import { FaBath, FaRegGem } from "react-icons/fa";
import { MdFilterVintage, MdOutlineBrush } from "react-icons/md";
import { GiMirrorMirror } from "react-icons/gi";
const HeroTextContent = () => {
 const services = [
  {
    name: "Vanity Mirrors",
    icon: <GiMirrorMirror  className="w-8 h-8 text-indigo-600" />, // personal vanity mirror
  },
  {
    name: "Antique Mirrors",
    icon: <MdFilterVintage  className="w-8 h-8 text-indigo-600" />, // vintage/antique style
  },
  {
    name: "Make-up Mirrors",
    icon: <MdOutlineBrush className="w-8 h-8 text-indigo-600" />, // makeup/beauty brush
  },
  {
    name: "Decorative Mirrors",
    icon: <FaRegGem className="w-8 h-8 text-indigo-600" />, // decorative/gem-like
  },
  {
    name: "Bathroom Mirrors",
    icon: <FaBath className="w-8 h-8 text-indigo-600" />, // bathtub = bathroom context
  },
];

 // Animation variants for floating SVG blobs
 const floatVariants: Variants = {
  floatUp: {
   y: [0, -20, 0],
   transition: {
    duration: 6,
    repeat: Infinity,
    ease: easeInOut,
   },
  },
 };


 return (
  <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 py-28 px-6">

   <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between gap-20 ">
    <motion.div
     initial={{ opacity: 0, x: -60 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.9, ease: "easeOut" }}
     className="flex-1 z-10 max-w-4xl"
    >
     <h1 className="text-2xl md:text-4xl font-extrabold leading-tight text-gray-900 dark:text-white mb-8"><span className="text-indigo-600 dark:text-indigo-400">Capitol Glass & Mirror custom fabricates mirrors{" "}</span> 
      for all types and sizes of projects in Oklahoma City from home remodeling to building projects {"  "}
     </h1>

     <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-7xl leading-relaxed">
     Capitol Glass & Mirror creates custom mirror designs that can elevate any room's interior. Mirrors make rooms look larger and bring style, and balance to your space. Mirrors can be great for bathrooms, fireplace mantles, living rooms, entry ways, as well as commercial spaces, offices and retail spaces. We have many years of experience cutting and installing custom mirrors in Oklahoma City and would be happy to help you create something for your unique needs.
     </p>

     <div className="mb-10">
      <h3 className="text-sm font-semibold tracking-widest text-indigo-600 uppercase mb-6">
       Our Premium Services
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
       {services.map(({ name, icon }, idx) => (
        <div key={idx} className="flex items-start space-x-4">
         <div className="flex-shrink-0">{icon}</div>
         <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">{name}</p>
        </div>
       ))}
      </div>
     </div>

     <a href='/contact'>
     <button
      className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out"
      aria-label="Get a Quote"
     >
      Get a Quote
     </button>
    </a>
    </motion.div>
    {/* Right Image */}
    <motion.div
     initial={{ opacity: 0, x: 60 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
     className="relative flex-1 flex justify-center items-center  z-10"
    >
     <div className="absolute w-[550px] h-[550px] bg-gradient-to-tr from-blue-400 via-blue-400 to-indigo-500 rounded-[3rem] blur-3xl opacity-60 animate-[pulse_6s_ease-in-out_infinite] -z-10" />
           <div className="w-full md:w-[480px] lg:w-[550px]   overflow-hidden">
      <Image
       src="/CustomMirror/Custom2.png"
       alt="Modern Glass Shower"
       width={1100}
       height={880}
       sizes="(min-width: 1024px) 550px, (min-width: 768px) 480px, 100vw"
       className="w-full h-auto object-cover rounded-3xl"
       quality={90}
       priority
      />
     </div>

    </motion.div>
   </div>

  </section>
 );
};

export default HeroTextContent;
