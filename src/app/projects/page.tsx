import ProjectCard from "@/components/projects/ProjectCard";
import FeaturedCaseStudyCard from "@/components/projects/FeaturedCaseStudyCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/data/projects";
import { FLYRANK_INTERNSHIP, ASSIGNMENTS } from "@/data/flyrank-internship";
import { INFINITYWAVE_INTERNSHIP, INFINITYWAVE_TASKS } from "@/data/infinitywave-internship";

export const metadata = {
  title: "Projects | Malik Saifullah",
  description: "Independent full-stack and automation projects — REST APIs, role-based platforms, and n8n-orchestrated AI agents.",
};

export const dynamic = "force-static";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 pt-40 pb-28 md:px-12 lg:px-20">
      <SectionHeading
        eyebrow="Built & Shipped"
        title={<>Things I&apos;ve <span className="text-gradient">built</span></>}
        description="Independent full-stack and automation projects, plus two hands-on internship experiences."
      />

      <div className="mt-16 flex flex-col gap-6">
        <FeaturedCaseStudyCard
          company={FLYRANK_INTERNSHIP.company}
          role={FLYRANK_INTERNSHIP.role}
          summary={FLYRANK_INTERNSHIP.summary}
          duration={FLYRANK_INTERNSHIP.duration}
          track={FLYRANK_INTERNSHIP.track}
          items={ASSIGNMENTS}
          caseStudyUrl="/projects/flyrank-backend-internship"
          githubUrl={FLYRANK_INTERNSHIP.githubUrl}
          extraTag={{ emoji: "🏆", label: "Capstone Project" }}
        />

        <FeaturedCaseStudyCard
          company={INFINITYWAVE_INTERNSHIP.company}
          role={INFINITYWAVE_INTERNSHIP.role}
          summary={INFINITYWAVE_INTERNSHIP.summary}
          duration={INFINITYWAVE_INTERNSHIP.duration}
          track={INFINITYWAVE_INTERNSHIP.track}
          items={INFINITYWAVE_TASKS}
          caseStudyUrl="/projects/infinitywave-internship"
          githubUrl={INFINITYWAVE_INTERNSHIP.githubUrl}
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={(index % 2) * 0.1} />
        ))}
      </div>
    </main>
  );
}