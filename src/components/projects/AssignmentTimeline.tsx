"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ASSIGNMENTS } from "@/data/flyrank-internship";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

export default function AssignmentTimeline() {
  const [openId, setOpenId] = useState<string | null>(ASSIGNMENTS[0]?.number ?? null);

  return (
    <div className="relative mx-auto mt-14 max-w-2xl">
      <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-crimson-500/60 via-white/10 to-transparent" />

      <div className="flex flex-col gap-5">
        {ASSIGNMENTS.map((a, index) => {
          const isOpen = openId === a.number;
          return (
            <RevealOnScroll key={a.number} delay={index * 0.06} className="relative pl-[68px]">
              <div
                className={cn(
                  "absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-2xl border font-heading text-lg font-semibold backdrop-blur-md",
                  isOpen
                    ? "border-crimson-500/50 bg-crimson-900/30 text-crimson-400 shadow-lg shadow-crimson-900/40"
                    : "border-white/10 bg-surface text-muted"
                )}
              >
                {a.number}
              </div>

              <button
                onClick={() => setOpenId(isOpen ? null : a.number)}
                className="w-full rounded-2xl border border-white/10 bg-surface/60 p-5 text-left transition-colors duration-300 hover:border-crimson-500/30 sm:p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-lg font-semibold sm:text-xl">{a.title}</h3>
                    <p className="mt-1 text-sm text-crimson-300">{a.tagline}</p>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-muted transition-transform duration-300",
                      isOpen && "rotate-180 text-crimson-400"
                    )}
                  />
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-sm leading-relaxed text-muted">
                        {a.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {a.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </RevealOnScroll>
          );
        })}
      </div>
    </div>
  );
}