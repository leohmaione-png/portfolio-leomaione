import React from "react";
import { cn } from "@/lib/utils";

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex w-full overflow-x-auto snap-x snap-mandatory gap-32 px-0 scrollbar-none",
          className
        )}
        style={{
          // Hide scrollbar for Chrome/Safari/Opera
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        {...props}
      >
        {/* Style tag to ensure hiding works across browsers if inline styles fail specific pseudoselectors */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            div::-webkit-scrollbar {
                display: none;
            }
        `,
          }}
        />
        {children}
      </div>
    );
  }
);
Carousel.displayName = "Carousel";

export interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CarouselItem({ children, className, ...props }: CarouselItemProps) {
  return (
    <div
      className={cn("flex-shrink-0 snap-start", className)}
      {...props}
    >
      {children}
    </div>
  );
}
