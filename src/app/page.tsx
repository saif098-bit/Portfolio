import nextDynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";
import StatsStrip from "@/components/home/StatsStrip";

export const dynamic = "force-static";

const ExperiencePreview = nextDynamic(() => import("@/components/home/ExperiencePreview"));
const ProjectsPreview = nextDynamic(() => import("@/components/home/ProjectsPreview"));
const SkillsMarquee = nextDynamic(() => import("@/components/home/SkillsMarquee"));
const CTASection = nextDynamic(() => import("@/components/home/CTASection"));

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