"use client";

import * as React from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function MobileHeroSection() {
  return (
    <section
      id="mobile-home"
      className="flex flex-col px-4 pt-20 pb-8 gap-4 relative overflow-hidden bg-[#0F131D] scroll-mt-16"
    >
      {/* Ambient photonic glow backdrop */}
      <div
        className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[#00D7F4]/10 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-48 -left-16 w-56 h-56 rounded-full bg-[#0070F3]/10 blur-3xl pointer-events-none"
        aria-hidden
      />

      {/* Status Badge */}
      <motion.div
        className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#262A35] shadow-sm border border-[#313540]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease }}
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full rounded-full bg-[#00D7F4] opacity-75 animate-ping" />
          <span className="relative inline-flex size-2 rounded-full bg-[#00D7F4]" />
        </span>
        <span className="text-[#00D7F4] text-[11px] font-mono font-semibold tracking-wider uppercase">
          OPEN TO SOFTWARE ENGINEER / FULL STACK ROLES
        </span>
      </motion.div>

      {/* Large Touch-Optimized Typography */}
      <motion.div
        className="flex flex-col gap-2"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08, ease }}
      >
        <h1 className="text-[32px] font-bold leading-[38px] tracking-[-0.02em] text-[#DFE2F1]">
          Software Engineer building{" "}
          <span className="text-[#00D7F4]">scalable web applications</span> &amp; real-world systems.
        </h1>
        <p className="text-[14px] leading-[20px] text-[#C1C6D7] mt-1">
          4+ years of professional experience developing responsive frontends, backend APIs, and real-time systems across Finance, Healthcare, EdTech, and Food Technology.
        </p>
      </motion.div>

      {/* Metrics Matrix (2x2 Grid) */}
      <motion.div
        className="grid grid-cols-2 gap-2 my-1"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.16, ease }}
      >
        <div className="flex flex-col p-3 rounded-xl bg-[#171B26] border border-[#262A35]/50 shadow-sm">
          <span className="text-[#00D7F4] text-[12px] font-mono font-semibold tracking-wide">
            4+ YEARS
          </span>
          <span className="text-[14px] font-medium text-[#DFE2F1] mt-0.5">
            Experience
          </span>
          <span className="text-[12px] text-[#C1C6D7]">
            Professional software dev
          </span>
        </div>

        <div className="flex flex-col p-3 rounded-xl bg-[#171B26] border border-[#262A35]/50 shadow-sm">
          <span className="text-[#00D7F4] text-[12px] font-mono font-semibold tracking-wide">
            8+ PROJECTS
          </span>
          <span className="text-[14px] font-medium text-[#DFE2F1] mt-0.5">
            Delivered
          </span>
          <span className="text-[12px] text-[#C1C6D7]">
            Web &amp; backend systems
          </span>
        </div>

        <div className="flex flex-col p-3 rounded-xl bg-[#171B26] border border-[#262A35]/50 shadow-sm">
          <span className="text-[#00D7F4] text-[12px] font-mono font-semibold tracking-wide">
            4 DOMAINS
          </span>
          <span className="text-[14px] font-medium text-[#DFE2F1] mt-0.5">
            Business Verticals
          </span>
          <span className="text-[12px] text-[#C1C6D7]">
            Fin, Health, EdTech, Food
          </span>
        </div>

        <div className="flex flex-col p-3 rounded-xl bg-[#171B26] border border-[#262A35]/50 shadow-sm">
          <span className="text-[#00D7F4] text-[12px] font-mono font-semibold tracking-wide">
            10+ TRAINEES
          </span>
          <span className="text-[14px] font-medium text-[#DFE2F1] mt-0.5">
            Mentored
          </span>
          <span className="text-[12px] text-[#C1C6D7]">
            TypeScript &amp; clean code
          </span>
        </div>
      </motion.div>
    </section>
  );
}
