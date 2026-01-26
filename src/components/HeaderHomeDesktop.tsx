import React from "react";
import { Logo } from "@/components/Logo";
import { MenuLink } from "@/components/MenuLink";
import { cn } from "@/lib/utils";

interface HeaderHomeDesktopProps {
  className?: string;
}

export function HeaderHomeDesktop({ className }: HeaderHomeDesktopProps) {
  return (
    <header className={cn("w-full py-9 px-48", className)}>
      <div className="w-full max-w-[1356px] mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
           <Logo variant="default" className="h-[44px]" />
        </div>

        {/* Right Side: Navigation Links */}
        <nav className="flex items-center gap-6">
           <MenuLink href="/" variant="serif-label">Home</MenuLink>
           <MenuLink href="/work">Work</MenuLink>
           <MenuLink href="https://medium.com" target="_blank">Medium</MenuLink>
           <MenuLink href="https://linkedin.com" target="_blank">LinkedIn</MenuLink>
           <MenuLink href="#" disabled>Courses</MenuLink>
        </nav>
      </div>
    </header>
  );
}
