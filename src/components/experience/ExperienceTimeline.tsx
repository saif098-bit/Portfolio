"use client";

import { Briefcase, HeartHandshake, GraduationCap } from "lucide-react";
import { EXPERIENCE, ExperienceType } from "@/data/experience";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

const ICONS: Record<ExperienceType, typeof Briefcase> = {
  work: Briefcase,
  volunteer: HeartHandshake,
  education: GraduationCap,
  internship: Briefcase,
};

const TYPE_LABEL: Record<ExperienceType, string> = {
  work: "Work",
  volunteer: "Volunteering",
  education: "Education",
  internship: "Internship",
};

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto mt-16 max-w-3xl">
      {/* Vertical line */}
      <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-crimson-500/60 via-white/10 to-transparent" />

      <div className="flex flex-col gap-10">
        {EXPERIENCE.map((item, index) => {
          const Icon = ICONS[item.type];
          return (
            <RevealOnScroll key={item.id} delay={index * 0.08} className="relative pl-[68px]">
              {/* Icon node */}
              <div
                className={cn(
                  "absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-2xl border backdrop-blur-md",
                  item.current
                    ? "border-crimson-500/50 bg-crimson-900/30 shadow-lg shadow-crimson-900/40"
                    : "border-white/10 bg-surface"
                )}
              >
                <Icon className={cn("h-6 w-6", item.current ? "text-crimson-400" : "text-muted")} />
              </div>

              {/* Card */}
              <div className="group rounded-2xl border border-white/10 bg-surface/60 p-6 transition-all duration-300 hover:border-crimson-500/30 hover:bg-surface">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-crimson-400">
                    {TYPE_LABEL[item.type]}
                  </span>
                  {item.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-crimson-500/15 px-2.5 py-0.5 text-[11px] font-medium text-crimson-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-crimson-500" />
                      Current
                    </span>
                  )}
                </div>

                <h3 className="mt-2 font-heading text-xl font-semibold text-foreground sm:text-2xl">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-crimson-300">
                  {item.organization} · <span className="text-muted">{item.period}</span>
                </p>

                <ul className="mt-4 space-y-2">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-crimson-500/70" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted transition-colors group-hover:border-crimson-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </div>
  );
}