import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Experience | Malik Saifullah",
  description: "Internships, hands-on roles, and academic work — FlyRank AI, InfinityWave Inc, Al-Khidmat Pakistan, and University of Haripur.",
};
export const dynamic = "force-static";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen px-6 pt-40 pb-28 md:px-12 lg:px-20">
      <SectionHeading
        eyebrow="Career Journey"
        title={
          <>
            Where I&apos;ve <span className="text-gradient">worked & grown</span>
          </>
        }
        description="A timeline of the internships, hands-on roles, and academic work that shape how I build."
      />
      <ExperienceTimeline />
    </main>
  );
}