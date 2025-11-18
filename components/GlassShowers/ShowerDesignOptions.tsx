"use client";

import React from "react";
import CustomShower from "./Customshower/CustomshowerHero";
import CustomBenefits from "./Customshower/CustomBenefits";
import InfoSection from "./Customshower/InfoSection";

export default function ShowerDesignOptions() {
 return (
  <div className="flex flex-col">
   <CustomShower />
   <CustomBenefits />
   <InfoSection />
  </div>
 );
}
