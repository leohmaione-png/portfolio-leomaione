"use client";

import React from "react";
// MenuLink uses <a>. For Next.js navigation we usually want Link. But let's stick to usePathname for logic first.
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { MenuLink } from "@/components/MenuLink";
import { cn } from "@/lib/utils";

interface HeaderHomeDesktopProps {
  className?: string;
}

export function HeaderHomeDesktop({ className }: HeaderHomeDesktopProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  // Work is active if we are on /work or any subpath like /work/project-slug
  const isWork = pathname.startsWith("/work");

  return (
    <header className={cn("w-full py-9 px-48", className)}>
      <div className="w-full max-w-[1356px] mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
           <Logo variant="default" className="h-[44px]" />
        </div>

        {/* Right Side: Navigation Links */}
        <nav className="flex items-center gap-6">
           <MenuLink 
              href="/" 
              variant={isHome ? "serif-label" : "default"}
              active={isHome}
            >
              Home
            </MenuLink>
           <MenuLink 
              href="/work" 
              variant={isWork ? "serif-label" : "default"}
              active={isWork}
            >
              Work
            </MenuLink>
           <MenuLink href="https://medium.com/@leomaione" target="_blank">Medium</MenuLink>
           <MenuLink href="https://www.linkedin.com/in/leandromaione/" target="_blank">LinkedIn</MenuLink>
           <MenuLink href="#" disabled>Courses</MenuLink>
        </nav>
      </div>
    </header>
  );
}
