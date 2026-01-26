import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselNavProps {
  onPrev: () => void;
  onNext: () => void;
  disabledPrev?: boolean;
  disabledNext?: boolean;
  className?: string;
}

export function CarouselNav({ 
  onPrev, 
  onNext, 
  disabledPrev, 
  disabledNext, 
  className 
}: CarouselNavProps) {
  return (
    <div className={cn("flex items-center gap-[40px]", className)}>
      <button
        onClick={onPrev}
        disabled={disabledPrev}
        className={cn(
            "group flex items-center justify-center w-10 h-10 rounded-full transition-colors",
            disabledPrev 
                ? "text-neutral-200 cursor-not-allowed" 
                : "text-[#212121] hover:bg-neutral-100 cursor-pointer"
        )}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 transition-colors" />
      </button>
      <button
        onClick={onNext}
        disabled={disabledNext}
        className={cn(
            "group flex items-center justify-center w-10 h-10 rounded-full transition-colors",
            disabledNext 
                ? "text-neutral-200 cursor-not-allowed" 
                : "text-[#212121] hover:bg-neutral-100 cursor-pointer"
        )}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 transition-colors" />
      </button>
    </div>
  );
}
