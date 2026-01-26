import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectHeroProps {
  title: string;
  subtitle?: string;
  heroImageSrc?: string;
  className?: string;
}

export function ProjectHero({ title, subtitle, heroImageSrc, className }: ProjectHeroProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-6 mb-[100px]">
        {/* Title & Subtitle Container taking 10 cols centered or starting from col 2 */}
        <div className="col-span-1 md:col-start-2 md:col-span-10 flex flex-col">
          <h1 className="font-apple-gothic text-[96px] lg:text-[156px] leading-[0.95] tracking-tight text-[#212121]">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-[125px] font-serif text-[28px] leading-[1.3] text-[#212121] w-full md:max-w-[80%]">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Hero Image - Full Bleed (Edge to Edge) */}
      <div className="w-full relative aspect-[2.16/1] mb-64 bg-neutral-100 overflow-hidden">
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
      </div>
    </div>
  );
}
