import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HighlightBlockProps {
  label?: string;
  title: string;
  image: string;
  alt?: string;
  caption?: string;
  className?: string;
}

export function HighlightBlock({ label, title, image, alt, caption, className }: HighlightBlockProps) {
  return (
    <div className={cn("w-full pb-32 pt-[68px]", className)}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-1 md:col-start-2 md:col-span-10 flex flex-col">
          
          {/* Label / Supertitle */}
          {label && (
             <span className="font-serif text-[20px] leading-[1.6] text-[#212121] mb-6 block">
               {label}
             </span>
          )}

          {/* Title */}
          <h2 className="font-apple-gothic text-[48px] leading-[1.1] text-[#212121] mb-[64px]">
            {title}
          </h2>

          {/* Image */}
          <div className="w-full relative mb-4">
            <Image
                src={image}
                alt={alt || title}
                width={1356}
                height={800}
                className="w-full h-auto"
            />
          </div>

          {/* Caption */}
          {caption && (
             <p className="font-serif text-[16px] leading-[1.6] text-[#212121] text-center mt-8 w-full">
               {caption}
             </p>
          )}

        </div>
      </div>
    </div>
  );
}
