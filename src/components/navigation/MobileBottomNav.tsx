"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  TerminalNavIcon,
  DataObjectNavIcon,
  FolderCodeNavIcon,
  WorkHistoryNavIcon,
  SendPlaneIcon,
} from "@/components/icons/StitchMobileIcons";

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { id: "mobile-home", label: "INDEX", href: "#mobile-home", icon: TerminalNavIcon },
  { id: "mobile-projects", label: "BUILDS", href: "#mobile-projects", icon: FolderCodeNavIcon },
  { id: "mobile-skills", label: "STACK", href: "#mobile-skills", icon: DataObjectNavIcon },
  { id: "mobile-experience", label: "CAREER", href: "#mobile-experience", icon: WorkHistoryNavIcon },
  { id: "mobile-contact", label: "CONNECT", href: "#mobile-contact", icon: SendPlaneIcon },
];

export function MobileBottomNav() {
  const [activeItem, setActiveItem] = React.useState("mobile-home");

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveItem(navItems[navItems.length - 1].id);
        return;
      }

      const threshold = 140;
      let currentActive = navItems[0].id;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            currentActive = item.id;
          }
        }
      }
      setActiveItem(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = href.replace(/^#/, "");
    const el = document.getElementById(target);
    if (el) {
      const navOffset = 60;
      const y = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      setActiveItem(target);
    }
  };

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#0F131D]/95 backdrop-blur-md border-t border-[rgba(255,255,255,0.08)] px-2 py-1.5 pb-[calc(0.375rem+env(safe-area-inset-bottom))]"
      aria-label="Mobile bottom navigation"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 py-1 px-3 rounded transition-colors duration-150 min-w-[56px]",
                isActive ? "text-[#00D7F4]" : "text-[#8B90A0] hover:text-[#DFE2F1]"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className={cn("size-5 transition-transform", isActive && "scale-110")} />
              <span className="text-[10px] font-mono tracking-[0.05em] uppercase font-semibold leading-none">
                {item.label}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-[#00D7F4] -mt-0.5 shadow-[0_0_6px_#00D7F4]" />
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
