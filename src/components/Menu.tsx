import React from "react";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon } from "lucide-react";

interface MenuProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function Menu({ className, ...props }: MenuProps) {
  return (
    <button
      className={cn(
        "flex items-center gap-3 font-sans text-[16px] text-[#212121] hover:text-[#281EDF] transition-colors duration-200",
        className
      )}
      {...props}
    >
      <span>Menu</span>
      <MenuIcon className="w-6 h-6" />
    </button>
  );
}
