"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HubNetworkIcon,
  VerifiedCheckIcon,
  WebFrontendIcon,
  MemoryBackendIcon,
  DatabaseIcon,
  BoltZapIcon,
  BuildToolingIcon,
  ExpandMoreIcon,
  ChevronRightIcon,
} from "@/components/icons/StitchMobileIcons";

interface SkillCategory {
  id: string;
  title: string;
  count: number;
  iconName: string;
  defaultOpen: boolean;
  skills: { name: string; isPrimary?: boolean }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Systems",
    count: 8,
    iconName: "web",
    defaultOpen: true,
    skills: [
      { name: "React.js", isPrimary: true },
      { name: "Next.js", isPrimary: true },
      { name: "TypeScript", isPrimary: true },
      { name: "JavaScript (ES6+)" },
      { name: "Redux Toolkit" },
      { name: "Zustand" },
      { name: "Tailwind CSS" },
      { name: "Material UI" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Services",
    count: 6,
    iconName: "memory",
    defaultOpen: true,
    skills: [
      { name: "Node.js", isPrimary: true },
      { name: "NestJS", isPrimary: true },
      { name: "Express.js" },
      { name: "RESTful APIs" },
      { name: "Auth & JWT" },
      { name: "RBAC" },
    ],
  },
  {
    id: "persistence",
    title: "Persistence",
    count: 5,
    iconName: "database",
    defaultOpen: false,
    skills: [
      { name: "PostgreSQL", isPrimary: true },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Prisma ORM" },
    ],
  },
  {
    id: "realtime",
    title: "Real-Time & Caching",
    count: 4,
    iconName: "bolt",
    defaultOpen: false,
    skills: [
      { name: "Socket.IO", isPrimary: true },
      { name: "WebSockets" },
      { name: "Redis Cache" },
      { name: "Pub/Sub" },
    ],
  },
  {
    id: "testing",
    title: "Testing & Quality",
    count: 4,
    iconName: "verified",
    defaultOpen: false,
    skills: [
      { name: "Playwright", isPrimary: true },
      { name: "Jest" },
      { name: "Unit Testing" },
      { name: "API Verification" },
    ],
  },
  {
    id: "tooling",
    title: "Tooling & Integrations",
    count: 6,
    iconName: "build",
    defaultOpen: false,
    skills: [
      { name: "Stripe" },
      { name: "Razorpay" },
      { name: "Agora SDK" },
      { name: "Git" },
      { name: "Postman" },
      { name: "FileZilla" },
    ],
  },
];

export function MobileSkillsSection() {
  const [openGroups, setOpenGroups] = React.useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    skillCategories.forEach((cat) => {
      init[cat.id] = cat.defaultOpen;
    });
    return init;
  });

  const toggleGroup = (id: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="mobile-skills"
      className="flex flex-col px-4 py-8 gap-4 bg-[#0F131D] scroll-mt-16"
    >
      {/* Header Tag & Note */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[12px] font-semibold tracking-wider text-[#00D7F4]">
              03 //
            </span>
            <h2 className="text-[24px] font-semibold leading-[30px] tracking-[-0.015em] text-[#DFE2F1]">
              Technical Stack Matrix
            </h2>
          </div>
          <HubNetworkIcon className="size-5 text-[#00D7F4]" />
        </div>
        <div className="flex items-center gap-1.5 text-[#C1C6D7] font-mono text-[12px]">
          <VerifiedCheckIcon className="size-3.5 text-[#FFB596] shrink-0" />
          <span>Categorized production skillset • Grouped by architectural layer</span>
        </div>
      </div>

      {/* Accordion Category Container */}
      <div className="flex flex-col gap-2">
        {skillCategories.map((group) => {
          const isOpen = openGroups[group.id];

          return (
            <div
              key={group.id}
              className="rounded-xl bg-[#171B26] border border-[#262A35]/60 overflow-hidden transition-all shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggleGroup(group.id)}
                className="w-full h-14 px-4 flex items-center justify-between bg-[#1C1F2A] hover:bg-[#262A35] transition-colors text-left"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-[#00D7F4] flex items-center justify-center">
                    {group.id === "frontend" && <WebFrontendIcon className="size-5 text-[#00D7F4]" />}
                    {group.id === "backend" && <MemoryBackendIcon className="size-5 text-[#00D7F4]" />}
                    {group.id === "persistence" && <DatabaseIcon className="size-5 text-[#00D7F4]" />}
                    {group.id === "realtime" && <BoltZapIcon className="size-5 text-[#00D7F4]" />}
                    {group.id === "testing" && <VerifiedCheckIcon className="size-5 text-[#00D7F4]" />}
                    {group.id === "tooling" && <BuildToolingIcon className="size-5 text-[#00D7F4]" />}
                  </span>
                  <span className="text-[15px] font-semibold text-[#DFE2F1]">
                    {group.title}
                  </span>
                  <span className="font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#262A35] text-[#C1C6D7]">
                    {group.count}
                  </span>
                </div>
                <ExpandMoreIcon
                  className={`size-4 text-[#8B90A0] transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-3.5 flex flex-wrap gap-2 border-t border-[#262A35]/40 bg-[#171B26]/80">
                      {group.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1C1F2A] border border-[#262A35] text-[#DFE2F1] font-mono text-[12px] shadow-xs"
                        >
                          {skill.isPrimary && (
                            <span className="size-1.5 rounded-full bg-[#00D7F4]" />
                          )}
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Quick Action Bar */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-[#262A35] border border-[#313540] mt-1 shadow-sm">
        <div className="flex flex-col">
          <span className="font-mono text-[13px] text-[#DFE2F1] font-medium">
            Ready to explore builds?
          </span>
          <span className="text-[12px] text-[#C1C6D7] mt-0.5">
            Dive straight into live enterprise production systems.
          </span>
        </div>
        <a
          href="#mobile-projects"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("mobile-projects");
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 60;
              window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
            }
          }}
          className="size-11 rounded-lg bg-[#0070F3] text-white flex items-center justify-center shadow-md active:scale-95 transition-transform shrink-0 ml-3"
          aria-label="View Projects"
        >
          <ChevronRightIcon className="size-5" />
        </a>
      </div>
    </section>
  );
}
