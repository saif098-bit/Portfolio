"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { Project } from "@/data/projects";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <RevealOnScroll delay={delay}>
      <motion.a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/60 p-6 shadow-lg shadow-black/20 transition-colors duration-300 hover:border-crimson-500/40 sm:p-7"
      >
        {/* Glow on hover */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-crimson-600/0 blur-3xl transition-all duration-500 group-hover:bg-crimson-600/20" />

        <div className="relative flex items-start justify-between gap-4">
          {project.featured && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-crimson-500/15 px-3 py-1 text-[11px] font-semibold text-crimson-300">
              <Sparkles className="h-3 w-3" />
              Featured
            </span>
          )}
          <span className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-muted transition-all duration-300 group-hover:border-crimson-500 group-hover:text-crimson-400">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </span>
        </div>

        <h3 className="relative mt-5 font-heading text-xl font-semibold leading-snug sm:text-2xl">
          {project.title}
        </h3>

        <p className="relative mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="relative mt-4 space-y-2">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-crimson-500/70" />
              {bullet}
            </li>
          ))}
        </ul>

        <div className="relative mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted transition-colors group-hover:border-crimson-500/20"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="relative mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-sm font-medium text-muted transition-colors group-hover:text-crimson-300">
          <GithubIcon className="h-4 w-4" />
          View on GitHub
        </div>
      </motion.a>
    </RevealOnScroll>
  );
}