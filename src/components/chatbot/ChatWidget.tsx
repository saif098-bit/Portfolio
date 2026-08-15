"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2, Sparkles } from "lucide-react";
import ChatMessage, { Message } from "./ChatMessage";

const SUGGESTIONS = ["What are his skills?", "Tell me about his projects", "What's the FlyRank internship?"];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm Saifullah's portfolio assistant. Ask me anything about his experience, projects, certificates, or skills." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;
    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply ?? "Sorry, something went wrong." }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I couldn't connect right now. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <motion.button onClick={() => setOpen((v) => !v)} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} className="fixed bottom-20 right-4 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-crimson-500 text-white shadow-2xl shadow-crimson-900/50 md:bottom-6 md:right-6" aria-label="Open chat">
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-36 right-4 z-[90] flex h-[65vh] max-h-[520px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl shadow-black/50 md:bottom-24"
          >
            <div className="flex items-center gap-3 border-b border-white/10 bg-crimson-900/10 px-5 py-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-crimson-500/20 text-crimson-400">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold">Portfolio Assistant</p>
                <p className="text-xs text-muted">Ask me about Saifullah</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-5">
              {messages.map((m, i) => (
                <ChatMessage key={i} message={m} />
              ))}
              {loading && (
                <div className="flex items-center gap-2 pl-11 text-sm text-muted">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  Thinking...
                </div>
              )}
            </div>

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 px-4 pb-3">
                {SUGGESTIONS.map((s) => (
                  <button key={s} onClick={() => sendMessage(s)} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted transition-colors hover:border-crimson-500/40 hover:text-crimson-300">
                    {s}
                  </button>
                ))}
              </div>
            )}

            <form onSubmit={(e) => { e.preventDefault(); sendMessage(input); }} className="flex items-center gap-2 border-t border-white/10 p-3">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask a question..." className="flex-1 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-crimson-500" />
              <button type="submit" disabled={loading || !input.trim()} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-crimson-500 text-white transition-opacity disabled:opacity-40">
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}