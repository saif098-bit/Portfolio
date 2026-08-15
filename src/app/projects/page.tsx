import ProjectCard from "@/components/projects/ProjectCard";
import FeaturedCaseStudyCard from "@/components/projects/FeaturedCaseStudyCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/data/projects";

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
        description="Five independent full-stack and automation projects, plus a structured backend engineering internship."
      />

      <div className="mt-16">
        <FeaturedCaseStudyCard />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={(index % 2) * 0.1} />
        ))}
      </div>
    </main>
  );
}