import React from 'react';
import { cn } from '@/lib/utils';
import { FadeIn } from '@/components/animations/FadeIn';

interface SectionHeaderProps {
  label?: string;
  title: string;
  className?: string;
}

export function SectionHeader({ label, title, className }: SectionHeaderProps) {
  if (!title) return null;
  
  return (
    <div className={cn("w-full pt-[40px] pb-16 md:pt-[68px] md:pb-32", className)}>
      <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="col-span-1 md:col-start-2 md:col-span-10 flex flex-col">
            
            {/* Label / Supertitle */}
            {label && (
                <span className="font-serif text-[20px] leading-[1.6] text-[#212121] mb-2 md:mb-6 block">
                {label}
                </span>
            )}

            {/* Title */}
            <h2 className="font-apple-gothic text-[32px] md:text-[48px] leading-[1.1] text-[#212121]">
                {title}
            </h2>

            </div>
        </div>
      </FadeIn>
    </div>
  );
}

