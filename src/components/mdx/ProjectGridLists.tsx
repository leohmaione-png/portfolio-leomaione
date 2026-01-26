import React from 'react';
import { cn } from '@/lib/utils';

interface GridListColumn {
  title: string;
  items: string[];
}

interface ProjectGridListsProps {
  columns: GridListColumn[];
  className?: string;
}

export function ProjectGridLists({ columns, className }: ProjectGridListsProps) {
  return (
    <div className={cn("w-full py-32", className)}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-1 md:col-start-2 md:col-span-10 flex flex-col gap-64">
          {columns.map((col, index) => (
            <div key={index} className="flex flex-col gap-16">
              <h3 className="font-apple-gothic text-[28px] leading-[1.28] text-[#212121]">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.items.map((item, i) => (
                  <li key={i} className="font-serif text-[20px] leading-[1.6] text-[#212121] flex items-start">
                      <span className="mr-3">•</span>
                      <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
