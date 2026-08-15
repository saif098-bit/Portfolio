"use client";

import { motion } from "framer-motion";

export default function HeroPortraitFX() {
  const particles = Array.from({ length: 10 });

  return (
    <div className="pointer-events-none absolute -inset-6 z-0">
      <motion.div className="absolute inset-0 rounded-[2.5rem]" style={{ background: "conic-gradient(from 0deg, transparent, #ff1f4b, transparent 30%)" }} animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} />
      <div className="absolute inset-[3px] rounded-[2.4rem] bg-background" />

      {particles.map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-crimson-400"
          style={{ left: `${10 + (i * 8) % 90}%`, bottom: "5%" }}
          animate={{ y: [0, -260 - (i % 4) * 30], opacity: [0, 0.9, 0] }}
          transition={{ duration: 4.5 + (i % 3), repeat: Infinity, delay: i * 0.4, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}