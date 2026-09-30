"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { HeaderDownloadIcon, HeaderAvatarIcon } from "@/components/icons/FigmaIcons";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  React.useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[rgba(15,19,29,0.85)] backdrop-blur-[6px] shadow-[0_1px_8px_0_rgba(0,0,0,0.04)] border-b border-[rgba(255,255,255,0.06)]"
            : "bg-[rgba(15,19,29,0.85)] backdrop-blur-[6px] shadow-[0_1px_8px_0_rgba(0,0,0,0.04)]",
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      >
        <div className="mx-auto w-full max-w-[1400px] xl:max-w-[1480px] 2xl:max-w-[1560px] px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex items-center justify-between h-14">
            {/* Logo — Figma #1:764 */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="flex items-center gap-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7BD0FF]"
              aria-label="Home"
            >
              <span className="size-2 rounded-full bg-[#7BD0FF] shrink-0" />
              <span className="text-[#DFE2F1] text-[12px] font-medium leading-[16px] tracking-[0.05em] uppercase font-sans">
                {siteConfig.name}
              </span>
              <span className="text-[#8B90A0] text-[11px] leading-[14px] tracking-[0.02em] font-sans">
                {"// SENIOR FSE"}
              </span>
            </a>

            {/* Desktop nav — pill container #1:770 */}
            <nav
              className="hidden md:flex items-center gap-1 p-1 rounded bg-[rgba(10,14,24,0.6)]"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={cn(
                      "px-2 py-1 rounded-xs transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7BD0FF]",
                      isActive
                        ? "bg-[#262A35] text-[#DFE2F1] text-[16px] leading-[24px] font-medium"
                        : "text-[#C1C6D7] text-[11px] leading-[14px] tracking-[0.02em] font-normal hover:text-[#DFE2F1]",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTAs — #1:783 */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Neel_Patel_Resume.pdf"
                className="flex items-center gap-1 px-4 py-1 rounded-xs bg-[#171B26] text-[#DFE2F1] text-[11px] leading-[14px] tracking-[0.02em] font-normal shadow-[0_1px_8px_0_rgba(0,0,0,0.04)] hover:bg-[#1E2330] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7BD0FF]"
              >
                <HeaderDownloadIcon className="size-[10.67px] shrink-0" fill="#7BD0FF" />
                Download Resume
              </a>
              <div className="flex items-center justify-center size-8 rounded-xl bg-[#AEC6FF] shadow-sm">
                <HeaderAvatarIcon className="size-3 shrink-0" fill="#002E6B" />
              </div>
            </div>

            {/* Mobile Actions matching Frame 17:1328 */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Neel_Patel_Resume.pdf"
                className="flex items-center justify-center size-8 rounded-lg bg-[#171B26] text-[#C1C6D7] hover:text-[#00D7F4] hover:bg-[#1E2330] transition-colors"
                aria-label="Download Resume"
              >
                <HeaderDownloadIcon className="size-[11px] shrink-0" fill="#7BD0FF" />
              </a>
              <button
                className="flex items-center justify-center size-8 rounded-lg text-[#C1C6D7] hover:text-[#DFE2F1] hover:bg-[#171B26] transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((p) => !p)}
              >
                {mobileOpen ? (
                  <svg className="size-3.5 text-[#C1C6D7]" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M1.19997 11.9997L0 10.7997L4.79987 5.99983L0 1.19997L1.19997 0L5.99983 4.79987L10.7997 0L11.9997 1.19997L7.1998 5.99983L11.9997 10.7997L10.7997 11.9997L5.99983 7.1998L1.19997 11.9997Z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-3 text-[#DFE2F1]" viewBox="0 0 18 12" fill="currentColor">
                    <path d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z" />
                  </svg>
                )}
              </button>
              <div className="flex items-center justify-center size-7 rounded-lg bg-[#AEC6FF] shadow-sm">
                <HeaderAvatarIcon className="size-3 shrink-0" fill="#002E6B" />
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden flex flex-col pt-14 bg-[rgba(10,14,24,0.97)] backdrop-blur-xl"
        initial={false}
        animate={mobileOpen ? { opacity: 1, pointerEvents: "auto" as const } : { opacity: 0, pointerEvents: "none" as const }}
        transition={{ duration: 0.2 }}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={cn(
                "px-4 py-3 rounded-xl text-base font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7BD0FF]",
                activeSection === link.href.slice(1)
                  ? "bg-[#171B26] text-[#DFE2F1]"
                  : "text-[#C1C6D7] hover:bg-[#171B26] hover:text-[#DFE2F1]",
              )}
              initial={{ opacity: 0, x: -16 }}
              animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
              transition={{ delay: i * 0.05, duration: 0.25 }}
            >
              {link.label}
            </motion.a>
          ))}
          <div className="pt-4 px-4">
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Neel_Patel_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#0070F3] text-white font-medium transition-colors hover:bg-[#0060D0]"
            >
              <svg className="size-4" viewBox="0 0 14 14" fill="currentColor">
                <path d="M7.00004 10.5001L2.62502 6.12504L3.85002 4.85628L6.12504 7.13129V0H7.87505V7.13129L10.1501 4.85628L11.3751 6.12504L7.00004 10.5001ZM1.75001 14.0001C1.26876 14.0001 0.856776 13.8287 0.514066 13.486C0.171355 13.1433 0 12.7313 0 12.2501V9.62506H1.75001V12.2501H12.2501V9.62506H14.0001V12.2501C14.0001 12.7313 13.8287 13.1433 13.486 13.486C13.1433 13.8287 12.7313 14.0001 12.2501 14.0001H1.75001Z" />
              </svg>
              Download Resume
            </a>
          </div>
        </nav>
      </motion.div>
    </>
  );
}
