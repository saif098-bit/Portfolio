import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { FLYRANK_INTERNSHIP } from "@/data/flyrank-internship";
import AssignmentTimeline from "@/components/projects/AssignmentTimeline";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export const metadata = {
  title: "FlyRank AI Backend Internship | Malik Saifullah",
  description: "An inside look at Malik Saifullah's 8-week backend engineering internship at FlyRank AI — assignments, tech stack, and repository.",
};

export default function FlyRankCaseStudyPage() {
  return (
    <main className="min-h-screen px-6 pt-40 pb-28 md:px-12 lg:px-20">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-crimson-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* 01 — Overview */}
        <RevealOnScroll delay={0.05}>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-crimson-400">
            01 — Internship Overview
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {FLYRANK_INTERNSHIP.company}
          </p>
          <h1 className="mt-2 font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            {FLYRANK_INTERNSHIP.role}
          </h1>

          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-muted">
              {FLYRANK_INTERNSHIP.duration}
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-muted">
              {FLYRANK_INTERNSHIP.track}
            </span>
          </div>

          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            {FLYRANK_INTERNSHIP.summary}
          </p>

          <h2 className="mt-10 font-heading text-lg font-semibold">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {FLYRANK_INTERNSHIP.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-crimson-500/20 bg-crimson-900/10 px-4 py-1.5 text-sm text-crimson-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </RevealOnScroll>

        {/* 02 — Assignments */}
        <RevealOnScroll delay={0.1}>
          <p className="mt-20 text-xs font-semibold uppercase tracking-[0.2em] text-crimson-400">
            02 — Internship Assignments
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold sm:text-3xl">
            The journey, assignment by assignment
          </h2>
        </RevealOnScroll>

        <AssignmentTimeline />

        {/* 03 — GitHub */}
        <RevealOnScroll delay={0.1}>
          <div className="mt-20 rounded-3xl border border-white/10 bg-surface/60 p-8 text-center sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson-400">
              03 — GitHub Repository
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold sm:text-3xl">
              Explore the Full Repository
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
              Explore the complete implementation, assignments, documentation, and development history.
            </p>
            
              <a href={FLYRANK_INTERNSHIP.githubUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-crimson-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105">
              <GithubIcon className="h-4 w-4" />
              View GitHub Repository
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
}