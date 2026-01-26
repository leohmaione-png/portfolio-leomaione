import React from "react";
import { icons } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof icons;
  size?: number | string;
}

export function Icon({ name, size = 24, className, ...props }: IconProps) {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    console.warn(`Icon '${name}' not found in lucide-react`);
    return null;
  }

  return <LucideIcon size={size} className={cn(className)} {...props} />;
}
