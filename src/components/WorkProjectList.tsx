import React from "react";
import { WorkProjectGroup } from "./WorkProjectGroup";
import { ProjectGroupData } from "@/utils/keystatic";

interface WorkProjectListProps {
  groups: ProjectGroupData[];
}

export function WorkProjectList({ groups }: WorkProjectListProps) {
  let globalIndex = 0;

  return (
    <div className="flex flex-col w-full max-w-[1356px] mx-auto px-6 md:px-24 lg:px-48 pb-32 gap-[100px]">
      {groups.map((group) => {
        const startIndex = globalIndex;
        globalIndex += group.projects.length;
        
        return (
          <WorkProjectGroup 
              key={group.company}
              company={group.company}
              icon={group.icon}
              projects={group.projects}
              startIndex={startIndex}
          />
        );
      })}
    </div>
  );
}
