import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { PROJECTS } from "@/data/projects";
import { CERTIFICATES } from "@/data/certificates";

const STATS = [
  { label: "CGPA", value: "3.89/4.0" },
  { label: "Projects Shipped", value: `${PROJECTS.length}+` },
  { label: "Certifications", value: `${CERTIFICATES.length}+` },
  { label: "Active Internships", value: "2" },
];

export default function StatsStrip() {
  return (
    <section className="border-y border-white/10 bg-surface/40 px-6 py-8 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-4">
        {STATS.map((s, i) => (
          <RevealOnScroll key={s.label} delay={i * 0.08} className="text-center">
            <p className="font-heading text-3xl font-semibold text-gradient sm:text-4xl">{s.value}</p>
            <p className="mt-1.5 text-xs uppercase tracking-wider text-muted sm:text-sm">{s.label}</p>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}