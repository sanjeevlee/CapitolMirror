"use client";

import { motion } from "framer-motion";

interface AboutProps {
 subPage?: string;
}

export function About({ subPage }: AboutProps) {
 return (
  <div className="min-h-screen bg-gradient-to-br from-background to-muted">
   <div className="container mx-auto px-4 py-16">
    <div className="max-w-4xl mx-auto">
     <motion.h1
      className="text-4xl font-bold text-foreground mb-8 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
     >
      About Capitol Glass OK
     </motion.h1>

     <motion.div
      className="grid md:grid-cols-2 gap-12 items-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
     >
      <motion.div
       initial={{ opacity: 0, x: -30 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
       <h2 className="text-2xl font-semibold text-foreground mb-4">Our Story</h2>
       <p className="text-muted-foreground mb-4">
        For over two decades, Capitol Glass OK has been Oklahoma's premier glass solution provider.
        We've built our reputation on quality craftsmanship, exceptional customer service, and
        innovative glass solutions that meet the unique needs of our community.
       </p>
       <p className="text-muted-foreground">
        From residential window replacements to large-scale commercial projects, we bring
        expertise, reliability, and attention to detail to every job we undertake.
       </p>
      </motion.div>
      <motion.div
       className="bg-card rounded-lg p-6 shadow-lg"
       initial={{ opacity: 0, x: 30 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
       whileHover={{ y: -5, scale: 1.02 }}
      >
       <h3 className="text-xl font-semibold text-card-foreground mb-4">Why Choose Us?</h3>
       <ul className="space-y-3 text-muted-foreground">
        <motion.li
         className="flex items-center"
         initial={{ opacity: 0, x: -20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5, delay: 0.8 }}
        >
         <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
         20+ years of experience
        </motion.li>
        <motion.li
         className="flex items-center"
         initial={{ opacity: 0, x: -20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5, delay: 0.9 }}
        >
         <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
         Licensed and insured
        </motion.li>
        <motion.li
         className="flex items-center"
         initial={{ opacity: 0, x: -20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5, delay: 1.0 }}
        >
         <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
         Free estimates
        </motion.li>
        <motion.li
         className="flex items-center"
         initial={{ opacity: 0, x: -20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5, delay: 1.1 }}
        >
         <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
         24/7 emergency service
        </motion.li>
        <motion.li
         className="flex items-center"
         initial={{ opacity: 0, x: -20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5, delay: 1.2 }}
        >
         <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
         Quality guarantee
        </motion.li>
       </ul>
      </motion.div>
     </motion.div>

     <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
     >
      <h2 className="text-2xl font-semibold text-foreground mb-8">Our Mission</h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
       To provide exceptional glass solutions that enhance the beauty, functionality, and
       safety of homes and businesses throughout Oklahoma. We are committed to delivering
       superior craftsmanship, innovative products, and outstanding customer service that
       exceeds expectations.
      </p>
     </motion.div>
    </div>
   </div>
  </div>
 );
}