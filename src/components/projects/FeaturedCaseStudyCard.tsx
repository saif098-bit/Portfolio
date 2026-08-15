"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { FLYRANK_INTERNSHIP, ASSIGNMENTS } from "@/data/flyrank-internship";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function FeaturedCaseStudyCard() {
  return (
    <RevealOnScroll>
      <div className="group relative overflow-hidden rounded-3xl border border-crimson-500/25 bg-gradient-to-br from-crimson-900/20 via-surface to-black/40 p-7 shadow-2xl shadow-crimson-950/40 sm:p-10">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-crimson-600/20 blur-[100px]" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-crimson-500/10 blur-[90px]" />

        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-crimson-500/40 bg-crimson-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-crimson-300">
            <Sparkles className="h-3.5 w-3.5" />
            Featured Experience
          </span>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-crimson-400">
            {FLYRANK_INTERNSHIP.company}
          </p>
          <h3 className="mt-2 font-heading text-3xl font-semibold leading-tight sm:text-4xl">
            {FLYRANK_INTERNSHIP.role}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {FLYRANK_INTERNSHIP.summary}
          </p>

          {/* Assignment number chips */}
          <div className="mt-8 flex flex-wrap gap-3">
            {ASSIGNMENTS.map((a) => (
              <div
                key={a.number}
                className="flex min-w-[92px] flex-col items-start gap-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors group-hover:border-crimson-500/20"
              >
                <span className="font-heading text-lg font-semibold text-crimson-400">
                  {a.number}
                </span>
                <span className="text-[11px] leading-tight text-muted">{a.title}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm font-medium text-muted">
            {FLYRANK_INTERNSHIP.duration} · {FLYRANK_INTERNSHIP.track}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects/flyrank-backend-internship"
              className="group/btn inline-flex items-center gap-2 rounded-full bg-crimson-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Explore Case Study
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
            
              <a href={FLYRANK_INTERNSHIP.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-crimson-500 hover:text-crimson-300">
              <GithubIcon className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}