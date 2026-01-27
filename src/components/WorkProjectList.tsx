import React from "react";
import { WorkProjectGroup } from "./WorkProjectGroup";
import { PROJECTS_DATA } from "@/data/projects";

export function WorkProjectList() {
  let globalIndex = 0;

  return (
    <div className="flex flex-col w-full max-w-[1356px] mx-auto px-6 md:px-24 lg:px-48 pb-32 gap-[100px]">
      {PROJECTS_DATA.map((group) => {
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
