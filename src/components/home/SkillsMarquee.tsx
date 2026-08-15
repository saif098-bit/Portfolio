"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";

export default function SkillsMarquee() {
  const row = [...SKILLS, ...SKILLS];

  return (
    <section className="overflow-hidden px-6 py-8 md:px-12 lg:px-20">
      <SectionHeading eyebrow="Toolbox" title={<>Technologies I <span className="text-gradient">work with</span></>} align="center" />

      <div className="relative mt-6 w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <motion.div className="flex w-max gap-4" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }}>
          {row.map((skill, i) => (
            <span key={i} className="whitespace-nowrap rounded-full border border-white/10 bg-surface/60 px-5 py-2.5 text-sm text-muted">
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}