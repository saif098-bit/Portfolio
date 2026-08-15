"use client";

import Script from "next/script";

export default function ErudaLoader() {
  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/eruda"
      strategy="afterInteractive"
      onLoad={() => {
        // @ts-expect-error - eruda attaches itself to window at runtime
        window.eruda?.init();
      }}
    />
  );
}