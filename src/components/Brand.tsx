import React from "react";
import { cn } from "@/lib/utils";

interface BrandProps {
  className?: string;
  src?: string | null;
  alt?: string;
}

export function Brand({
  className,
  src: srcProp,
  alt = "Brand Logo",
}: BrandProps) {
  const src = srcProp || "/icons/brand.svg";
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
