"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import {
  AboutTimelineBranchIcon,
  AboutTimelineStepIcon,
  AboutPillarsHeaderIcon,
  AboutPillarArchIcon,
  AboutPillarDbIcon,
  AboutPillarRealtimeIcon,
  AboutPillarTypesafeIcon,
  AboutPillarPerfIcon,
  AboutPillarCleanIcon,
} from "@/components/icons/FigmaIcons";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Career timeline — exact values from Figma #1:1976
const timeline = [
  {
    year: "2022",
    tag: "// INIT",
    role: "Node.js Developer",
    desc: "Started professional career building REST APIs, backend services, and database query optimization.",
    dotColor: "#8B90A0",
    active: false,
  },
  {
    year: "2024",
    tag: "// FULL STACK",
    role: "MERN Stack Developer",
    desc: "Full stack feature development with React, Node.js, Express, MongoDB, and MySQL.",
    dotColor: "#8B90A0",
    active: false,
  },
  {
    year: "2025",
    tag: "// APPOINTMENT",
    role: "Software Engineer",
    desc: "Joined Acquaint Softtech, developing Next.js web applications, NestJS APIs, and real-time Socket.IO workflows.",
    dotColor: "#7BD0FF",
    active: false,
  },
  {
    year: "2026",
    tag: "// CONTINUOUS GROWTH",
    role: "Software Engineer",
    desc: "Hands-on backend and frontend engineering, performance optimization, and clean application design.",
    dotColor: "#0070F3",
    active: true,
  },
];

// 6 Architectural Pillars — exact values and icons from Figma #1:2050
const pillars = [
  {
    num: "01",
    tag: "01 // FULL STACK",
    icon: <AboutPillarArchIcon className="size-[19px] text-[#7BD0FF]" />,
    title: "Full Stack Development",
    desc: "Responsive web applications with Next.js, React,\nTypeScript, and clean component architecture.",
    footerLabel: "FOCUS",
    footerValue: "Next.js • React • TypeScript",
  },
  {
    num: "02",
    tag: "02 // BACKEND",
    icon: <AboutPillarDbIcon className="size-[17px] text-[#7BD0FF]" />,
    title: "Backend Engineering",
    desc: "Structured RESTful APIs with NestJS, Node.js,\nExpress.js, and modular service layers.",
    footerLabel: "FOUNDATION",
    footerValue: "NestJS • Express.js • Node",
  },
  {
    num: "03",
    tag: "03 // REAL-TIME",
    icon: <AboutPillarRealtimeIcon className="size-[19px] text-[#7BD0FF]" />,
    title: "Real-Time Applications",
    desc: "Event-driven communication using Socket.IO and\nWebSockets for live status and updates.",
    footerLabel: "COMMUNICATION",
    footerValue: "Socket.IO • WebSockets",
  },
  {
    num: "04",
    tag: "04 // DATA",
    icon: <AboutPillarTypesafeIcon className="size-[17px] text-[#7BD0FF]" />,
    title: "Database & Optimization",
    desc: "Relational schema design, query profiling in\nPostgreSQL/MySQL, and Redis caching layers.",
    footerLabel: "PERSISTENCE",
    footerValue: "Postgres • MySQL • Redis",
  },
  {
    num: "05",
    tag: "05 // CONTRACTS",
    icon: <AboutPillarPerfIcon className="size-[19px] text-[#7BD0FF]" />,
    title: "API Development",
    desc: "RESTful API contracts, validation, clean routing, error\nhandling, and third-party integrations.",
    footerLabel: "STANDARDS",
    footerValue: "Clean REST • Validation",
  },
  {
    num: "06",
    tag: "06 // SECURITY",
    icon: <AboutPillarCleanIcon className="size-[20px] text-[#7BD0FF]" />,
    title: "Authentication & Security",
    desc: "Role-based access control, JWT session flows, TOTP\nmulti-factor authentication, and safe data handling.",
    footerLabel: "POLICY",
    footerValue: "RBAC • JWT • MFA",
  },
];

export function AboutSection() {
  const ref = React.useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-[#0F131D] overflow-hidden"
    >
      {/* Ambient subtle background depth glow (#1:1928) */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "-72px",
          left: "280px",
          width: "720px",
          height: "340px",
          background:
            "linear-gradient(180deg, rgba(174,198,255,0.10) 0%, rgba(123,208,255,0.05) 50%, rgba(123,208,255,0) 100%)",
          filter: "blur(32px)",
          borderRadius: "12px",
        }}
        aria-hidden
      />

      <SectionContainer className="py-8 sm:py-10">
        <div className="flex flex-col gap-6 sm:gap-8">

          {/* ── SECTION HEADER (Figma #1:1930) ── */}
          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease }}
          >
            {/* Monospace Telemetry Eyebrow Pill */}
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-[2px] bg-[#171B26] border border-[#262A35] w-fit">
              <span className="size-1.5 rounded-full bg-[#7BD0FF] shadow-[0_0_8px_rgba(123,208,255,0.8)]" />
              <span className="text-[#7BD0FF] text-[11px] tracking-[0.1em] uppercase font-mono">
                02 // ABOUT ARCHITECTURE
              </span>
              <span className="text-[#8B90A0] text-[11px] tracking-[0.02em] uppercase font-mono">
                {"// PROFILE & TIMELINE"}
              </span>
            </div>

            {/* Title with exact highlight on reliability */}
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[48px] font-semibold tracking-[-0.025em] text-[#DFE2F1] max-w-4xl">
              Engineering with focus on{" "}
              <span className="text-[#7BD0FF]">reliability,</span>
              <br className="hidden sm:inline" />
              {" "}maintainability, and clean architecture.
            </h2>
          </motion.div>

          {/* ── ASYMMETRIC BENTO GRID — Narrative + Timeline (Figma #1:1939) ── */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            {/* Left / Main Narrative Card (7 cols, Figma #1:1940) */}
            <div className="lg:col-span-7 flex flex-col gap-6 p-6 sm:p-8 rounded-lg bg-[#171B26] border border-[#262A35] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
              <div className="flex flex-col gap-6">
                {/* Header row */}
                <div className="flex items-center justify-between pb-2 border-b border-[#262A35]/40">
                  <span className="text-[#8B90A0] text-[11px] tracking-[0.05em] uppercase font-mono">
                    ENGINEER SUMMARY
                  </span>
                  <span className="text-[#7BD0FF] text-[11px] tracking-[0.02em] font-mono">
                    EXP_YEARS: 04+
                  </span>
                </div>

                {/* Narrative Paragraphs */}
                <div className="flex flex-col gap-4">
                  <p className="text-[15px] sm:text-[16px] leading-[25px] sm:leading-[26px] tracking-[-0.01em] text-[#DFE2F1]">
                    I&apos;m a Software Engineer with 4+ years of professional hands-on experience
                    developing web applications across{" "}
                    <span className="text-[#7BD0FF]">Finance, Healthcare, Education,</span>
                    {" "}and{" "}
                    <span className="text-[#7BD0FF]">Food Technology</span>.
                  </p>
                  <p className="text-[13px] sm:text-[14px] leading-[22px] sm:leading-[22.75px] tracking-[-0.005em] text-[#C1C6D7]">
                    My focus spans responsive client interfaces, RESTful API and backend services, database
                    schema design and optimization, Redis caching, and real-time event-driven communication.
                  </p>
                  <p className="text-[13px] sm:text-[14px] leading-[22px] sm:leading-[22.75px] tracking-[-0.005em] text-[#C1C6D7]">
                    I enjoy breaking down complex business requirements into clean, well-tested, and
                    maintainable software systems.
                  </p>
                </div>
              </div>

              {/* Bottom Micro-metrics shelf (Figma #1:1954) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded bg-[rgba(10,14,24,0.6)] border border-[#262A35]/50 mt-2">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[#8B90A0] text-[11px] uppercase tracking-[0.02em] font-mono">
                    EXPERIENCE
                  </span>
                  <span className="text-[18px] font-semibold leading-[26px] tracking-[-0.015em] text-[#DFE2F1]">
                    4+ Years
                  </span>
                  <span className="text-[10px] leading-[15px] text-[#C1C6D7]">
                    Professional software dev
                  </span>
                </div>

                <div className="flex flex-col gap-0.5">
                  <span className="text-[#8B90A0] text-[11px] uppercase tracking-[0.02em] font-mono">
                    STACK PARADIGM
                  </span>
                  <span className="text-[18px] font-semibold leading-[26px] tracking-[-0.015em] text-[#7BD0FF]">
                    Full Stack
                  </span>
                  <span className="text-[10px] leading-[15px] text-[#C1C6D7]">
                    React / Next.js &amp; Node / NestJS
                  </span>
                </div>

                <div className="flex flex-col gap-0.5">
                  <span className="text-[#8B90A0] text-[11px] uppercase tracking-[0.02em] font-mono">
                    TRACK RECORD
                  </span>
                  <span className="text-[18px] font-semibold leading-[26px] tracking-[-0.015em] text-[#AEC6FF]">
                    Real-World
                  </span>
                  <span className="text-[10px] leading-[15px] text-[#C1C6D7]">
                    Production web applications
                  </span>
                </div>
              </div>
            </div>

            {/* Right / Execution Timeline Card (5 cols, Figma #1:1976) */}
            <div className="lg:col-span-5 flex flex-col gap-4 p-6 sm:p-8 rounded-lg bg-[#171B26] border border-[#262A35] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden">
              {/* Header row */}
              <div className="flex items-center justify-between pb-3 border-b border-[#262A35]/40">
                <span className="text-[#8B90A0] text-[11px] tracking-[0.05em] uppercase font-mono">
                  EXECUTION TIMELINE
                </span>
                <div className="flex items-center gap-1.5 text-[#7BD0FF] text-[11px] font-mono">
                  <AboutTimelineBranchIcon />
                  <span>HEAD → main</span>
                </div>
              </div>

              {/* Vertical Timeline Steps (Figma #1:1991) */}
              <div className="relative flex flex-col gap-5 py-4">
                {/* Continuous vertical timeline connector line */}
                <div
                  className="absolute left-[11px] top-6 bottom-6 w-[2px] bg-[#313540]"
                  aria-hidden
                />

                {timeline.map((item) => (
                  <div key={item.year} className="relative flex items-start gap-4">
                    {/* Step Node Marker */}
                    {item.active ? (
                      <div className="relative z-10 flex items-center justify-center size-6 rounded-full bg-[#0070F3] shadow-[0_0_12px_rgba(0,112,243,0.6)] shrink-0">
                        <AboutTimelineStepIcon className="size-3 text-[#002E6B]" />
                      </div>
                    ) : (
                      <div className="relative z-10 flex items-center justify-center size-6 rounded-full bg-[#262A35] shrink-0 border border-[#313540]">
                        <span
                          className="size-2 rounded-full"
                          style={{ background: item.dotColor }}
                        />
                      </div>
                    )}

                    {/* Step Content */}
                    <div className="flex flex-col gap-0.5 pt-0.5">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-mono ${
                            item.active ? "text-[#D8E2FF] font-bold" : "text-[#7BD0FF] font-semibold"
                          }`}
                        >
                          {item.year}
                        </span>
                        <span
                          className={`text-[11px] font-mono ${
                            item.active ? "text-[#7BD0FF] font-semibold" : "text-[#8B90A0]"
                          }`}
                        >
                          {item.tag}
                        </span>
                      </div>
                      <span className="text-[#DFE2F1] text-[15px] font-medium leading-[18.75px]">
                        {item.role}
                      </span>
                      <p className="text-[#C1C6D7] text-[13px] leading-[18px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer row (Figma #1:1986) */}
              <div className="flex items-center justify-between pt-3 border-t border-[#262A35]/40">
                <span className="text-[#8B90A0] text-[11px] tracking-[0.02em] uppercase font-mono">
                  UPTIME: 100% RELIABILITY
                </span>
                <span className="text-[#7BD0FF] text-[11px] font-mono tracking-[0.02em]">
                  STATUS: OPERATIONAL
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── ARCHITECTURAL PILLARS GRID (Figma #1:2050) ── */}
          <motion.div
            className="flex flex-col gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
          >
            {/* Sub-header row (Figma #1:2052) */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <AboutPillarsHeaderIcon className="size-4 text-[#7BD0FF] shrink-0" />
                <h3 className="text-[#DFE2F1] text-[18px] font-medium tracking-[-0.015em]">
                  Architectural Pillars
                </h3>
                <span className="text-[#8B90A0] text-[11px] uppercase tracking-[0.02em] font-mono">
                  {"// 6 CORE CAPABILITIES"}
                </span>
              </div>
              <span className="text-[#8B90A0] text-[11px] font-mono hidden sm:block">
                SYSTEM_DESIGN.SPEC
              </span>
            </div>

            {/* 3×2 Grid Cards (Figma #1:2062) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="flex flex-col justify-between gap-4 p-6 rounded-lg bg-[#171B26] border border-[#262A35] shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:border-[#313540] hover:bg-[#1C2030] transition-all duration-200"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-center size-10 rounded-[4px] bg-[#262A35]">
                        {pillar.icon}
                      </div>
                      <span className="text-[#8B90A0] text-[11px] tracking-[0.02em] font-mono">
                        {pillar.tag}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-[#DFE2F1] text-[18px] font-semibold leading-[26px] tracking-[-0.015em]">
                        {pillar.title}
                      </h4>
                      <p className="text-[#C1C6D7] text-[13px] leading-[18px] whitespace-pre-line">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#262A35]">
                    <span className="text-[#8B90A0] text-[11px] font-mono">
                      {pillar.footerLabel}
                    </span>
                    <span className="text-[#7BD0FF] text-[11px] font-mono">
                      {pillar.footerValue}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </SectionContainer>
    </section>
  );
}
