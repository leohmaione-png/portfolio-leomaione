import React from 'react';
import { cn } from '@/lib/utils';

interface StatItem {
  value: string;
  label: string;
  description?: string;
}

interface ProjectStatsProps {
  stats: StatItem[];
  title?: string;
  className?: string;
}

export function ProjectStats({ stats, title, className }: ProjectStatsProps) {
  if (!stats || stats.length === 0) return null;

  return (
    <div className={cn("w-full pt-[68px] pb-32", className)}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-1 md:col-start-2 md:col-span-10">
          {title && (
            <div className="mb-6">
               <h3 className="font-apple-gothic text-[28px] leading-[1.28] text-[#212121]">
                {title}
              </h3>
            </div>
          )}
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-4 md:border-r md:border-neutral-200 md:last:border-r-0 md:px-16 md:first:pl-0 md:last:pr-0">
                <div className="flex items-baseline">
                  <span className="font-inter font-bold text-[80px] md:text-[96px] leading-[0.9] tracking-tighter text-[#212121]">
                    {stat.value.replace(/\D/g, '')}
                  </span>
                  <span className="font-apple-gothic text-[36px] text-[#212121] ml-1">
                    {stat.value.replace(/\d/g, '')}
                  </span>
                </div>
                {stat.label && (
                   <span className="font-serif text-[16px] leading-[1.3] text-[#212121] max-w-[240px] mt-2">
                     {stat.label}
                   </span>
                )}
                 {stat.description && (
                  <p className="font-serif text-sm text-neutral-500 max-w-[150px] mt-1">
                    {stat.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
