import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ProjectNavigationProps {
  nextProject: {
    slug: string;
    title: string;
    company: string;
  };
  className?: string;
}

export function ProjectNavigation({ nextProject, className }: ProjectNavigationProps) {
  if (!nextProject) return null;

  return (
    <div className={cn("border-t border-neutral-200 mt-20 pt-20 pb-32", className)}>
      <Link href={`/work/${nextProject.slug}`} className="group block">
        <span className="block font-sans text-sm text-neutral-500 mb-4">
          Next Project
        </span>
        <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
                <span className="text-[32px] md:text-[40px] font-sans text-[#212121] group-hover:text-blue-600 transition-colors">
                {nextProject.title}
                </span>
                <span className="text-lg text-neutral-500">{nextProject.company}</span>
            </div>
            <ArrowRight className="w-12 h-12 text-[#212121] group-hover:translate-x-4 transition-transform duration-300" />
        </div>
      </Link>
    </div>
  );
}
