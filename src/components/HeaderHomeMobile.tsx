import React from "react";
import { Logo } from "@/components/Logo";
import { Menu } from "@/components/Menu";
import { cn } from "@/lib/utils";

interface HeaderHomeMobileProps {
  className?: string;
}

export function HeaderHomeMobile({ className }: HeaderHomeMobileProps) {
  return (
    <header className={cn("w-full py-9 px-24", className)}>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
           <Logo variant="default" mode="mobile" className="h-12" />
        </div>

        {/* Right Side: Menu Trigger */}
        <div className="flex items-center">
           <Menu />
        </div>
      </div>
    </header>
  );
}
