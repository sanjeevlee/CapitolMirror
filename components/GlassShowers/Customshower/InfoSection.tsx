import React from "react";
import { BicepsFlexed, Flower, Target } from "lucide-react"; // Using Lucide icons

const InfoSection = () => {
 const benefits = [
  {
   icon: <Target className="w-8 h-8 text-red-600" />,
   title: "Quality Products",
   description: "High-quality materials, manufacturing, and fitting.",
  },
  {
   icon: <Flower className="w-8 h-8 text-green-600" />,
   title: "Sustainability",
   description: "Our doors are made of Nucor steel, 100% recyclable and eco-friendly.",
  },
  {
   icon: <BicepsFlexed className="w-8 h-8 text-blue-600" />,
   title: "Reliability",
   description: "We deliver durable solutions that last and ensure customer satisfaction.",
  },
 ];

 return (
  <section className=" py-10">
   <div className="container mx-auto px-6 md:px-12">
    {/* Section Title */}
    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
     Why Choose Capitol Glass & Mirror
    </h2>

    {/* Section Subtitle */}
    <p className="text-gray-700 text-md dark:text-gray-300 mb-12 max-w-2xl">
     We provide superior glass doors and solutions, ensuring durability, sustainability,
     and unmatched quality in every installation.
    </p>

    {/* Benefits Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
     {benefits.map((item, index) => (
      <div
       key={index}
       className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col items-start"
      >
       <div className="mb-4">{item.icon}</div>
       <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {item.title}
       </h3>
       <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default InfoSection;
