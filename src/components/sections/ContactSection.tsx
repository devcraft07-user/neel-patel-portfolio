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
  FormSendArrowIcon,
  BannerLinkedinArrowIcon,
  BannerGithubCodeIcon,
  BannerEmailEnvelopeIcon,
} from "@/components/icons/AchievementsContactIcons";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const SUBJECT_OPTIONS = [
  "Senior Full Stack / Software Engineer Role",
  "Technical Collaboration / Project",
  "High-Throughput Web Architecture",
  "Engineering Consultation",
  "Other",
];

export function ContactSection() {
  const ref = React.useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const formRef = React.useRef<HTMLFormElement>(null);

  const [copied, setCopied] = React.useState(false);
  const [subject, setSubject] = React.useState(SUBJECT_OPTIONS[0]);
  const [formState] = React.useState<"idle" | "submitting">("idle");

  const email = siteConfig.email;

  function handleCopy() {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const senderEmail = fd.get("email") as string;
    const message = fd.get("message") as string;
    const body = `Name: ${name}\nEmail: ${senderEmail}\nSubject: ${subject}\n\n${message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" ref={ref} className="relative bg-[#0F131D] overflow-hidden scroll-mt-16">
      <SectionContainer className="py-8 sm:py-10 flex flex-col gap-6 sm:gap-8">

        {/* ── SECTION HEADER (#1:1716) ── */}
        <motion.div
          className="flex flex-col gap-4 max-w-[768px]"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease }}
        >
          <div className="flex items-center gap-3">
            <span className="text-[#7BD0FF] text-[11px] tracking-[0.05em] uppercase font-mono font-medium">
              08 // CONTACT • LET&apos;S CONNECT
            </span>
            <div className="w-12 h-px bg-[rgba(123,208,255,0.4)]" />
          </div>
          <h2 className="text-[32px] sm:text-[40px] font-semibold leading-[40px] sm:leading-[48px] tracking-[-0.025em] text-[#DFE2F1]">
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
          <p className="text-[15px] sm:text-[16px] leading-[26px] tracking-[-0.01em] text-[#C1C6D7]">
            I&apos;m open to discussing Full Stack opportunities, interesting engineering problems, and software projects.
          </p>

          {/* Availability pill (#1:1728) */}
          <div className="flex pt-1">
            <div className="flex items-center gap-2 px-4 py-1 rounded-[12px] bg-[#171B26] border border-[#262A35]/60 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full rounded-full bg-[#00A6E0] opacity-75 animate-ping" />
                <span className="relative inline-flex size-2.5 rounded-full bg-[#7BD0FF]" />
              </span>
              <span className="text-[#DFE2F1] text-[11px] font-medium tracking-[0.02em]">
                Open to Senior Full Stack / Software Engineer Opportunities
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── TWO-COLUMN LAYOUT (12 COLS: 5 LEFT, 7 RIGHT) (#1:1734) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* LEFT (5 cols) (#1:1735) */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {/* Direct Email Card (#1:1775) */}
            <motion.div
              className="flex flex-col gap-3 p-6 rounded-lg bg-[#1C1F2A] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border border-[#262A35]/30 hover:border-[#262A35] transition-colors"
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[#8B90A0] text-[11px] font-mono tracking-[0.05em] uppercase">
                  DIRECT EMAIL
                </span>
                <ContactEmailAtIcon className="size-[17px] text-[#AEC6FF]" />
              </div>
              <a
                href={`mailto:${email}`}
                className="text-[#DFE2F1] text-[16px] font-medium leading-[22px] hover:text-[#7BD0FF] transition-colors break-all"
              >
                {email}
              </a>
              <div className="flex items-center gap-2 pt-2">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-[4px] bg-[#0070F3] text-white text-[12px] font-medium hover:bg-[#2085ff] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7BD0FF] min-h-[36px]"
                >
                  <ContactSendPlaneIcon className="w-[13px] h-[11px] text-white" />
                  Send Email
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-[4px] bg-[#313540] text-[#DFE2F1] text-[11px] font-medium hover:bg-[#3C4050] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7BD0FF] min-h-[36px]"
                >
                  <ContactCopyDocIcon className="w-[12px] h-[14px] text-[#DFE2F1]" />
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </motion.div>

            {/* Primary Location Card (#1:1737) */}
            <motion.div
              className="flex flex-col gap-3 p-6 rounded-lg bg-[#1C1F2A] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border border-[#262A35]/30 hover:border-[#262A35] transition-colors"
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15, ease }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[#8B90A0] text-[11px] font-mono tracking-[0.05em] uppercase">
                  PRIMARY LOCATION
                </span>
                <ContactLocationPinIcon className="w-[14px] h-[17px] text-[#7BD0FF]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#DFE2F1] text-[18px] font-medium leading-[26px] tracking-[-0.015em]">
                  Ahmedabad, Gujarat, India
                </span>
                <span className="text-[#C1C6D7] text-[13px] leading-[18px]">
                  Open to Remote (Global / US / EU timezones) &amp; Hybrid roles
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <span className="size-2 rounded-full bg-[#00A6E0]" />
                <span className="text-[#8B90A0] text-[11px] font-mono">
                  UTC +05:30 (IST) • Flexible Overlap
                </span>
              </div>
            </motion.div>

            {/* Professional Network Card (#1:1753) */}
            <motion.div
              className="flex flex-col gap-3 p-6 rounded-lg bg-[#1C1F2A] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border border-[#262A35]/30 hover:border-[#262A35] transition-colors"
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[#8B90A0] text-[11px] font-mono tracking-[0.05em] uppercase">
                  PROFESSIONAL NETWORK
                </span>
                <ContactNetworkShareIcon className="w-[15px] h-[17px] text-[#D0BCFF]" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[#DFE2F1] text-[18px] font-medium leading-[26px] tracking-[-0.015em]">
                    Neel Patel
                  </span>
                  <span className="text-[#C1C6D7] text-[13px] leading-[18px]">
                    Technical updates &amp; architecture writing
                  </span>
                </div>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#AEC6FF] text-[14px] font-medium hover:text-[#7BD0FF] transition-colors"
                  aria-label="Connect with Neel Patel on LinkedIn"
                >
                  Connect ↗
                </a>
              </div>
            </motion.div>

            {/* Response SLA Banner (#1:1767) */}
            <motion.div
              className="flex items-start gap-3 p-4 rounded-lg bg-[#0A0E18] border border-[#262A35]"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.25, ease }}
            >
              <ContactSlaZapIcon className="w-[14px] h-[17px] text-[#7BD0FF] shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <span className="text-[#DFE2F1] text-[12px] font-mono font-medium tracking-[0.02em]">
                  Response SLA: &lt; 24 hours
                </span>
                <span className="text-[#8B90A0] text-[13px] leading-[18px]">
                  Open to discussing new opportunities and engineering collaborations.
                </span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT (7 cols) — Direct Message Transmission Terminal (#1:1793) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12, ease }}
          >
            <div className="relative flex flex-col p-6 sm:p-8 rounded-lg bg-[#1C1F2A] border border-[#262A35] shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] overflow-hidden">
              {/* Gradient top accent (#1:1809) */}
              <div
                className="absolute top-0 left-0 right-0 h-[4px] opacity-70"
                style={{
                  background: "linear-gradient(90deg, #AEC6FF 0%, #7BD0FF 50%, #D0BCFF 100%)",
                }}
                aria-hidden
              />

              {/* Terminal header bar (#1:1795) */}
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-[#93000A]" />
                  <span className="size-3 rounded-full bg-[#313540]" />
                  <span className="size-3 rounded-full bg-[#353944]" />
                  <span className="ml-2 text-[#8B90A0] text-[11px] font-mono">
                    GATEWAY // direct_tx
                  </span>
                </div>
                <span className="text-[#7BD0FF] text-[11px] font-mono font-medium tracking-[0.02em]">
                  STATUS: READY
                </span>
              </div>

              {/* Form title */}
              <div className="flex flex-col gap-1 pb-4">
                <h3 className="text-[#DFE2F1] text-[18px] font-medium leading-[26px] tracking-[-0.015em]">
                  Direct Transmission // Message Gateway
                </h3>
                <p className="text-[#C1C6D7] text-[13px] leading-[18px]">
                  Initialize a direct dispatch channel to Neel&apos;s primary communications inbox.
                </p>
              </div>

              {/* Form (#1:1810) */}
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name + email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-[#8B90A0] text-[11px] font-mono tracking-[0.02em] uppercase">
                      YOUR NAME <span className="text-[#FFB4AB]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Alex Morgan / Engineering Lead"
                      className="px-4 py-2.5 rounded-[4px] bg-[#0A0E18] text-[#DFE2F1] text-[14px] placeholder:text-[rgba(139,144,160,0.5)] border border-[#262A35] outline-none focus:border-[#7BD0FF] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-[#8B90A0] text-[11px] font-mono tracking-[0.02em] uppercase">
                      YOUR EMAIL <span className="text-[#FFB4AB]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      className="px-4 py-2.5 rounded-[4px] bg-[#0A0E18] text-[#DFE2F1] text-[14px] placeholder:text-[rgba(139,144,160,0.5)] border border-[#262A35] outline-none focus:border-[#7BD0FF] transition-colors"
                    />
                  </div>
                </div>

                {/* Subject select */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-subject" className="text-[#8B90A0] text-[11px] font-mono tracking-[0.02em] uppercase">
                    SUBJECT / TOPIC
                  </label>
                  <select
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="px-4 py-2.5 rounded-[4px] bg-[#0A0E18] text-[#DFE2F1] text-[14px] border border-[#262A35] outline-none focus:border-[#7BD0FF] transition-colors appearance-none cursor-pointer"
                  >
                    {SUBJECT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0A0E18] text-[#DFE2F1]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-[#8B90A0] text-[11px] font-mono tracking-[0.02em] uppercase">
                    MESSAGE PAYLOAD <span className="text-[#FFB4AB]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about the role scope, architecture challenge, or project specifications..."
                    className="px-4 py-2.5 rounded-[4px] bg-[#0A0E18] text-[#DFE2F1] text-[14px] leading-[22px] placeholder:text-[rgba(139,144,160,0.5)] border border-[#262A35] outline-none focus:border-[#7BD0FF] transition-colors resize-none"
                  />
                </div>

                {/* Submission row (#1:1836) */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                  <div className="flex items-center gap-2">
                    <FormShieldGuaranteeIcon className="w-[11px] h-[14px] text-[#7BD0FF]" />
                    <span className="text-[#8B90A0] text-[11px] font-mono">
                      Zero spam guarantee • Direct routing
                    </span>
                  </div>
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="flex items-center justify-center gap-2 px-8 py-2.5 rounded-[4px] bg-[#0070F3] text-white text-[14px] font-medium hover:bg-[#2085ff] transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed min-h-[38px]"
                  >
                    Send Message
                    <FormSendArrowIcon className="size-3 text-white" />
                  </button>
                </div>
              </form>
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
              <a
                href="https://github.com/neel-patel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-[2px] bg-[#1C1F2A] text-[#DFE2F1] text-[11px] font-mono hover:bg-[#262A35] transition-colors border border-[#262A35]/40"
              >
                GitHub
                <BannerGithubCodeIcon className="w-[12px] h-[7px] text-[#DFE2F1]" />
              </a>
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
