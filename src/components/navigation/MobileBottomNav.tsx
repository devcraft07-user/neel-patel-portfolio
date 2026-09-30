"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
function IndexIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 19 15" fill="currentColor">
      <path d="M1.87496 14.9997C1.35934 14.9997 0.917948 14.8161 0.550769 14.4489C0.18359 14.0817 0 13.6403 0 13.1247V1.87496C0 1.35934 0.18359 0.917948 0.550769 0.550769C0.917948 0.18359 1.35934 0 1.87496 0H16.8746C17.3902 0 17.8316 0.18359 18.1988 0.550769C18.566 0.917948 18.7496 1.35934 18.7496 1.87496V13.1247C18.7496 13.6403 18.566 14.0817 18.1988 14.4489C17.3902 14.8161 16.8746 14.9997 16.8746 14.9997H1.87496ZM1.87496 13.1247H16.8746V3.74992H1.87496V13.1247ZM5.15614 12.1872L3.84366 10.8748L6.25767 8.43731L3.82023 5.99987L5.15614 4.6874L8.90605 8.43731L5.15614 12.1872ZM9.37479 12.1872V10.3123H14.9997V12.1872H9.37479Z" />
    </svg>
  );
}

function BuildsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 18" fill="currentColor">
      <path d="M1.90476 13.3333V1.90476V3.80952V8.57143C1.90476 8.57143 1.90476 9.12698 1.90476 10.2381C1.90476 11.3492 1.90476 12.6984 1.90476 14.2857V13.3333ZM1.90476 15.2381C1.38095 15.2381 0.93254 15.0516 0.559524 14.6786C0.186508 14.3056 0 13.8571 0 13.3333V1.90476C0 1.38095 0.186508 0.93254 0.559524 0.559524C0.93254 0.186508 1.38095 0 1.90476 0H7.61905L9.52381 1.90476H17.1429C17.6667 1.90476 18.1151 2.09127 18.4881 2.46429C18.8611 2.8373 19.0476 3.28571 19.0476 3.80952V8.57143H17.1429V3.80952H8.7381L6.83333 1.90476H1.90476V13.3333H6.66667V15.2381H1.90476ZM12 17.7143L8.57143 14.2857L12 10.8571L13.3333 12.2143L11.2619 14.2857L13.3333 16.3571L12 17.7143ZM16.5714 17.7143L15.2381 16.3571L17.3095 14.2857L15.2381 12.2143L16.5714 10.8571L20 14.2857L16.5714 17.7143Z" />
    </svg>
  );
}

function StackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 19 15" fill="currentColor">
      <path d="M11.2498 14.9997V13.1247H14.0622C14.3278 13.1247 14.5505 13.0349 14.7301 12.8552C14.9098 12.6755 14.9997 12.4528 14.9997 12.1872V10.3123C14.9997 9.71853 15.1715 9.17948 15.5153 8.69512C15.859 8.21076 16.3121 7.86701 16.8746 7.66389V7.33577C16.3121 7.13265 15.859 6.78891 15.5153 6.30455C15.1715 5.82018 14.9997 5.28113 14.9997 4.6874V2.81244C14.9997 2.54682 14.9098 2.32417 14.7301 2.14448C14.5505 1.9648 14.3278 1.87496 14.0622 1.87496H11.2498V0H14.0622C14.8434 0 15.5075 0.273431 16.0543 0.820294C16.6012 1.36716 16.8746 2.0312 16.8746 2.81244V4.6874C16.8746 4.95302 16.9645 5.17567 17.1442 5.35535C17.3238 5.53503 17.5465 5.62488 17.8121 5.62488H18.7496V9.37479H17.8121C17.5465 9.37479 17.3238 9.46463 17.1442 9.64432C16.9645 9.824 16.8746 10.0467 16.8746 10.3123V12.1872C16.8746 12.9685 16.6012 13.6325 16.0543 14.1794C15.5075 14.7262 14.8434 14.9997 14.0622 14.9997H11.2498ZM4.6874 14.9997C3.90616 14.9997 3.24212 14.7262 2.69525 14.1794C2.14839 13.6325 1.87496 12.9685 1.87496 12.1872V10.3123C1.87496 10.0467 1.78512 9.824 1.60543 9.64432C1.42575 9.46463 1.2031 9.37479 0.937479 9.37479H0V5.62488H0.937479C1.2031 5.62488 1.42575 5.53503 1.60543 5.35535C1.78512 5.17567 1.87496 4.95302 1.87496 4.6874V2.81244C1.87496 2.0312 2.14839 1.36716 2.69525 0.820294C3.24212 0.273431 3.90616 0 4.6874 0H7.49983V1.87496H4.6874C4.42178 1.87496 4.19913 1.9648 4.01944 2.14448C3.83976 2.32417 3.74992 2.54682 3.74992 2.81244V4.6874C3.74992 5.28113 3.57805 5.82018 3.2343 6.30455C2.89056 6.78891 2.43745 7.13265 1.87496 7.33577V7.66389C2.43745 7.86701 2.89056 8.21076 3.2343 8.69512C3.57805 9.17948 3.74992 9.71853 3.74992 10.3123V12.1872C3.74992 12.4528 3.83976 12.6755 4.01944 12.8552C4.19913 13.0349 4.42178 13.1247 4.6874 13.1247H7.49983V14.9997H4.6874Z" />
    </svg>
  );
}

function CareerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M1.90476 16.1905V5.71429V16.1905C1.90476 15.873 1.90476 15.754 1.90476 15.8333C1.90476 15.9127 1.90476 16.0317 1.90476 16.1905ZM1.90476 18.0952C1.38095 18.0952 0.93254 17.9087 0.559524 17.5357C0.186508 17.1627 0 16.7143 0 16.1905V5.71429C0 5.19048 0.186508 4.74206 0.559524 4.36905C0.93254 3.99603 1.38095 3.80952 1.90476 3.80952H5.71429V1.90476C5.71429 1.38095 5.90079 0.93254 6.27381 0.559524C6.64683 0.186508 7.09524 0 7.61905 0H11.4286C11.9524 0 12.4008 0.186508 12.7738 0.559524C13.1468 0.93254 13.3333 1.38095 13.3333 1.90476V3.80952H17.1429C17.6667 3.80952 18.1151 3.99603 18.4881 4.36905C18.8611 4.74206 19.0476 5.19048 19.0476 5.71429V9.78571C18.7619 9.57936 18.4603 9.40079 18.1429 9.25C17.8254 9.09921 17.4921 8.96825 17.1429 8.85714V5.71429H1.90476V16.1905H8.64286C8.69048 16.5238 8.7619 16.8492 8.85714 17.1667C8.95238 17.4841 9.07143 17.7937 9.21429 18.0952H1.90476ZM7.61905 3.80952H11.4286V1.90476H7.61905V3.80952ZM15.2381 20C13.9206 20 12.7976 19.5357 11.869 18.6071C10.9405 17.6786 10.4762 16.5556 10.4762 15.2381C10.4762 13.9206 10.9405 12.7976 11.869 11.869C12.7976 10.9405 13.9206 10.4762 15.2381 10.4762C16.5556 10.4762 17.6786 10.9405 18.6071 11.869C19.5357 12.7976 20 13.9206 20 15.2381C20 16.5556 19.5357 17.6786 18.6071 18.6071C17.6786 19.5357 16.5556 20 15.2381 20ZM15.7143 15.0476V12.381H14.7619V15.4286L16.8095 17.4762L17.4762 16.8095L15.7143 15.0476Z" />
    </svg>
  );
}

function ConnectIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 18 15" fill="currentColor">
      <path d="M0 14.9997V0L17.8121 7.49983L0 14.9997ZM1.87496 12.1872L12.9841 7.49983L1.87496 2.81244V6.09361L7.49983 7.49983L1.87496 8.90605V12.1872ZM1.87496 12.1872V7.49983V2.81244V6.09361V8.90605V12.1872Z" />
    </svg>
  );
}

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { id: "home", label: "INDEX", href: "#home", icon: IndexIcon },
  { id: "skills", label: "STACK", href: "#skills", icon: StackIcon },
  { id: "experience", label: "CAREER", href: "#experience", icon: CareerIcon },
  { id: "projects", label: "BUILDS", href: "#projects", icon: BuildsIcon },
  { id: "contact", label: "CONNECT", href: "#contact", icon: ConnectIcon },
];

export function MobileBottomNav() {
  const [activeItem, setActiveItem] = React.useState("home");

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.querySelector(navItems[i].href);
        if (el && (el as HTMLElement).offsetTop <= scrollPos) {
          setActiveItem(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
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
              <Icon className={cn("size-4 transition-transform", isActive && "scale-110")} />
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
