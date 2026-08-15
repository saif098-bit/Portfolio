import Hero from "@/components/hero/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import SkillsMarquee from "@/components/home/SkillsMarquee";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <ExperiencePreview />
      <ProjectsPreview />
      <SkillsMarquee />
      <CTASection />
    </main>
  );
}