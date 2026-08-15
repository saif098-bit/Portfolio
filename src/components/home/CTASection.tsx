import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function CTASection() {
  return (
    <section className="px-6 py-8 md:px-12 lg:px-20">
      <RevealOnScroll>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-crimson-500/25 bg-gradient-to-br from-crimson-900/20 via-surface to-black/40 p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-crimson-600/20 blur-[100px]" />
          <h2 className="relative font-heading text-3xl font-semibold sm:text-4xl">
            Got a project in mind, or an opportunity to discuss?
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-muted">
            Currently open to internships, collaborations, and interesting backend/AI problems.
          </p>
          <Link href="/contact" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-crimson-500 px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105">
            Let&apos;s Talk
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}