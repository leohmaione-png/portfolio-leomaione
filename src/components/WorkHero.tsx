"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } as const
  },
};

export function WorkHero() {
  return (
    <motion.div 
      className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-[150px] grid grid-cols-1 md:grid-cols-12 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
       <div className="col-span-1 md:col-start-2 md:col-span-10">
          <motion.h1 
            className="font-apple-gothic font-normal text-[64px] md:text-[96px] lg:text-[156px] leading-[0.95] text-[#212121] tracking-tight"
            variants={itemVariants}
          >
              Featured <br />
              Work
          </motion.h1>
       </div>
    </motion.div>
  );
}
