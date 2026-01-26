import React from "react";
import { cn } from "@/lib/utils";

interface BrandProps {
  className?: string;
  src?: string;
  alt?: string;
}

export function Brand({
  className,
  src = "/icons/brand.svg", // Default to the main brand icon we downloaded
  alt = "Brand Logo",
}: BrandProps) {
  return (
    <div className={cn("relative w-[52px] h-[52px]", className)}>
       <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-contain"
       />
    </div>
  );
}
