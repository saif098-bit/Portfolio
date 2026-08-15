import { Mail } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import WhatsAppButton from "@/components/contact/WhatsAppButton";
import ContactForm from "@/components/contact/ContactForm";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { SITE } from "@/data/site";

export const metadata = {
  title: "Contact | Malik Saifullah",
  description: "Get in touch with Malik Saifullah — email, WhatsApp, GitHub, and LinkedIn.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 pt-40 pb-28 md:px-12 lg:px-20">
      <SectionHeading eyebrow="Let's Connect" title={<>Get in <span className="text-gradient">touch</span></>} description="Open to internships, collaborations, and interesting problems. Reach out however works best for you." />

      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-5">
          <RevealOnScroll>
            <a href={`mailto:${SITE.email}`} className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-surface/60 p-6 transition-colors duration-300 hover:border-crimson-500/40">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-crimson-600/0 blur-3xl transition-all duration-500 group-hover:bg-crimson-600/20" />
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-crimson-500/15 text-crimson-400 transition-transform duration-300 group-hover:scale-110">
                <Mail className="h-6 w-6" />
              </span>
              <div className="relative">
                <p className="font-heading text-lg font-semibold">Email</p>
                <p className="mt-0.5 text-sm text-muted">{SITE.email}</p>
              </div>
            </a>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <WhatsAppButton />
          </RevealOnScroll>

          <RevealOnScroll delay={0.16}>
            <div className="flex gap-4 rounded-2xl border border-white/10 bg-surface/60 p-6">
              <a href={SITE.githubUrl} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-muted transition-all hover:border-crimson-500 hover:text-crimson-400 hover:-translate-y-1" aria-label="GitHub">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href={SITE.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-muted transition-all hover:border-crimson-500 hover:text-crimson-400 hover:-translate-y-1" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.1}>
          <div className="rounded-3xl border border-white/10 bg-surface/60 p-7 sm:p-9">
            <h2 className="font-heading text-xl font-semibold">Send a message</h2>
            <p className="mt-1.5 text-sm text-muted">Fill this out and it&apos;ll open in your email app, ready to send.</p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
}