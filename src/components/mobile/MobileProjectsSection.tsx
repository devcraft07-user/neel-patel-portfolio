"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AccountTreeIcon,
  DesktopWindowsIcon,
  DnsServerIcon,
  StorageServerIcon,
  HubNetworkIcon,
  TrendingFlatIcon,
  BoltZapIcon,
  SyncRefreshIcon,
  VerifiedUserIcon,
  ArrowForwardIcon,
  VisibilityEyeIcon,
  CloseModalIcon,
} from "@/components/icons/StitchMobileIcons";

interface ProjectModalData {
  id: string;
  category: string;
  title: string;
  overview: string;
  innovationsTitle?: string;
  innovations?: string[];
}

const modalData: Record<string, ProjectModalData> = {
  "modal-p1": {
    id: "modal-p1",
    category: "ARCHITECTURAL DEEP DIVE",
    title: "Real-Time Multi-Asset Trading Platform",
    overview:
      "Engineered for sub-15ms p99 execution SLAs. The engine decouples ingestion queues from state storage via dual-ring memory buffers and streams trade ledger state via WebSocket clusters.",
    innovationsTitle: "CORE INNOVATIONS:",
    innovations: [
      "Deterministic sequence matching with zero memory leaks under 14k concurrent order bursts.",
      "Hot-swappable Redis replica fallback preventing dropped client socket subscriptions.",
    ],
  },
  "modal-p2": {
    id: "modal-p2",
    category: "EDTECH ARCHITECTURE",
    title: "Interactive Learning Platform",
    overview:
      "Implemented custom conflict resolution across 500+ student annotations on SVG interactive boards using Agora RTC audio-visual synchronization channels.",
  },
  "modal-p3": {
    id: "modal-p3",
    category: "HOSPITALITY POS ENGINE",
    title: "Multi-Restaurant Table Management",
    overview:
      "Solves the table-split billing collision problem via transactional Postgres locking, allowing up to 12 guests to adjust live cart portions concurrently without race conditions.",
  },
  "modal-p4": {
    id: "modal-p4",
    category: "CLINICAL SECURITY BRIEF",
    title: "Healthcare Consultation Engine",
    overview:
      "HIPAA/SOC-2 compliant audio-video signaling with zero patient identifiable data on the client cache. Consult tokens expire dynamically after each doctor sign-off.",
  },
};

export function MobileProjectsSection() {
  const [activeModalId, setActiveModalId] = React.useState<string | null>(null);

  const activeProject = activeModalId ? modalData[activeModalId] : null;

  return (
    <>
      <section
        id="mobile-projects"
        className="flex flex-col gap-4 px-4 py-8 scroll-mt-16 bg-[#0F131D]"
      >
        {/* Section Header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[12px] font-semibold text-[#00D7F4]">
              04 // SELECTED WORK
            </span>
            <span className="font-mono text-[10px] text-[#8B90A0] bg-[#262A35] px-2 py-0.5 rounded-full border border-[#313540]">
              CONFIDENTIAL
            </span>
          </div>
          <h2 className="text-[26px] font-semibold leading-[32px] tracking-[-0.015em] text-[#DFE2F1]">
            Systems I&apos;ve helped build.
          </h2>
          <p className="text-[14px] leading-[20px] text-[#C1C6D7] mt-1">
            Private enterprise applications built across collaborative engineering teams. Proprietary client identifiers and implementation details are redacted to respect confidentiality.
          </p>
        </div>

        {/* PROJECT 1: FLAGSHIP CARD */}
        <article className="bg-[#1C1F2A] rounded-xl p-4 flex flex-col gap-4 shadow-md border border-[#262A35]/60 relative overflow-hidden">
          <div
            className="absolute -top-12 -right-12 w-32 h-32 bg-[#0070F3]/10 rounded-full blur-2xl pointer-events-none"
            aria-hidden
          />
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#00D7F4] font-medium tracking-wide bg-[#262A35] px-2.5 py-1 rounded-full">
                Finance • Trading Systems
              </span>
              <span className="flex items-center gap-1 font-mono text-[11px] text-[#C1C6D7]">
                <span className="size-1.5 rounded-full bg-[#00D7F4]" /> Active Platform
              </span>
            </div>
            <h3 className="text-[18px] font-semibold text-[#DFE2F1] leading-[26px]">
              Real-Time Multi-Asset Trading Platform
            </h3>
            <p className="text-[14px] text-[#DFE2F1] font-medium leading-[20px]">
              Private real-time financial trading platform supporting trading workflows across Bonds, FX, and Swaps.
            </p>
            <p className="text-[13px] text-[#C1C6D7] leading-[19px]">
              Contributed across frontend and backend development, including real-time workflows, API development, database operations, caching, authentication, and trading-related features.
            </p>
          </div>

          {/* 4 Feature Chips */}
          <div className="grid grid-cols-2 gap-1.5 bg-[#0A0E18] p-2 rounded-lg border border-[#262A35]/40">
            <div className="flex items-center gap-1.5 p-2 bg-[#262A35]/40 rounded">
              <BoltZapIcon className="size-4 text-[#00D7F4] shrink-0" />
              <span className="font-mono text-[11px] text-[#DFE2F1]">Low-Latency Workflows</span>
            </div>
            <div className="flex items-center gap-1.5 p-2 bg-[#262A35]/40 rounded">
              <SyncRefreshIcon className="size-4 text-[#AEC6FF] shrink-0" />
              <span className="font-mono text-[11px] text-[#DFE2F1]">Real-Time Updates</span>
            </div>
            <div className="flex items-center gap-1.5 p-2 bg-[#262A35]/40 rounded">
              <HubNetworkIcon className="size-4 text-[#D0BCFF] shrink-0" />
              <span className="font-mono text-[11px] text-[#DFE2F1]">Event-Driven</span>
            </div>
            <div className="flex items-center gap-1.5 p-2 bg-[#262A35]/40 rounded">
              <VerifiedUserIcon className="size-4 text-[#00D7F4] shrink-0" />
              <span className="font-mono text-[11px] text-[#DFE2F1]">Type-Safe</span>
            </div>
          </div>

          {/* Stream Processing Architecture */}
          <div className="bg-[#171B26] p-3 rounded-lg flex flex-col gap-2 border border-[#262A35]/40">
            <span className="font-mono text-[10px] text-[#C1C6D7] uppercase tracking-wider flex items-center gap-1.5">
              <AccountTreeIcon className="size-3.5 text-[#00D7F4]" /> Stream Processing Architecture
            </span>
            <div className="flex items-center justify-between text-center overflow-x-hidden pt-1">
              <div className="flex flex-col items-center">
                <div className="size-7 rounded-full bg-[#262A35] flex items-center justify-center text-[#00D7F4]">
                  <DesktopWindowsIcon className="size-3.5" />
                </div>
                <span className="font-mono text-[9px] text-[#C1C6D7] mt-1">Next.js UI</span>
              </div>
              <TrendingFlatIcon className="size-3.5 text-[#8B90A0]" />
              <div className="flex flex-col items-center">
                <div className="size-7 rounded-full bg-[#262A35] flex items-center justify-center text-[#AEC6FF]">
                  <DnsServerIcon className="size-3.5" />
                </div>
                <span className="font-mono text-[9px] text-[#C1C6D7] mt-1">NestJS API</span>
              </div>
              <TrendingFlatIcon className="size-3.5 text-[#8B90A0]" />
              <div className="flex flex-col items-center">
                <div className="size-7 rounded-full bg-[#262A35] flex items-center justify-center text-[#FFB596]">
                  <StorageServerIcon className="size-3.5" />
                </div>
                <span className="font-mono text-[9px] text-[#C1C6D7] mt-1">Redis/PG</span>
              </div>
              <TrendingFlatIcon className="size-3.5 text-[#8B90A0]" />
              <div className="flex flex-col items-center">
                <div className="size-7 rounded-full bg-[#262A35] flex items-center justify-center text-[#00D7F4]">
                  <HubNetworkIcon className="size-3.5" />
                </div>
                <span className="font-mono text-[9px] text-[#C1C6D7] mt-1">Socket.IO</span>
              </div>
            </div>
          </div>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {["Next.js", "NestJS", "PostgreSQL", "Prisma", "Redis", "Socket.IO", "WebSockets", "TypeScript"].map((t) => (
              <span
                key={t}
                className={`font-mono text-[11px] px-2 py-1 rounded bg-[#262A35] ${
                  t === "Redis" ? "text-[#00D7F4]" : "text-[#DFE2F1]"
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setActiveModalId("modal-p1")}
            className="w-full h-11 bg-[#0070F3] text-white text-[13px] font-medium rounded-lg flex items-center justify-center gap-2 shadow-md active:scale-[0.99] transition-transform"
          >
            <span>View Case Study Details</span>
            <ArrowForwardIcon className="size-4" />
          </button>
        </article>

        {/* PROJECT 2: EDTECH PLATFORM */}
        <article className="bg-[#1C1F2A] rounded-xl p-4 flex flex-col gap-4 shadow-md border border-[#262A35]/60">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#00D7F4] font-medium tracking-wide bg-[#262A35] px-2.5 py-1 rounded-full">
                Education • Interactive LMS
              </span>
              <span className="font-mono text-[11px] text-[#8B90A0]">
                Collaborative Platform
              </span>
            </div>
            <h3 className="text-[18px] font-semibold text-[#DFE2F1] leading-[26px]">
              Interactive Learning Management Platform
            </h3>
            <p className="text-[13px] text-[#C1C6D7] leading-[19px]">
              Backend development supporting interactive learning sessions with timestamp-based questions, course quizzes, student progress tracking, and synchronized real-time chat.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO"].map((t) => (
              <span
                key={t}
                className={`font-mono text-[11px] px-2 py-1 rounded bg-[#262A35] ${
                  t === "MongoDB" ? "text-[#00D7F4]" : "text-[#DFE2F1]"
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setActiveModalId("modal-p2")}
            className="w-full h-11 bg-[#262A35] hover:bg-[#313540] text-[#DFE2F1] text-[13px] font-medium rounded-lg flex items-center justify-center gap-2 active:bg-[#353944] transition-colors"
          >
            <span>Explore Architecture</span>
            <VisibilityEyeIcon className="size-4 text-[#AEC6FF]" />
          </button>
        </article>

        {/* PROJECT 3: RESTAURANT TABLE OS */}
        <article className="bg-[#1C1F2A] rounded-xl p-4 flex flex-col gap-4 shadow-md border border-[#262A35]/60">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#00D7F4] font-medium tracking-wide bg-[#262A35] px-2.5 py-1 rounded-full">
                Food Technology • Hospitality POS
              </span>
              <span className="font-mono text-[11px] text-[#8B90A0]">
                Multi-Tenant
              </span>
            </div>
            <h3 className="text-[18px] font-semibold text-[#DFE2F1] leading-[26px]">
              Multi-Restaurant Ordering &amp; Table Management
            </h3>
            <p className="text-[13px] text-[#C1C6D7] leading-[19px]">
              QR table ordering, real-time order updates, future reservations, and split payments (equal, percentage, itemized) across custom restaurant &amp; admin management panels.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {["Node.js", "Express.js", "MySQL", "Socket.IO"].map((t) => (
              <span
                key={t}
                className={`font-mono text-[11px] px-2 py-1 rounded bg-[#262A35] ${
                  t === "MySQL" ? "text-[#00D7F4]" : "text-[#DFE2F1]"
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setActiveModalId("modal-p3")}
            className="w-full h-11 bg-[#262A35] hover:bg-[#313540] text-[#DFE2F1] text-[13px] font-medium rounded-lg flex items-center justify-center gap-2 active:bg-[#353944] transition-colors"
          >
            <span>View Operational Flow</span>
            <VisibilityEyeIcon className="size-4 text-[#AEC6FF]" />
          </button>
        </article>

        {/* PROJECT 4: TELEHEALTH CONSULTATION */}
        <article className="bg-[#1C1F2A] rounded-xl p-4 flex flex-col gap-4 shadow-md border border-[#262A35]/60">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#00D7F4] font-medium tracking-wide bg-[#262A35] px-2.5 py-1 rounded-full">
                Healthcare • Telemedicine
              </span>
              <span className="font-mono text-[11px] text-[#8B90A0]">
                HIPAA Mindset
              </span>
            </div>
            <h3 className="text-[18px] font-semibold text-[#DFE2F1] leading-[26px]">
              Healthcare Consultation &amp; Scheduling Engine
            </h3>
            <p className="text-[13px] text-[#C1C6D7] leading-[19px]">
              Appointment scheduling, doctor/nurse/consultant availability management, double-booking prevention logic, and video/audio consultations.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {["Node.js", "Express.js", "MySQL", "PHP CodeIgniter", "Agora SDK"].map((t) => (
              <span
                key={t}
                className={`font-mono text-[11px] px-2 py-1 rounded bg-[#262A35] ${
                  t === "MySQL" ? "text-[#00D7F4]" : "text-[#DFE2F1]"
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setActiveModalId("modal-p4")}
            className="w-full h-11 bg-[#262A35] hover:bg-[#313540] text-[#DFE2F1] text-[13px] font-medium rounded-lg flex items-center justify-center gap-2 active:bg-[#353944] transition-colors"
          >
            <span>Clinical Security Brief</span>
            <VisibilityEyeIcon className="size-4 text-[#AEC6FF]" />
          </button>
        </article>
      </section>

      {/* DETAIL DRAWER / BOTTOM SHEET MODAL */}
      <AnimatePresence>
        {activeProject && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-[#0A0E18]/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalId(null)}
            />

            {/* Bottom Sheet Modal */}
            <motion.div
              className="fixed bottom-0 inset-x-0 z-50 bg-[#1C1F2A] border-t border-[#262A35] max-h-[85vh] rounded-t-2xl p-4 flex flex-col gap-4 overflow-y-auto shadow-2xl"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
            >
              <div className="w-12 h-1.5 bg-[#313540] rounded-full mx-auto shrink-0" />
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-semibold text-[#00D7F4] tracking-wide">
                  {activeProject.category}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModalId(null)}
                  className="size-8 rounded-full bg-[#262A35] flex items-center justify-center text-[#C1C6D7] hover:text-white"
                  aria-label="Close"
                >
                  <CloseModalIcon className="size-5" />
                </button>
              </div>

              <h3 className="text-[20px] font-semibold text-[#DFE2F1] leading-[26px]">
                {activeProject.title}
              </h3>

              <p className="text-[13px] text-[#C1C6D7] leading-[20px]">
                {activeProject.overview}
              </p>

              {activeProject.innovations && (
                <div className="bg-[#0A0E18] p-3 rounded-lg flex flex-col gap-2 border border-[#262A35]/50">
                  <span className="font-mono text-[11px] text-[#00D7F4] font-semibold">
                    {activeProject.innovationsTitle}
                  </span>
                  {activeProject.innovations.map((item, i) => (
                    <p key={i} className="text-[12px] text-[#C1C6D7] leading-[18px]">
                      • {item}
                    </p>
                  ))}
                </div>
              )}

              <button
                type="button"
                onClick={() => setActiveModalId(null)}
                className="w-full h-11 bg-[#0070F3] text-white text-[13px] font-medium rounded-lg mt-2"
              >
                Close Details
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
