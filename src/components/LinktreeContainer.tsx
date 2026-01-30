import React from "react";
import { Linktree } from "./Linktree";

interface LinktreeContainerProps {
  rootLabel?: string;
  brandLabel?: string;
  caseLabel?: string;
}

export function LinktreeContainer({
  rootLabel = "Work",
  brandLabel,
  caseLabel,
}: LinktreeContainerProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Level 1: Root (Work) */}
      <Linktree state="active">{rootLabel}</Linktree>
      
      {/* Separator 1 */}
      {brandLabel && (
        <>
            <span className="font-serif text-[#212121] select-none text-[14px] md:text-display-md">
                {"//"}
            </span>
            {/* Level 2: Brand */}
            <Linktree state={caseLabel ? "active" : "selected"}>{brandLabel}</Linktree>
        </>
      )}

      {/* Separator 2 */}
      {caseLabel && (
        <>
            <span className="font-serif text-[#212121] select-none text-[14px] md:text-display-md">
                {"//"}
            </span>
            {/* Level 3: Case */}
            <Linktree state="selected">{caseLabel}</Linktree>
        </>
      )}
    </div>
  );
}
