import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface GridImageProps {
  image: string;
  alt?: string;
  caption?: string;
  className?: string;
}

export function GridImage({ image, alt, caption, className }: GridImageProps) {
  return (
    <div className={cn("w-full py-1", className)}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-1 md:col-start-2 md:col-span-10">
          <div className="w-full relative mb-4">
            <Image
                src={image}
                alt={alt || "Project Image"}
                width={1356}
                height={800}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1356px"
            />
          </div>
          {caption && (
             <p className="font-serif text-[16px] leading-[1.6] text-[#212121] text-center mt-4 w-full">
               {caption}
             </p>
          )}
        </div>
      </div>
    </div>
  );
}
