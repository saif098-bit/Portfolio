import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-crimson-700/40 bg-crimson-900/20 px-4 py-1.5 text-xs font-medium tracking-wide text-crimson-300">
          <span className="h-1.5 w-1.5 rounded-full bg-crimson-500" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}