import { cn } from "@/lib/utils";
import { Sparkles, User } from "lucide-react";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex gap-3", isUser && "flex-row-reverse")}>
      <div className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full", isUser ? "bg-white/10 text-foreground" : "bg-crimson-500/20 text-crimson-400")}>
        {isUser ? <User className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
      </div>
      <div className={cn("max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed", isUser ? "bg-crimson-500 text-white" : "bg-white/[0.05] text-foreground")}>
        {message.content}
      </div>
    </div>
  );
}