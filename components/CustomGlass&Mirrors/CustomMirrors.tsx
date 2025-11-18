"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Sparkles, Ruler, Shield, Palette, Star } from "lucide-react";
import Image from "next/image";
import HeroTextContent from "./CustomMirrors/HeroTextContent";
import CustomMirrorContent from "./CustomMirrors/CustomMirrorContent";
import MirrorCollection from "./CustomMirrors/MirrorCollection";
import BeveledMirrorSection from "./CustomMirrors/BeveledMirrorSection";

const CustomMirrors = () => {
 return (
  <div className="flex flex-col">
   <HeroTextContent />
   <CustomMirrorContent />
   <BeveledMirrorSection />
   <MirrorCollection />
  </div>
 );
};

export default CustomMirrors;
