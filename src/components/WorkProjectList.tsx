import React from "react";
import { WorkProjectGroup } from "./WorkProjectGroup";
import { ProjectGroupData } from "@/utils/keystatic";
import { FadeIn } from "@/components/animations/FadeIn";

interface WorkProjectListProps {
  groups: ProjectGroupData[];
}

export function WorkProjectList({ groups }: WorkProjectListProps) {
  let globalIndex = 0;

  return (
    <div className="flex flex-col w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-32 gap-[100px]">
      {groups.map((group, index) => {
        const startIndex = globalIndex;
        globalIndex += group.projects.length;
        
        return (
          <FadeIn key={group.company} delay={index * 0.1}>
            <WorkProjectGroup 
                company={group.company}
                icon={group.icon}
                projects={group.projects}
                startIndex={startIndex}
            />
          </FadeIn>
        );
      })}
    </div>
  );
}
