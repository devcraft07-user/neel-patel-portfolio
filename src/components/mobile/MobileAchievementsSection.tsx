"use client";

import * as React from "react";
import { motion } from "framer-motion";

import {
  HistoryEduIcon,
  RocketLaunchIcon,
  DomainBuildingIcon,
  GroupsUsersIcon,
  SpeedGaugeIcon,
  SyncSavedLocallyIcon,
  VerifiedUserIcon,
} from "@/components/icons/StitchMobileIcons";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function MobileAchievementsSection() {
  return (
    <section
      id="mobile-achievements"
      className="flex flex-col gap-4 px-4 py-8 scroll-mt-16 bg-[#0F131D]"
    >
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[12px] font-semibold text-[#00D7F4]">
          06 // QUANTIFIED IMPACT
        </span>
        <h2 className="text-[26px] font-semibold leading-[32px] tracking-[-0.015em] text-[#DFE2F1]">
          Metrics &amp; Milestones
        </h2>
        <p className="text-[14px] leading-[20px] text-[#C1C6D7] mt-0.5">
          Measurable outcomes verified in production deployment environments.
        </p>
      </div>

      {/* 2x2 Metric Grid */}
      <div className="grid grid-cols-2 gap-3 mt-1">
        <motion.div
          className="bg-[#1C1F2A] p-4 rounded-xl flex flex-col gap-1 shadow-sm border border-[#262A35]/50"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.4, ease }}
        >
          <HistoryEduIcon className="size-6 text-[#00D7F4]" />
          <span className="text-[32px] font-bold text-[#DFE2F1] leading-none mt-2">
            4+
          </span>
          <span className="font-mono text-[11px] text-[#8B90A0] uppercase tracking-wider">
            Years Exp
          </span>
        </motion.div>

        <motion.div
          className="bg-[#1C1F2A] p-4 rounded-xl flex flex-col gap-1 shadow-sm border border-[#262A35]/50"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.4, delay: 0.05, ease }}
        >
          <RocketLaunchIcon className="size-6 text-[#AEC6FF]" />
          <span className="text-[32px] font-bold text-[#DFE2F1] leading-none mt-2">
            8+
          </span>
          <span className="font-mono text-[11px] text-[#8B90A0] uppercase tracking-wider">
            Prod Projects
          </span>
        </motion.div>

        <motion.div
          className="bg-[#1C1F2A] p-4 rounded-xl flex flex-col gap-1 shadow-sm border border-[#262A35]/50"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.4, delay: 0.1, ease }}
        >
          <DomainBuildingIcon className="size-6 text-[#D0BCFF]" />
          <span className="text-[32px] font-bold text-[#DFE2F1] leading-none mt-2">
            4
          </span>
          <span className="font-mono text-[11px] text-[#8B90A0] uppercase tracking-wider">
            Business Domains
          </span>
        </motion.div>

        <motion.div
          className="bg-[#1C1F2A] p-4 rounded-xl flex flex-col gap-1 shadow-sm border border-[#262A35]/50"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.4, delay: 0.15, ease }}
        >
          <GroupsUsersIcon className="size-6 text-[#00D7F4]" />
          <span className="text-[32px] font-bold text-[#DFE2F1] leading-none mt-2">
            10+
          </span>
          <span className="font-mono text-[11px] text-[#8B90A0] uppercase tracking-wider">
            Trainees Mentored
          </span>
        </motion.div>
      </div>

      {/* 3 Outcome Capability Rows */}
      <div className="flex flex-col gap-2 mt-2">
        <div className="bg-[#171B26] p-3 rounded-lg flex items-center justify-between border border-[#262A35]/40">
          <div className="flex items-center gap-2.5">
            <SpeedGaugeIcon className="size-5 text-[#00D7F4] shrink-0" />
            <span className="text-[13px] text-[#DFE2F1] font-medium">
              ~30% Performance Optimization
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#00D7F4] bg-[#262A35] px-2 py-0.5 rounded">
            SSR &amp; Bundling
          </span>
        </div>

        <div className="bg-[#171B26] p-3 rounded-lg flex items-center justify-between border border-[#262A35]/40">
          <div className="flex items-center gap-2.5">
            <SyncSavedLocallyIcon className="size-5 text-[#AEC6FF] shrink-0" />
            <span className="text-[13px] text-[#DFE2F1] font-medium">
              Real-Time Socket.IO / WebSockets
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#AEC6FF] bg-[#262A35] px-2 py-0.5 rounded">
            Low Latency
          </span>
        </div>

        <div className="bg-[#171B26] p-3 rounded-lg flex items-center justify-between border border-[#262A35]/40">
          <div className="flex items-center gap-2.5">
            <VerifiedUserIcon className="size-5 text-[#D0BCFF] shrink-0" />
            <span className="text-[13px] text-[#DFE2F1] font-medium">
              Full Stack Development
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#D0BCFF] bg-[#262A35] px-2 py-0.5 rounded">
            End-to-End Delivery
          </span>
        </div>
      </div>
    </section>
  );
}
