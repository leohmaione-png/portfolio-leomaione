import React from "react";
import { HeaderHome } from "@/components/HeaderHome";
import { HeroHome } from "@/components/HeroHome";
import { ProjectList } from "@/components/ProjectList";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col items-center">
      {/* Header */}
      <HeaderHome className="w-full" />

      {/* Hero Section */}
      <HeroHome />

      {/* Work Section */}
      <section className="w-full pb-32">
        <ProjectList />
      </section>
    </main>
  );
}
