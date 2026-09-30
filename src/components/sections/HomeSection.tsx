"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { siteConfig } from "@/config/site";
import {
  TagIcon,
  PrimaryCtaArrow,
  DownloadDocIcon,
  ContactArrowIcon,
  FigmaLinkedInIcon,
  FigmaGitHubIcon,
  TelemetryZapIcon,
  TierClientIcon,
  TierGatewayIcon,
  TierComputeIcon,
  FlowConnector1,
  FlowConnector2,
  FlowConnectorSplit,
  DbPostgresIcon,
  DbRedisIcon,
  SocketIcon,
  MetricTenureIcon,
  MetricDeploymentsIcon,
  MetricDomainsIcon,
  MetricLeadershipIcon,
  RibbonVitalsIcon,
  RibbonMicroservicesIcon,
  RibbonCicdIcon,
} from "@/components/icons/FigmaIcons";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Core Production Stack pills — exact Figma #1:500
const techStack = [
  { name: "React.js", dotColor: "#7BD0FF" },
  { name: "Next.js 14", dotColor: "#AEC6FF" },
  { name: "Node.js", dotColor: "#10B981" },
  { name: "NestJS", dotColor: "#FFB4AB" },
  { name: "TypeScript", dotColor: "#7BD0FF" },
  { name: "PostgreSQL", dotColor: "#0070F3" },
  { name: "Redis", dotColor: "#FFB4AB" },
  { name: "WebSockets", dotColor: "#D0BCFF" },
];

export function HomeSection() {
  return (
    <section
      id="home"
      className="relative bg-[#0F131D] overflow-hidden"
    >
      {/* ── Subtle Ambient Glow Orbs — exact Figma #1:478, #1:479, #1:480 ── */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "-160px",
          left: "320px",
          width: "384px",
          height: "384px",
          background: "rgba(174, 198, 255, 0.10)",
          filter: "blur(60px)",
          borderRadius: "12px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute"
        style={{
          top: "372.94px",
          left: "880px",
          width: "480px",
          height: "477.46px",
          background: "rgba(123, 208, 255, 0.05)",
          filter: "blur(70px)",
          borderRadius: "12px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute"
        style={{
          top: "758.78px",
          left: "40px",
          width: "320px",
          height: "320px",
          background: "rgba(134, 86, 240, 0.10)",
          filter: "blur(50px)",
          borderRadius: "12px",
        }}
        aria-hidden
      />

      <SectionContainer className="pt-16 pb-6 sm:pt-20 sm:pb-10">
        {/* Hero Main Grid Wrapper #1:481 */}
        <div className="flex flex-col gap-8">

          {/* ── TOP TWO-COLUMN COMMAND STAGE — Figma #1:482 ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* ── LEFT COLUMN: Executive Value Proposition & Positioning (span 7, gap 24px) #1:483 ── */}
            <motion.div
              className="lg:col-span-7 flex flex-col gap-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              {/* Live Status Pill / Eyebrow — Figma #1:484 */}
              <div className="flex flex-wrap items-center gap-2">
                {/* Pill 1: Status Pill */}
                <div className="flex items-center gap-1 px-2 py-1 rounded-[12px] bg-[#171B26] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                  <span className="relative flex size-2 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75 motion-reduce:animate-none" />
                    <span className="relative inline-flex rounded-full size-2 bg-[#10B981]" />
                  </span>
                  <span className="text-[#7BD0FF] text-[11px] leading-[14px] tracking-[0.1em] uppercase font-normal">
                    SOFTWARE ENGINEER • FULL STACK DEVELOPER
                  </span>
                </div>

                {/* Pill 2: Version Pill */}
                <div className="flex items-center gap-1 px-2 py-1 rounded-[12px] bg-[#0A0E18]">
                  <TagIcon className="size-[11.67px] shrink-0" fill="#AEC6FF" />
                  <span className="text-[#C1C6D7] text-[11px] leading-[14px] tracking-[0.02em]">
                    v4.2.0-prod
                  </span>
                </div>
              </div>

              {/* Heading 1 — Main Scalability Headline — Figma #1:496 */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[61.6px] font-semibold tracking-[-0.025em] text-[#DFE2F1]">
                  Building scalable
                  <br />
                  software that solves{" "}
                  <span
                    className="underline decoration-[rgba(123,208,255,0.85)] underline-offset-[6px]"
                    style={{
                      background: "linear-gradient(90deg, rgba(123, 208, 255, 1) 0%, rgba(174, 198, 255, 1) 50%, rgba(208, 188, 255, 1) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    real
                  </span>
                  <br />
                  <span
                    className="underline decoration-[rgba(174,198,255,0.85)] underline-offset-[6px]"
                    style={{
                      background: "linear-gradient(90deg, rgba(123, 208, 255, 1) 0%, rgba(174, 198, 255, 1) 50%, rgba(208, 188, 255, 1) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    business problems
                  </span>{" "}
                  <span className="text-[#DFE2F1]">.</span>
                </h1>
              </div>

              {/* Executive Engineering Synopsis — Figma #1:498 (width: 620px) */}
              <div className="max-w-[620px]">
                <p className="text-[16px] leading-[26px] tracking-[-0.01em] text-[#C1C6D7]">
                  Software Engineer with{" "}
                  <span className="text-[#DFE2F1]">4+ years</span> of production experience engineering fault-tolerant
                  platforms across{" "}
                  <span className="text-[#DFE2F1]">Finance</span>,{" "}
                  <span className="text-[#DFE2F1]">Healthcare</span>,{" "}
                  <span className="text-[#DFE2F1]">Education</span>, and{" "}
                  <span className="text-[#DFE2F1]">Food Technology</span>. Specializing in high-concurrency Node/NestJS
                  microservices, reactive Next.js client systems, and low-latency event-driven distributed architectures.
                </p>
              </div>

              {/* Tech Stack Pill Shelf — Figma #1:500 */}
              <div className="flex flex-col gap-1 pt-1">
                <div className="flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-[#7BD0FF] shrink-0" />
                  <span className="text-[#8B90A0] text-[11px] leading-[14px] tracking-[0.05em] uppercase font-normal">
                    CORE PRODUCTION STACK
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="flex items-center gap-1 px-2 py-1 rounded-[2px] bg-[#171B26] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] text-[#DFE2F1] text-[12px] leading-[16px] font-medium"
                    >
                      <span
                        className="size-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: tech.dotColor }}
                      />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Action Cluster — Figma #1:538 */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-2 px-6 py-2 rounded-[2px] bg-[#0070F3] text-white text-[18px] leading-[26px] tracking-[-0.015em] font-medium shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:bg-[#0060D0] transition-colors duration-200"
                >
                  View My Work
                  <PrimaryCtaArrow className="size-3 shrink-0" fill="white" />
                </a>

                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Neel_Patel_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 rounded-[2px] bg-[#171B26] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] text-[#DFE2F1] text-[12px] leading-[16px] font-medium hover:bg-[#1E2330] transition-colors duration-200"
                >
                  <DownloadDocIcon className="w-[10.67px] h-[13.33px] shrink-0" fill="#7BD0FF" />
                  Download Resume
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-1 p-2 text-[#C1C6D7] text-[12px] leading-[16px] font-medium underline underline-offset-2 hover:text-[#DFE2F1] transition-colors"
                >
                  Contact Me
                  <ContactArrowIcon className="size-[8.75px] shrink-0" fill="#C1C6D7" />
                </a>
              </div>

              {/* Social Proof & Talent Availability Banner — Figma #1:555 */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <div className="flex items-center gap-1 px-2 py-1 rounded-[12px] bg-[#0A0E18]">
                  <span className="size-2 rounded-full bg-[#10B981] shrink-0" />
                  <span className="text-[#10B981] text-[11px] leading-[14px] tracking-[0.02em] font-medium">
                    Open to Senior &amp; Staff Roles
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-1 rounded-[2px] bg-[#0A0E18] text-[#C1C6D7] hover:text-[#DFE2F1] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FigmaLinkedInIcon className="size-4 shrink-0" fill="#C1C6D7" />
                  </a>
                  <a
                    href="https://github.com/neel-patel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-1 rounded-[2px] bg-[#0A0E18] text-[#C1C6D7] hover:text-[#DFE2F1] transition-colors"
                    aria-label="GitHub"
                  >
                    <FigmaGitHubIcon className="size-4 shrink-0" fill="#C1C6D7" />
                  </a>
                  <span className="text-[#8B90A0] text-[11px] leading-[14px] tracking-[0.02em]">
                    @neelpatel-dev
                  </span>
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT COLUMN: Interactive Architecture Visualization (span 5) — Figma #1:569 ── */}
            <motion.div
              className="lg:col-span-5 flex flex-col gap-4 p-4 rounded-[8px] bg-[#0A0E18] shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)]"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease }}
            >
              {/* Card Header & Live Telemetry Ping — Figma #1:570 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <TelemetryZapIcon className="w-4 h-[15.33px] shrink-0" fill="#7BD0FF" />
                  <span className="text-[#DFE2F1] text-[11px] leading-[14px] font-semibold tracking-[0.05em] uppercase">
                    LIVE ARCHITECTURE • DATA FLOW
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#8B90A0] text-[11px] leading-[14px] tracking-[0.02em]">P99:</span>
                  <span className="text-[#10B981] text-[11px] leading-[14px] tracking-[0.02em] font-semibold">14.2ms</span>
                  <div className="flex items-center justify-center w-3 h-2 pl-1">
                    <span className="relative flex size-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7BD0FF] opacity-75 motion-reduce:animate-none" />
                      <span className="relative inline-flex rounded-full size-2 bg-[#7BD0FF]" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Node Pipeline — Figma #1:585 */}
              <div className="flex flex-col gap-1">
                {/* Tier 1: Client Ingress #1:586 */}
                <div className="flex items-center justify-between p-2 rounded-[2px] bg-[#171B26]">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center size-7 rounded-[2px] bg-[#1C1F2A]">
                      <TierClientIcon className="w-[13.33px] h-[10.67px] shrink-0" fill="#7BD0FF" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[#DFE2F1] text-[12px] leading-[16px] font-medium">Edge Client Tier</p>
                      <p className="text-[#C1C6D7] text-[11px] leading-[14px] tracking-[0.02em]">
                        Next.js 14 SSR • React Server Components
                      </p>
                    </div>
                  </div>
                  <div className="px-1 py-0.5 rounded-[2px] bg-[#313540]">
                    <span className="text-[#7BD0FF] text-[11px] leading-[14px] tracking-[0.02em]">Hydrated</span>
                  </div>
                </div>

                {/* SVG Flow Connector 1 #1:598 */}
                <FlowConnector1 />

                {/* Tier 2: Gateway & Proxy #1:602 */}
                <div className="flex items-center justify-between p-2 rounded-[2px] bg-[#171B26]">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center size-7 rounded-[2px] bg-[#1C1F2A]">
                      <TierGatewayIcon className="w-[10.67px] h-[13.33px] shrink-0" fill="#AEC6FF" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[#DFE2F1] text-[12px] leading-[16px] font-medium">API Gateway • Edge Mesh</p>
                      <p className="text-[#C1C6D7] text-[11px] leading-[14px] tracking-[0.02em]">
                        JWT Validation • Leaky Bucket Rate Limiter
                      </p>
                    </div>
                  </div>
                  <div className="px-1 py-0.5 rounded-[2px] bg-[#313540]">
                    <span className="text-[#10B981] text-[11px] leading-[14px] tracking-[0.02em]">45k RPS</span>
                  </div>
                </div>

                {/* SVG Flow Connector 2 #1:614 */}
                <FlowConnector2 />

                {/* Tier 3: Core Compute Services #1:618 */}
                <div className="flex items-center justify-between p-2 rounded-[2px] bg-[#171B26]">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center size-7 rounded-[2px] bg-[#1C1F2A]">
                      <TierComputeIcon className="size-3 shrink-0" fill="#D0BCFF" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[#DFE2F1] text-[12px] leading-[16px] font-medium">NestJS Core Cluster</p>
                      <p className="text-[#C1C6D7] text-[11px] leading-[14px] tracking-[0.02em]">
                        Distributed Microservices • Event Queue
                      </p>
                    </div>
                  </div>
                  <div className="px-1 py-0.5 rounded-[2px] bg-[#313540]">
                    <span className="text-[#D0BCFF] text-[11px] leading-[14px] tracking-[0.02em]">Healthy</span>
                  </div>
                </div>

                {/* SVG Split Connector #1:630 */}
                <FlowConnectorSplit />

                {/* Tier 4: Parallel Persistence & Pub/Sub #1:634 */}
                <div className="grid grid-cols-2 gap-1">
                  {/* PostgreSQL 16 Card */}
                  <div className="flex flex-col gap-0.5 p-1 rounded-[2px] bg-[#171B26]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#AEC6FF] text-[11px] leading-[14px] tracking-[0.02em] font-semibold">
                        PostgreSQL 16
                      </span>
                      <DbPostgresIcon className="size-[9.75px] shrink-0" fill="#8B90A0" />
                    </div>
                    <span className="text-[#C1C6D7] text-[11px] leading-[14px] tracking-[0.02em]">
                      Read Replicas + CDC
                    </span>
                    <span className="text-[#8B90A0] text-[11px] leading-[14px] tracking-[0.02em]">
                      QPS: 8,400
                    </span>
                  </div>

                  {/* Redis Cluster Card */}
                  <div className="flex flex-col gap-0.5 p-1 rounded-[2px] bg-[#171B26]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#FFB4AB] text-[11px] leading-[14px] tracking-[0.02em] font-semibold">
                        Redis Cluster
                      </span>
                      <DbRedisIcon className="w-[6.5px] h-[10.83px] shrink-0" fill="#8B90A0" />
                    </div>
                    <span className="text-[#C1C6D7] text-[11px] leading-[14px] tracking-[0.02em]">
                      Pub/Sub • Session Store
                    </span>
                    <span className="text-[#10B981] text-[11px] leading-[14px] tracking-[0.02em]">
                      HIT: 99.1%
                    </span>
                  </div>
                </div>
              </div>

              {/* Real-Time WebSocket Telemetry Drawer — Figma #1:655 */}
              <div className="flex flex-col gap-1 p-1 rounded-[2px] bg-[#262A35]">
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-[#10B981] shrink-0" />
                    <span className="text-[#C1C6D7] text-[11px] leading-[14px] tracking-[0.02em] uppercase font-normal">
                      EVENT STREAM INSPECTOR
                    </span>
                  </div>
                  <span className="text-[#8B90A0] text-[11px] leading-[14px] tracking-[0.02em]">
                    ws://stream.gateway.internal
                  </span>
                </div>
                <div className="px-1 py-1 rounded-[2px] bg-[#0A0E18] font-mono text-[11px] leading-[14px] tracking-[0.02em] text-[#7BD0FF] overflow-x-auto whitespace-nowrap scrollbar-none">
                  {`{ "event": "order.settled", "txId": "0x4f8a92c1", "latency": "11.4ms", "cluster": "us-east-1" }`}
                </div>
              </div>

              {/* Telemetry Footer Micro-Metrics — Figma #1:664 */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1">
                  <SocketIcon className="w-[10.83px] h-[9.75px] shrink-0" fill="#10B981" />
                  <span className="text-[#8B90A0] text-[11px] leading-[14px] tracking-[0.02em]">
                    Bi-directional Socket.IO
                  </span>
                </div>
                <span className="text-[#8B90A0] text-[11px] leading-[14px] tracking-[0.02em]">
                  45k msgs/sec stream
                </span>
              </div>
            </motion.div>
          </div>

          {/* ── TELEMETRY STATISTICS GRID (4 Key Engineering Pillars) — Figma #1:672 ── */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease }}
          >
            {/* Metric 1: Experience #1:673 */}
            <div className="flex flex-col gap-1 p-4 rounded-[8px] bg-[#171B26] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between">
                <span className="text-[#8B90A0] text-[11px] leading-[14px] tracking-[0.05em] uppercase font-normal">
                  TENURE
                </span>
                <MetricTenureIcon className="w-[14.63px] h-[12px] shrink-0" fill="#7BD0FF" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-[40px] leading-[48px] font-bold tracking-[-0.025em] text-[#DFE2F1]">
                  4+
                </span>
                <span className="text-[#7BD0FF] text-[12px] leading-[16px] font-medium">
                  Years
                </span>
              </div>
              <p className="text-[13px] leading-[18px] text-[#C1C6D7] font-normal">
                Production Experience delivering mission-critical web platforms.
              </p>
            </div>

            {/* Metric 2: Production Shipments #1:684 */}
            <div className="flex flex-col gap-1 p-4 rounded-[8px] bg-[#171B26] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between">
                <span className="text-[#8B90A0] text-[11px] leading-[14px] tracking-[0.05em] uppercase font-normal">
                  DEPLOYMENTS
                </span>
                <MetricDeploymentsIcon className="size-[15.05px] shrink-0" fill="#AEC6FF" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-[40px] leading-[48px] font-bold tracking-[-0.025em] text-[#DFE2F1]">
                  8+
                </span>
                <span className="text-[#AEC6FF] text-[12px] leading-[16px] font-medium">
                  Systems
                </span>
              </div>
              <p className="text-[13px] leading-[18px] text-[#C1C6D7] font-normal">
                Production Projects launched from architecture to scale.
              </p>
            </div>

            {/* Metric 3: Multi-Domain Mastery #1:695 */}
            <div className="flex flex-col gap-1 p-4 rounded-[8px] bg-[#171B26] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between">
                <span className="text-[#8B90A0] text-[11px] leading-[14px] tracking-[0.05em] uppercase font-normal">
                  DOMAINS
                </span>
                <MetricDomainsIcon className="w-[15px] h-[12px] shrink-0" fill="#10B981" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-[40px] leading-[48px] font-bold tracking-[-0.025em] text-[#DFE2F1]">
                  4
                </span>
                <span className="text-[#10B981] text-[12px] leading-[16px] font-medium">
                  Industries
                </span>
              </div>
              <p className="text-[13px] leading-[18px] text-[#C1C6D7] font-normal">
                Finance, Healthcare, EdTech, and Food Technology ecosystems.
              </p>
            </div>

            {/* Metric 4: Leadership & Mentorship #1:706 */}
            <div className="flex flex-col gap-1 p-4 rounded-[8px] bg-[#171B26] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between">
                <span className="text-[#8B90A0] text-[11px] leading-[14px] tracking-[0.05em] uppercase font-normal">
                  LEADERSHIP
                </span>
                <MetricLeadershipIcon className="w-[18px] h-[9px] shrink-0" fill="#D0BCFF" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-[40px] leading-[48px] font-bold tracking-[-0.025em] text-[#DFE2F1]">
                  10+
                </span>
                <span className="text-[#D0BCFF] text-[12px] leading-[16px] font-medium">
                  Engineers
                </span>
              </div>
              <p className="text-[13px] leading-[18px] text-[#C1C6D7] font-normal">
                Developers &amp; Trainees mentored in TypeScript, tests &amp; patterns.
              </p>
            </div>
          </motion.div>

          {/* ── TECHNICAL SYSTEM CAPABILITIES & CERTIFICATIONS RIBBON — Figma #1:717 ── */}
          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 rounded-[8px] bg-[#0A0E18] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease }}
          >
            {/* Left 3 items */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1">
                <RibbonVitalsIcon className="w-[15px] h-[12px] shrink-0" fill="#7BD0FF" />
                <span className="text-[#C1C6D7] text-[11px] leading-[14px] tracking-[0.02em]">
                  Core Web Vitals 99+
                </span>
              </div>

              <span className="size-1 rounded-full bg-[#414754] shrink-0" />

              <div className="flex items-center gap-1">
                <RibbonMicroservicesIcon className="w-[13.5px] h-[15px] shrink-0" fill="#AEC6FF" />
                <span className="text-[#C1C6D7] text-[11px] leading-[14px] tracking-[0.02em]">
                  Event-Driven Microservices
                </span>
              </div>

              <span className="size-1 rounded-full bg-[#414754] shrink-0" />

              <div className="flex items-center gap-1">
                <RibbonCicdIcon className="w-[12px] h-[15px] shrink-0" fill="#10B981" />
                <span className="text-[#C1C6D7] text-[11px] leading-[14px] tracking-[0.02em]">
                  Zero-Downtime CI/CD Pipelines
                </span>
              </div>
            </div>

            {/* Right status */}
            <div className="flex items-center gap-1">
              <span className="size-2 rounded-full bg-[#7BD0FF] shrink-0" />
              <span className="text-[#8B90A0] text-[11px] leading-[14px] tracking-[0.02em]">
                Availability: Immediate for Select Roles
              </span>
            </div>
          </motion.div>

          {/* ── VERTICAL EXPLORE SCROLL CUE INDICATOR — Figma #1:740 ── */}
          <motion.div className="flex flex-col items-center justify-center gap-1 pt-2 pb-1">
            <span className="text-[#8B90A0] text-[11px] leading-[14px] tracking-[0.1em] uppercase font-normal">
              EXPLORE ARCHITECTURE &amp; PROJECTS
            </span>
            <div className="relative flex justify-center w-5 h-8 rounded-[12px] bg-[#171B26] p-1 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
              <motion.div
                className="w-1.5 h-2 rounded-[12px] bg-[#7BD0FF]"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

        </div>
      </SectionContainer>
    </section>
  );
}
