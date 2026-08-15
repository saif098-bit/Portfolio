"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc =
  `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfThumbnail({ file }: { file: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const updateWidth = () => {
      setWidth(Math.max(element.clientWidth - 16, 100));
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        if (!entry.isIntersecting) {
          setLoaded(false);
        }
      },
      {
        rootMargin: "200px",
        threshold: 0.01,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center overflow-hidden bg-white"
    >
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
      )}

      {isVisible && width && (
        <Document
          file={file}
          loading={null}
          error={null}
          className="flex items-center justify-center"
        >
          <Page
            pageNumber={1}
            width={width}
            devicePixelRatio={2}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            loading={null}
            onRenderSuccess={() => setLoaded(true)}
          />
        </Document>
      )}
    </div>
  );
}