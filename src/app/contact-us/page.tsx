'use client'

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export default function page() {
  return (
    <div className="min-h-screen bg-slate-950 ">
    <LampContainer className="" >
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-2 bg-gradient-to-br from-slate-300  to-slate-500 py-4 bg-clip-text text-center text-6xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Contact Us
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-slate-400 text-center text-2xl font-medium tracking-tight md:text-lg"
      >
        We're here to help you with any questions you may have.
  
      </motion.p>
    

    </LampContainer>
    </div>
  );
}
