"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  BadgeCheck,
  ShieldQuestion,
  Download,
} from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import { Certificate } from "@/data/certificates";

pdfjs.GlobalWorkerOptions.workerSrc =
  `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function CertificateModal({
  certificate,
  onClose,
}: {
  certificate: Certificate | null;
  onClose: () => void;
}) {
  const pdfContainerRef = useRef<HTMLDivElement>(null);
  const [pdfWidth, setPdfWidth] = useState<number | null>(null);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKey);

    document.body.style.overflow = certificate ? "hidden" : "auto";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [certificate, onClose]);

  useEffect(() => {
    if (!certificate || certificate.format !== "pdf") {
      return;
    }

    const element = pdfContainerRef.current;

    if (!element) {
      return;
    }

    const updateWidth = () => {
      const availableWidth = element.clientWidth - 32;

      if (availableWidth > 0) {
        setPdfWidth(availableWidth);
      }
    };

    updateWidth();

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [certificate]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-crimson-500"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Certificate Viewer */}
            <div
              ref={pdfContainerRef}
              className="relative flex min-h-0 flex-1 items-center justify-center overflow-auto bg-black/60 p-4"
            >
              {certificate.format === "image" ? (
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={certificate.file}
                    alt={certificate.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 700px"
                  />
                </div>
              ) : pdfWidth ? (
                <Document
                  file={certificate.file}
                  loading={null}
                  error={null}
                  className="flex items-center justify-center"
                >
                  <Page
                    pageNumber={1}
                    width={pdfWidth}
                    devicePixelRatio={2}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    loading={null}
                  />
                </Document>
              ) : null}
            </div>

            {/* Certificate Details */}
            <div className="border-t border-white/10 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-crimson-400">
                  {certificate.issuer} · {certificate.date}
                </p>

                {certificate.verifyUrl ? (
                  <span className="flex items-center gap-1 rounded-full bg-crimson-500/15 px-2.5 py-0.5 text-[11px] font-medium text-crimson-300">
                    <BadgeCheck className="h-3 w-3" />
                    Verified
                  </span>
                ) : (
                  <span className="flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] font-medium text-muted">
                    <ShieldQuestion className="h-3 w-3" />
                    Not independently verifiable
                  </span>
                )}
              </div>

              <h3 className="mt-2 font-heading text-2xl font-semibold">
                {certificate.title}
              </h3>

              <p className="mt-3 leading-relaxed text-muted">
                {certificate.description}
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                {certificate.verifyUrl && (
                  <a
                    href={certificate.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-crimson-500 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                  >
                    Verify Certificate
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-crimson-500 hover:text-crimson-300"
                >
                  Open Original
                  <Download className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}