"use client";

import * as React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { siteConfig } from "@/config/site";
import {
  LockConfidentialityIcon,
  ShieldPrivacyIcon,
  BankFinanceIcon,
  ZapTradingIcon,
  ChartPricesIcon,
  LockTotpIcon,
  DatabaseRedisIcon,
  EyeOverviewIcon,
  ArrowArchFlowIcon,
  PipelineFlowIcon,
  PipelineClientUiIcon,
  PipelineArrow1Icon,
  PipelineApiGatewayIcon,
  PipelineArrow2Icon,
  PipelineServicesCacheIcon,
  PipelineArrow3Icon,
  PipelineRealtimeFeedIcon,
  SyncRefreshIcon,
  EdtechGraduationIcon,
  VideoQuestionsIcon,
  QuizProgressIcon,
  ChatCommunicationIcon,
  ArrowProject2Icon,
  PosFoodIcon,
  QrTableIcon,
  SplitPaymentsIcon,
  CalendarReservationsIcon,
  ArrowProject3Icon,
  HealthCrossIcon,
  CalendarCliniciansIcon,
  ShieldSchedulingIcon,
  VideoConsultationIcon,
  ArrowProject4Icon,
  DownloadResumeRecruiterIcon,
  MailGetInTouchIcon,
} from "@/components/icons/ProjectFigmaIcons";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

// ─── Types ────────────────────────────────────────────────────────────────────

interface ModalSheetData {
  tag: string;
  title: string;
  desc: string;
  innovations?: string[];
}

interface SecondaryProject {
  id: string;
  sysId: string;
  domainLabel: string;
  domainIcon: React.ReactNode;
  title: string;
  desc: string;
  ctaLabel: string;
  arrowIcon: React.ReactNode;
  modalSheet: ModalSheetData;
  features: {
    icon: React.ReactNode;
    text: string;
  }[];
  metrics: { label: string; value: string }[];
  techStack: string[];
}

const flagshipModal: ModalSheetData = {
  tag: "ARCHITECTURAL DEEP DIVE",
  title: "Real-Time Multi-Asset Trading Platform",
  desc: "Engineered for sub-15ms p99 execution SLAs. The engine decouples ingestion queues from state storage via dual-ring memory buffers and streams trade ledger state via WebSocket clusters.",
  innovations: [
    "Deterministic sequence matching with zero memory leaks under 14k concurrent order bursts.",
    "Hot-swappable Redis replica fallback preventing dropped client socket subscriptions.",
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const featuredTech = [
  "Next.js",
  "NestJS",
  "TypeScript",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "Socket.IO",
  "WebSockets",
];

const secondaryProjects: SecondaryProject[] = [
  {
    id: "lms",
    sysId: "PROJECT 02",
    domainLabel: "Education • EdTech & Video",
    domainIcon: <EdtechGraduationIcon className="shrink-0" />,
    title: "Interactive Learning Management\nPlatform",
    desc: "Adaptive online education platform delivering backend services, website features, timestamp-based questions, course quizzes, student progress tracking, and real-time student-instructor chat.",
    ctaLabel: "View Project Highlights",
    arrowIcon: <ArrowProject2Icon className="shrink-0" />,
    modalSheet: {
      tag: "EDTECH ARCHITECTURE",
      title: "Interactive Learning Platform",
      desc: "Implemented custom conflict resolution across 500+ student annotations on SVG interactive boards using Agora RTC audio-visual synchronization channels.",
    },
    features: [
      {
        icon: <VideoQuestionsIcon className="shrink-0 mt-0.5" />,
        text: "Timestamp-based interactive video questions & gates",
      },
      {
        icon: <QuizProgressIcon className="shrink-0 mt-0.5" />,
        text: "Comprehensive course quiz modules & progress tracking",
      },
      {
        icon: <ChatCommunicationIcon className="shrink-0 mt-0.5" />,
        text: "Real-time student and proctor communication channels",
      },
    ],
    metrics: [
      { label: "ARCHITECTURE", value: "REST & Sockets" },
      { label: "KEY FOCUS", value: "Backend & API" },
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
  },
  {
    id: "restaurant",
    sysId: "PROJECT 03",
    domainLabel: "Food Technology • POS & Hospitality",
    domainIcon: <PosFoodIcon className="shrink-0" />,
    title: "Multi-Restaurant Ordering & Table\nManagement",
    desc: "Omnichannel platform coordinating touchless QR table ordering, real-time kitchen order updates, future reservation scheduling, flexible bill splitting, and full restaurant/admin management portals.",
    ctaLabel: "View Project Highlights",
    arrowIcon: <ArrowProject3Icon className="shrink-0" />,
    modalSheet: {
      tag: "POS SYSTEM DESIGN",
      title: "Multi-Restaurant Ordering Engine",
      desc: "Architected a dual-phase lock pattern for itemized receipt split settlements, eliminating race conditions across synchronized simultaneous bill payments.",
    },
    features: [
      {
        icon: <QrTableIcon className="shrink-0 mt-0.5" />,
        text: "QR code table ordering & real-time order state progression",
      },
      {
        icon: <SplitPaymentsIcon className="shrink-0 mt-0.5" />,
        text: "Split payments: Equal, percentage, itemized, and custom split",
      },
      {
        icon: <CalendarReservationsIcon className="shrink-0 mt-0.5" />,
        text: "Future table reservations & dedicated admin management panel",
      },
    ],
    metrics: [
      { label: "ROLE FOCUS", value: "Backend & Admin" },
      { label: "DATA MODEL", value: "Relational Schema" },
    ],
    techStack: ["Node.js", "Express.js", "MySQL", "Socket.IO", "Admin Panel"],
  },
  {
    id: "healthcare",
    sysId: "PROJECT 04",
    domainLabel: "Healthcare • Consultations & Telehealth",
    domainIcon: <HealthCrossIcon className="shrink-0" />,
    title: "Healthcare Consultation & Scheduling\nEngine",
    desc: "Telehealth consultation hub managing appointment bookings, multi-role clinician availability (doctors, nurses, consultants), double-booking prevention logic, and video/audio consultation encounters.",
    ctaLabel: "View Project Highlights",
    arrowIcon: <ArrowProject4Icon className="shrink-0" />,
    modalSheet: {
      tag: "CLINICAL SECURITY BRIEF",
      title: "Healthcare Consultation Engine",
      desc: "HIPAA/SOC-2 compliant audio-video signaling with zero patient identifiable data on the client cache. Consult tokens expire dynamically after each doctor sign-off.",
    },
    features: [
      {
        icon: <CalendarCliniciansIcon className="shrink-0 mt-0.5" />,
        text: "Multi-role doctor, nurse, and consultant availability calendars",
      },
      {
        icon: <ShieldSchedulingIcon className="shrink-0 mt-0.5" />,
        text: "Deterministic double-booking prevention scheduling logic",
      },
      {
        icon: <VideoConsultationIcon className="shrink-0 mt-0.5" />,
        text: "Real-time encrypted video and audio consultation sessions",
      },
    ],
    metrics: [
      { label: "SCHEDULING", value: "Conflict-Free" },
      { label: "REAL-TIME MEDIA", value: "Agora RTC" },
    ],
    techStack: ["Node.js", "Express.js", "MySQL", "PHP CodeIgniter", "Agora SDK"],
  },
];

// ─── Secondary Project Card Component ─────────────────────────────────────────

function SecondaryCard({
  proj,
  index,
  onOpenModal,
}: {
  proj: SecondaryProject;
  index: number;
  onOpenModal: (data: ModalSheetData) => void;
}) {
  return (
    <motion.div
      className="flex flex-col justify-between bg-[#171B26] rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] border border-[#262A35]/40 hover:border-[#262A35] transition-all duration-200 overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease }}
    >
      <div className="flex flex-col">
        {/* Top ribbon overlay */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#0A0E18] border-b border-[#262A35]/30">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#1C1F2A] shrink-0">
            {proj.domainIcon}
            <span className="text-[#DFE2F1] text-[11px] font-mono whitespace-nowrap">
              {proj.domainLabel}
            </span>
          </div>
          <span className="text-[#8B90A0] text-[11px] font-mono shrink-0 whitespace-nowrap">
            {proj.sysId}
          </span>
        </div>

        {/* Content body */}
        <div className="p-6 flex flex-col gap-4">
          {/* Title & Description */}
          <div className="flex flex-col gap-2">
            <h3 className="text-[#DFE2F1] text-[18px] font-semibold leading-[26px] tracking-[-0.015em] whitespace-pre-line">
              {proj.title}
            </h3>
            <p className="text-[#C1C6D7] text-[13px] leading-[21px]">
              {proj.desc}
            </p>
          </div>

          {/* Features with custom icons */}
          <div className="flex flex-col gap-2.5 py-1">
            {proj.features.map((f, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="shrink-0 flex items-center justify-center">{f.icon}</span>
                <span className="text-[#C1C6D7] text-[13px] leading-[18px]">{f.text}</span>
              </div>
            ))}
          </div>

          {/* Dual Metrics Shelf */}
          <div className="grid grid-cols-2 gap-2 p-3 rounded bg-[#0A0E18] border border-[#262A35]/40">
            {proj.metrics.map((m) => (
              <div key={m.label} className="flex flex-col items-center justify-center text-center">
                <span className="text-[#8B90A0] text-[10px] tracking-wider uppercase font-mono">
                  {m.label}
                </span>
                <span className="text-[#7BD0FF] text-[13px] font-semibold tracking-tight">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {proj.techStack.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-[2px] bg-[#262A35] text-[#DFE2F1] text-[11px] font-mono leading-tight tracking-[0.02em]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer button */}
      <div className="px-6 pb-6 pt-0">
        <button
          type="button"
          onClick={() => onOpenModal(proj.modalSheet)}
          className="w-full flex items-center justify-between px-4 py-2.5 rounded-[2px] bg-[#262A35] hover:bg-[#323746] text-[#DFE2F1] text-[12px] font-mono font-medium transition-colors"
          aria-label={proj.ctaLabel}
        >
          <span>{proj.ctaLabel}</span>
          {proj.arrowIcon}
        </button>
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function ProfessionalProjectsSection() {
  const ref = React.useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const [activeModal, setActiveModal] = React.useState<ModalSheetData | null>(null);

  return (
    <section id="projects" ref={ref} className="relative bg-[#0F131D] overflow-hidden scroll-mt-16">
      {/* Ambient glow matching portfolio aesthetic */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "-80px",
          right: "0",
          width: "384px",
          height: "384px",
          background: "rgba(123,208,255,0.04)",
          filter: "blur(40px)",
          borderRadius: "12px",
        }}
        aria-hidden
      />

      <SectionContainer className="py-8 sm:py-10 flex flex-col gap-6 sm:gap-8">

        {/* ── SECTION HEADER & ARCHITECTURAL FRAMING ── */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease }}
        >
          {/* Eyebrow row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#7BD0FF] shadow-[0_0_8px_rgba(123,208,255,0.8)]" />
              <span className="text-[#7BD0FF] text-[11px] font-medium tracking-[0.05em] uppercase font-mono">
                05 // SELECTED WORK • PRODUCTION CASE STUDIES
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <LockConfidentialityIcon className="shrink-0" />
              <span className="text-[#8B90A0] text-[11px] font-mono tracking-[0.02em]">
                ENTERPRISE CONFIDENTIALITY RESPECTED
              </span>
            </div>
          </div>

          {/* Heading container */}
          <div className="flex flex-col gap-1 max-w-[800px]">
            <h2 className="text-[32px] sm:text-[40px] leading-[40px] sm:leading-[48px] font-semibold tracking-[-0.025em] text-[#DFE2F1]">
              Systems I&apos;ve{" "}
              <span
                className="bg-clip-text text-transparent font-semibold"
                style={{
                  backgroundImage: "linear-gradient(90deg, #7BD0FF 0%, #0070F3 100%)",
                }}
              >
                helped build.
              </span>
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[26px] tracking-[-0.01em] text-[#C1C6D7]">
              Production applications solving real business problems across multiple domains.
            </p>
          </div>

          {/* Enterprise Redaction & Compliance Banner */}
          <motion.div
            className="flex items-center gap-4 p-4 rounded-lg bg-[#171B26] border border-[#262A35]/50 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            <div className="flex items-center justify-center size-9 rounded bg-[#1C1F2A] border border-[#262A35]/50 shrink-0">
              <ShieldPrivacyIcon className="shrink-0" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[#7BD0FF] text-[11px] tracking-[0.05em] uppercase font-semibold font-mono">
                ENTERPRISE PRIVACY NOTICE:
              </span>
              <p className="text-[#DFE2F1] text-[13px] leading-[18px]">
                Private enterprise applications built across collaborative engineering teams. Proprietary client identifiers and implementation details are redacted to respect confidentiality.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── PROJECT 1: FEATURED FLAGSHIP HERO CARD ── */}
        <motion.div
          className="relative flex flex-col bg-[#171B26] rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] border border-[#262A35]/50 overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.12, ease }}
        >
          {/* Card Top Bar: Monospaced System Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-[#0A0E18] border-b border-[#262A35]/50">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#262A35]">
                <BankFinanceIcon className="shrink-0" />
                <span className="text-[#DFE2F1] text-[11px] font-mono font-medium tracking-[0.02em]">
                  Finance • Trading Systems
                </span>
              </div>
              <span className="text-[#8B90A0] text-[11px] font-mono">
                {"// ENTERPRISE PRODUCTION APPLICATION"}
              </span>
            </div>
            <span className="text-[#7BD0FF] text-[11px] font-mono tracking-wider font-medium">
              COLLABORATIVE SYSTEM ARCHITECTURE
            </span>
          </div>

          {/* Card Main Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">

            {/* Left Column (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {/* Title & overview */}
              <div className="flex flex-col gap-2">
                <span className="text-[#7BD0FF] text-[11px] font-mono font-medium tracking-[0.02em] uppercase">
                  FEATURED SYSTEM • FULL-STACK &amp; ARCHITECTURAL CONTRIBUTOR
                </span>
                <h3 className="text-[24px] font-semibold leading-[32px] tracking-[-0.025em] text-[#DFE2F1]">
                  Real-Time Multi-Asset Trading Platform
                </h3>
                <p className="text-[14px] leading-[22px] tracking-[-0.01em] text-[#C1C6D7]">
                  Private real-time financial trading platform supporting trading workflows across Bonds, FX, and Swaps.
                </p>

                {/* Contribution callout box */}
                <div className="p-3.5 rounded bg-[#0A0E18] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border border-[#262A35]/50 flex flex-col gap-1 mt-1">
                  <span className="text-[#7BD0FF] text-[11px] font-mono font-semibold tracking-[0.05em]">
                    MY CONTRIBUTION:
                  </span>
                  <p className="text-[#DFE2F1] text-[12px] leading-[18px]">
                    Contributed across frontend and backend development, including real-time workflows, API development, database operations, caching, authentication, and trading-related features.
                  </p>
                </div>
              </div>

              {/* Capability bullet points with custom Figma icons */}
              <div className="flex flex-col gap-2.5 pt-1">
                <div className="flex items-start gap-2.5">
                  <span className="shrink-0 flex items-center justify-center mt-0.5">
                    <ZapTradingIcon />
                  </span>
                  <span className="text-[#C1C6D7] text-[13px] leading-[18px]">
                    Real-time trading workflows, buy/sell operations &amp; negotiation workflows
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="shrink-0 flex items-center justify-center mt-1">
                    <ChartPricesIcon />
                  </span>
                  <span className="text-[#C1C6D7] text-[13px] leading-[18px]">
                    Real-time price updates &amp; asset-specific trading engines
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="shrink-0 flex items-center justify-center mt-0.5">
                    <LockTotpIcon />
                  </span>
                  <span className="text-[#C1C6D7] text-[13px] leading-[18px]">
                    TOTP-based MFA for multi-factor account authorization
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="shrink-0 flex items-center justify-center mt-0.5">
                    <DatabaseRedisIcon />
                  </span>
                  <span className="text-[#C1C6D7] text-[13px] leading-[18px]">
                    Redis-backed frequently accessed data &amp; PostgreSQL persistence
                  </span>
                </div>
              </div>

              {/* Tech stack */}
              <div className="flex flex-col gap-2">
                <span className="text-[#8B90A0] text-[11px] tracking-[0.05em] uppercase font-mono">
                  ENGINEERED WITH
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {featuredTech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-[2px] bg-[#262A35] text-[#DFE2F1] text-[11px] font-mono leading-none tracking-[0.02em]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  type="button"
                  onClick={() => setActiveModal(flagshipModal)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded bg-[#0070F3] text-[#002E6B] text-[12px] font-medium hover:bg-[#2085ff] transition-colors shadow-sm min-h-[40px]"
                >
                  <EyeOverviewIcon className="shrink-0" />
                  <span>Open System Overview</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModal(flagshipModal)}
                  className="flex items-center gap-1.5 text-[#DFE2F1] hover:text-white text-[12px] font-mono font-medium transition-colors"
                >
                  <span>View Architectural Flow</span>
                  <ArrowArchFlowIcon className="shrink-0" />
                </button>
              </div>
            </div>

            {/* Right Column: Interactive System Architecture Diagram & Live Telemetry (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {/* 4 Metric cards row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-lg bg-[#0A0E18] border border-[#262A35]/50">
                {[
                  { label: "PERFORMANCE", value: "Low-Latency", sub: "Optimized Workflows" },
                  { label: "STATE DELIVERY", value: "Real-Time", sub: "Bi-directional sync" },
                  { label: "ARCHITECTURE", value: "Event-Driven", sub: "Decoupled microservices" },
                  { label: "INTEGRITY", value: "Type-Safe", sub: "Strict end-to-end schemas" },
                ].map((kpi) => (
                  <div key={kpi.label} className="flex flex-col gap-1 text-left">
                    <span className="text-[#8B90A0] text-[10px] tracking-wider uppercase font-mono">
                      {kpi.label}
                    </span>
                    <span className="text-[#DFE2F1] text-[16px] font-semibold leading-[24px]">
                      {kpi.value}
                    </span>
                    <span className="text-[#8B90A0] text-[11px] leading-[15px]">{kpi.sub}</span>
                  </div>
                ))}
              </div>

              {/* Conceptual Execution Pipeline box */}
              <div className="flex flex-col gap-4 p-5 rounded-lg bg-[#0A0E18] border border-[#262A35]/50">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PipelineFlowIcon className="shrink-0" />
                    <span className="text-[#DFE2F1] text-[11px] tracking-[0.05em] uppercase font-mono font-semibold">
                      CONCEPTUAL EXECUTION PIPELINE
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#1C1F2A] border border-[#262A35] text-[#7BD0FF] text-[10px] font-mono">
                    END-TO-END FLOW
                  </span>
                </div>

                {/* 4 Flow nodes with connecting arrows */}
                <div className="grid grid-cols-1 sm:grid-cols-7 items-center gap-2 py-2">
                  {/* Step 1: Client UI */}
                  <div className="sm:col-span-1 flex flex-col items-center justify-center text-center p-3 rounded bg-[#171B26] border border-[#262A35]/30 min-h-[92px]">
                    <div className="mb-2 flex items-center justify-center">
                      <PipelineClientUiIcon className="shrink-0" />
                    </div>
                    <span className="text-[#DFE2F1] text-[12px] font-semibold leading-[16px]">Client UI</span>
                    <span className="text-[#8B90A0] text-[10px] font-mono mt-0.5">Next.js</span>
                  </div>

                  {/* Arrow 1 */}
                  <div className="hidden sm:flex justify-center items-center">
                    <PipelineArrow1Icon className="shrink-0" />
                  </div>

                  {/* Step 2: API Gateway */}
                  <div className="sm:col-span-1 flex flex-col items-center justify-center text-center p-3 rounded bg-[#171B26] border border-[#262A35]/30 min-h-[92px]">
                    <div className="mb-1.5 flex items-center justify-center">
                      <PipelineApiGatewayIcon className="shrink-0" />
                    </div>
                    <span className="text-[#DFE2F1] text-[12px] font-semibold leading-[16px]">API Gateway</span>
                    <span className="text-[#8B90A0] text-[10px] font-mono mt-0.5">NestJS</span>
                  </div>

                  {/* Arrow 2 */}
                  <div className="hidden sm:flex justify-center items-center">
                    <PipelineArrow2Icon className="shrink-0" />
                  </div>

                  {/* Step 3: Services & Cache */}
                  <div className="sm:col-span-1 flex flex-col items-center justify-center text-center p-3 rounded bg-[#171B26] border border-[#262A35]/30 min-h-[92px]">
                    <div className="mb-1.5 flex items-center justify-center">
                      <PipelineServicesCacheIcon className="shrink-0" />
                    </div>
                    <span className="text-[#DFE2F1] text-[12px] font-semibold leading-[16px] whitespace-pre-line text-center">
                      {"Services &\nCache"}
                    </span>
                    <span className="text-[#8B90A0] text-[10px] font-mono mt-0.5 whitespace-nowrap text-center">
                      Redis &amp; Postgres
                    </span>
                  </div>

                  {/* Arrow 3 */}
                  <div className="hidden sm:flex justify-center items-center">
                    <PipelineArrow3Icon className="shrink-0" />
                  </div>

                  {/* Step 4: Real-Time Feed */}
                  <div className="sm:col-span-1 flex flex-col items-center justify-center text-center p-3 rounded bg-[#171B26] border border-[#262A35]/30 min-h-[92px]">
                    <div className="mb-1.5 flex items-center justify-center">
                      <PipelineRealtimeFeedIcon className="shrink-0" />
                    </div>
                    <span className="text-[#DFE2F1] text-[12px] font-semibold leading-[16px] whitespace-pre-line text-center">
                      {"Real-Time\nFeed"}
                    </span>
                    <span className="text-[#8B90A0] text-[10px] font-mono mt-0.5 text-center">
                      Socket.IO
                    </span>
                  </div>
                </div>

                {/* Sub-pipeline caption with sync icon */}
                <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 rounded bg-[#171B26] border border-[#262A35]/30">
                  <div className="flex items-center gap-2">
                    <SyncRefreshIcon className="shrink-0" />
                    <span className="text-[#DFE2F1] text-[11px] font-mono">
                      High-level architecture: Client UI → API Gateway → Services &amp; Cache → Real-Time Feed
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#1C2834] text-[#7BD0FF] text-[10px] font-mono shrink-0">
                    <span className="size-1.5 rounded-full bg-[#7BD0FF]" />
                    <span>State Managed</span>
                  </div>
                </div>

                {/* Specs footer */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
                  <span className="text-[#8B90A0] text-[10px] font-mono">
                    AUTHENTICATION: TOTP MULTI-FACTOR DUAL-CUSTODY
                  </span>
                  <span className="text-[#8B90A0] text-[10px] font-mono">
                    PERSISTENCE: POSTGRESQL + REDIS CACHE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 3-COLUMN SECONDARY PRODUCTION SYSTEMS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProjects.map((proj, idx) => (
            <SecondaryCard key={proj.id} proj={proj} index={idx} onOpenModal={setActiveModal} />
          ))}
        </div>

        {/* ── RECRUITER & VALUE ACCELERATOR BANNER ── */}
        <motion.div
          className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 p-6 rounded-lg bg-[#171B26] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] border border-[#262A35]/50"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.55, ease }}
        >
          <div className="flex flex-col gap-1.5 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#7BD0FF] shadow-[0_0_8px_rgba(123,208,255,0.8)]" />
              <span className="text-[#7BD0FF] text-[11px] tracking-[0.05em] uppercase font-mono font-medium">
                OPEN FOR TECHNICAL COLLABORATION &amp; ROLES
              </span>
            </div>
            <h3 className="text-[#DFE2F1] text-[18px] font-semibold leading-[26px] tracking-[-0.015em]">
              Interested in discussing these projects or technical challenges?
            </h3>
            <p className="text-[#DFE2F1] text-[13px] leading-[20px]">
              I regularly discuss system design, database architecture, real-time workflows, and production trade-offs. Let&apos;s connect.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Neel_Patel_Resume.pdf"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#262A35] hover:bg-[#323746] border border-[#262A35] text-[#DFE2F1] text-[12px] font-medium transition-colors min-h-[40px]"
            >
              <DownloadResumeRecruiterIcon className="shrink-0" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#0070F3] hover:bg-[#2085ff] text-[#002E6B] text-[12px] font-medium transition-colors shadow-sm min-h-[40px]"
            >
              <MailGetInTouchIcon className="shrink-0" />
              <span>Get In Touch</span>
            </a>
          </div>
        </motion.div>

      </SectionContainer>

      {/* ── MODAL SHEET FOR ARCHITECTURAL DRILL-DOWN ── */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ y: "100%", opacity: 0.9 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0.9 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full sm:max-w-lg bg-[#1C1F2A] border border-[#262A35] rounded-t-2xl sm:rounded-2xl p-6 shadow-2xl flex flex-col gap-4 text-left max-h-[85vh] overflow-y-auto"
            >
              {/* Grab bar */}
              <div className="w-10 h-1 rounded-full bg-[#313540] mx-auto mb-1 shrink-0" />

              {/* Header bar */}
              <div className="flex items-center justify-between gap-4">
                <span className="text-[#7BD0FF] text-xs font-mono font-semibold tracking-wider uppercase">
                  {activeModal.tag}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="p-1.5 rounded bg-[#262A35] hover:bg-[#313540] text-[#C1C6D7] transition-colors"
                  aria-label="Close modal sheet"
                >
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Title */}
              <h3 className="text-[#DFE2F1] text-lg font-semibold leading-snug">
                {activeModal.title}
              </h3>

              {/* Description */}
              <p className="text-[#C1C6D7] text-sm leading-relaxed whitespace-pre-line">
                {activeModal.desc}
              </p>

              {/* Innovations if present */}
              {activeModal.innovations && activeModal.innovations.length > 0 && (
                <div className="p-3.5 rounded bg-[#0A0E18] border border-[#262A35] flex flex-col gap-2">
                  <span className="text-[#7BD0FF] text-xs font-mono font-semibold uppercase">
                    CORE INNOVATIONS:
                  </span>
                  {activeModal.innovations.map((item, idx) => (
                    <p key={idx} className="text-[#C1C6D7] text-xs leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              )}

              {/* Action button */}
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-full py-2.5 px-4 rounded bg-[#0070F3] hover:bg-[#2085ff] text-[#002E6B] text-xs font-medium transition-colors mt-2"
              >
                {activeModal.innovations ? "Return to Portfolio" : "Close Details"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
