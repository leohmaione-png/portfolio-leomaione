import React from "react";
import { HeaderHomeDesktop } from "./HeaderHomeDesktop";
import { HeaderHomeMobile } from "./HeaderHomeMobile";
import { cn } from "@/lib/utils";

interface HeaderHomeProps {
  className?: string;
}

export function HeaderHome({ className }: HeaderHomeProps) {
  return (
    <div className={cn("w-full sticky top-0 z-50 bg-[#FAFAFA]/95 backdrop-blur-md", className)}>
      <div className="hidden lg:block">
        <HeaderHomeDesktop />
      </div>
      <div className="block lg:hidden">
        <HeaderHomeMobile />
      </div>
    </div>
  );
}
