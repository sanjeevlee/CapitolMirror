import React from "react";
import { motion } from "framer-motion";

const products = [
 {
  title: "Glass Shelves",
  description:
   "Make a statement in your home by adding glass shelves to your living room, dining area, or other spaces. If you're looking for custom glass shelves for your home, choose Capitol Glass & Mirror.",
  image: "/GlassShelves/GlassShelves1.png", // replace with your image path
  button: "Contact us now!",
 },
 {
  title: "Glass Tables & Tabletops",
  description:
   "A large glass table can be an excellent room centerpiece. We fabricate glass for all types of residential use including tables, tabletops, and a multitude of other glass products.",
  image: "/GlassShelves/GlassShelves2.png", // replace with your image path
  button: "Read our FAQ here!",
 },
];

const GlassForHome = () => {
 return (
  <section className="relative py-24 bg-gradient-to-b from-white to-sky-50 dark:from-zinc-950 dark:to-zinc-900 overflow-hidden">
   {/* Subtle Background Glow */}
   <div className="absolute top-10 left-20 w-72 h-72 bg-sky-300/20 dark:bg-sky-600/10 rounded-full blur-3xl -z-10"></div>
   <div className="absolute bottom-10 right-20 w-72 h-72 bg-sky-200/20 dark:bg-sky-700/10 rounded-full blur-3xl -z-10"></div>

   <div className="container mx-auto px-6">
    {/* Product Grid */}
    <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
     {products.map((item, i) => (
      <motion.div
       key={i}
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ delay: i * 0.2, duration: 0.6 }}
       className={`flex flex-col md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""
        } items-center gap-10`}
      >
       {/* Image */}
       <div className="flex-1">
        <div className="overflow-hidden rounded-2xl shadow-lg border border-sky-100/50 dark:border-zinc-800">
         <motion.img
          whileHover={{ scale: 1.05 }}
          src={item.image}
          alt={item.title}
          className="w-full h-80 object-fit transition-transform duration-500"
         />
        </div>
       </div>

       {/* Content */}
       <div className="flex-1 text-center md:text-left space-y-5">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
         {item.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
         {item.description}
        </p>
        {/* <button className="px-6 py-2 border border-sky-600 text-sky-600 dark:text-sky-400 dark:border-sky-500 rounded-lg font-medium hover:bg-sky-600 hover:text-white transition-all duration-300">
         {item.button}
        </button> */}
       </div>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default GlassForHome;
