"use client";

import * as React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import {
  PersHeaderTagIcon,
  PersScopeDistinctionIcon,
  PersContextBulbKekaIcon,
  PersInZapIcon,
  PersAlarmClockIcon,
  PersCopySummaryIcon,
  PersPresetsSettingsIcon,
  PersViewDetailsKekaIcon,
  PersInspectFlowKekaIcon,
  PersShieldAnonymizedStockIcon,
  PersSandboxBadgeIcon,
  PersDatabaseClientStockIcon,
  PersViewDetailsStockIcon,
  PersInspectFlowStockIcon,
  PersMotivationSparkleIcon,
  PersExploreEnterpriseIcon,
  PersDiscussAutomationIcon,
} from "@/components/icons/PersonalProjectsFigmaIcons";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface ProjectModalData {
  tag: string;
  title: string;
  desc: string;
  highlights: string[];
}

const kekaModalData: ProjectModalData = {
  tag: "PRODUCTIVITY AUTOMATION // MANIFEST V3",
  title: "Keka Productivity & Attendance Assistant",
  desc: "A custom Chrome Extension built on Manifest V3 with a persistent background service worker that hooks into internal attendance web APIs. It dynamically computes shift hours, breaks, and generates daily EOD summaries without manual calculation.",
  highlights: [
    "Manifest V3 Service Worker with declarativeNetRequest header mediation.",
    "Real-time DOM observer for single-page application attendance clock states.",
    "Deterministic EOD status generator with customizable team format presets.",
    "Zero external telemetry — 100% client-side Chrome storage execution.",
  ],
};

const stockModalData: ProjectModalData = {
  tag: "FINANCIAL SANDBOX // CLIENT RUNTIME",
  title: "Smart Stock Manager & Market Sandbox",
  desc: "A client-side financial exploration utility and paper-market dashboard. Provides real-time emulation of NSE/BSE price tickers, Mainboard & SME IPO pipeline tracking, and personalized watchlists using local IndexedDB persistence.",
  highlights: [
    "Reactive IndexedDB local storage engine for sub-millisecond watchlist queries.",
    "Simulated websocket price ticker feed with configurable volatility generators.",
    "Mainboard & SME IPO valuation estimators with subscription multiple analytics.",
    "Completely anonymized sandbox — zero broker credentials or live trade execution.",
  ],
};

export function PersonalProjectsSection() {
  const ref = React.useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const [activeModal, setActiveModal] = React.useState<ProjectModalData | null>(null);
  const [copiedEod, setCopiedEod] = React.useState(false);
  const [selectedStockTab, setSelectedStockTab] = React.useState<"watchlist" | "mainboard" | "sme">("watchlist");

  const handleCopyEod = () => {
    const summary = "EOD Summary | Neel Patel\n- Logged Time: 06h 42m / 08h 00m (83.7%)\n- Punch In: 09:45 AM | Status: Normal\n- Completed core features & architectural reviews.";
    navigator.clipboard?.writeText(summary);
    setCopiedEod(true);
    setTimeout(() => setCopiedEod(false), 2000);
  };

  return (
    <section id="personal-projects" ref={ref} className="relative bg-[#0F131D] overflow-hidden scroll-mt-16">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "-60px",
          left: "20%",
          width: "360px",
          height: "360px",
          background: "rgba(123,208,255,0.03)",
          filter: "blur(40px)",
          borderRadius: "12px",
        }}
        aria-hidden
      />

      <SectionContainer className="py-8 sm:py-10 flex flex-col gap-6 sm:gap-8">

        {/* ── SECTION HEADER & TECHNICAL MANIFESTO BANNER (Figma #1:3494) ── */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease }}
        >
          {/* Top metadata tracking row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#171B26] border border-[#262A35]/60">
              <span className="size-2 rounded-full bg-[#7BD0FF] shadow-[0_0_8px_rgba(123,208,255,0.8)]" />
              <span className="text-[#7BD0FF] text-[11px] tracking-[0.05em] uppercase font-mono font-medium">
                06 // PERSONAL BUILDS • EXPERIMENTS &amp; AUTOMATION
              </span>
              <span className="text-[#8B90A0] text-[11px] font-mono">
                {"// INTERNAL UTILITIES"}
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1C1F2A] border border-[#262A35]/50">
              <PersHeaderTagIcon className="shrink-0" />
              <span className="text-[#DFE2F1] text-[11px] font-mono tracking-[0.02em]">
                PERSONAL PROJECTS • NON-COMMERCIAL
              </span>
            </div>
          </div>

          {/* Heading container */}
          <div className="flex flex-col gap-1 max-w-[896px]">
            <h2 className="text-[32px] sm:text-[40px] leading-[40px] sm:leading-[48px] font-semibold tracking-[-0.025em] text-[#DFE2F1]">
              Things I built to{" "}
              <span
                className="bg-clip-text text-transparent font-normal"
                style={{
                  backgroundImage: "linear-gradient(90deg, #7BD0FF 0%, #AEC6FF 100%)",
                }}
              >
                solve problems I actually had.
              </span>
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[26px] tracking-[-0.01em] text-[#C1C6D7] max-w-[768px]">
              Side projects and productivity tools built to experiment, automate workflows, and explore ideas.
            </p>
          </div>

          {/* Distinction & Scope Banner */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-lg bg-[#171B26] border border-[#262A35]/50 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-9 rounded bg-[#1C1F2A] border border-[#262A35]/50 shrink-0">
                <PersScopeDistinctionIcon className="shrink-0" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[#7BD0FF] text-[11px] tracking-[0.05em] uppercase font-semibold font-mono">
                  PERSONAL USE &amp; EXPLORATION
                </span>
                <p className="text-[#C1C6D7] text-[13px] leading-[18px]">
                  These are independent personal tools engineered for personal use and developer exploration. They are not commercial client products.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1C1F2A] border border-[#262A35]/40 shrink-0">
              <span className="size-1.5 rounded-full bg-[#7BD0FF]" />
              <span className="text-[#8B90A0] text-[11px] font-mono">Non-Commercial Sandbox</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ── DUAL PROJECT SHOWCASE GRID (556px + 40px + 556px = 1152px) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ── PROJECT 01: KEKA ASSISTANT ── */}
          <motion.div
            className="flex flex-col bg-[#171B26] rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] border border-[#262A35]/50 overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease }}
          >
            {/* Card Top Bar & Metadata Shelf */}
            <div className="p-6 bg-[#1C1F2A] border-b border-[#262A35]/40 flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-[2px] bg-[#262A35] text-[#7BD0FF] text-[11px] font-mono font-medium">
                    Personal Project • Chrome Extension
                  </span>
                  <span className="px-2 py-0.5 rounded-[2px] bg-[#0A0E18] text-[#8B90A0] text-[11px] font-mono">
                    Manifest V3
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-[#7BD0FF]" />
                  <span className="text-[#7BD0FF] text-[11px] font-mono font-medium">Built for personal use</span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-[#DFE2F1] text-[22px] sm:text-[24px] font-semibold leading-[32px] tracking-[-0.02em]">
                  Keka Productivity &amp; Attendance Assistant
                </h3>
                <span className="text-[#8B90A0] text-[11px] font-mono">
                  Productivity Automation // WebExtensions Background Worker
                </span>
                <p className="text-[#C1C6D7] text-[14px] leading-[22px] pt-1">
                  A personal productivity tool designed to simplify attendance tracking and daily workspace management.
                </p>
              </div>

              {/* Context callout box */}
              <div className="p-3.5 rounded bg-[#0A0E18] border border-[#262A35]/50 flex items-start gap-2.5">
                <PersContextBulbKekaIcon className="shrink-0 mt-0.5" />
                <p className="text-[#DFE2F1] text-[12px] leading-[18px]">
                  Personal Context: Eliminates manual mental math around work shifts, missing punch flags, and repetitive EOD status notes.
                </p>
              </div>
            </div>

            {/* Interactive Extension UI Mockup Simulation */}
            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-[#8B90A0] text-[11px] font-mono">
                  {"// INTERFACE EMULATION (EXTENSION POPUP)"}
                </span>
                <span className="text-[#C1C6D7] text-[11px] font-mono">
                  420 x 480 px Viewport
                </span>
              </div>

              {/* Chrome Extension Simulated Frame */}
              <div className="flex flex-col gap-3 p-4 rounded bg-[#0A0E18] border border-[#262A35] shadow-lg">
                {/* Extension Topbar */}
                <div className="flex items-center justify-between pb-2 border-b border-[#262A35]/40">
                  <div className="flex items-center gap-2.5">
                    <div className="size-7 rounded-[2px] bg-[#0070F3] text-white flex items-center justify-center font-bold text-sm leading-none">
                      K
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#DFE2F1] text-[12px] font-semibold leading-tight">
                        Keka Assistant Pro
                      </span>
                      <span className="text-[#8B90A0] text-[11px] font-mono">
                        Sync Status: Real-time Attached
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#171B26] border border-[#262A35]/50">
                    <span className="size-1.5 rounded-full bg-[#7BD0FF] shadow-[0_0_6px_rgba(123,208,255,0.8)]" />
                    <span className="text-[#7BD0FF] text-[10px] font-mono font-semibold tracking-wider">ACTIVE</span>
                  </div>
                </div>

                {/* Main Metric Gauge */}
                <div className="p-3.5 rounded bg-[#171B26] border border-[#262A35]/40 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#C1C6D7] text-[11px]">Effective Logged Work</span>
                    <span className="text-[#7BD0FF] text-[11px] font-semibold font-mono">83.7% of Daily Target</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-[#DFE2F1] text-[24px] font-bold tracking-tight">06h 42m</span>
                      <span className="text-[#8B90A0] text-[16px] font-normal">/ 08h 00m</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-[2px] bg-[#AEC6FF]/10 text-[#AEC6FF] text-[11px] font-mono border border-[#AEC6FF]/20">
                      1h 18m Left
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-2 rounded-full bg-[#313540] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#7BD0FF] to-[#0070F3]"
                      style={{ width: "83.7%" }}
                    />
                  </div>
                  {/* Punch timestamps */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1.5">
                      <PersInZapIcon className="shrink-0" />
                      <span className="text-[#C1C6D7] text-[11px] font-mono">In: 09:45 AM</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <PersAlarmClockIcon className="shrink-0" />
                      <span className="text-[#D0BCFF] text-[11px] font-mono">Auto Punch Alert: 06:45 PM</span>
                    </div>
                  </div>
                </div>

                {/* Inset feature grid */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-[2px] bg-[#1C1F2A] border border-[#262A35]/30 flex flex-col gap-0.5">
                    <span className="text-[#8B90A0] text-[11px] font-mono">Break Deductions</span>
                    <span className="text-[#DFE2F1] text-[13px] font-semibold">42 mins recorded</span>
                  </div>
                  <div className="p-2.5 rounded-[2px] bg-[#1C1F2A] border border-[#262A35]/30 flex flex-col gap-0.5">
                    <span className="text-[#8B90A0] text-[11px] font-mono">Punch Status</span>
                    <span className="text-[#7BD0FF] text-[13px] font-semibold">Normal (0 Anomaly)</span>
                  </div>
                </div>

                {/* Trigger Action Buttons */}
                <div className="flex items-center gap-2 pt-0.5">
                  <button
                    type="button"
                    onClick={handleCopyEod}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-[2px] bg-[#262A35] hover:bg-[#323746] text-[#DFE2F1] text-[11px] font-medium transition-colors"
                  >
                    <PersCopySummaryIcon className="shrink-0" />
                    <span>{copiedEod ? "Copied to Clipboard!" : "Copy EOD Summary"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveModal(kekaModalData)}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-[2px] bg-[#1C1F2A] hover:bg-[#262A35] text-[#DFE2F1] text-[11px] font-medium transition-colors border border-[#262A35]"
                  >
                    <PersPresetsSettingsIcon className="shrink-0" />
                    <span>Presets</span>
                  </button>
                </div>
              </div>

              {/* Engineered Capabilities Matrix */}
              <div className="flex flex-col gap-2 pt-1">
                <span className="text-[#DFE2F1] text-[11px] tracking-[0.05em] uppercase font-mono font-semibold">
                  ENGINEERED CAPABILITIES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-start gap-2">
                    <span className="size-1.5 rounded-full bg-[#7BD0FF] shrink-0 mt-1.5" />
                    <span className="text-[#C1C6D7] text-[12px] leading-[18px]">
                      Remaining workspace time &amp; effective hours
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="size-1.5 rounded-full bg-[#7BD0FF] shrink-0 mt-1.5" />
                    <span className="text-[#C1C6D7] text-[12px] leading-[18px]">
                      Punch-in/out status &amp; missing punch alert
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="size-1.5 rounded-full bg-[#7BD0FF] shrink-0 mt-1.5" />
                    <span className="text-[#C1C6D7] text-[12px] leading-[18px]">
                      Automated availability &amp; custom message presets
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="size-1.5 rounded-full bg-[#7BD0FF] shrink-0 mt-1.5" />
                    <span className="text-[#C1C6D7] text-[12px] leading-[18px]">
                      Workspace timer &amp; smart suggestions
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Hub */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModal(kekaModalData)}
                  className="flex items-center gap-2 py-2 px-4 rounded-[2px] bg-[#0070F3] hover:bg-[#2085ff] text-white text-[12px] font-medium shadow-sm transition-colors"
                >
                  <PersViewDetailsKekaIcon className="shrink-0" />
                  <span>View Details</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModal(kekaModalData)}
                  className="flex items-center gap-2 py-2 px-4 rounded-[2px] bg-[#1C1F2A] hover:bg-[#262A35] text-[#DFE2F1] text-[12px] font-medium border border-[#262A35] transition-colors"
                >
                  <PersInspectFlowKekaIcon className="shrink-0" />
                  <span>Inspect Flow</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* ── PROJECT 02: SMART STOCK MANAGER ── */}
          <motion.div
            className="flex flex-col bg-[#171B26] rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] border border-[#262A35]/50 overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2, ease }}
          >
            {/* Card Top Bar & Metadata Shelf */}
            <div className="p-6 bg-[#1C1F2A] border-b border-[#262A35]/40 flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-[2px] bg-[#262A35] text-[#7BD0FF] text-[11px] font-mono font-medium">
                    Personal Project • Web Application
                  </span>
                  <span className="px-2 py-0.5 rounded-[2px] bg-[#0A0E18] text-[#8B90A0] text-[11px] font-mono">
                    Client-Side Sandbox
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-[#7BD0FF]" />
                  <span className="text-[#7BD0FF] text-[11px] font-mono font-medium">Built for personal research</span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-[#DFE2F1] text-[22px] sm:text-[24px] font-semibold leading-[32px] tracking-[-0.02em]">
                  Smart Stock Manager
                </h3>
                <span className="text-[#8B90A0] text-[11px] font-mono">
                  Personal Financial Tool // Market Overview &amp; IPO Tracker
                </span>
                <p className="text-[#C1C6D7] text-[14px] leading-[22px] pt-1">
                  A lightweight personal dashboard to track daily market updates, watchlist stocks, and explore IPO information in one place.
                </p>
              </div>

              {/* Anonymized Data Callout Box */}
              <div className="p-3.5 rounded bg-[#0A0E18] border border-[#262A35]/50 flex items-start gap-2.5">
                <PersShieldAnonymizedStockIcon className="shrink-0 mt-0.5" />
                <p className="text-[#DFE2F1] text-[12px] leading-[18px]">
                  Anonymized Data: UI reflects sandboxed demo tickers and simulated IPO metrics. No live brokerage credentials or execution capabilities.
                </p>
              </div>
            </div>

            {/* Terminal / Market UI Window Simulation */}
            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-[#8B90A0] text-[11px] font-mono">
                  {"// INTERFACE EMULATION (MARKET VIEWER)"}
                </span>
                <span className="text-[#C1C6D7] text-[11px] font-mono">
                  NSE / BSE Hybrid Socket
                </span>
              </div>

              {/* Terminal Frame */}
              <div className="flex flex-col gap-3 p-4 rounded bg-[#0A0E18] border border-[#262A35] shadow-lg">
                {/* Window tabs */}
                <div className="flex items-center justify-between pb-2 border-b border-[#262A35]/40">
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setSelectedStockTab("watchlist")}
                      className={`px-2.5 py-1 rounded-[2px] text-[11px] font-mono transition-colors ${
                        selectedStockTab === "watchlist"
                          ? "bg-[#262A35] text-[#DFE2F1]"
                          : "bg-[#1C1F2A] text-[#8B90A0] hover:text-[#DFE2F1]"
                      }`}
                    >
                      Watchlist (Demo)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedStockTab("mainboard")}
                      className={`px-2.5 py-1 rounded-[2px] text-[11px] font-mono transition-colors ${
                        selectedStockTab === "mainboard"
                          ? "bg-[#262A35] text-[#DFE2F1]"
                          : "bg-[#1C1F2A] text-[#8B90A0] hover:text-[#DFE2F1]"
                      }`}
                    >
                      Mainboard
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedStockTab("sme")}
                      className={`px-2.5 py-1 rounded-[2px] text-[11px] font-mono transition-colors ${
                        selectedStockTab === "sme"
                          ? "bg-[#262A35] text-[#DFE2F1]"
                          : "bg-[#1C1F2A] text-[#8B90A0] hover:text-[#DFE2F1]"
                      }`}
                    >
                      SME Hub
                    </button>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#171B26] border border-[#262A35]/50">
                    <PersSandboxBadgeIcon className="shrink-0" />
                    <span className="text-[#7BD0FF] text-[10px] font-mono font-semibold tracking-wider">SANDBOX</span>
                  </div>
                </div>

                {/* Simulated Market Rows */}
                <div className="flex flex-col gap-2">
                  {/* Row 1: DEMO-CORP */}
                  <div className="p-3 rounded-[2px] bg-[#1C1F2A] border border-[#262A35]/30 flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#DFE2F1] text-[13px] font-semibold">DEMO-CORP</span>
                        <span className="px-1.5 py-0.5 rounded-[2px] bg-[#262A35] text-[#8B90A0] text-[9.5px] font-mono">NSE</span>
                      </div>
                      <span className="text-[#8B90A0] text-[11px]">Sample Vol: 1.2M • P/E 16.4</span>
                    </div>

                    <div className="flex flex-col items-center gap-1 w-28">
                      <div className="flex items-center justify-between w-full text-[10px] text-[#8B90A0] font-mono">
                        <span>₹145.00</span>
                        <span>₹152.00</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-[#313540] overflow-hidden">
                        <div className="h-full rounded-full bg-[#7BD0FF]" style={{ width: "75%" }} />
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-[#DFE2F1] text-[13px] font-semibold font-mono">₹149.80</span>
                      <span className="text-[#7BD0FF] text-[11px] font-mono font-medium">+3.31%</span>
                    </div>
                  </div>

                  {/* Row 2: MOCK-TECH */}
                  <div className="p-3 rounded-[2px] bg-[#1C1F2A] border border-[#262A35]/30 flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#DFE2F1] text-[13px] font-semibold">MOCK-TECH</span>
                        <span className="px-1.5 py-0.5 rounded-[2px] bg-[#262A35] text-[#8B90A0] text-[9.5px] font-mono">BSE</span>
                      </div>
                      <span className="text-[#8B90A0] text-[11px]">Demo Div 1.8% • Book ₹380</span>
                    </div>

                    <div className="flex flex-col items-center gap-1 w-28">
                      <div className="flex items-center justify-between w-full text-[10px] text-[#8B90A0] font-mono">
                        <span>₹1,240</span>
                        <span>₹1,280</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-[#313540] overflow-hidden">
                        <div className="h-full rounded-full bg-[#FFB4AB]" style={{ width: "65%" }} />
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-[#DFE2F1] text-[13px] font-semibold font-mono">₹1,255.00</span>
                      <span className="text-[#FFB4AB] text-[11px] font-mono font-medium">-1.15%</span>
                    </div>
                  </div>

                  {/* Row 3: Alpha Labs IPO Banner */}
                  <div className="p-3 rounded-[2px] bg-[#262A35] border border-[#7BD0FF]/80 flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-[#7BD0FF] shadow-[0_0_6px_rgba(123,208,255,0.8)]" />
                        <span className="text-[#DFE2F1] text-[12px] font-semibold">Alpha Labs IPO (Demo)</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-[2px] bg-[#7BD0FF]/20 text-[#7BD0FF] text-[10px] font-mono font-semibold">
                        Upcoming
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#C1C6D7]">Simulated Subscription: 3.4x</span>
                      <span className="text-[#7BD0FF] font-mono font-semibold">Est. Gain: +28.5%</span>
                    </div>
                  </div>
                </div>

                {/* Footer specs of terminal */}
                <div className="flex items-center justify-between pt-1 border-t border-[#262A35]/30">
                  <div className="flex items-center gap-1.5">
                    <PersDatabaseClientStockIcon className="shrink-0" />
                    <span className="text-[#8B90A0] text-[11px] font-mono">Client-Side (IndexedDB)</span>
                  </div>
                  <span className="text-[#8B90A0] text-[11px] font-mono">Sandbox Cache Mode</span>
                </div>
              </div>

              {/* Engineered Capabilities Matrix */}
              <div className="flex flex-col gap-2 pt-1">
                <span className="text-[#DFE2F1] text-[11px] tracking-[0.05em] uppercase font-mono font-semibold">
                  ENGINEERED CAPABILITIES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-start gap-2">
                    <span className="size-1.5 rounded-full bg-[#7BD0FF] shrink-0 mt-1.5" />
                    <span className="text-[#C1C6D7] text-[12px] leading-[18px]">
                      Personal watchlist &amp; stock search
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="size-1.5 rounded-full bg-[#7BD0FF] shrink-0 mt-1.5" />
                    <span className="text-[#C1C6D7] text-[12px] leading-[18px]">
                      Market price info &amp; daily price changes
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="size-1.5 rounded-full bg-[#7BD0FF] shrink-0 mt-1.5" />
                    <span className="text-[#C1C6D7] text-[12px] leading-[18px]">
                      Mainboard &amp; SME IPO tracking with filters
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="size-1.5 rounded-full bg-[#7BD0FF] shrink-0 mt-1.5" />
                    <span className="text-[#C1C6D7] text-[12px] leading-[18px]">
                      Estimated gain &amp; subscription information
                    </span>
                  </div>
                  <div className="flex items-start gap-2 sm:col-span-2">
                    <span className="size-1.5 rounded-full bg-[#7BD0FF] shrink-0 mt-1.5" />
                    <span className="text-[#C1C6D7] text-[12px] leading-[18px]">
                      Client-side storage (IndexedDB)
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Hub */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModal(stockModalData)}
                  className="flex items-center gap-2 py-2 px-4 rounded-[2px] bg-[#0070F3] hover:bg-[#2085ff] text-white text-[12px] font-medium shadow-sm transition-colors"
                >
                  <PersViewDetailsStockIcon className="shrink-0" />
                  <span>View Details</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModal(stockModalData)}
                  className="flex items-center gap-2 py-2 px-4 rounded-[2px] bg-[#1C1F2A] hover:bg-[#262A35] text-[#DFE2F1] text-[12px] font-medium border border-[#262A35] transition-colors"
                >
                  <PersInspectFlowStockIcon className="shrink-0" />
                  <span>Inspect Flow</span>
                </button>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── ENGINEERING PHILOSOPHY STRIP & TAKEAWAYS (Figma #1:3789) ── */}
        <motion.div
          className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 p-6 rounded-lg bg-[#171B26] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] border border-[#262A35]/50"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.55, ease }}
        >
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <PersMotivationSparkleIcon className="shrink-0" />
              <span className="text-[#7BD0FF] text-[11px] tracking-[0.05em] uppercase font-mono font-semibold">
                THE MOTIVATION BEHIND PERSONAL BUILDS
              </span>
            </div>
            <p className="text-[#C1C6D7] text-[13px] leading-[22px]">
              Personal projects are an exercise in rapid iteration, curiosity, and practical problem-solving. Building lightweight utilities eliminates everyday workflow friction and allows hands-on exploration of emerging APIs and architectures without organizational overhead.
            </p>
            {/* Tech capability pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {[
                "Workflow Automation",
                "Client Runtimes",
                "Local Persistence",
                "API Experimentation",
              ].map((pill) => (
                <span
                  key={pill}
                  className="px-2.5 py-0.5 rounded-[2px] bg-[#1C1F2A] text-[#C1C6D7] text-[11px] font-mono border border-[#262A35]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-[2px] bg-[#1C1F2A] text-[#DFE2F1] text-xs font-medium hover:bg-[#262A35] transition-colors border border-[#262A35]"
            >
              <PersExploreEnterpriseIcon className="shrink-0" />
              <span>Explore Enterprise Projects</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-[2px] bg-[#0A0E18] text-[#7BD0FF] text-xs font-medium hover:bg-[#171B26] transition-colors border border-[#262A35]"
            >
              <PersDiscussAutomationIcon className="shrink-0" />
              <span>Discuss Custom Automation</span>
            </a>
          </div>
        </motion.div>

      </SectionContainer>

      {/* ── INTERACTIVE MODAL DRILL-DOWN ── */}
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

              {/* Header */}
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
              <p className="text-[#C1C6D7] text-sm leading-relaxed">
                {activeModal.desc}
              </p>

              {/* Highlights */}
              <div className="p-3.5 rounded bg-[#0A0E18] border border-[#262A35] flex flex-col gap-2">
                <span className="text-[#7BD0FF] text-xs font-mono font-semibold uppercase">
                  ARCHITECTURAL HIGHLIGHTS:
                </span>
                {activeModal.highlights.map((item, idx) => (
                  <p key={idx} className="text-[#C1C6D7] text-xs leading-relaxed flex items-start gap-2">
                    <span className="size-1 rounded-full bg-[#7BD0FF] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>

              {/* Action button */}
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-full py-2.5 px-4 rounded bg-[#0070F3] hover:bg-[#2085ff] text-white text-xs font-medium transition-colors mt-2"
              >
                Return to Portfolio
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}