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
    <div className={cn("w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-4 md:grid-cols-12 gap-x-6 items-center py-8", className)}>
      <div className="col-span-4 md:col-start-2 md:col-span-10 flex items-center w-full">
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
    </div>
  );
}
