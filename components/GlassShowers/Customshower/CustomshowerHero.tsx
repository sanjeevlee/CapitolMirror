import React from "react";
import { ShieldCheckIcon, SparklesIcon, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";


const ICON_CLASSES = "h-7 w-7 text-blue-600 dark:text-blue-400";


const features = [
 {
  icon: <SparklesIcon className={ICON_CLASSES} />,
  title: "Elegant Designs",
  desc: "Discover stunning hardware finishes and chic, modern styles.",
 },
 {
  icon: <Wrench className={ICON_CLASSES} />,
  title: "Expert Installation",
  desc: "Precision installation ensures lasting quality and beauty.",
 },
 {
  icon: <ShieldCheckIcon className={ICON_CLASSES} />,
  title: "Warranty & Support",
  desc: "Enjoy peace of mind with trusted after-sales service.",
 },
];

const benefits = [
 {
  title: "Wide Variety of Finishes",
  desc: "There are many decisions to be made, and our team is ready to help you through the process. When it comes to shower hardware finishes"
 },
 {
  title: "Custom Accessories",
  desc: " we offer many different styles such as, bronze, polished bronze, dark bronze, nickel, brushed nickel, brass, antique brass, chrome, and matte black."
 },
 {
  title: "Personalized Custom",
  desc: "We also offer shower accessory options as well, with products like shower handles, shower heads, faucets, frames, hinges, clamps and knobs."
 },
];


const CustomShower = () => {
 return (
  <section className="relative overflow-hidden py-10 px-6 md:px-16 bg-gradient-to-tr from-blue-50 via-white to-blue-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-800 ">
   {/* Decorative Background Layers */}
   <div className="absolute inset-0 z-0 pointer-events-none">
    <motion.div
     className="absolute top-0 -right-20 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply blur-3xl opacity-30"
     animate={{ y: [0, 30, 0] }}
     transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
     className="absolute top-0 -left-20 w-80 h-80 bg-sky-300 dark:bg-sky-800 rounded-full mix-blend-multiply blur-3xl opacity-40"
     animate={{ y: [0, -40, 0] }}
     transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
   </div>

   {/* Main Content */}
   <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center gap-16">
    {/* Left Content */}
    <motion.div
     initial={{ opacity: 0, x: -60 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.7, ease: "easeOut" }}
     className="flex-1"
    >
     <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white mb-6 leading-tight">
     Many different shower hardware options to choose from to create a truly unique glass shower for your {" "}
      <span className="text-blue-600 dark:text-blue-400">
      home in OKC
      </span>{" "}
     </h2>
     <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
     With some good inspiration and a little imagination, the shower of your dreams is within your reach! At<strong> Capitol Glass & Mirror</strong>, we provide a wide range of options so that your shower is unique and fitting to your style.
     </p>

     <ul className="space-y-5 mb-10">
      {features.map((item, idx) => (
       <motion.li
        key={idx}
        className="flex items-start gap-4"
        whileHover={{ scale: 1.05, x: 4 }}
        transition={{ duration: 0.2 }}
       >
        <div className="flex-shrink-0">{item.icon}</div>
        <div>
         <p className="font-semibold text-gray-800 dark:text-gray-200">
          {item.title}
         </p>
         <p className="text-sm text-gray-500 dark:text-gray-400">
          {item.desc}
         </p>
        </div>
       </motion.li>
      ))}
     </ul>
    </motion.div>

    {/* Right Content */}
    <motion.div
     initial={{ opacity: 0, x: 60 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.8, ease: "easeOut" }}
     className="flex-1 flex justify-center md:justify-end relative"
    >
     <div className="w-full md:w-[480px] lg:w-[550px] bg-white/60 dark:bg-zinc-800/70 backdrop-blur-lg border border-blue-100 dark:border-zinc-700 rounded-3xl shadow-2xl overflow-hidden">
      <Image
       src="/Customshower/Custom.png"
       alt="Modern Glass Shower"
       width={1100}
       height={880}
       sizes="(min-width: 1024px) 550px, (min-width: 768px) 480px, 100vw"
       className="w-full h-auto rounded-3xl object-cover"
       quality={90}
       priority
      />
     </div>
    </motion.div>

   </div>

   {/* Additional Content Section */}
   <section className=" mt-5 max-w-4xl mx-auto text-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700 dark:text-gray-300 px-4">
     {benefits.map(({ title, desc }, i) => (
      <div key={i} className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6">
       <p className="text-md">{desc}</p>
      </div>
     ))}
    </div>
   </section>
  </section>
 );
};

export default CustomShower;
