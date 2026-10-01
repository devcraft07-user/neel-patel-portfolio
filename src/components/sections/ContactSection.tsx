"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { siteConfig } from "@/config/site";
import {
  ContactLocationPinIcon,
  ContactNetworkShareIcon,
  ContactSlaZapIcon,
  ContactEmailAtIcon,
  ContactSendPlaneIcon,
  ContactCopyDocIcon,
  FormShieldGuaranteeIcon,
  BannerLinkedinArrowIcon,
  BannerGithubCodeIcon,
  BannerEmailEnvelopeIcon,
} from "@/components/icons/AchievementsContactIcons";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function ContactSection() {
  const ref = React.useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  const [copied, setCopied] = React.useState(false);
  const email = siteConfig.email;

  function handleCopy() {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section id="contact" ref={ref} className="relative bg-[#0F131D] overflow-hidden scroll-mt-16">
      <SectionContainer className="py-8 sm:py-10 flex flex-col gap-6 sm:gap-8">

        {/* ── SECTION HEADER (CENTERED) ── */}
        <motion.div
          className="flex flex-col items-center text-center gap-2 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease }}
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#7BD0FF]/40" />
            <span className="text-[#7BD0FF] text-[11px] tracking-[0.05em] uppercase font-mono font-medium">
              08 // CONTACT • LET&apos;S CONNECT
            </span>
            <span className="h-px w-12 bg-[#7BD0FF]/40" />
          </div>
          <h2 className="text-[32px] sm:text-[40px] font-semibold leading-[40px] sm:leading-[48px] tracking-[-0.025em] text-[#DFE2F1] mt-1">
            Have a project, opportunity, or{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #AEC6FF 0%, #7BD0FF 100%)",
              }}
            >
              technical challenge?
            </span>
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-[26px] tracking-[-0.01em] text-[#C1C6D7] mt-1">
            I&apos;m open to discussing Full Stack opportunities, interesting engineering problems, and software projects.
          </p>

          {/* Availability pill */}
          <div className="mt-2 inline-flex items-center gap-2 bg-[#171B26] px-4 py-1.5 rounded-full border border-[#262A35]/60 shadow-inner">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full rounded-full bg-[#00A6E0] opacity-75 animate-ping" />
              <span className="relative inline-flex size-2.5 rounded-full bg-[#7BD0FF]" />
            </span>
            <span className="text-[#DFE2F1] text-[11px] font-medium tracking-[0.02em] font-mono">
              Open to Senior Full Stack / Software Engineer Opportunities
            </span>
          </div>
        </motion.div>

        {/* ── 3-COLUMN CONTACT CARDS & FULL-WIDTH RESPONSE SLA BANNER ── */}
        <div className="flex flex-col gap-4 sm:gap-6 max-w-[1200px] w-full mx-auto">
          {/* 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

            {/* Direct Email Card */}
            <motion.div
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-[#1C1F2A] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] hover:shadow-xl hover:bg-[#262A35] border border-[#262A35]/30 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease }}
            >
              <div
                className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, #AEC6FF 50%, transparent 100%)",
                }}
              />
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8B90A0] text-[11px] font-mono tracking-[0.05em] uppercase">
                    DIRECT EMAIL
                  </span>
                  <ContactEmailAtIcon className="size-5 text-[#AEC6FF]" />
                </div>
                <div className="mt-3">
                  <p className="text-[#DFE2F1] text-[13px] sm:text-[14px] font-mono font-medium truncate select-all">
                    {email}
                  </p>
                  <p className="text-[#C1C6D7] text-[13px] leading-[18px] mt-1">
                    Primary contact channel for roles &amp; consulting
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-2 flex items-center gap-2">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0070F3] text-white text-[13px] font-medium hover:bg-[#0059C5] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7BD0FF] min-h-[36px]"
                >
                  <ContactSendPlaneIcon className="w-[13px] h-[11px] text-white" />
                  Send Email
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#313540] text-[#DFE2F1] text-[11px] font-mono hover:bg-[#353944] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7BD0FF] min-h-[36px]"
                >
                  <ContactCopyDocIcon className="w-[12px] h-[14px] text-[#DFE2F1]" />
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </motion.div>

            {/* Primary Location Card */}
            <motion.div
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-[#1C1F2A] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] hover:shadow-xl hover:bg-[#262A35] border border-[#262A35]/30 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15, ease }}
            >
              <div
                className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, #7BD0FF 50%, transparent 100%)",
                }}
              />
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8B90A0] text-[11px] font-mono tracking-[0.05em] uppercase">
                    PRIMARY LOCATION
                  </span>
                  <ContactLocationPinIcon className="w-[14px] h-[17px] text-[#7BD0FF]" />
                </div>
                <div className="mt-3">
                  <p className="text-[#DFE2F1] text-[18px] font-medium leading-[26px] tracking-[-0.015em]">
                    Ahmedabad, India
                  </p>
                  <p className="text-[#C1C6D7] text-[13px] leading-[18px] mt-1">
                    Open to Remote (Global / US / EU timezones) &amp; Hybrid roles
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-2 flex items-center gap-2 bg-[#0A0E18]/50 rounded-lg p-2.5 border border-[#262A35]/30">
                <span className="size-2 rounded-full bg-[#00A6E0] animate-pulse" />
                <span className="text-[#8B90A0] text-[11px] font-mono">
                  UTC +05:30 (IST) • Flexible Overlap
                </span>
              </div>
            </motion.div>

            {/* Professional Network Card */}
            <motion.div
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-[#1C1F2A] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] hover:shadow-xl hover:bg-[#262A35] border border-[#262A35]/30 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease }}
            >
              <div
                className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, #D0BCFF 50%, transparent 100%)",
                }}
              />
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8B90A0] text-[11px] font-mono tracking-[0.05em] uppercase">
                    PROFESSIONAL NETWORK
                  </span>
                  <ContactNetworkShareIcon className="w-[15px] h-[17px] text-[#D0BCFF]" />
                </div>
                <div className="mt-3">
                  <p className="text-[#DFE2F1] text-[18px] font-medium leading-[26px] tracking-[-0.015em]">
                    Neel Patel
                  </p>
                  <p className="text-[#C1C6D7] text-[13px] leading-[18px] mt-1">
                    Technical updates, articles &amp; architecture writing
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-2 flex items-center justify-between">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#313540] text-[#DFE2F1] text-[11px] font-mono hover:bg-[#353944] transition-colors"
                >
                  <span className="text-[#D0BCFF]">Connect on LinkedIn</span>
                </a>
                <span className="text-[#8B90A0] text-[14px]">↗</span>
              </div>
            </motion.div>

          </div>

          {/* Response SLA Banner (Full Width) */}
          <motion.div
            className="bg-[#0A0E18] rounded-xl p-4 sm:p-5 shadow-inner flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-[#262A35]/50"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.25, ease }}
          >
            <div className="flex items-center gap-3">
              <ContactSlaZapIcon className="w-[14px] h-[17px] text-[#7BD0FF] shrink-0" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-[#DFE2F1] text-[12px] font-mono font-medium tracking-[0.02em]">
                  Response SLA: &lt; 24 hours
                </span>
                <span className="hidden sm:inline text-[#8B90A0] text-[12px] font-mono">
                  •
                </span>
                <span className="text-[#8B90A0] text-[13px] leading-[18px]">
                  Open to discussing new opportunities, consulting, and full-stack engineering collaborations.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[#8B90A0] shrink-0">
              <FormShieldGuaranteeIcon className="w-[13px] h-[16px] text-[#7BD0FF]" />
              <span className="text-[11px] font-mono">
                Zero spam guarantee
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── PRE-FOOTER / IDENTITY CARD (#1:1848) ── */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-[#171B26] border border-[#262A35]/50 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.5, ease }}
        >
          <div className="flex flex-col gap-1">
            <span className="text-[#DFE2F1] text-[24px] font-semibold leading-[32px] tracking-[-0.02em]">
              Neel Patel
            </span>
            <span className="text-[#C1C6D7] text-[13px] font-medium">
              Software Engineer | Full Stack Developer
            </span>
            <span className="text-[#8B90A0] text-[12px] italic">
              &quot;Building useful software, one problem at a time.&quot;
            </span>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-3">
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-[2px] bg-[#1C1F2A] text-[#DFE2F1] text-[11px] font-mono hover:bg-[#262A35] transition-colors border border-[#262A35]/40"
              >
                LinkedIn
                <BannerLinkedinArrowIcon className="w-[9px] h-[9px] text-[#DFE2F1]" />
              </a>
              {siteConfig.IS_GIT_SHOW && (
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-[2px] bg-[#1C1F2A] text-[#DFE2F1] text-[11px] font-mono hover:bg-[#262A35] transition-colors border border-[#262A35]/40"
                >
                  GitHub
                  <BannerGithubCodeIcon className="w-[12px] h-[7px] text-[#DFE2F1]" />
                </a>
              )}
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-[2px] bg-[#1C1F2A] text-[#DFE2F1] text-[11px] font-mono hover:bg-[#262A35] transition-colors border border-[#262A35]/40"
              >
                Email
                <BannerEmailEnvelopeIcon className="w-[12px] h-[10px] text-[#DFE2F1]" />
              </a>
            </div>
            <span className="text-[#8B90A0] text-[11px] font-mono">
              © 2026 Neel Patel. All rights reserved.
            </span>
          </div>
        </motion.div>

      </SectionContainer>
    </section>
  );
}
