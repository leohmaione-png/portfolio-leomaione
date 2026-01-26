import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

const linktreeVariants = cva(
  "flex items-center justify-center gap-[10px] w-fit font-serif text-display-md transition-colors duration-200",
  {
    variants: {
      state: {
        active: "text-[#212121] hover:text-[#140E89]",
        hover: "text-[#140E89]",
        focus: "text-[#212121] border-b border-black",
        selected: "text-[#281EDF]",
      },
    },
    defaultVariants: {
      state: "active",
    },
  }
);

export interface LinktreeProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linktreeVariants> {
  href?: string;
  children: React.ReactNode;
}

export function Linktree({
  className,
  state,
  href = "#",
  children,
  ...props
}: LinktreeProps) {
  const Comp = href ? Link : "a"; // Use Next.js Link if href is provided

  return (
    <Comp
      href={href}
      className={cn(linktreeVariants({ state, className }))}
      {...props}
    >
      {children}
    </Comp>
  );
}
