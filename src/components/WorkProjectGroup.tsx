import React from 'react';
import Link from 'next/link';
import { WorkSectionHeader } from './WorkSectionHeader';
import { ActionIcon } from './ActionIcon';
import { cn } from '@/lib/utils';
import { Project } from '@/data/projects'; // Assuming Project interface is exported or I redefine simplified one

interface WorkProjectGroupProps {
  company: string;
  icon: string;
  projects: { id: string; title: string, index?: number }[]; // Need index for the number
  startIndex: number; // To calculate index globally or relative to group? RelatedProjects uses relative? No, usually 01, 02.
}

export function WorkProjectGroup({ company, icon, projects, startIndex }: WorkProjectGroupProps) {
  return (
    <div className="w-full">
        {/* Header: Work // Company */}
        <WorkSectionHeader 
            brandName={company}
            brandIconSrc={icon}
            className="px-0 py-0 lg:px-0 mb-12 max-w-none"
        />

        {/* Vertical List */}
        <div className="flex flex-col">
            {projects.map((project, i) => (
                <Link 
                    key={project.id} 
                    href={`/work/${project.id}`}
                    className="group border-t border-neutral-200 py-10 flex items-center justify-between hover:bg-neutral-50 transition-colors px-4 -mx-4"
                >
                    <div className="flex items-center gap-12">
                        {/* Number */}
                        <span className="font-serif text-[64px] md:text-[96px] leading-[1] text-[#212121]">
                            {String(startIndex + i + 1).padStart(2, '0')}
                        </span>
                        
                        {/* Title */}
                         <span className="font-apple-gothic text-[24px] md:text-[36px] leading-[1.1] text-[#212121] max-w-lg pt-4">
                            {(() => {
                                const words = project.title.split(' ');
                                if (words.length > 1) {
                                  return (
                                    <>
                                      {words[0]}
                                      <br />
                                      {words.slice(1).join(' ')}
                                    </>
                                  );
                                }
                                return project.title;
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
