import React from "react";
import { cn } from "@/lib/utils";
import { ActionIcon } from "./ActionIcon";

export interface ProjectListItemProps {
  index: string;
  name: string;
  href?: string;
  className?: string;
}

export function ProjectListItem({
  index,
  name,
  href = "#",
  className,
}: ProjectListItemProps) {
  return (
    <a
      href={href}
      className={cn(
        "group flex items-center justify-between w-full py-6 border-b border-[#212121] bg-[#FAFAFA] hover:bg-[#FAFAFA] transition-colors duration-200 cursor-pointer",
        className
      )}
    >
      <div className="flex items-center gap-6 md:gap-10">
        {/* Index - Serif */}
        <span className="font-serif text-[48px] md:text-[60px] leading-none text-[#212121] group-hover:text-[#281EDF] transition-colors duration-200">
          {index}
        </span>

        {/* Project Name - Serif */}
        <h3 className="font-serif text-[36px] md:text-[48px] leading-tight text-[#212121] group-hover:text-[#281EDF] transition-colors duration-200">
          {name}
        </h3>
      </div>

      {/* Action Icon */}
      <ActionIcon 
        variant="ghost" 
        className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14"
      />
    </a>
  );
}
