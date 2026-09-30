"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import {
  EvolutionBannerIcon,
  StepperPhase1Icon,
  StepperPhase2Icon,
  StepperPhase3Icon,
  TimelineNodeC1Icon,
  TimelineNodeC2Icon,
  SubroleArrowC1Icon,
  SubroleArrowC2Icon,
  EnterpriseShieldIcon,
  MilestoneTenureClockIcon,
  C1ContribModularIcon,
  C1ContribDbOrmIcon,
  C1ContribCacheRedisIcon,
  C1ContribRealtimeSocketIcon,
  C1ContribSecurityMfaIcon,
  C1ContribTestingPlaywrightIcon,
  C1ContribTeamDiscussionsIcon,
  C2ContribBackendApisIcon,
  C2ContribWebPortalsIcon,
  C2ContribDualDbIcon,
  C2ContribPaymentGatewaysIcon,
  C2ContribTransCommIcon,
  C2ContribPerfTuningIcon,
  C2ContribMentorshipIcon,
  C2ContribCloudFilezillaIcon,
  RecruiterSummaryDocIcon,
  GlobalRemoteGlobeIcon,
  DownloadResumeTrayIcon,
  ContactMailEnvelopeIcon,
} from "@/components/icons/ExperienceIcons";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Stepper Phase cards matching Figma #17:2652 / Screen 1:2621
const phases = [
  {
    id: "p1",
    tag: "PHASE 01 // 2022 – 2023",
    role: "Node.js Developer",
    desc: "Backend foundations, REST APIs, database queries, and third-party integrations",
    active: false,
    tagColor: "#8B90A0",
    progressColor: "#8B90A0",
    icon: <StepperPhase1Icon className="size-3.5" />,
  },
  {
    id: "p2",
    tag: "PHASE 02 // 2024 – 2025",
    role: "MERN Stack Developer",
    desc: "Full-stack feature delivery, React web interfaces, state management, and payment portals",
    active: false,
    tagColor: "#7BD0FF",
    progressColor: "#7BD0FF",
    icon: <StepperPhase2Icon className="size-3.5" />,
  },
  {
    id: "p3",
    tag: "ACTIVE // 2025 – PRESENT",
    role: "Software Engineer",
    desc: "NestJS services, Next.js applications, PostgreSQL/Prisma, Redis caching, and real-time workflows",
    active: true,
    tagColor: "#AEC6FF",
    progressColor: "#0070F3",
    icon: <StepperPhase3Icon className="size-3.5" />,
  },
];

interface ContributionItem {
  icon: React.ReactNode;
  text: string;
}

interface CompanyExperience {
  id: string;
  nodeLabel: string;
  nodeIcon: React.ReactNode;
  company: string;
  employmentType: string;
  companySub: string;
  badgeText: string;
  badgeIcon: React.ReactNode;
  currentRole: string;
  currentDates: string;
  isCurrentActive: boolean;
  subRoles: {
    role1: string;
    role2: string;
  };
  subRoleArrow: React.ReactNode;
  techStack: string[];
  contributions: ContributionItem[];
  telemetry: {
    label: string;
    value: string;
  }[];
}

const companiesData: CompanyExperience[] = [
  {
    id: "acquaint",
    nodeLabel: "C1-LOG",
    nodeIcon: <TimelineNodeC1Icon className="size-5" />,
    company: "Acquaint Softtech",
    employmentType: "• Full-Time",
    companySub: "Team Size: 6–8 Developers",
    badgeText: "ENTERPRISE SOLUTIONS",
    badgeIcon: <EnterpriseShieldIcon className="size-3" />,
    currentRole: "Software Engineer",
    currentDates: "(May 2025 — Present)",
    isCurrentActive: true,
    subRoles: {
      role1: "Software Engineer: Jan 2026 — Present",
      role2: "MERN Stack Developer: May 2025 — Dec 2025",
    },
    subRoleArrow: <SubroleArrowC1Icon className="size-2.5" />,
    techStack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Prisma",
      "Socket.IO",
      "WebSockets",
      "Playwright",
    ],
    contributions: [
      {
        icon: <C1ContribModularIcon className="size-3.5 shrink-0 mt-[3px]" />,
        text: "Developed and maintained full-stack web applications using Next.js and NestJS framework with modular service structure.",
      },
      {
        icon: <C1ContribDbOrmIcon className="size-3.5 shrink-0 mt-[3px]" />,
        text: "Designed and integrated REST APIs with PostgreSQL using Prisma ORM for efficient data modeling and schema migrations.",
      },
      {
        icon: <C1ContribCacheRedisIcon className="size-3.5 shrink-0 mt-[3px]" />,
        text: "Implemented multi-tier caching strategies using Redis for session data and frequently accessed application resources.",
      },
      {
        icon: <C1ContribRealtimeSocketIcon className="size-3.5 shrink-0 mt-[3px]" />,
        text: "Built real-time bidirectional communication channels using Socket.IO and WebSockets for live status updates.",
      },
      {
        icon: <C1ContribSecurityMfaIcon className="size-3.5 shrink-0 mt-[3px]" />,
        text: "Integrated TOTP multi-factor authentication (MFA) workflows for enhanced user account security.",
      },
      {
        icon: <C1ContribTestingPlaywrightIcon className="size-3.5 shrink-0 mt-[3px]" />,
        text: "Wrote end-to-end automated tests with Playwright to verify critical application flows and prevent regressions.",
      },
      {
        icon: <C1ContribTeamDiscussionsIcon className="size-3.5 shrink-0 mt-[3px]" />,
        text: "Participated actively in engineering discussions, requirement analysis, and performance optimization.",
      },
    ],
    telemetry: [
      { label: "SECURITY:", value: "TOTP MFA Validated" },
      { label: "REAL-TIME:", value: "Socket.IO & WebSockets" },
      { label: "TESTING:", value: "Playwright E2E Coverage" },
    ],
  },
  {
    id: "hyperlink",
    nodeLabel: "C2-LOG",
    nodeIcon: <TimelineNodeC2Icon className="size-5" />,
    company: "Hyperlink Infosystem",
    employmentType: "• Full-Time",
    companySub: "Team Size: 16–20 Developers",
    badgeText: "MILESTONE: 42 MOS. TENURE",
    badgeIcon: <MilestoneTenureClockIcon className="size-3" />,
    currentRole: "MERN Stack Developer",
    currentDates: "(Jan 2022 — May 2025)",
    isCurrentActive: false,
    subRoles: {
      role1: "MERN Stack Developer: Jan 2024 — May 2025",
      role2: "Node.js Developer: Jan 2022 — Dec 2023",
    },
    subRoleArrow: <SubroleArrowC2Icon className="size-2.5" />,
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Socket.IO",
      "Stripe API",
      "Razorpay",
      "FileZilla",
    ],
    contributions: [
      {
        icon: <C2ContribBackendApisIcon className="size-3.5 shrink-0 mt-[3px]" />,
        text: "Developed robust REST APIs and backend services using Node.js and Express.js supporting high-volume application traffic.",
      },
      {
        icon: <C2ContribWebPortalsIcon className="size-3.5 shrink-0 mt-[3px]" />,
        text: "Built responsive web interfaces, customer portals, and internal admin management panels using React.js.",
      },
      {
        icon: <C2ContribDualDbIcon className="size-3.5 shrink-0 mt-[3px]" />,
        text: "Designed database schemas and optimized queries across dual engines (MongoDB and MySQL) for reliable data persistence.",
      },
      {
        icon: <C2ContribPaymentGatewaysIcon className="size-3.5 shrink-0 mt-[3px]" />,
        text: "Integrated payment gateways (Stripe and Razorpay) with webhook validation for multi-currency transaction handling.",
      },
      {
        icon: <C2ContribTransCommIcon className="size-3.5 shrink-0 mt-[3px]" />,
        text: "Implemented transactional communication pipelines including SMS, email notifications (SendGrid), and push notification services.",
      },
      {
        icon: <C2ContribPerfTuningIcon className="size-3.5 shrink-0 mt-[3px]" />,
        text: "Improved application performance by approximately 30% through query optimization, indexing, and asset bundle tuning.",
      },
      {
        icon: <C2ContribMentorshipIcon className="size-3.5 shrink-0 mt-[3px]" />,
        text: "Mentored 10+ junior developers and engineering trainees on JavaScript/TypeScript fundamentals and development best practices.",
      },
      {
        icon: <C2ContribCloudFilezillaIcon className="size-3.5 shrink-0 mt-[3px]" />,
        text: "Managed application deployments using FileZilla and standard staging/production server workflows.",
      },
    ],
    telemetry: [
      { label: "PERFORMANCE:", value: "~30% Optimization" },
      { label: "PAYMENTS:", value: "Stripe & Razorpay Validated" },
      { label: "MENTORSHIP:", value: "10+ Engineers Mentored" },
    ],
  },
];

export function ExperienceSection() {
  const ref = React.useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section id="experience" ref={ref} className="relative bg-[#0F131D] overflow-hidden">
      {/* Ambient background depth glow (#17:2634) */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "-80px",
          right: "0",
          width: "360px",
          height: "360px",
          background: "rgba(174,198,255,0.05)",
          filter: "blur(40px)",
          borderRadius: "16px",
        }}
        aria-hidden
      />

      <SectionContainer className="py-8 sm:py-10">
        <div className="flex flex-col gap-6 sm:gap-8">

          {/* ── SECTION HEADER (Figma #1:2624 / #17:2624) ── */}
          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease }}
          >
            {/* Monospace Eyebrow Marker */}
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-[2px] bg-[#171B26] border border-[#262A35] w-fit">
              <span className="size-1.5 rounded-full bg-[#7BD0FF] shadow-[0_0_8px_rgba(123,208,255,0.8)]" />
              <span className="text-[#7BD0FF] text-[11px] tracking-[0.1em] uppercase font-mono">
                04 // EXPERIENCE • CAREER TIMELINE
              </span>
            </div>

            {/* Title with highlighted gradient text */}
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[48px] font-semibold tracking-[-0.025em] text-[#DFE2F1] max-w-4xl">
              Building software across{" "}
              <span className="text-[#7BD0FF]">diverse domains and</span>
              <br className="hidden sm:inline" />{" "}
              <span className="text-[#7BD0FF]">problem spaces.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-[14px] sm:text-[16px] leading-[24px] sm:leading-[26px] tracking-[-0.01em] text-[#C1C6D7] max-w-3xl">
              4+ years of continuous engineering experience contributing across frontend, backend, and database
              development in Finance, Healthcare, EdTech, and Food Technology.
            </p>
          </motion.div>

          {/* ── ENGINEERING EVOLUTION BANNER (Figma #1:2633 / #17:2633) ── */}
          <motion.div
            className="relative flex flex-col gap-4 p-6 rounded-lg bg-[#171B26] border border-[#262A35] shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)] overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08, ease }}
          >
            {/* Subtle glow inside banner */}
            <div
              className="pointer-events-none absolute"
              style={{
                top: "-80px",
                right: "0",
                width: "320px",
                height: "320px",
                background: "rgba(174,198,255,0.05)",
                filter: "blur(32px)",
                borderRadius: "12px",
              }}
              aria-hidden
            />

            {/* Banner Title & Telemetry Tags Row */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <EvolutionBannerIcon className="size-3 text-[#7BD0FF]" />
                <span className="text-[#DFE2F1] text-[11px] font-mono tracking-[0.05em] uppercase font-medium">
                  ENGINEERING EVOLUTION &amp; ROLE PROGRESSION
                </span>
              </div>

              {/* Status Badges */}
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { dot: "#7BD0FF", text: "Continuous 4+ Year Promotion Track" },
                  { dot: "#D0BCFF", text: "10+ Engineers Mentored" },
                  { dot: "#0070F3", text: "100% On-Schedule Milestones" },
                ].map((tag) => (
                  <div
                    key={tag.text}
                    className="flex items-center gap-1.5 px-2 py-0.5 rounded-[2px] bg-[#1C1F2A] border border-[#262A35]/50"
                  >
                    <span
                      className="size-1.5 rounded-full shrink-0"
                      style={{ background: tag.dot }}
                    />
                    <span className="text-[#C1C6D7] text-[11px] font-mono font-medium">
                      {tag.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stepper Phase Cards (3 cols) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              {phases.map((phase) => (
                <div
                  key={phase.id}
                  className={`relative flex flex-col justify-between gap-2.5 p-4 rounded-[4px] border transition-all ${
                    phase.active
                      ? "bg-[#262A35] border-[#0070F3]/40 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]"
                      : "bg-[#1C1F2A]/70 border-[#262A35]/60"
                  }`}
                >
                  <div className="flex flex-col gap-1.5">
                    {/* Phase tag row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        {phase.active && (
                          <span className="size-1.5 rounded-full bg-[#7BD0FF] shadow-[0_0_8px_rgba(123,208,255,0.8)]" />
                        )}
                        <span
                          className="text-[11px] font-mono tracking-[0.02em] font-medium"
                          style={{ color: phase.tagColor }}
                        >
                          {phase.tag}
                        </span>
                      </div>
                      <div className="shrink-0">{phase.icon}</div>
                    </div>

                    {/* Role Title */}
                    <span className="text-[#DFE2F1] text-[18px] font-semibold leading-[26px] tracking-[-0.015em]">
                      {phase.role}
                    </span>

                    {/* Description */}
                    <span className="text-[#C1C6D7] text-[13px] leading-[18px]">
                      {phase.desc}
                    </span>
                  </div>

                  {/* Progress indicator bar at bottom */}
                  <div className="pt-2 w-full">
                    <div className="w-full h-1 rounded-full bg-[#313540] overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: "100%",
                          background: phase.progressColor,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── VERTICAL TIMELINE EXPERIENCE LAYOUT (Figma #1:2694 / #17:2694) ── */}
          <div className="relative flex flex-col gap-8">
            {/* Git commit central axis line */}
            <div
              className="absolute left-[31px] top-8 bottom-8 w-[2px] bg-[#313540] hidden sm:block"
              aria-hidden
            />

            {companiesData.map((company, idx) => (
              <motion.div
                key={company.id}
                className="flex items-start gap-6 relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease }}
              >
                {/* Timeline node marker (Desktop) */}
                <div className="hidden sm:flex flex-col items-center pt-1 shrink-0">
                  <div className="relative z-10 flex items-center justify-center size-16 rounded-lg bg-[#262A35] border border-[#313540] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
                    {company.nodeIcon}
                  </div>
                  <span className="text-[#8B90A0] text-[11px] font-mono tracking-[0.02em] mt-1.5">
                    {company.nodeLabel}
                  </span>
                </div>

                {/* Main Technical Container Card */}
                <div className="flex-1 flex flex-col gap-6 p-6 sm:p-8 rounded-lg bg-[#171B26] border border-[#262A35] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden">

                  {/* Company & Current Role Header Block */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-4 border-b border-[#262A35]/60">
                    <div className="flex flex-col gap-1.5">
                      {/* Company Name & Metadata */}
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-[22px] sm:text-[24px] font-semibold leading-[32px] tracking-[-0.02em] text-[#DFE2F1]">
                          {company.company}
                        </h3>
                        <span className="text-[#8B90A0] text-[11px] font-mono">
                          {company.employmentType}
                        </span>
                        <span className="text-[#C1C6D7] text-[11px] font-mono">
                          {company.companySub}
                        </span>
                      </div>

                      {/* Current Role and Dates */}
                      <div className="flex flex-col gap-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[#DFE2F1] text-[17px] sm:text-[18px] font-medium leading-[26px] tracking-[-0.015em]">
                            {company.currentRole}
                          </span>
                          <span className="text-[#7BD0FF] text-[11px] font-mono">
                            {company.currentDates}
                          </span>
                          {company.isCurrentActive && (
                            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-[2px] bg-[#1C1F2A] border border-[#262A35]/50">
                              <span className="size-1.5 rounded-full bg-[#7BD0FF] shadow-[0_0_8px_rgba(123,208,255,0.8)]" />
                              <span className="text-[#DFE2F1] text-[11px] font-mono font-medium">
                                Current Active
                              </span>
                            </span>
                          )}
                        </div>

                        {/* Progression Sub-role Hierarchy */}
                        <div className="flex items-center gap-1.5 pt-0.5 text-[#8B90A0] text-[11px] font-mono">
                          {company.subRoleArrow}
                          <span>{company.subRoles.role1}</span>
                          <span>|</span>
                          <span>{company.subRoles.role2}</span>
                        </div>
                      </div>
                    </div>

                    {/* Cluster / Milestone Tag Pill */}
                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] bg-[#0A0E18] border border-[#262A35] shrink-0 self-start shadow-inner">
                      {company.badgeIcon}
                      <span className="text-[#C1C6D7] text-[11px] tracking-[0.02em] font-mono whitespace-nowrap">
                        {company.badgeText}
                      </span>
                    </div>
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {company.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-[2px] bg-[#1C1F2A] border border-[#262A35]/50 text-[#DFE2F1] text-[11px] font-mono font-medium tracking-[0.02em]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Core Engineering Contributions List */}
                  <div className="flex flex-col gap-2.5">
                    <span className="text-[#8B90A0] text-[11px] tracking-[0.05em] uppercase font-mono">
                      CORE ENGINEERING CONTRIBUTIONS
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {company.contributions.map((item, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-start gap-2.5 p-2.5 rounded-[4px] bg-[#1C1F2A]/60 border border-[#262A35]/40 hover:bg-[#1C1F2A] transition-colors"
                        >
                          <div className="shrink-0">{item.icon}</div>
                          <p className="text-[13px] sm:text-[14px] leading-[20px] sm:leading-[22px] tracking-[-0.005em] text-[#DFE2F1]">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Telemetry Verification Pills */}
                  <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#262A35]/40">
                    {company.telemetry.map((pill) => (
                      <div
                        key={pill.label}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-[#262A35] border border-[#313540]/60"
                      >
                        <span className="size-1.5 rounded-full bg-[#7BD0FF] shadow-[0_0_8px_rgba(123,208,255,0.8)] shrink-0" />
                        <span className="text-[#C1C6D7] text-[11px] font-mono tracking-[0.05em] uppercase">
                          {pill.label}
                        </span>
                        <span className="text-[#DFE2F1] text-[11px] font-mono font-semibold tracking-[0.02em]">
                          {pill.value}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* ── RECRUITER SUMMARY & REFERENCES BANNER (Figma #1:2939 / #17:2939) ── */}
          <motion.div
            className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 p-6 sm:p-8 rounded-lg bg-[#171B26] border border-[#262A35] shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)] overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.55, ease }}
          >
            {/* Ambient Lighting Glow */}
            <div
              className="pointer-events-none absolute"
              style={{
                top: "-42px",
                left: "-48px",
                width: "256px",
                height: "256px",
                background: "rgba(0,166,224,0.10)",
                filter: "blur(32px)",
                borderRadius: "12px",
              }}
              aria-hidden
            />

            <div className="relative flex flex-col gap-2 max-w-3xl">
              <div className="flex items-center gap-1.5">
                <RecruiterSummaryDocIcon className="size-3.5" />
                <span className="text-[#7BD0FF] text-[11px] tracking-[0.1em] uppercase font-mono font-medium">
                  RECRUITER SUMMARY &amp; REFERENCES
                </span>
              </div>
              <p className="text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] tracking-[-0.01em] text-[#DFE2F1]">
                Ready to deliver immediate technical impact across full-stack architectures, high-load APIs,
                and real-time distributed platforms. Code samples, architecture specs, and recommendations available.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-[#7BD0FF] shadow-[0_0_8px_rgba(123,208,255,0.8)]" />
                  <span className="text-[#8B90A0] text-[11px] font-mono">
                    Notice: Immediate / Negotiable
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GlobalRemoteGlobeIcon className="size-3" />
                  <span className="text-[#8B90A0] text-[11px] font-mono">
                    Global Remote / Hybrid
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="relative flex items-center gap-2.5 shrink-0 flex-wrap w-full sm:w-auto">
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-[2px] bg-[#0070F3] text-white text-[12px] font-medium hover:bg-[#0060D0] transition-colors shadow-[0_0_15px_rgba(0,112,243,0.3)]"
              >
                <DownloadResumeTrayIcon className="size-3" />
                <span>Download Full Resume</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-[2px] bg-[#1C1F2A] border border-[#313540] text-[#DFE2F1] text-[12px] font-medium hover:bg-[#262A35] transition-colors"
              >
                <ContactMailEnvelopeIcon className="size-3" />
                <span>Contact Neel Patel</span>
              </a>
            </div>
          </motion.div>

        </div>
      </SectionContainer>
    </section>
  );
}
