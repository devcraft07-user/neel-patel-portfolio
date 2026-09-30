import { HomeSection } from "@/components/sections/HomeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProfessionalProjectsSection } from "@/components/sections/ProfessionalProjectsSection";
import { PersonalProjectsSection } from "@/components/sections/PersonalProjectsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProfessionalProjectsSection />
      <PersonalProjectsSection />
      <AchievementsSection />
      <ContactSection />
    </>
  );
}
