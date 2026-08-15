import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/data/site";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import ChatWidgetLoader from "@/components/chatbot/ChatWidgetLoader";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${SITE.name} | AI Engineer & Backend Developer`,
  description: `Portfolio of ${SITE.name} — AI Engineer, Backend Developer, and Agentic AI Developer building LLM-powered applications and full-stack systems.`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body bg-background text-foreground antialiased`}
      >

        <Navbar />
        <div className="pb-16 md:pb-0">{children}</div>
        <Footer />
        <ChatWidgetLoader />
        <MobileBottomNav />
      </body>
    </html>
  );
}