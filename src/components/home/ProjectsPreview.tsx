import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { PROJECTS } from "@/data/projects";

export default function ProjectsPreview() {
  const items = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="bg-surface/30 px-6 py-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Selected Work" title={<>Recent <span className="text-gradient">projects</span></>} />
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-crimson-400 transition-colors hover:text-crimson-300">
            All projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((project, i) => (
            <RevealOnScroll key={project.id} delay={i * 0.1}>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col rounded-2xl border border-white/10 bg-surface/60 p-6 transition-colors hover:border-crimson-500/30">
                <ArrowUpRight className="h-4 w-4 self-end text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-crimson-400" />
                <h3 className="mt-2 font-heading text-lg font-semibold leading-snug">{project.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-muted">{t}</span>
                  ))}
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}