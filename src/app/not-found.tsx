import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-heading text-8xl font-bold text-gradient sm:text-9xl">404</p>
      <h1 className="mt-4 font-heading text-2xl font-semibold sm:text-3xl">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-3 max-w-sm text-muted">
        The page you&apos;re looking for may have been moved or never existed.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-crimson-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105">
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-crimson-500 hover:text-crimson-300">
          <ArrowLeft className="h-4 w-4" />
          Contact Me
        </Link>
      </div>
    </main>
  );
}