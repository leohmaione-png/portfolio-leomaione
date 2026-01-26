import React from "react";
import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const actionIconVariants = cva(
  "flex items-center justify-center rounded-full transition-all duration-200 border",
  {
    variants: {
      variant: {
        outline: "border-[#212121] bg-transparent text-[#212121]",
        "solid-blue": "border-[#281EDF] bg-[#281EDF] text-white",
        "solid-white": "border-white bg-white text-[#212121]",
        // A special variant that acts as Outline but reacts to group-hover
        ghost: "border-[#212121] bg-transparent text-[#212121] group-hover:bg-[#281EDF] group-hover:border-[#281EDF] group-hover:text-white"
      },
      size: {
        default: "w-[56px] h-[56px]",
        sm: "w-12 h-12",
        lg: "w-[64px] h-[64px]",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  }
);

export interface ActionIconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof actionIconVariants> {
  as?: React.ElementType; // allow 'button' or 'div'
}

export function ActionIcon({
  className,
  variant,
  size,
  as: Component = "div",
  ...props
}: ActionIconProps) {
  return (
    <Component
      className={cn(actionIconVariants({ variant, size, className }))}
      {...props}
    >
      <ArrowRight className="w-6 h-6" />
    </Component>
  );
}
