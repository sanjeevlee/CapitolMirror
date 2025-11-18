"use client";

import React from "react";
import ShowerHeroSection from "./Glassshower/ShowerHerosection";
import GlassFeatures from "./Glassshower/ShowerFeatures";
import ShowerMission from "./Glassshower/ShowerMission";

export default function GlassShowerDoors() {
 return (
  <div className="flex flex-col">
   <ShowerHeroSection />
   <ShowerMission />
   <GlassFeatures />
  </div>
 );
}
