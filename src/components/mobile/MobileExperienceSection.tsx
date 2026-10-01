"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@/components/icons/StitchMobileIcons";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function MobileExperienceSection() {
  return (
    <section
      id="mobile-experience"
      className="flex flex-col gap-4 px-4 py-8 scroll-mt-16 bg-[#0F131D]"
    >
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[12px] font-semibold text-[#00D7F4]">
          05 // CAREER TIMELINE
        </span>
        <h2 className="text-[26px] font-semibold leading-[32px] tracking-[-0.015em] text-[#DFE2F1]">
          Engineering Experience
        </h2>
        <p className="text-[14px] leading-[20px] text-[#C1C6D7] mt-0.5">
          Proven history building fault-tolerant scalable systems at enterprise velocity.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative flex flex-col gap-6 pl-6 ml-2 mt-2">
        {/* Continuous Connecting Line */}
        <div
          className="absolute left-2 top-3 bottom-3 w-0.5 bg-[#313540]"
          aria-hidden
        />

        {/* Role 1: Acquaint Softtech */}
        <motion.div
          className="relative flex flex-col gap-3 bg-[#1C1F2A] p-4 rounded-xl border border-[#262A35]/60 shadow-sm"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.45, ease }}
        >
          {/* Glowing dot */}
          <span className="absolute -left-[31px] top-5 size-4 rounded-full bg-[#0F131D] flex items-center justify-center">
            <span className="size-2.5 rounded-full bg-[#00D7F4] shadow-[0_0_8px_#00D7F4]" />
          </span>

          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between flex-wrap gap-1">
              <span className="text-[17px] font-semibold text-[#DFE2F1]">
                Software Engineer
              </span>
              <span className="font-mono text-[11px] font-semibold text-[#00D7F4] bg-[#262A35] px-2 py-0.5 rounded border border-[#00D7F4]/20">
                May 2025 – Present
              </span>
            </div>
            <div className="flex items-center justify-between text-[13px]">
              <span className="text-[#AEC6FF] font-medium">Acquaint Softtech</span>
              <span className="font-mono text-[11px] text-[#8B90A0]">Team: 6–8 Devs</span>
            </div>
          </div>

          <ul className="flex flex-col gap-2 text-[13px] text-[#C1C6D7] leading-[18px]">
            <li className="flex items-start gap-2.5">
              <CheckCircleIcon className="size-4 text-[#00D7F4] shrink-0 mt-0.5" />
              <span>Architecting full stack services using Next.js and NestJS with PostgreSQL and Prisma ORM.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircleIcon className="size-4 text-[#00D7F4] shrink-0 mt-0.5" />
              <span>Engineered Redis caching hierarchies and Socket.IO real-time channels for high-frequency platform updates.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircleIcon className="size-4 text-[#00D7F4] shrink-0 mt-0.5" />
              <span>Implemented TOTP multi-factor authentication (MFA) and automated end-to-end testing with Playwright.</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-1.5 pt-1 border-t border-[#262A35]/30">
            {["Next.js", "NestJS", "PostgreSQL", "Prisma", "Redis", "Socket.IO", "Playwright"].map((skill) => (
              <span
                key={skill}
                className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#171B26] text-[#DFE2F1] border border-[#262A35]"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Role 2: Hyperlink Infosystem */}
        <motion.div
          className="relative flex flex-col gap-3 bg-[#1C1F2A] p-4 rounded-xl border border-[#262A35]/60 shadow-sm"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.45, delay: 0.1, ease }}
        >
          {/* Muted dot */}
          <span className="absolute -left-[31px] top-5 size-4 rounded-full bg-[#0F131D] flex items-center justify-center">
            <span className="size-2.5 rounded-full bg-[#8B90A0]" />
          </span>

          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between flex-wrap gap-1">
              <span className="text-[17px] font-semibold text-[#DFE2F1]">
                MERN Stack Developer
              </span>
              <span className="font-mono text-[11px] font-medium text-[#8B90A0] bg-[#262A35] px-2 py-0.5 rounded">
                Jan 2022 – May 2025
              </span>
            </div>
            <div className="flex items-center justify-between text-[13px]">
              <span className="text-[#AEC6FF] font-medium">Hyperlink Infosystem</span>
              <span className="font-mono text-[11px] text-[#8B90A0]">Team: 16–20 Devs</span>
            </div>
          </div>

          <ul className="flex flex-col gap-2 text-[13px] text-[#C1C6D7] leading-[18px]">
            <li className="flex items-start gap-2.5">
              <CheckCircleIcon className="size-4 text-[#8B90A0] shrink-0 mt-0.5" />
              <span>Built scalable web apps using Node.js, Express.js, React.js, MongoDB, and MySQL.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircleIcon className="size-4 text-[#8B90A0] shrink-0 mt-0.5" />
              <span>Integrated multi-currency payment checkout flows with Stripe and Razorpay webhook handlers.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircleIcon className="size-4 text-[#8B90A0] shrink-0 mt-0.5" />
              <span>Delivered ~30% performance optimization on client web apps and mentored 10+ junior trainees.</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-1.5 pt-1 border-t border-[#262A35]/30">
            {["Node.js", "Express.js", "React.js", "MongoDB", "MySQL", "Stripe / Razorpay"].map((skill) => (
              <span
                key={skill}
                className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#171B26] text-[#DFE2F1] border border-[#262A35]"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
