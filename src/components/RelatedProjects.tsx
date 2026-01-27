import React from 'react';
import Link from 'next/link';
import { WorkSectionHeader } from './WorkSectionHeader';
import { ActionIcon } from './ActionIcon';
import { cn } from '@/lib/utils';

interface ProjectSummary {
  slug: string;
  title: string;
  index: number; // 1-based index relevant to the company sequence
}

interface RelatedProjectsProps {
  companyName: string;
  companyIcon: string;
  projects: ProjectSummary[];
  className?: string;
}

export function RelatedProjects({ companyName, companyIcon, projects, className }: RelatedProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className={cn("w-full py-24 mt-24", className)}>
        {/* Header: Icon + Breadcrumb */}
        {/* Header: Reuse WorkSectionHeader but without Case Number */}
        <WorkSectionHeader 
            brandName={companyName}
            brandIconSrc={companyIcon}
            className="px-0 py-0 lg:px-0 mb-12 max-w-none"
        />

        {/* Project List */}
        <div className="flex flex-col">
            {projects.map((project) => (
                <Link 
                    key={project.slug} 
                    href={`/work/${project.slug}`}
                    className="group border-t border-neutral-200 py-10 flex items-center justify-between hover:bg-neutral-50 transition-colors px-4 -mx-4"
                >
                    <div className="flex items-center gap-12">
                        {/* Number */}
                        <span className="font-serif text-[96px] leading-[1] text-[#212121]">
                            {String(project.index).padStart(2, '0')}
                        </span>
                        
                        {/* Title - Break after first word */}
                        <span className="font-apple-gothic text-[36px] leading-[1.1] text-[#212121] max-w-lg pt-4">
                            {(() => {
                                const [first, ...rest] = project.title.split(' ');
                                return (
                                    <>
                                        {first}
                                        {rest.length > 0 && <br />}
                                        {rest.join(' ')}
                                    </>
                                );
                            })()}
                        </span>
                    </div>

                    {/* Arrow Button */}
                    <ActionIcon variant="ghost" />
                </Link>
            ))}
        </div>
    </div>
  );
}
