import { SITE } from "@/data/site";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-background px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {SITE.name}. Built with Next.js & Tailwind.
        </p>

        <div className="flex items-center gap-4">
          <a href={SITE.githubUrl} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-all hover:border-crimson-500 hover:text-crimson-400" aria-label="GitHub">
            <GithubIcon className="h-4 w-4" />
          </a>
          <a href={SITE.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-all hover:border-crimson-500 hover:text-crimson-400" aria-label="LinkedIn">
            <LinkedinIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="flex items-center gap-5 text-sm text-muted">
          <Link href="/experience" prefetch={false} className="hover:text-crimson-400">Experience</Link>
          <Link href="/projects" prefetch={false} className="hover:text-crimson-400">Projects</Link>
          <Link href="/contact" prefetch={false} className="hover:text-crimson-400">Contact</Link>
        </div>
      </div>
    </footer>
  );
}