import React from 'react';
import { cn } from '@/lib/utils';
import { FadeIn } from '@/components/animations/FadeIn';

interface ProjectSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ProjectSection({ title, children, className }: ProjectSectionProps) {
  return (
    <section className={cn("grid grid-cols-1 md:grid-cols-12 gap-8 py-12 md:py-20", className)}>
      <div className="col-span-1 md:col-span-3">
        <FadeIn>
            <h2 className="font-sans text-lg font-medium text-[#212121] sticky top-24">
            {title}
            </h2>
        </FadeIn>
      </div>
      <div className="col-span-1 md:col-span-8 md:col-start-5 prose-custom">
        <FadeIn delay={0.1}>
            {children}
        </FadeIn>
      </div>
    </section>
  );
}

