"use client";

import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Placeholder data for the brand stack right side
const brands = [
  { name: "Itaú", src: "/icons/itau.png" },
  { name: "PicPay", src: "/icons/picpay.png" },
  { name: "Credito", src: "/icons/bpc.png" }, // Assuming bpc.png corresponds to the 3rd logo
  { name: "Songkick", src: "/icons/songkick.png" },
  { name: "Yieldmaker", src: "/icons/ym.png" },
];

const companies = [
  { name: "Nubank", color: "#8A05BE" },
  { name: "Itau", color: "#ff6200" },
  { name: "PicPay", color: "#21C25E" },
  { name: "BpC", color: "#0055FF" },
  { name: "SongKick", color: "#F80056" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Title -> Subtitle -> Brands
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

export function HeroHome() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % companies.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section 
        className="relative w-full min-h-[65vh] md:min-h-[80vh] flex flex-col justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
    >
      
      {/* Grid Container */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-4 md:grid-cols-12 gap-x-6 h-full items-center relative">
        
        {/* Left Content: Typography - Spans 10 columns on desktop */}
        <div className="col-span-4 md:col-start-2 md:col-span-10 flex flex-col justify-center z-10 selection:bg-[#281EDF] selection:text-white">
            <motion.h1 
                variants={itemVariants}
                className="font-apple-gothic font-normal text-[64px] md:text-[96px] lg:text-[156px] leading-[0.95] text-[#212121] tracking-tight"
            >
                Maione. <br />
                Head of Design
            </motion.h1>
            <motion.div 
                variants={itemVariants}
                className="font-serif text-[20px] lg:text-[32px] text-[#212121] leading-tight mt-12"
            >
                helping companies like{" "}
                <span className="inline-block relative min-w-[120px] md:min-w-[200px] align-top h-[1.2em] overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute left-0 top-0 whitespace-nowrap font-medium"
                            style={{ color: companies[index].color }}
                        >
                            {companies[index].name}
                        </motion.span>
                    </AnimatePresence>
                </span>{" "}
                <br className="hidden lg:block"/>
                transform customer satisfaction into revenue
            </motion.div>
        </div>

        {/* Right Content: Brand Stack - Absolute Right Position */}
        <div className="hidden lg:flex absolute right-48 top-1/2 transform -translate-y-1/2 flex-col gap-6 items-end z-20">
             {brands.map((brand, i) => (
                 <motion.div 
                    key={i} 
                    variants={itemVariants}
                    className="w-[64px] h-[64px] bg-white rounded-[20px] flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300 cursor-default border-none outline-none ring-0 overflow-hidden"
                >
                    <img src={brand.src} alt={brand.name} className="w-full h-full object-contain opacity-100" />
                 </motion.div>
             ))}
        </div>
      </div>

      {/* Bottom: Scroll Indicator */}
      <motion.div 
        variants={itemVariants}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex justify-center"
      >
        <div className="w-12 h-12 rounded-full flex items-center justify-center animate-bounce">
            <ArrowDown className="w-5 h-5 text-[#212121]" />
        </div>
      </motion.div>

    </motion.section>
  );
}
