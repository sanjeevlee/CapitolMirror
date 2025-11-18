import React, { Fragment } from "react";
import { Box, Framer, CornerDownRight, Layers, ShowerHeadIcon, FrameIcon } from "lucide-react";
import { FaTools } from "react-icons/fa";
import Image from "next/image";

const platforms = [
  { name: "Zoho Desk", img: "/GlassShowerDoors/ShowerDoor1.png" },
  { name: "Intercom", img: "/GlassShowerDoors/ShowerDoor2.png" },
  { name: "Gorgias", img: "/GlassShowerDoors/ShowerDoor3.png" },
  { name: "Zendesk", img: "/GlassShowerDoors/ShowerDoor4.png" },
  { name: "Fin", img: "/GlassShowerDoors/ShowerDoor5.png" },
  { name: "Salesforce", img: "/GlassShowerDoors/ShowerDoor6.png" },
  { name: "Sprinklr", img: "/GlassShowerDoors/ShowerDoor7.png" },
  { name: "Front", img: "/GlassShowerDoors/ShowerDoor8.png" },
  { name: "HubSpot", img: "/GlassShowerDoors/ShowerDoor9.png" },

];
const services = [
  { icon: <ShowerHeadIcon className="text-blue-500 w-5 h-5" />, text: "Sliding glass doors for showers." },
  { icon: <Box className="text-purple-500 w-5 h-5" />, text: "Frosted shower door glass." },
  { icon: <FrameIcon className="text-green-500 w-5 h-5" />, text: "Frameless shower door." },
  { icon: <CornerDownRight className="text-red-500 w-5 h-5" />, text: "Aluminum framed corner shower." },
  { icon: <Layers className="text-yellow-500 w-5 h-5" />, text: "Available all thicknesses of glass." },
  { icon: <FaTools className="text-pink-500 w-5 h-5" />, text: "Manufacture custom glass." },
];

const GlassFeatures = () => (
  <div className="container mx-auto flex flex-col md:flex-row px-4 md:px-8 py-12 text-zinc-900 dark:text-zinc-100">
    {/* Left Column */}
    <div className="md:w-1/2 flex flex-col justify-center mb-8 md:mb-0">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Fully customizable shower options </h1>
      <p className="text-base md:text-lg mb-5 text-zinc-600 dark:text-zinc-400">
      All of our glass shower doors are custom-made to ensure a perfect fit for any sized bathroom. We have many different shower hardware options should you want framed shower doors, or you can always go with a frameless look. Our shower hardware selection comes in all types of finishes and colors for you to choose from.
      </p>
      <div className="mb-6">
        <div className="font-semibold text-xs mb-2 tracking-wider text-zinc-700 dark:text-zinc-300">OUR SERVICES</div>
        <ul className="space-y-3">
          {services.map((service, idx) => (
            <li key={idx} className="flex items-center">
              <span className="mr-2">{service.icon}</span>
              {service.text}
            </li>
          ))}
        </ul>
      </div>

    </div>

    {/* Right Column: Helpdesk Cards */}
    <div className="md:w-1/2 flex justify-center items-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full">
        {platforms.map((platform, idx) => (
          <div
            key={platform.name}
            className={`w-full aspect-[3/4] flex flex-col items-center justify-center rounded-lg border transition-all overflow-hidden ${platform.name === "Fin"
              ? "bg-orange-50 border-orange-300 text-orange-700 dark:bg-[#10131c] dark:border-orange-400 dark:text-orange-400 text-2xl font-bold"
              : "bg-white border-zinc-200 text-zinc-700 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300"
              }`}
          >
            {platform.img ? (
              <Image
                width={100}
                height={100}
                src={platform.img}
                alt={platform.name}
                className={`h-full w-full object-cover`}
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default GlassFeatures;
