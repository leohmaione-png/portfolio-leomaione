import React from 'react';
import { cn } from '@/lib/utils';

interface ProjectDetailedHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export function ProjectDetailedHeader({ label, title, className }: ProjectDetailedHeaderProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-12 gap-6 w-full mb-12", className)}>
       <div className="col-span-1 md:col-span-12 flex flex-col gap-4">
          {label && (
             <span className="font-serif text-[20px] leading-[1.4] text-[#212121]">
                {label}
             </span>
          )}
          <h2 className="font-apple-gothic text-[48px] md:text-[60px] leading-[1.06] -tracking-[0.05em] text-[#212121]">
             {title}
          </h2>
       </div>
    </div>
  );
}
