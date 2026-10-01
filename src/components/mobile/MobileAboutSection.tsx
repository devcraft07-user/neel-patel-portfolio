"use client";

import * as React from "react";
import { motion } from "framer-motion";

import {
  ArchitectureIcon,
  DevicesIcon,
  DnsServerIcon,
  SensorsIcon,
  DatabaseIcon,
  ApiContractIcon,
  SecurityShieldIcon,
} from "@/components/icons/StitchMobileIcons";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const timelineNodes = [
  {
    year: "2026 // Software Engineer",
    tag: "CURRENT",
    isCurrent: true,
    dotColor: "bg-[#00D7F4]",
    tagBg: "bg-[#1C1F2A] text-[#00D7F4] border border-[#00D7F4]/30",
    description: "Continuous growth, backend and frontend development across client products.",
  },
  {
    year: "2025 // Software Engineer",
    tag: "ACQUAINT SOFTTECH",
    isCurrent: false,
    dotColor: "bg-[#AEC6FF]",
    tagBg: "bg-[#262A35] text-[#8B90A0]",
    description: "Joined Acquaint Softtech: Next.js portals, NestJS microservices, and Socket.IO workflows.",
  },
  {
    year: "2024 // MERN Stack Developer",
    tag: "FULL STACK",
    isCurrent: false,
    dotColor: "bg-[#353944]",
    tagBg: "bg-[#262A35] text-[#8B90A0]",
    description: "Full stack features, React portals, and secure payment integrations (Stripe, Razorpay).",
  },
  {
    year: "2022 // Node.js Developer",
    tag: "FOUNDATIONS",
    isCurrent: false,
    dotColor: "bg-[#313540]",
    tagBg: "bg-[#262A35] text-[#8B90A0]",
    description: "Backend foundations, RESTful APIs, database schema design, and asynchronous query handling.",
  },
];

const corePillars = [
  {
    title: "Full Stack Dev",
    sub: "Next.js, React, TypeScript.",
    icon: <DevicesIcon className="size-5 text-[#00D7F4]" />,
  },
  {
    title: "Backend Eng",
    sub: "NestJS, Node.js, Express APIs.",
    icon: <DnsServerIcon className="size-5 text-[#00D7F4]" />,
  },
  {
    title: "Real-Time Apps",
    sub: "Socket.IO & WebSockets.",
    icon: <SensorsIcon className="size-5 text-[#00D7F4]" />,
  },
  {
    title: "Database Opt",
    sub: "PostgreSQL, MySQL, Redis cache.",
    icon: <DatabaseIcon className="size-5 text-[#00D7F4]" />,
  },
  {
    title: "API Development",
    sub: "REST APIs & clean validation.",
    icon: <ApiContractIcon className="size-5 text-[#00D7F4]" />,
  },
  {
    title: "Auth & Security",
    sub: "Role-based access & TOTP MFA.",
    icon: <SecurityShieldIcon className="size-5 text-[#00D7F4]" />,
  },
];

export function MobileAboutSection() {
  return (
    <section
      id="mobile-about"
      className="flex flex-col px-4 py-8 gap-4 bg-[#0F131D] border-t border-b border-[#262A35]/30 scroll-mt-16"
    >
      {/* Header Tag */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[12px] font-semibold tracking-wider text-[#00D7F4]">
            02 //
          </span>
          <h2 className="text-[24px] font-semibold leading-[30px] tracking-[-0.015em] text-[#DFE2F1]">
            About &amp; Philosophy
          </h2>
        </div>
        <ArchitectureIcon className="size-5 text-[#7BD0FF]" />
      </div>

      {/* Mindset Card */}
      <motion.div
        className="p-4 rounded-xl bg-[#1C1F2A] border border-[#262A35]/50 shadow-sm flex flex-col gap-2"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={{ duration: 0.45, ease }}
      >
        <span className="font-mono text-[11px] font-semibold tracking-widest text-[#FFB596] uppercase">
          FIRST-PRINCIPLES MINDSET
        </span>
        <p className="text-[14px] leading-[22px] text-[#DFE2F1]">
          Software Engineer focused on building reliable, maintainable software and practical architectures. Experienced in deconstructing complex business logic into clean services, modular APIs, and intuitive user experiences.
        </p>
      </motion.div>

      {/* Career Evolution Graph */}
      <div className="flex flex-col gap-2 mt-2">
        <span className="font-mono text-[11px] text-[#8B90A0] uppercase tracking-wider mb-1">
          CAREER EVOLUTION GRAPH
        </span>
        <div className="relative pl-6 flex flex-col gap-4">
          {/* Continuous Connecting Line */}
          <div
            className="absolute left-2.5 top-2 bottom-3 w-0.5 bg-[#313540]"
            aria-hidden
          />

          {timelineNodes.map((node) => (
            <motion.div
              key={node.year}
              className="relative flex flex-col gap-0.5"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.4, ease }}
            >
              {/* Dot marker */}
              <div
                className={`absolute -left-6 top-1 size-3.5 rounded-full ${node.dotColor} ring-4 ring-[#0A0E18]`}
              />
              <div className="flex items-center justify-between gap-1 flex-wrap">
                <span
                  className={`font-mono text-[13px] font-semibold ${
                    node.isCurrent ? "text-[#00D7F4]" : "text-[#DFE2F1]"
                  }`}
                >
                  {node.year}
                </span>
                <span
                  className={`font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded ${node.tagBg}`}
                >
                  {node.tag}
                </span>
              </div>
              <p className="text-[13px] leading-[18px] text-[#C1C6D7] mt-0.5">
                {node.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Pillars of Practice */}
      <div className="flex flex-col gap-2 mt-4">
        <span className="font-mono text-[11px] text-[#8B90A0] uppercase tracking-wider">
          CORE PILLARS OF PRACTICE
        </span>
        <div className="grid grid-cols-2 gap-2">
          {corePillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col p-3 rounded-xl bg-[#1C1F2A] border border-[#262A35]/50 gap-1 shadow-sm"
            >
              {pillar.icon}
              <span className="text-[14px] font-semibold text-[#DFE2F1] leading-tight mt-1">
                {pillar.title}
              </span>
              <span className="text-[12px] leading-snug text-[#C1C6D7]">
                {pillar.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
