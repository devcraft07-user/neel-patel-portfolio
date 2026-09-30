"use client";

import * as React from "react";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="w-full bg-[#0A0E18] border-t border-[#262A35]/40 shadow-[0px_-1px_8px_0px_rgba(0,0,0,0.04)]">
      <SectionContainer className="py-6 flex flex-col gap-4">
        {/* Top row (#1:1878) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-[#DFE2F1] text-[14px] sm:text-[15px] font-medium leading-[20px]">
              Neel Patel - Software Engineer | Full Stack Developer
            </span>
            <span className="text-[#C1C6D7] text-[13px] leading-[18px]">
              Building useful software, one problem at a time.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C1C6D7] hover:text-[#DFE2F1] transition-colors text-[11px] font-mono"
            >
              LinkedIn
            </a>
            {siteConfig.IS_GIT_SHOW && (
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C1C6D7] hover:text-[#DFE2F1] transition-colors text-[11px] font-mono"
              >
                GitHub
              </a>
            )}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[#C1C6D7] hover:text-[#DFE2F1] transition-colors text-[11px] font-mono"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom row (#1:1889) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2 border-t border-[#262A35]/30">
          <span className="text-[#8B90A0] text-[11px] font-mono">
            © 2026 Neel Patel. All rights reserved.
          </span>
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-[#10B981] shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
            <span className="text-[#C1C6D7] text-[11px] font-mono">
              Telemetry Operational
            </span>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
