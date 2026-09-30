"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import {
  MetricProdActiveIcon,
  MetricApplicationsIcon,
  MetricDomainsIcon,
  MetricMentorshipIcon,
  CardQueryProfilingIcon,
  CardRealtimeSwitchIcon,
  CardFullstackContractIcon,
} from "@/components/icons/AchievementsContactIcons";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface MetricCard {
  tag: string;
  tagDotColor: string;
  tagTextColor: string;
  metric: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const metricCards: MetricCard[] = [
  {
    tag: "PROD ACTIVE",
    tagDotColor: "#7BD0FF",
    tagTextColor: "#7BD0FF",
    metric: "4+",
    label: "Years Experience",
    description: "Professional software development across web and backend architectures.",
    icon: <MetricProdActiveIcon className="w-[15px] h-[15px] text-[#8B90A0]" />,
  },
  {
    tag: "APPLICATIONS",
    tagDotColor: "#00A6E0",
    tagTextColor: "#7BD0FF",
    metric: "8+",
    label: "Production Projects",
    description: "Production applications shipped from concept to deployment.",
    icon: <MetricApplicationsIcon className="w-[14px] h-[15px] text-[#8B90A0]" />,
  },
  {
    tag: "DOMAINS",
    tagDotColor: "#D0BCFF",
    tagTextColor: "#D0BCFF",
    metric: "4",
    label: "Business Domains",
    description: "Finance, Healthcare, EdTech, and Food Technology.",
    icon: <MetricDomainsIcon className="w-[15px] h-[14px] text-[#8B90A0]" />,
  },
  {
    tag: "MENTORSHIP",
    tagDotColor: "#0070F3",
    tagTextColor: "#AEC6FF",
    metric: "10+",
    label: "Trainees Mentored",
    description: "Junior developers and trainees guided through TypeScript and clean code practices.",
    icon: <MetricMentorshipIcon className="w-[18px] h-[9px] text-[#8B90A0]" />,
  },
];

function PerfHighlight() {
  return (
    <motion.div
      className="flex flex-col justify-between p-6 rounded-lg bg-[#1C1F2A] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border border-[#262A35]/30 hover:border-[#262A35] transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.5, delay: 0, ease }}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-[2px] bg-[#0A0E18]">
            <span className="size-1.5 rounded-full bg-[#7BD0FF]" />
            <span className="text-[#7BD0FF] text-[11px] font-mono font-medium">Performance</span>
          </div>
          <span className="text-[#8B90A0] text-[11px] font-mono">OPTIMIZATION</span>
        </div>
        <div className="flex items-baseline gap-2 pt-1">
          <span className="text-[#7BD0FF] text-[48px] sm:text-[56px] font-semibold leading-[56px] sm:leading-[64px] tracking-[-0.025em]">
            ~30%
          </span>
          <span className="text-[#DFE2F1] text-[18px] font-medium leading-[26px]">Lift</span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-[#DFE2F1] text-[18px] font-semibold leading-[26px] tracking-[-0.015em]">
            Performance Optimization
          </h3>
          <p className="text-[#C1C6D7] text-[13px] leading-[19px]">
            Achieved via database query profiling, indexing (PostgreSQL/MySQL), and Redis caching.
          </p>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-2 p-3 rounded-[4px] bg-[#0A0E18] border border-[#262A35]">
        <CardQueryProfilingIcon className="w-[14px] h-[11px] text-[#7BD0FF] shrink-0" />
        <span className="text-[#7BD0FF] text-[11px] font-mono">Query profiling &amp; efficient caching</span>
      </div>
    </motion.div>
  );
}

function WebSocketHighlight() {
  return (
    <motion.div
      className="flex flex-col justify-between p-6 rounded-lg bg-[#1C1F2A] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border border-[#262A35]/30 hover:border-[#262A35] transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.5, delay: 0.08, ease }}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-[2px] bg-[#0A0E18]">
            <span className="size-1.5 rounded-full bg-[#0070F3]" />
            <span className="text-[#AEC6FF] text-[11px] font-mono font-medium">Live Updates</span>
          </div>
          <span className="text-[#8B90A0] text-[11px] font-mono">EVENT-DRIVEN</span>
        </div>
        <div className="flex flex-col gap-1 pt-1">
          <span className="text-[#AEC6FF] text-[36px] sm:text-[40px] font-semibold leading-[44px] sm:leading-[48px] tracking-[-0.025em]">
            Real-Time
          </span>
          <h3 className="text-[#DFE2F1] text-[18px] font-semibold leading-[26px] tracking-[-0.015em]">
            Real-Time Applications
          </h3>
          <p className="text-[#C1C6D7] text-[13px] leading-[19px]">
            Event-driven systems using Socket.IO and WebSockets for live status updates.
          </p>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-2 p-3 rounded-[4px] bg-[#0A0E18] border border-[#262A35]">
        <CardRealtimeSwitchIcon className="w-[14px] h-[12px] text-[#AEC6FF] shrink-0" />
        <span className="text-[#AEC6FF] text-[11px] font-mono">Low-latency bidirectional data flow</span>
      </div>
    </motion.div>
  );
}

function FullStackHighlight() {
  return (
    <motion.div
      className="flex flex-col justify-between p-6 rounded-lg bg-[#1C1F2A] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border border-[#262A35]/30 hover:border-[#262A35] transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.5, delay: 0.16, ease }}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-[2px] bg-[#0A0E18]">
            <span className="size-1.5 rounded-full bg-[#D0BCFF]" />
            <span className="text-[#D0BCFF] text-[11px] font-mono font-medium">End-to-End</span>
          </div>
          <span className="text-[#8B90A0] text-[11px] font-mono">FULLSTACK</span>
        </div>
        <div className="flex flex-col gap-1 pt-1">
          <span className="text-[#D0BCFF] text-[36px] sm:text-[40px] font-semibold leading-[44px] sm:leading-[48px] tracking-[-0.025em]">
            Full Stack
          </span>
          <h3 className="text-[#DFE2F1] text-[18px] font-semibold leading-[26px] tracking-[-0.015em]">
            Full Stack Development
          </h3>
          <p className="text-[#C1C6D7] text-[13px] leading-[19px]">
            End-to-end integration across Next.js / React clients and NestJS / Node.js APIs.
          </p>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-2 p-3 rounded-[4px] bg-[#0A0E18] border border-[#262A35]">
        <CardFullstackContractIcon className="w-[12px] h-[14px] text-[#D0BCFF] shrink-0" />
        <span className="text-[#D0BCFF] text-[11px] font-mono">Type-safe API contracts &amp; architecture</span>
      </div>
    </motion.div>
  );
}

export function AchievementsSection() {
  const ref = React.useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section id="achievements" ref={ref} className="relative bg-[#0F131D] overflow-hidden scroll-mt-16">
      <SectionContainer className="py-8 sm:py-10 flex flex-col gap-6 sm:gap-8">

        {/* ── SECTION HEADER (#1:1570) ── */}
        <motion.div
          className="flex flex-col gap-2 max-w-[768px]"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease }}
        >
          <div className="flex items-center gap-3">
            <span className="text-[#7BD0FF] text-[11px] tracking-[0.05em] uppercase font-mono font-medium">
              07 // HIGHLIGHTS • PROVEN IMPACT
            </span>
            <div className="w-12 h-px bg-[rgba(123,208,255,0.4)]" />
          </div>
          <h2 className="text-[32px] sm:text-[40px] font-semibold leading-[40px] sm:leading-[48px] tracking-[-0.025em] text-[#DFE2F1]">
            Real-world impact delivered across{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #AEC6FF 0%, #7BD0FF 100%)",
              }}
            >
              production applications.
            </span>
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-[26px] tracking-[-0.01em] text-[#C1C6D7]">
            A track record of engineering reliability, performance optimization, and cross-functional collaboration.
          </p>
        </motion.div>

        {/* ── PRIMARY METRIC GRID (4 COLUMNS) (#1:1581) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metricCards.map((card, i) => (
            <motion.div
              key={card.label}
              className="flex flex-col justify-between p-6 rounded-lg bg-[#1C1F2A] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border border-[#262A35]/30 hover:border-[#262A35] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.45, delay: i * 0.07, ease }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#313540]">
                  <span className="size-1.5 rounded-full" style={{ background: card.tagDotColor }} />
                  <span
                    className="text-[11px] font-mono font-medium tracking-[0.02em]"
                    style={{ color: card.tagTextColor }}
                  >
                    {card.tag}
                  </span>
                </div>
                {card.icon}
              </div>
              <div className="flex flex-col gap-0.5 pt-6">
                <span className="text-[#DFE2F1] text-[48px] sm:text-[56px] font-semibold leading-[56px] tracking-[-0.025em]">
                  {card.metric}
                </span>
                <span className="text-[#DFE2F1] text-[14px] font-medium leading-[20px] tracking-[-0.01em]">
                  {card.label}
                </span>
              </div>
              <p className="mt-4 text-[#C1C6D7] text-[13px] leading-[18px]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── SUPPORTING TECHNICAL CAPABILITY HIGHLIGHTS (3 COLUMNS) (#1:1650) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <PerfHighlight />
          <WebSocketHighlight />
          <FullStackHighlight />
        </div>

      </SectionContainer>
    </section>
  );
}
