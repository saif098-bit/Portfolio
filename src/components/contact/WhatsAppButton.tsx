"use client";

import { motion } from "framer-motion";
import { SITE } from "@/data/site";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    "Hi Saifullah, I found your portfolio and would like to connect!"
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-surface/60 p-6 transition-colors duration-300 hover:border-[#25D366]/40"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#25D366]/0 blur-3xl transition-all duration-500 group-hover:bg-[#25D366]/20" />

      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366] transition-transform duration-300 group-hover:scale-110">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.06h-.01a8.21 8.21 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.19-.31a8.19 8.19 0 0 1-1.26-4.4c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 5.83 2.42 8.16 8.16 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.26 8.24Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.17-.29.19-.53.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.47-.01a.9.9 0 0 0-.65.31c-.23.24-.86.85-.86 2.06 0 1.22.88 2.4 1 2.56.13.17 1.73 2.64 4.2 3.7.58.25 1.04.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
        </svg>
      </span>

      <div className="relative">
        <p className="font-heading text-lg font-semibold">WhatsApp</p>
        <p className="mt-0.5 text-sm text-muted">Tap to start a chat directly</p>
      </div>
    </motion.a>
  );
}