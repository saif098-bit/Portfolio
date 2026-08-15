import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { EXPERIENCE } from "@/data/experience";

export default function ExperiencePreview() {
  const items = EXPERIENCE.filter((e) => e.current).slice(0, 3);

  return (
    <section className="px-6 py-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Right Now" title={<>Currently <span className="text-gradient">building & learning</span></>} />
          <Link href="/experience" prefetch={false} className="inline-flex items-center gap-2 text-sm font-medium text-crimson-400 transition-colors hover:text-crimson-300">
            Full timeline <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <RevealOnScroll key={item.id} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-white/10 bg-surface/60 p-6 transition-colors hover:border-crimson-500/30">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-crimson-500/15 px-2.5 py-0.5 text-[11px] font-medium text-crimson-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-crimson-500" />
                  Current
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold">{item.role}</h3>
                <p className="mt-1 text-sm text-crimson-300">{item.organization}</p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{item.bullets[0]}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}