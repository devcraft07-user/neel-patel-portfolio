"use client";

import * as React from "react";
import { HomeSection } from "@/components/sections/HomeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProfessionalProjectsSection } from "@/components/sections/ProfessionalProjectsSection";
import { PersonalProjectsSection } from "@/components/sections/PersonalProjectsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

import {
  MobileHeroSection,
  MobileAboutSection,
  MobileSkillsSection,
  MobileProjectsSection,
  MobileExperienceSection,
  MobileAchievementsSection,
  MobileContactSection,
} from "@/components/mobile";

function MobileHashSync() {
  React.useEffect(() => {
    const handleHash = () => {
      if (window.innerWidth < 768 && window.location.hash) {
        const target = window.location.hash.replace(/^#/, "");
        const mobileEl = document.getElementById(`mobile-${target}`);
        if (mobileEl) {
          setTimeout(() => {
            const y = mobileEl.getBoundingClientRect().top + window.scrollY - 60;
            window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
          }, 80);
        }
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);
  return null;
}

export default function HomePage() {
  return (
    <>
      <MobileHashSync />
      {/* ── DESKTOP VIEW ── */}
      <div className="hidden md:block">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProfessionalProjectsSection />
        <PersonalProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </div>

      {/* ── MOBILE VIEW (Stitch Screens 1 & 2) ── */}
      <div className="block md:hidden bg-[#0F131D] min-h-screen">
        <MobileHeroSection />
        <MobileAboutSection />
        <MobileSkillsSection />
        <MobileProjectsSection />
        <MobileExperienceSection />
        <MobileAchievementsSection />
        <MobileContactSection />
      </div>
    </>
  );
}
