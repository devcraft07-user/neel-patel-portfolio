"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import {
  WorkBriefcaseIcon,
  MailEnvelopeIcon,
  SendPlaneIcon,
  ContentCopyIcon,
  ScheduleClockIcon,
  LocationPinIcon,
  ShareNetworkIcon,
  CodeBracketIcon,
} from "@/components/icons/StitchMobileIcons";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function MobileContactSection() {
  const [copied, setCopied] = React.useState(false);
  const email = siteConfig.email;

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section
      id="mobile-contact"
      className="flex flex-col gap-4 px-4 pt-8 pb-28 scroll-mt-16 bg-[#0F131D]"
    >
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[12px] font-semibold text-[#00D7F4]">
          07 // LET&apos;S CONNECT
        </span>
        <h2 className="text-[26px] font-semibold leading-[32px] tracking-[-0.015em] text-[#DFE2F1]">
          Get in touch
        </h2>
        <p className="text-[14px] leading-[20px] text-[#C1C6D7] mt-0.5">
          I&apos;m open to discussing Senior Full Stack roles, real-time distributed architecture, or technical collaboration.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {/* Card 1: Current Status */}
        <div className="bg-[#1C1F2A] p-4 rounded-xl flex items-center justify-between border-l-2 border-[#00D7F4] shadow-sm">
          <div className="flex items-center gap-3 min-w-0">
            <div className="size-9 rounded-lg bg-[#262A35] flex items-center justify-center shrink-0">
              <WorkBriefcaseIcon className="size-5 text-[#00D7F4]" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-mono text-[10px] text-[#8B90A0] uppercase tracking-wider">
                CURRENT STATUS
              </span>
              <span className="text-[14px] text-[#DFE2F1] font-medium truncate">
                Open to Full Stack / Backend Roles
              </span>
            </div>
          </div>
          <span className="size-2 rounded-full bg-[#00D7F4] animate-pulse shrink-0 ml-2" />
        </div>

        {/* Card 2: Primary Inbox */}
        <div className="bg-[#1C1F2A] p-4 rounded-xl flex flex-col gap-3 shadow-sm border border-[#262A35]/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="size-9 rounded-lg bg-[#262A35] flex items-center justify-center shrink-0">
                <MailEnvelopeIcon className="size-5 text-[#00D7F4]" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-[#8B90A0] uppercase tracking-wider">
                  PRIMARY INBOX
                </span>
                <span className="font-mono text-[13px] text-[#DFE2F1] truncate">
                  {email}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href={`mailto:${email}`}
              className="h-11 bg-[#0070F3] text-white text-[13px] font-medium rounded-lg flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-transform"
            >
              <SendPlaneIcon className="size-4" />
              <span>Send Email</span>
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="h-11 bg-[#262A35] hover:bg-[#313540] text-[#DFE2F1] text-[13px] font-medium rounded-lg flex items-center justify-center gap-2 active:bg-[#353944] transition-colors"
            >
              <ContentCopyIcon className="size-4 text-[#C1C6D7]" />
              <span>{copied ? "Copied!" : "Copy Email"}</span>
            </button>
          </div>
        </div>

        {/* Card 3: Response SLA */}
        <div className="bg-[#1C1F2A] p-4 rounded-xl flex items-center justify-between border border-[#262A35]/50 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-lg bg-[#262A35] flex items-center justify-center shrink-0">
              <ScheduleClockIcon className="size-5 text-[#AEC6FF]" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-[#8B90A0] uppercase tracking-wider">
                RESPONSE SLA
              </span>
              <span className="text-[14px] text-[#DFE2F1] font-medium">
                Within 24 Hours
              </span>
            </div>
          </div>
          <span className="font-mono text-[11px] text-[#AEC6FF] bg-[#262A35] px-2.5 py-1 rounded font-medium">
            Guaranteed
          </span>
        </div>

        {/* Card 4: Based In */}
        <div className="bg-[#1C1F2A] p-4 rounded-xl flex items-center justify-between border border-[#262A35]/50 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-lg bg-[#262A35] flex items-center justify-center shrink-0">
              <LocationPinIcon className="size-5 text-[#D0BCFF]" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-[#8B90A0] uppercase tracking-wider">
                BASED IN
              </span>
              <span className="text-[14px] text-[#DFE2F1] font-medium">
                Ahmedabad, India
              </span>
            </div>
          </div>
          <span className="font-mono text-[11px] text-[#D0BCFF] bg-[#262A35] px-2.5 py-1 rounded font-medium">
            Remote / Hybrid
          </span>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 bg-[#1C1F2A] border border-[#262A35]/60 rounded-xl flex items-center justify-center gap-2 text-[#DFE2F1] hover:text-[#00D7F4] active:bg-[#262A35] transition-colors shadow-sm font-mono text-[12px] font-semibold tracking-wider"
          >
            <ShareNetworkIcon className="size-4 text-[#00D7F4]" />
            <span>LINKEDIN</span>
          </a>
          {siteConfig.IS_GIT_SHOW && (
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 bg-[#1C1F2A] border border-[#262A35]/60 rounded-xl flex items-center justify-center gap-2 text-[#DFE2F1] hover:text-[#00D7F4] active:bg-[#262A35] transition-colors shadow-sm font-mono text-[12px] font-semibold tracking-wider"
            >
              <CodeBracketIcon className="size-4 text-[#00D7F4]" />
              <span>GITHUB</span>
            </a>
          )}
        </div>

        {/* Reinforced Engineering Identity Footer */}
        <div className="bg-[#171B26] p-4 rounded-xl flex flex-col items-center text-center gap-1.5 mt-2 border border-[#262A35]/40">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#00D7F4]" />
            <span className="text-[16px] font-semibold text-[#DFE2F1]">
              Neel Patel
            </span>
          </div>
          <p className="text-[13px] text-[#C1C6D7]">
            Software Engineer | Full Stack Developer
          </p>
          <p className="text-[12px] text-[#8B90A0] italic">
            &quot;Building useful software, one problem at a time.&quot;
          </p>
          <span className="font-mono text-[10px] text-[#8B90A0] mt-1">
            © 2026 Neel Patel • All Rights Reserved
          </span>
        </div>
      </div>
    </section>
  );
}
