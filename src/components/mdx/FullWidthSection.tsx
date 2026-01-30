import React from 'react';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';

interface FullWidthSectionProps {
  title?: string;
  image: string;
  alt?: string;
}

export function FullWidthSection({ title, image, alt }: FullWidthSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-20 mt-16 border-t border-neutral-200">
      <div className="col-span-1 md:col-span-12">
        <FadeIn>
            {title && (
                <h2 className="font-apple-gothic text-[48px] leading-[1.1] text-[#212121] mb-[64px] max-w-3xl">
                {title}
                </h2>
            )}
            <Image
            src={image}
            alt={alt || title || "Section Image"}
            width={1356}
            height={800}
            className="w-full h-auto rounded-none"
            />
        </FadeIn>
      </div>
    </div>
  );
}

