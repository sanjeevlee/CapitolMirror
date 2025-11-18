import { motion } from 'framer-motion';
import { Eye, Shield, Ruler, Sparkles, Star, Box, Truck, Stamp, StarIcon } from 'lucide-react';
import { FaTools } from 'react-icons/fa';

const CustomMirrorContent = () => {
 const features = [
  {
   icon: <Eye className="w-10 h-10 text-blue-500" />,
   title: "Custom Mirror Design",
   description: "Bespoke mirrors tailored to your exact specifications and space requirements",
  },
  {
   icon: <Sparkles className="w-10 h-10 text-purple-500" />,
   title: "Premium Quality",
   description: "High-grade mirror glass with crystal clear reflection and durability",
  },
  {
   icon: <Ruler className="w-10 h-10 text-green-500" />,
   title: "Precise Measurements",
   description: "Accurate custom sizing for perfect fit in any room or space",
  },
  {
   icon: <Shield className="w-10 h-10 text-orange-500" />,
   title: "Safety First",
   description: "Tempered and safety-backed mirrors for secure installation",
  },
  {
   icon: <Star className="w-10 h-10 text-yellow-500" />,
   title: "Elegant Finishes",
   description: "Meticulously crafted edges and designs to elevate your space",
  },
  {
   icon: <FaTools className="w-10 h-10 text-red-500" />,
   title: "Expert Craftsmanship",
   description: "Skilled artisans ensuring every mirror is flawless and durable",
  },
  {
   icon: <Box className="w-10 h-10 text-teal-500" />,
   title: "Custom Packaging",
   description: "Secure and stylish packaging tailored for your unique orders",
  },
  {
   icon: <Truck className="w-10 h-10 text-indigo-500" />,
   title: "Fast Delivery",
   description: "Prompt and reliable shipping to your doorstep with care",
  },
 ];

 return (
  <section className="relative py-20 overflow-hidden">
  <div className="container mx-auto px-6 md:px-12 relative z-10">
    <div className="text-center mb-14 max-w-3xl mx-auto">
      <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
        Mirrors For Your Home
      </h2>
      <div className="mx-auto h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-green-400 rounded-full mb-6"></div>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Adding a mirror to your living space is a great way to add a level of uniqueness and style to your home. There are a variety of mirrors to consider so that your piece is unlike any other. Our experienced team of OKC mirror experts are ready to find something custom for you. We offer a wide variety of framed mirrors, but if you're looking for something one of a kind, we can custom cut a frameless mirror that fits your vision. We stock bronze, gray, clear, micropane, and antique mirrors, giving you lots to choose from.
      </p>

      {/* ✅ Horizontal 8 Points */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 max-w-4xl mx-auto">
      {[
          "Vanity mirrors",
          "Bathroom mirrors",
          "Wall mirrors",
          "Accent mirrors",
          "Antique mirrors",
          "Floor mirrors",
          "Make-up mirrors",
          "Decorative Mirrors",
        ].map((point, index) => (
          <li
            key={index}
            className="flex items-center justify-start text-gray-700 dark:text-gray-300 gap-2"
          >
            <StarIcon/>
            <span className="text-sm sm:text-base">{point}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.15 }}
          whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
          className="bg-white dark:bg-zinc-800 rounded-3xl p-8 flex flex-col items-center text-center cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-400"
        >
          <div className="mb-6 p-4 rounded-full text-white shadow-lg transform hover:rotate-12 transition-transform duration-300">
            {feature.icon}
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white tracking-wide">
            {feature.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

 );
};

export default CustomMirrorContent;
