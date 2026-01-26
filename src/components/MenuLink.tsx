import React from "react";
import { cn } from "@/lib/utils";

interface MenuLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  disabled?: boolean;
  variant?: "default" | "serif-label";
}

export function MenuLink({ className, active, disabled, variant = "default", children, href = "#", ...props }: MenuLinkProps) {
  return (
    <a
      href={disabled ? undefined : href}
      aria-disabled={disabled}
      className={cn(
        "leading-tight transition-colors duration-200 cursor-pointer",
        // Base sizes
        "text-[20px] md:text-[24px]",
        // Variant Styles
        variant === "serif-label" && !disabled
            ? "font-sans text-[#281EDF]" 
            : "font-sans text-[#212121] hover:text-[#281EDF]",
        // Active state
        active && variant === "default" && "text-[#281EDF]",
        // Disabled State
        disabled && "text-neutral-300 pointer-events-none cursor-not-allowed hover:text-neutral-300",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
