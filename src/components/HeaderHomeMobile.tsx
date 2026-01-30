"use client";

import React from "react";
import { Logo } from "@/components/Logo";
import { Menu } from "@/components/Menu";
import { FullScreenMenu } from "@/components/FullScreenMenu";
import { cn } from "@/lib/utils";

interface HeaderHomeMobileProps {
  className?: string;
}

export function HeaderHomeMobile({ className }: HeaderHomeMobileProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <header className={cn("w-full py-9 px-6", className)}>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
             <Logo variant="default" mode="mobile" className="h-10" />
          </div>

          {/* Right Side: Menu Trigger */}
          <div className="flex items-center">
             <Menu onClick={() => setIsMenuOpen(true)} />
          </div>
        </div>
      </header>

      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
