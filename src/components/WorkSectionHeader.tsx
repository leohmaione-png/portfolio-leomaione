import React from "react";
import { LinktreeContainer } from "./LinktreeContainer";
import { Brand } from "./Brand";
import { cn } from "@/lib/utils";

interface WorkSectionHeaderProps {
    brandName?: string;
    brandIconSrc?: string | null;
    caseName?: string;
    className?: string;
    action?: React.ReactNode;
}

export function WorkSectionHeader({ brandName, brandIconSrc, caseName, className, action }: WorkSectionHeaderProps) {
  return (
    <div className={cn("flex w-full max-w-[1356px] items-center mx-auto py-8 px-24 lg:px-48", className)}>
      {/* Brand Icon (Itaú / Client) */}
      <Brand alt={brandName} src={brandIconSrc} className="w-20 h-20" />

      <div className="ml-auto">
        {action ? (
            action
        ) : (
            <LinktreeContainer 
                rootLabel="Work" 
                brandLabel={brandName} 
                caseLabel={caseName} 
            />
        )}
      </div>
    </div>
  );
}
