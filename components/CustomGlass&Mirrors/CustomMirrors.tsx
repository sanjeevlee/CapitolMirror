"use client";
import React from "react";
import HeroTextContent from "./CustomMirrors/HeroTextContent";
import CustomMirrorContent from "./CustomMirrors/CustomMirrorContent";
import MirrorCollection from "./CustomMirrors/MirrorCollection";
import BeveledMirrorSection from "./CustomMirrors/BeveledMirrorSection";
import WineRoomGallery from "./CustomMirrors/WineRoomGallery";

const CustomMirrors = () => {
 return (
  <div className="flex flex-col">
   <HeroTextContent />
   <CustomMirrorContent />
   <WineRoomGallery/>
   <BeveledMirrorSection />
   <MirrorCollection />
  </div>
 );
};

export default CustomMirrors;
