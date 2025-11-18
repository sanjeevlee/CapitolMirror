import React from "react";

const features = [
 {
  icon: (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="currentColor"
    viewBox="0 0 16 16"
    aria-hidden="true"
   >
    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
    <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z" />
   </svg>
  ),
  label: "Showers Doors",
  bgColor: "bg-gradient-to-br from-blue-500 to-blue-700",
 },
 {
  icon: (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
   >
    <path d="M8 21h8" />
    <path d="M12 16v5" />
    <path d="M17 5l1 6c0 3.012-2.686 5-6 5s-6-1.988-6-5l1-6" />
    <path d="M12 5m-5 0a5 2 0 1 0 10 0a5 2 0 1 0-10 0" />
   </svg>
  ),
  label: "Glass",
  bgColor: "bg-gradient-to-br from-green-400 to-green-600",
 },
 {
  icon: (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
   >
    <rect x="3" y="6" width="18" height="12" rx="2" ry="2" />
    <line x1="3" y1="6" x2="21" y2="18" />
    <line x1="21" y1="6" x2="3" y2="18" />
   </svg>
  ),
  label: "Glass Table Tops",
  bgColor: "bg-gradient-to-br from-purple-500 to-purple-700",
 },
 {
  icon: (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
   >
    <rect x="6" y="2" width="12" height="20" rx="2" ry="2" />
    <line x1="6" y1="8" x2="18" y2="8" />
   </svg>
  ),
  label: "Mirrors",
  bgColor: "bg-gradient-to-br from-red-400 to-red-600",
 },
];

export default function CoreFeatures() {
 return (
  <section className="py-5 px-6  text-gray-900 dark:text-gray-100">
   <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-4">Core Features</h2>
    <p className="mb-12 text-lg max-w-xl mx-auto text-gray-600 dark:text-gray-400">
     Sleek and durable glass solutions designed to elevate your space with clarity and style. Our offerings include tempered glass panels, frameless designs, and customizable finishes that blend safety with modern aesthetics.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
     {features.map((feature, idx) => (
      <div
       key={idx}
       className="flex flex-col items-center bg-gray-50 dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 cursor-pointer"
      >
       <div
        className={`${feature.bgColor} mb-6 p-4 rounded-full text-white flex items-center justify-center w-20 h-20`}
       >
        {feature.icon}
       </div>
       <span className="text-xl font-semibold text-center capitalize tracking-wide">
        {feature.label}
       </span>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}
