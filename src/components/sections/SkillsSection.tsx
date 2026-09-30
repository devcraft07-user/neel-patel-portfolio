"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { siteConfig } from "@/config/site";
import {
  SkillsHeaderIcon,
  SkillsCatFrontendIcon,
  SkillsCatBackendIcon,
  SkillsCatDatabaseIcon,
  SkillsCatCachingIcon,
  SkillsCatRealtimeIcon,
  SkillsCatArchIcon,
  SkillsCatSecurityIcon,
  SkillsCatDevopsIcon,
  SkillsCalloutIcon,
  SkillsCalloutLink1Icon,
  SkillsCalloutLink2Icon,
} from "@/components/icons/FigmaIcons";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

type Skill = { name: string; color?: string };

interface SkillCategory {
  num: string;
  tag: string;
  badge: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  skills: Skill[];
  footerLabel: string;
  footerValue: string;
}

// 8 Exact Categories from Figma #1:2194
const categories: SkillCategory[] = [
  {
    num: "01",
    tag: "01. FRONTEND",
    badge: "CLIENT",
    icon: <SkillsCatFrontendIcon className="size-[14px] text-[#7BD0FF]" />,
    title: "User Interface & State",
    desc: "Responsive interfaces, component structures, and state management.",
    skills: [
      { name: "React.js", color: "#DFE2F1" },
      { name: "Next.js", color: "#7BD0FF" },
      { name: "TypeScript", color: "#AEC6FF" },
      { name: "JavaScript (ES6+)", color: "#DFE2F1" },
      { name: "Redux Toolkit", color: "#C1C6D7" },
      { name: "Zustand", color: "#DFE2F1" },
      { name: "Tailwind CSS", color: "#C1C6D7" },
      { name: "Material UI", color: "#C1C6D7" },
    ],
    footerLabel: "LAYER",
    footerValue: "UI Components & State",
  },
  {
    num: "02",
    tag: "02. BACKEND",
    badge: "SERVER",
    icon: <SkillsCatBackendIcon className="size-[12px] text-[#7BD0FF]" />,
    title: "APIs & Core Services",
    desc: "RESTful routing, business logic layers, and authentication.",
    skills: [
      { name: "Node.js", color: "#AEC6FF" },
      { name: "NestJS", color: "#7BD0FF" },
      { name: "Express.js", color: "#DFE2F1" },
      { name: "RESTful APIs", color: "#DFE2F1" },
      { name: "Auth & JWT", color: "#C1C6D7" },
      { name: "RBAC", color: "#C1C6D7" },
    ],
    footerLabel: "SECURITY",
    footerValue: "JWT & Role-Based Access",
  },
  {
    num: "03",
    tag: "03. PERSISTENCE",
    badge: "STORAGE",
    icon: <SkillsCatDatabaseIcon className="size-[12px] text-[#7BD0FF]" />,
    title: "Databases & ORM",
    desc: "Schema modeling, query writing, and data consistency.",
    skills: [
      { name: "PostgreSQL", color: "#7BD0FF" },
      { name: "MySQL", color: "#DFE2F1" },
      { name: "MongoDB", color: "#C1C6D7" },
      { name: "Redis", color: "#7BD0FF" },
      { name: "Prisma ORM", color: "#C1C6D7" },
    ],
    footerLabel: "INTEGRITY",
    footerValue: "Relational & Document",
  },
  {
    num: "04",
    tag: "04. REAL-TIME",
    badge: "FAST",
    icon: <SkillsCatCachingIcon className="size-[11px] text-[#7BD0FF]" />,
    title: "Real-Time & Caching",
    desc: "Fast in-memory cache and bidirectional messaging channels.",
    skills: [
      { name: "Socket.IO", color: "#7BD0FF" },
      { name: "WebSockets", color: "#AEC6FF" },
      { name: "Redis Cache", color: "#DFE2F1" },
      { name: "Pub/Sub", color: "#C1C6D7" },
    ],
    footerLabel: "LATENCY",
    footerValue: "In-Memory & Duplex",
  },
  {
    num: "05",
    tag: "05. QA & QUALITY",
    badge: "TESTING",
    icon: <SkillsCatRealtimeIcon className="size-[14px] text-[#7BD0FF]" />,
    title: "Testing & Quality",
    desc: "Automated assertions, end-to-end user flows, and contract tests.",
    skills: [
      { name: "Playwright (E2E)", color: "#7BD0FF" },
      { name: "Jest", color: "#AEC6FF" },
      { name: "Unit Testing", color: "#DFE2F1" },
      { name: "API Verification", color: "#C1C6D7" },
    ],
    footerLabel: "COVERAGE",
    footerValue: "Core Workflows & APIs",
  },
  {
    num: "06",
    tag: "06. INTEGRATIONS",
    badge: "SERVICES",
    icon: <SkillsCatArchIcon className="size-[13px] text-[#7BD0FF]" />,
    title: "Integrations & APIs",
    desc: "Payments, media communication, and notifications integration.",
    skills: [
      { name: "Stripe", color: "#7BD0FF" },
      { name: "Razorpay", color: "#DFE2F1" },
      { name: "Agora RTC SDK", color: "#AEC6FF" },
      { name: "Twilio / SendGrid", color: "#C1C6D7" },
    ],
    footerLabel: "DISPATCH",
    footerValue: "Webhooks & SDKs",
  },
  {
    num: "07",
    tag: "07. ECOSYSTEM",
    badge: "TOOLING",
    icon: <SkillsCatSecurityIcon className="size-[12px] text-[#7BD0FF]" />,
    title: "Tooling & Workflow",
    desc: "Version control, API documentation, and debugging utilities.",
    skills: [
      { name: "Git", color: "#DFE2F1" },
      { name: "GitHub", color: "#DFE2F1" },
      { name: "Postman", color: "#DFE2F1" },
      { name: "Swagger / OpenAPI", color: "#7BD0FF" },
      { name: "FileZilla", color: "#C1C6D7" },
    ],
    footerLabel: "STANDARDS",
    footerValue: "Documented & Versioned",
  },
  {
    num: "08",
    tag: "08. ENVIRONMENTS",
    badge: "DEPLOY",
    icon: <SkillsCatDevopsIcon className="size-[15px] text-[#7BD0FF]" />,
    title: "Cloud & Environments",
    desc: "Basic containerization, asset storage, and hosting platforms.",
    skills: [
      { name: "Docker basics", color: "#7BD0FF" },
      { name: "AWS S3", color: "#AEC6FF" },
      { name: "Vercel", color: "#DFE2F1" },
      { name: "Linux / Bash", color: "#C1C6D7" },
    ],
    footerLabel: "HOSTING",
    footerValue: "Containerized & Cloud",
  },
];

function SkillCard({ cat, index }: { cat: SkillCategory; index: number }) {
  return (
    <motion.div
      className="relative flex flex-col justify-between gap-3 p-6 rounded-lg bg-[#171B26] border border-[#262A35] hover:border-[#313540] hover:bg-[#1C2030] transition-all duration-200 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease }}
    >
      {/* Card Header & Content */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {cat.icon}
            <span className="text-[#7BD0FF] text-[11px] tracking-[0.02em] font-mono">
              {cat.tag}
            </span>
          </div>
          <span className="px-1.5 py-0.5 rounded-[2px] bg-[#262A35] text-[#D8E2FF] text-[10px] font-mono font-medium">
            {cat.badge}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-[#DFE2F1] text-[16px] font-semibold leading-[24px]">
            {cat.title}
          </h3>
          <p className="text-[#C1C6D7] text-[12px] leading-[18px]">
            {cat.desc}
          </p>
        </div>

        {/* Skill badges — exact color tokens & flowing layout */}
        <div className="flex flex-wrap gap-1.5 pt-1 min-h-[56px] content-start">
          {cat.skills.map((skill) => (
            <span
              key={skill.name}
              className="px-2 py-1 rounded-[2px] bg-[#1C1F2A] border border-[#262A35]/50 text-[11px] font-medium font-mono tracking-[0.02em]"
              style={{ color: skill.color ?? "#DFE2F1" }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-[#262A35]">
        <span className="text-[#8B90A0] text-[10px] font-mono uppercase tracking-[0.02em]">
          {cat.footerLabel}
        </span>
        <span className="text-[#8B90A0] text-[10px] font-mono">
          {cat.footerValue}
        </span>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const ref = React.useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [openCategories, setOpenCategories] = React.useState<Record<string, boolean>>({
    "01": true,
    "02": true,
  });

  const toggleCategory = (num: string) => {
    setOpenCategories((prev) => ({ ...prev, [num]: !prev[num] }));
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="relative bg-[rgba(10,14,24,0.5)] overflow-hidden"
    >
      <SectionContainer className="py-8 sm:py-10">
        <div className="flex flex-col gap-6 sm:gap-8">

          {/* ── SECTION HEADER (Figma #1:2173) ── */}
          <motion.div
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease }}
          >
            <div className="flex flex-col gap-2 max-w-3xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-[2px] bg-[#171B26] border border-[#262A35] w-fit">
                <SkillsHeaderIcon className="size-[11px] text-[#7BD0FF] shrink-0" />
                <span className="text-[#7BD0FF] text-[11px] tracking-[0.1em] uppercase font-mono">
                  03 // TECHNICAL STACK MATRIX
                </span>
                <span className="text-[#8B90A0] text-[11px] tracking-[0.02em] uppercase font-mono">
                  {"// PROD READY"}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[48px] font-semibold tracking-[-0.025em] text-[#DFE2F1]">
                Categorized Production Capabilities
              </h2>

              {/* Description */}
              <p className="text-[14px] leading-[22px] tracking-[-0.005em] text-[#C1C6D7]">
                Strictly practical technologies proven across high-throughput production environments. Grouped by
                system domain, deployment role, and architectural layer.
              </p>
            </div>

            {/* Matrix Telemetry Filter Pills (Figma #1:2185) */}
            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-[4px] bg-[#171B26] border border-[#262A35] shrink-0 w-fit">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-[2px] bg-[#262A35]">
                <span className="size-1.5 rounded-full bg-[#7BD0FF] shadow-[0_0_8px_rgba(123,208,255,0.8)]" />
                <span className="text-[#DFE2F1] text-[11px] font-mono">
                  All (8 Domains)
                </span>
              </div>
              <span className="text-[#8B90A0] text-[11px] font-mono">{"//"}</span>
              <span className="text-[#C1C6D7] text-[11px] uppercase tracking-[0.02em] font-mono hidden sm:inline">
                NO ARBITRARY PERCENTAGES • LAYER LABELED
              </span>
            </div>
          </motion.div>

          {/* ── MOBILE ACCORDION (For narrow screens) ── */}
          <div className="flex md:hidden flex-col gap-3">
            {categories.map((cat) => {
              const isOpen = !!openCategories[cat.num];
              return (
                <div
                  key={cat.num}
                  className="flex flex-col rounded-lg bg-[#171B26] border border-[#262A35] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleCategory(cat.num)}
                    className="flex items-center justify-between p-3.5 bg-[#1C1F2A] hover:bg-[#262A35] transition-colors text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-2.5">
                      {cat.icon}
                      <span className="text-[#DFE2F1] text-xs font-semibold">{cat.title}</span>
                      <span className="px-1.5 py-0.5 rounded bg-[#262A35] text-[#C1C6D7] text-[10px] font-mono">
                        {cat.skills.length}
                      </span>
                    </div>
                    <svg
                      className={`size-3.5 text-[#C1C6D7] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="p-3.5 flex flex-wrap gap-1.5 bg-[#171B26]">
                      {cat.skills.map((s) => (
                        <span
                          key={s.name}
                          className="px-2.5 py-1 rounded-[2px] bg-[#262A35] text-xs font-mono font-medium"
                          style={{ color: s.color ?? "#DFE2F1" }}
                        >
                          {s.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── 4×2 SKILLS BENTO GRID (Figma #1:2194) ── */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <SkillCard key={cat.num} cat={cat} index={i} />
            ))}
          </div>

          {/* ── TELEMETRY BOTTOM CALLOUT / PHILOSOPHY FOOTER (Figma #1:2443) ── */}
          <motion.div
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 p-6 rounded-lg bg-[#171B26] border border-[#262A35] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.3, ease }}
          >
            <div className="flex items-start sm:items-center gap-4">
              <div className="flex items-center justify-center size-10 rounded-xl bg-[#262A35] shrink-0 border border-[#313540]">
                <SkillsCalloutIcon className="size-[17px] text-[#7BD0FF]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[#DFE2F1] text-[15px] font-medium leading-[22.5px]">
                  Interested in discussing engineering challenges or opportunities?
                </span>
                <span className="text-[#C1C6D7] text-[13px] leading-[18px]">
                  Always open to discussing full-stack web architectures, performance improvements, and impactful projects.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download="Neel_Patel_Resume.pdf"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-[2px] bg-[#262A35] text-[#DFE2F1] text-[11px] font-medium hover:bg-[#313540] transition-colors border border-[#313540]/60 shadow-sm"
              >
                <SkillsCalloutLink1Icon className="size-[11px] text-[#7BD0FF]" />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-[2px] bg-[#0070F3] text-[#002E6B] text-[11px] font-semibold hover:bg-[#0060D0] transition-colors shadow-[0_0_15px_rgba(0,112,243,0.3)]"
              >
                <span>Get In Touch</span>
                <SkillsCalloutLink2Icon className="size-[11px] text-[#002E6B]" />
              </a>
            </div>
          </motion.div>

        </div>
      </SectionContainer>
    </section>
  );
}
