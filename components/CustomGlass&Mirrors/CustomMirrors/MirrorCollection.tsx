import { motion } from 'framer-motion';
import Image from 'next/image';

const MirrorCollection = ({ }) => {


 const mirrorTypes = [
  {
   name: "Home gym mirror wall",
   description: "Large, wall-to-wall mirrors designed to create a professional gym look and enhance workout visibility.",
   image: "/CustomMirror/Custom3.png",
  },
  {
   name: "Mirror wall w/diagonal pattern",
   description: "Stylish mirror wall featuring a diagonal grid design that adds elegance and visual depth to any room.",
   image: "/CustomMirror/Custom4.png",
  },
  {
   name: "Mirror revealing a hidden door",
   description: "A seamless mirror installation that conceals a door, blending functionality with modern sophistication.",
   image: "/CustomMirror/Custom5.png",
  },
  {
   name: "Framed hanging mirrors",
   description: "Beautifully framed mirrors perfect for hallways, bathrooms, or bedrooms — combining form and function.",
   image: "/CustomMirror/Custom6.png",
  },
  {
   name: "Decorative mirror wall",
   description: "An eye-catching mirror feature wall that brings light, dimension, and a luxurious aesthetic to any space.",
   image: "/CustomMirror/Custom7.png",
  },
  {
   name: "Framed antique mirrors",
   description: "Classic mirrors with ornate frames and an antique finish — perfect for traditional and vintage interiors.",
   image: "/CustomMirror/Custom8.png",
  },
  {
   name: "Gym mirror",
   description: "Durable, high-clarity mirrors tailored for fitness studios and home gyms, offering a spacious visual effect.",
   image: "/CustomMirror/Custom9.png",
  },
  {
   name: "Tinted matte mirror wall",
   description: "Modern tinted mirror design with a soft matte finish that enhances contemporary interiors with subtle elegance.",
   image: "/CustomMirror/Custom10.png",
  },
 ];

 return (
  <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-800" >
   <div className="container mx-auto px-6 md:px-12">
    <div className="text-center mb-12">
     <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
      Our Mirror Collection
     </h2>
     <p className="text-gray-600 dark:text-gray-300">
      Explore our range of custom mirror solutions for every space
     </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
     {mirrorTypes.map((mirror, index) => (
      <motion.div
       key={index}
       initial={{ opacity: 0, y: 30 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, delay: index * 0.1 }}
       className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group"
      >
       <div className="relative h-70 overflow-hidden">
        <Image
         src={mirror.image}
         alt={mirror.name}
         fill
         sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
         className="object-cover transform transition duration-500 group-hover:scale-110"
         quality={85}
         loading="lazy"
         decoding="async"
        />
       </div>
       <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
         {mirror.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
         {mirror.description}
        </p>
       </div>
      </motion.div>
     ))}
    </div>
   </div>
  </section >
 );
};
export default MirrorCollection