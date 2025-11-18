"use client";

import React, { useEffect } from "react";
import FramedHeroSection from "./Framed&FramelessGlass/FramedHeroSection";
import TelematicsCards from "./Framed&FramelessGlass/telematicsSolutions";
import TestimonialSection from "./Framed&FramelessGlass/TestimonialSection";

export default function FramedFramelessGlass() {
 return (
  <div className="flex flex-col px-4 sm:px-6">
   <FramedHeroSection />
   <TestimonialSection />
   <TelematicsCards />
  </div>
 );
}
