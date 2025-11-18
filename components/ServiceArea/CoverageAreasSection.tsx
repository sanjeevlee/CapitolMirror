import { motion } from "framer-motion";
import { MapPinCheckInside } from "lucide-react";

export default function CoverageAreasSection() {
 const servicePoints = [
   { name: "Ardmore" },
   { name: "Lawton" },
   { name: "Pauls Valley" },
   { name: "Ada" },
   { name: "Seminole" },
   { name: "Duncan" },
   { name: "Sulphur" },
   { name: "Madill" },
   { name: "Kingston" },
   { name: "Atoka" },
   { name: "Coalgate" },
   { name: "Calera" },
   { name: "Tuttle" },
   { name: "Moore" },
   { name: "Durant" },
   { name: "Marietta" },
   { name: "Tishomingo" },
   { name: "AND MUCH MORE" },
 ];

 return (
   <section className="py-20 px-6 md:px-10">
     <div className="container mx-auto">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         {/* Left Side — Header + Description */}
         <motion.div
           initial={{ opacity: 0, x: -40 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="space-y-4 text-center lg:text-left"
         >
           {/* 🔹 Big Location Icon */}
           <div className="flex justify-center lg:justify-start">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={1.5}
               stroke="url(#gradient)"
               className="w-20 h-20 text-blue-600"
             >
               <defs>
                 <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
                   <stop offset="0%" stopColor="#2563eb" />
                   <stop offset="100%" stopColor="#4f46e5" />
                 </linearGradient>
               </defs>
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 d="M12 21c4.97-4.97 8-8.28 8-12a8 8 0 10-16 0c0 3.72 3.03 7.03 8 12z"
               />
               <circle cx="12" cy="9" r="2.5" fill="url(#gradient)" />
             </svg>
           </div>

           <h2 className="text-2xl md:text-4xl font-bold">
             We provide custom glass and mirrors to a wide range of locations in{" "}
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
               North Texas and the Texoma
             </span>
           </h2>
           <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
             We provide professional residential and commercial glass services to
             many towns and cities in North Texas and the Texoma region. Our
             service area includes Grayson County, Cooke County, and Collin
             County. If you're in the following towns or cities and need custom
             glass or mirrors for a project, give Capitol Glass & Mirror a call. These towns and cities include but are not limited to the following cities:
           </p>
         </motion.div>
         {/* Right Side — Service Points Grid */}
        <motion.div
           initial={{ opacity: 0, x: 40 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="grid grid-cols-2 sm:grid-cols-3 gap-4"
         >
           {servicePoints.map((point, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.3, delay: idx * 0.05 }}
               className="p-3  bg-white/60 dark:bg-zinc-800/60 rounded-lg shadow-sm hover:shadow-md transition"
             >
              <div className="flex items-center gap-2">
  <MapPinCheckInside className="text-indigo-500 dark:text-indigo-400" />
  <span className="font-medium text-gray-900 dark:text-gray-100 leading-none">{point.name}</span>
</div>

             </motion.div>
           ))}
         </motion.div>
       </div>
     </div>
   </section>
 );
}