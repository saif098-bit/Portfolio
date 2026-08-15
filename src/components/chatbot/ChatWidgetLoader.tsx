"use client";

import dynamic from "next/dynamic";

const ChatWidget = dynamic(() => import("./ChatWidget"), { ssr: false });

export default ChatWidgetLoader;

function ChatWidgetLoader() {
  return <ChatWidget />;
}