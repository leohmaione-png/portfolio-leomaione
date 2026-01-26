"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { GripVertical } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

export function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  beforeAlt = "Before", 
  afterAlt = "After", 
  className 
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (isResizing && containerRef.current) {
        const { left, width } = containerRef.current.getBoundingClientRect();
        const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
        
        let newX = clientX - left;
        
        // Constrain to container
        if (newX < 0) newX = 0;
        if (newX > width) newX = width;

        const newPercentage = (newX / width) * 100;
        setSliderPosition(newPercentage);
      }
    },
    [isResizing]
  );

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', resize);
      window.addEventListener('touchmove', resize);
      window.addEventListener('mouseup', stopResizing);
      window.addEventListener('touchend', stopResizing);
    }

    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('touchmove', resize);
      window.removeEventListener('mouseup', stopResizing);
      window.removeEventListener('touchend', stopResizing);
    };
  }, [isResizing, resize, stopResizing]);

  return (
    <div className={cn("w-full py-16", className)}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-1 md:col-start-2 md:col-span-10">
            <div 
                ref={containerRef}
                className="relative w-full aspect-video select-none overflow-hidden cursor-ew-resize group"
                onMouseDown={startResizing}
                onTouchStart={startResizing}
            >
                {/* BEFORE Image (Underneath) - Actually visible on the LEFT side of slider if we clip the After image? 
                    Standard pattern:
                    - Image A (Base)
                    - Image B (Overlay, clipped)
                    
                    Let's say After is Base (Right), Before is Overlay (Left).
                    Clip-path inset(0 0 0 X) clips from left.
                    Clip-path inset(0 X 0 0) clips from right.
                */}
                
                {/* After Image (Right side visible primarily if slider is left) - Base Layer */}
                <div className="absolute inset-0 w-full h-full">
                     <Image
                        src={afterImage}
                        alt={afterAlt}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 text-sm font-medium rounded">
                        After
                    </div>
                </div>

                {/* Before Image (Left side visible) - Clipped Layer */}
                <div 
                    className="absolute inset-0 w-full h-full overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <Image
                        src={beforeImage}
                        alt={beforeAlt}
                        fill
                        className="object-cover"
                        priority
                    />
                     <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 text-sm font-medium rounded">
                        Before
                    </div>
                </div>

                {/* Slider Handle */}
                <div 
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-neutral-800">
                        <GripVertical size={20} />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
