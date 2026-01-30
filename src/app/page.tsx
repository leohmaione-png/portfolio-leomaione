import React from "react";
import { HeaderHome } from "@/components/HeaderHome";
import { HeroHome } from "@/components/HeroHome";
import { ProjectList } from "@/components/ProjectList";
import { FadeIn } from "@/components/animations/FadeIn";

import { getProjectsGroupedByCompany } from "@/utils/keystatic";

export default async function Home() {
  const groups = await getProjectsGroupedByCompany();

  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col items-center">
      {/* Header */}
      <HeaderHome className="w-full" />

      {/* Hero Section */}
      <HeroHome />

      {/* Work Section */}
      <section className="w-full pb-32">
        <FadeIn>
            <ProjectList groups={groups} />
        </FadeIn>
      </section>
    </main>
  );
}

