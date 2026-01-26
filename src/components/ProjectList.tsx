import React from "react";
import { ProjectGroup } from "./ProjectGroup";
import { PROJECTS_DATA } from "@/data/projects";

export function ProjectList() {
  return (
    <div className="flex flex-col w-full gap-[140px]">
      {PROJECTS_DATA.map((group) => (
        <ProjectGroup 
            key={group.company}
            company={group.company}
            icon={group.icon}
            projects={group.projects}
        />
      ))}
    </div>
  );
}
