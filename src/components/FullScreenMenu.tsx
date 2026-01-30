"use client";

import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.3, ease: "easeOut" } as const
  },
  exit: { 
    opacity: 0, 
    transition: { duration: 0.2, ease: "easeIn" } as const
  }
};

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.1, duration: 0.4, ease: "easeOut" } as const
  })
};

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Medium", href: "https://medium.com/@leomaione", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leandromaione/", external: true },
  { label: "Courses", href: "#", disabled: true },
];

import { createPortal } from "react-dom";

// ... (existing imports)

export function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
           className="fixed inset-0 z-[9999] bg-[rgba(250,250,250,0.85)] backdrop-blur-md flex flex-col px-6 pt-9"
           initial="hidden"
           animate="visible"
           exit="exit"
           variants={menuVariants}
        >
          {/* ... existing header and nav content ... */}
          {/* Header: Logo + Close */}
          <div className="w-full flex items-center justify-between mb-24">
            <Logo variant="default" mode="mobile" className="h-[40px]" />
            
            <button 
              onClick={onClose}
              className="flex items-center gap-2 font-sans text-[16px] text-[#212121]"
            >
              <span>Fechar</span>
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-6 mt-auto pb-12">
            {NAV_ITEMS.map((item, i) => {
              const isActive = item.href === "/" 
                ? pathname === "/"
                : pathname.startsWith(item.href) && item.href !== "#";
                
              const isExternal = item.external;

              return (
                <motion.div
                  key={item.label}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-full border-b border-neutral-200 pb-6 last:border-0"
                >
                  {item.href === "#" ? (
                      <span className="font-apple-gothic text-[32px] text-neutral-300 cursor-not-allowed">
                          {item.label}
                      </span>
                  ) : (
                    <Link
                        href={item.href}
                        onClick={onClose}
                        target={isExternal ? "_blank" : undefined}
                        className={cn(
                        "font-apple-gothic text-[32px] block",
                        isActive ? "text-[#281EDF]" : "text-[#212121]"
                        )}
                    >
                        {item.label}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
