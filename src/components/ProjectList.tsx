import React from "react";
import { ProjectGroup } from "./ProjectGroup";
import { ProjectGroupData } from "@/utils/keystatic";

interface ProjectListProps {
  groups: ProjectGroupData[];
}

export function ProjectList({ groups }: ProjectListProps) {
  return (
    <div className="flex flex-col w-full gap-[140px]">
      {groups.map((group) => (
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
