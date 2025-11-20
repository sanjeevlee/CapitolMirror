import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const wineRooms = [
  {
    img: "/WineRoom/CutsomeWIneRoom1.png",
  },
  {
    img: "/WineRoom/WineRoom1.png",
  },
  {
    img: "/WineRoom/CutsomeWIneRoom3.png",
  },
  {
    img: "/WineRoom/CutsomeWIneRoom4.png",
  },
  {
    img: "/WineRoom/WineRoom.png",
  },
  {
    img: "/WineRoom/CutsomeWIneRoom2.png",
  },
  {
    img: "/WineRoom/WineRoom2.png",
  },
  {
    img: "/WineRoom/WineRoom3.png",
  },
];

export default function WineRoomGallery() {
  return (
    <div className=" container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Custom Wine Room Gallery</h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Explore a variety of custom‑designed wine rooms from different homes and architectural styles.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {wineRooms.map((room, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg bg-white"
          >
            <div className="relative w-full h-100">
              <Image
                src={room.img}
                alt={"WineRoomGallery"}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
