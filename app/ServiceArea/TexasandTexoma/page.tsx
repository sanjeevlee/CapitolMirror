"use client";

import { MapPin, Phone, Clock, CheckCircle2, MapPinCheckInside, DoorClosed, GitCommitVertical } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
export default function TexasandTexoma() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ContentSection />
      <MapAndAreasSection/>
      <ServicesSection />
    </div>
  );
}
// Hero Section Component
function HeroSection() {
  return (
    <section className="relative px-6 md:px-8 lg:px-10 py-20 md:py-28 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Background decorative elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid dark:bg-grid-dark"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[9] bg-radial-vignette"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 -z-[8] h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/20 via-cyan-400/20 to-indigo-400/20 blur-3xl dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-indigo-500/10"
      />

      <div className="mx-auto container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 text-sm font-medium">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Serving Greater North Texas and Texoma</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          Custom Glass{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600">
            In North Texas and Texoma
            </span>
          </h1>

          <p className=" text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          The team at Capitol Glass & Mirror specializes in reliable, high quality commercial and residential glass fabrication, with a customer first approach. If you are located in the North Texas area or the Texoma region, choose us to help make your vision come to life. From commercial glass to residential glass, we ensure the highest quality service that will meet your standards. Give us a call today to get started on your next glass project in North Texas or the Texoma region!
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="tel:+405-789-1485">
              <Button variant="default" size="lg" className="px-8">
                <Phone className="w-5 h-5 mr-2" />
                Call: 405-789-1485
              </Button>
            </a>
       <a href='/contact'>
       <Button variant="outline" size="lg" className="px-8">
              <Clock className="w-5 h-5 mr-2" />
              Request Quote
            </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Content Section Component
function ContentSection() {
  const features = [
    {
      title: "Commercial Glazing",
      description: "Are you planning construction for a glass storefront, glass entry doors, or glass partitions? Our trained team of commercial glazing professionals is ready to help you on your next project near the North Texas or Texoma area. No matter how large, give us a call we would be happy to help you plan and design. We aim to exceed your expectations every time!",
      icon: GitCommitVertical,
      
       color: "text-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/30"
    },
    {
      title: "Residential Glass Near Oklahoma City",
      description: "Residential glass not only includes shower doors, but also mirrors and glass tabletops. Starting a new renovation at home can be overwhelming and you may not know where to start. Our experienced team is here to help you with your next project. We will help plan, design and install your next project.",
      icon: MapPin,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30"
    },
    {
      title: "Glass Shower Doors and Enclosures",
      description: "Although clear glass for a shower is standard, there are lots of options available to personalize the glass and design of your shower doors. This could include a frameless, semi-frameless, or framed shower door, as well as the option to add a pattern or texture to the glass. The options for your space are endless and our experienced team is ready to help you create the glass shower of your dreams.",
      icon: DoorClosed,
      color: "text-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-950/30"
    },
    {
      title: "Custom Cut Glass & Mirrors",
      description: "Capitol Glass & Mirror is an experienced and professional glass business in North Texas and Texoma specializing in fabricating and installing custom mirrors for all types of projects near North Texas and Texoma. We can help you create a one-of-a-kind mirror for your home or building project. The options are endless! Our team of glass professionals is fully equipped to make sure you get exactly what you're looking for.",
      icon: GiMirrorMirror,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/30"
     
    },
  ];

  return (
    <section className="py-20 px-6 md:px-8 lg:px-10">
      <div className="mx-auto container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container  mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`p-8 rounded-2xl ${feature.bgColor} border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Fix for marker icon issue in Leaflet
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { FaCheckCircle } from 'react-icons/fa';
import { GiMirrorMirror } from 'react-icons/gi';

const DefaultIcon = L.icon({
  iconUrl: typeof iconUrl === "string" ? iconUrl : (iconUrl as any).src,
  shadowUrl: typeof iconShadow === "string" ? iconShadow : (iconShadow as any).src,
});
L.Marker.prototype.options.icon = DefaultIcon;

// Combined Map and Areas Section
function MapAndAreasSection() {
  const cities = [
    { name: "Lake Texoma", coords: [33.8161, -96.6125] as [number, number] },
    { name: "Sherman", coords: [33.6357, -96.6089] as [number, number] },
    { name: "Denison", coords: [33.7557, -96.5367] as [number, number] },
    { name: "Howe", coords: [33.5084, -96.6169] as [number, number] },
    { name: "Van Alstyne", coords: [33.4215, -96.5775] as [number, number] },
    { name: "Anna", coords: [33.349, -96.5475] as [number, number] },
    { name: "Melissa", coords: [33.2862, -96.5728] as [number, number] },
    { name: "Celina", coords: [33.324, -96.785] as [number, number] },
    { name: "Gunter", coords: [33.4515, -96.7475] as [number, number] },
    { name: "Pottsboro", coords: [33.7776, -96.6711] as [number, number] },
    { name: "Whitesboro", coords: [33.6576, -96.9069] as [number, number] },
    { name: "Gordonville", coords: [33.849, -96.8333] as [number, number] },
    { name: "Sherwood Shores", coords: [33.8548, -96.8194] as [number, number] },
    { name: "Preston", coords: [33.8221, -96.6558] as [number, number] },
    { name: "Tioga", coords: [33.4665, -96.9258] as [number, number] },
    { name: "Collinsville", coords: [33.5615, -96.9122] as [number, number] },
    { name: "Pilot Point", coords: [33.3968, -96.9603] as [number, number] },
    { name: "AND MUCH MORE!", coords: [33.65, -96.7] as [number, number] }, // center placeholder
  ];

  const servicePoints = [
    { name: "Lake Texoma" },
    { name: "Sherman" },
    { name: "Denison" },
    { name: "Howe" },
    { name: "Melissa" },
    { name: "Celina" },
    { name: "Gunter" },
    { name: "Pottsboro" },
    { name: "Gordonville" },
    { name: "Sherwood Shores" },
    { name: "Preston" },
    { name: "Tioga" },
    { name: "Collinsville" },
    { name: "Pilot Point" },
    { name: "much more..!" },
  ];

  const mapCenter: [number, number] = [33.6, -96.7]; // Center around Grayson County area

  return (
    <section className="py-20 px-6 md:px-8 lg:px-10 bg-gradient-to-r from-blue-50 via-indigo-50 to-cyan-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950 relative overflow-hidden">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid dark:bg-grid-dark"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[9] bg-radial-vignette"
      />

      <div className="mx-auto container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">
              Service Area
            </span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We proudly serve customers throughout the Lake Texoma region. Explore the map
            and cities we cover below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Areas Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                We provide custom glass and mirrors to a wide range of locations in {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  North Texas and the Texoma region
                </span> and surrounding communities
              </h3>
              <p className="text-md text-gray-600 dark:text-gray-300">
                We provide professional residential and commercial glass services to many towns and cities in North Texas and the Texoma region. Our service area includes Grayson County, Cooke County, and Collin County. If you're in the following towns or cities and need custom glass or mirrors for a project, give Capitol Glass & Mirror a call:
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                  className="flex items-center gap-2 hover:scale-105 transition-all duration-300"
                >
                  <span className="text-blue-600 text-xl leading-none"><MapPin/></span>
                  <h4 className="text-base font-semibold text-gray-800 dark:text-gray-100">
                    {point.name}
                  </h4>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 h-full min-h-[450px]"
            >
              <MapContainer
                center={mapCenter}
                zoom={9}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%", zIndex: "10" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {cities.map((city, i) => (
                  <Marker key={i} position={city.coords}>
                    <Popup>{city.name}</Popup>
                  </Marker>
                ))}
              </MapContainer>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
function ServicesSection() {
  const services = [
    {
      title: "Residential Glass",
      description: "Residential glass not only includes shower doors, but also mirrors and glass tabletops. Starting a new renovation at home can be overwhelming and you may not know where to start. Our experienced team is here to help you with your next project. We will help plan, design and install your next project.",
      image: "/Invest/Invest3.jpg"
    },
    {
      title: "Commercial Glazing",
      description: "Are you planning construction for a glass storefront, glass entry doors, or glass partitions? Our trained team of commercial glazing professionals is ready to help you on your next project near the North Texas or Texoma area.We aim to exceed your expectations every time! ",
      image: "/Invest/Invest4.jpg"
    },
    {
      title: "Glass Shower Doors and Enclosures",
      description: "Although clear glass for a shower is standard, there are lots of options available to personalize the glass and design of your shower doors. This could include a frameless, semi-frameless, or framed shower door, as well as the option to add a pattern or texture to the glass.",
      image: "/Invest/Invest1.jpg"
    },
    {
      title: "Custom Cut Glass & Mirrors",
      description: "Capitol Glass & Mirror is an experienced and professional glass business in North Texas and Texoma specializing in fabricating and installing custom mirrors for all types of projects near North Texas and Texoma. We can help you create a one-of-a-kind mirror for your home or building project.",
      image: "/Invest/Invest2.jpg"
    },
  ];

  return (
    <section className="py-20 px-6 md:px-8 lg:px-10 bg-gradient-to-r from-blue-50 via-indigo-50 to-cyan-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950">
      <div className="mx-auto container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Glass <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600">Services</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            From residential to commercial projects, we offer comprehensive glass services 
            to enhance your space with quality and style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  quality={90}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
