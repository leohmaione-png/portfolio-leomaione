"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProjectHeroProps {
  title: string;
  subtitle?: string;
  heroImageSrc?: string;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Title -> Subtitle -> Image
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

export function ProjectHero({ title, subtitle, heroImageSrc, className }: ProjectHeroProps) {
  return (
    <motion.div 
        className={cn("w-full", className)}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-6 mb-[72px] md:mb-[100px]">
        {/* Title & Subtitle Container taking 10 cols centered or starting from col 2 */}
        <div className="col-span-1 md:col-start-2 md:col-span-10 flex flex-col">
          <motion.h1 
            variants={itemVariants}
            className="font-apple-gothic text-[64px] md:text-[96px] lg:text-[156px] leading-[0.95] tracking-tight text-[#212121]"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p 
                variants={itemVariants}
                className="mt-[32px] md:mt-[125px] font-serif text-[20px] md:text-[28px] leading-[1.3] text-[#212121] w-full md:max-w-[80%]"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>

      {/* Hero Image - Full Bleed (Edge to Edge) */}
      <motion.div 
        variants={itemVariants}
        className="w-full relative aspect-[403/571] md:aspect-[2.16/1] mb-[56px] md:mb-64 bg-neutral-100 overflow-hidden"
      >
        {heroImageSrc ? (
          <Image
            src={heroImageSrc}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            unoptimized
          />
        ) : null}
      </motion.div>
    </motion.div>
  );
}

