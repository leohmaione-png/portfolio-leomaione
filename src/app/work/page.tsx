import React from "react";
import { HeaderHome } from "@/components/HeaderHome";
import { WorkProjectList } from "@/components/WorkProjectList";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col items-center">
      {/* Header */}
      <HeaderHome className="w-full" />

      {/* Featured Work Title */}
      <div className="w-full max-w-[1356px] mx-auto px-6 md:px-24 lg:px-48 pt-[180px] pb-[160px]">
         <h1 className="font-apple-gothic font-normal text-[80px] lg:text-[180px] leading-[0.9] text-[#212121] tracking-tighter">
            Featured <br />
            Work
         </h1>
      </div>

      {/* Projects List (Includes Headers internally) */}
      <div className="w-full">
        <WorkProjectList />
      </div>
    </main>
  );
}
