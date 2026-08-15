"use client";

import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function CertificatePdfViewer({ file, width }: { file: string; width: number }) {
  return (
    <Document file={file} loading={null} error={null} className="flex items-center justify-center">
      <Page pageNumber={1} width={width} devicePixelRatio={2} renderTextLayer={false} renderAnnotationLayer={false} loading={null} />
    </Document>
  );
}