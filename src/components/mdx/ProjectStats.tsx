import React from 'react';
import { cn } from '@/lib/utils';
import { FadeIn } from '@/components/animations/FadeIn';

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
    <div className={cn("w-full pt-[24px] md:pt-[68px] pb-32", className)}>
        <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="col-span-1 md:col-start-2 md:col-span-10">
                {title && (
                    <div className="mb-6">
                    <h3 className="font-apple-gothic text-[20px] min-[1365px]:text-[28px] leading-[1.28] text-[#212121]">
                        {title}
                    </h3>
                    </div>
                )}
                
                <div className="grid grid-cols-1 min-[1365px]:grid-cols-5 gap-0">
                    {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col gap-4 py-6 first:pt-0 last:pb-0 border-b border-neutral-200 last:border-b-0 min-[1365px]:py-0 min-[1365px]:border-b-0 min-[1365px]:border-r min-[1365px]:last:border-r-0 min-[1365px]:px-16 min-[1365px]:first:pl-0 min-[1365px]:last:pr-0">
                        <div className="flex items-baseline">
                        <span className="font-inter font-bold text-[64px] min-[1365px]:text-[96px] leading-[0.9] tracking-tighter text-[#212121]">
                            {stat.value.replace(/\D/g, '')}
                        </span>
                        <span className="font-apple-gothic text-[36px] text-[#212121] ml-1">
                            {stat.value.replace(/\d/g, '')}
                        </span>
                        </div>
                        {stat.label && (
                        <span className="font-serif text-[16px] min-[1365px]:text-[20px] leading-[1.3] text-[#212121] max-w-none min-[1365px]:max-w-[240px] mt-2">
                            {stat.label}
                        </span>
                        )}
                        {stat.description && (
                        <p className="font-serif text-[16px] text-neutral-500 max-w-none min-[1365px]:max-w-[150px] mt-1">
                            {stat.description}
                        </p>
                        )}
                    </div>
                    ))}
                </div>
                </div>
            </div>
      </FadeIn>
    </div>
  );
}

