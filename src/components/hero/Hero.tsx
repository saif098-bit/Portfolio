"use client";

import { SITE } from "@/data/site";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import HeroGlow from "./HeroGlow";
import HeroPortraitFX from "./HeroPortraitFX";

const ROLES = [
  "AI Engineer",
  "Backend Developer",
  "Machine Learning Engineer",
  "Agentic AI Developer",
];

const CURRENT_ROLES = [
  "Backend Engineering Intern @ FlyRank AI",
  "Data Annotator @ InfinityWave Inc",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-40, 40], [8, -8]);
  const rotateY = useTransform(mouseX, [-40, 40], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x / 6);
    mouseY.set(y / 6);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  // Cycle roles every 2.4s
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-background px-6 pt-28 pb-16 md:px-12 lg:px-20">
      <HeroGlow />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-crimson-700/40 bg-crimson-900/20 px-4 py-1.5 text-xs font-medium tracking-wide text-crimson-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-crimson-500" />
            Available for internships & collaborations
          </span>

          <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient">Malik Saifullah</span>
          </h1>

          <div className="mt-4 h-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={ROLES[roleIndex]}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="font-heading text-2xl font-medium text-crimson-400 sm:text-3xl"
              >
                {ROLES[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            BS Artificial Intelligence student who builds agentic AI
            workflows, LLM-powered applications, and Flask-based backend
            systems — five shipped projects and counting, spanning REST
            APIs, role-based platforms, and automation pipelines.
          </p>

          {/* Current roles — update this array as internships start/end */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {CURRENT_ROLES.map((role) => (
              <span
                key={role}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-crimson-500" />
                {role}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-crimson-500 px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              <span className="relative z-10">View Projects</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 -z-0 bg-gradient-to-r from-crimson-600 to-crimson-400 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-crimson-500 hover:text-crimson-300"
            >
              Get in Touch
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-muted transition-all hover:border-crimson-500 hover:text-crimson-400 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href={SITE.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-muted transition-all hover:border-crimson-500 hover:text-crimson-400 hover:-translate-y-1" aria-label="LinkedIn">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Right: Portrait image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto flex justify-center [perspective:1000px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={imageRef}
        >
          <motion.div
            style={{ rotateX, rotateY }}
            animate={{ y: [0, -10, 0] }}
            transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
            className="relative h-[380px] w-[300px] sm:h-[460px] sm:w-[370px] lg:h-[520px] lg:w-[420px]"
          >
            <HeroPortraitFX />
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-crimson-500/40 via-crimson-700/20 to-transparent blur-2xl" />

            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-crimson-900/40">
              <Image
                src="/images/hero.webp"
                alt="Saifullah — AI Engineer & Backend Developer"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 300px, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Floating accent badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-surface/90 px-5 py-3 backdrop-blur-md animate-float"
            >
              <p className="text-xs text-muted">CGPA</p>
              <p className="font-heading text-lg font-semibold text-crimson-400">
                3.89 / 4.00
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce-slow">
          <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </div>
      </motion.div>
    </section>
  );
}