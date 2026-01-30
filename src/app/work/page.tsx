import React from "react";
import { HeaderHome } from "@/components/HeaderHome";
import { WorkProjectList } from "@/components/WorkProjectList";
import { WorkHero } from "@/components/WorkHero";

import { getProjectsGroupedByCompany } from "@/utils/keystatic";

export default async function WorkPage() {
  const groups = await getProjectsGroupedByCompany();

  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col items-center">
      {/* Header */}
      <HeaderHome className="w-full" />

      {/* Featured Work Title */}
      <WorkHero />

      {/* Projects List (Includes Headers internally) */}
      <div className="w-full">
        <WorkProjectList groups={groups} />
      </div>
    </main>
  );
}
