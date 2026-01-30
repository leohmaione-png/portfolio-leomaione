"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/FadeIn";
import { useInView } from "framer-motion";

interface ProjectVideoProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  caption?: string;
  className?: string;
}

export function ProjectVideo({ 
    src, 
    poster, 
    autoPlay = true, 
    loop = true, 
    muted = true, 
    controls = false, 
    caption, 
    className 
}: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { margin: "200px" });

  useEffect(() => {
    // Optional: Lazy play/pause based on viewport to save resources
    if (autoPlay && videoRef.current) {
        if (isInView) {
            videoRef.current.play().catch(() => {});
        } else {
            videoRef.current.pause();
        }
    }
  }, [isInView, autoPlay]);

  return (
    <div className={cn("w-full py-8", className)}>
        <FadeIn>
            <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
                <div className="col-span-4 md:col-start-2 md:col-span-10">
                    <div className="w-full relative overflow-hidden rounded-[20px] bg-neutral-100">
                        <video
                            ref={videoRef}
                            src={src}
                            poster={poster}
                            autoPlay={autoPlay}
                            loop={loop}
                            muted={muted}
                            playsInline
                            controls={controls}
                            className="w-full h-auto block"
                        />
                    </div>
                    {caption && (
                        <p className="font-serif text-[16px] leading-[1.6] text-[#212121] text-center mt-4 w-full">
                            {caption}
                        </p>
                    )}
                </div>
            </div>
        </FadeIn>
    </div>
  );
}
