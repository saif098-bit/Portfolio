"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Expand, BadgeCheck, ShieldQuestion, FileText } from "lucide-react";
import { CERTIFICATES, Certificate } from "@/data/certificates";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import CertificateModal from "./CertificateModal";
import dynamic from "next/dynamic";

const PdfThumbnail = dynamic(() => import("./PdfThumbnail"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-white/5" />,
});

export default function CertificateGrid() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <>
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATES.map((cert, index) => (
          <RevealOnScroll key={cert.id} delay={(index % 3) * 0.06}>
            <motion.button
              onClick={() => setSelected(cert)}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/60 text-left shadow-lg shadow-black/20 transition-colors duration-300 hover:border-crimson-500/40"
            >
              {/* Thumbnail area */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                {cert.format === "image" ? (
                  <Image
                    src={cert.file}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                    <PdfThumbnail file={cert.file} />
                  </div>
                )}

                {/* Bottom gradient for legibility */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/50 group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                    <Expand className="h-4 w-4" />
                    View Certificate
                  </span>
                </div>

                {/* Format tag */}
                <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/80 backdrop-blur-md">
                  <FileText className="h-3 w-3" />
                  {cert.format}
                </span>

                {/* Verification badge — always present, styled differently */}
                {cert.verifyUrl ? (
                  <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-crimson-500/90 px-2.5 py-1 text-[11px] font-semibold text-white shadow-md">
                    <BadgeCheck className="h-3 w-3" />
                    Verified
                  </span>
                ) : (
                  <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white/70 backdrop-blur-md">
                    <ShieldQuestion className="h-3 w-3" />
                    Certificate
                  </span>
                )}
              </div>

              {/* Text content */}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-crimson-400">
                  {cert.issuer} · {cert.date}
                </p>
                <h3 className="mt-1.5 font-heading text-base font-semibold leading-snug">
                  {cert.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                  {cert.description}
                </p>
              </div>
            </motion.button>
          </RevealOnScroll>
        ))}
      </div>

      <CertificateModal certificate={selected} onClose={() => setSelected(null)} />
    </>
  );
}