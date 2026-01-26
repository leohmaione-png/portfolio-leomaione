import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ActionIcon } from "./ActionIcon";

interface CardPortfolioProps {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  href?: string;
  className?: string;
}

export function CardPortfolio({
  title,
  imageSrc,
  imageAlt = "Project Image",
  href = "#",
  className,
}: CardPortfolioProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col w-full gap-6 cursor-pointer",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden rounded-[5px] bg-neutral-200">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Title Row */}
      <div className="flex items-center justify-between gap-4">
        {/* Title: AppleGothic (Sans), 24px, Normal Weight */}
        <h3 className="font-apple-gothic font-normal text-[24px] leading-relaxed text-[#212121] group-hover:text-[#281EDF] transition-colors duration-200">
          {title}
        </h3>
        
        {/* Action Icon: 56px height from Figma */}
        <ActionIcon variant="ghost" />
      </div>
    </Link>
  );
}
