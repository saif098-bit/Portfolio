export interface Project {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  tech: string[];
  githubUrl: string;
  image?: string; // optional thumbnail, falls back to a styled placeholder if omitted
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "smart-medicine-system",
    title: "Smart Medicine Inventory System",
    description:
      "A full-stack pharmacy inventory platform with real-time dashboards and an AI assistant chatbot, packaged as an installable offline-capable PWA.",
    bullets: [
      "Built a full-stack pharmacy inventory platform with real-time dashboards flagging expired, low-stock, and expiring items.",
      "Integrated an AI assistant chatbot (OpenAI API with Groq fallback) and DSA-based visualizations (stack, queue, priority queue) for undo history and stock alerts.",
    ],
    tech: ["Python", "Flask", "SQLAlchemy", "SQLite", "OpenAI", "Groq"],
    githubUrl: "https://github.com/saif098-bit/smart-medicine-system",
    featured: true,
  },
  {
    id: "smart-attendance-system",
    title: "Smart Attendance Management System",
    description:
      "A role-based (admin/teacher/student) attendance platform with authentication and automated eligibility enforcement.",
    bullets: [
      "Developed a role-based attendance platform with Flask-Login authentication and a PostgreSQL/SQLite backend.",
      "Automated 75% attendance-eligibility enforcement and generated Excel reports and Matplotlib analytics charts from live attendance data.",
    ],
    tech: ["Python", "Flask", "PostgreSQL", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/saif098-bit/Smart-Attendance-System",
    featured: true,
  },
  {
    id: "ai-email-automation",
    title: "AI Email Automation Agent",
    description:
      "An n8n workflow that reads incoming emails, classifies them with an LLM, and auto-generates replies — validated against a test dataset before deployment.",
    bullets: [
      "Built an n8n workflow that polls Gmail, classifies emails as orders or inquiries via a LangChain text classifier, and generates replies using Groq's Llama 3.1 8B model.",
      "Designed a parallel evaluation pipeline against a Google Sheets test dataset to validate classification accuracy before deployment.",
    ],
    tech: ["n8n", "Groq", "LangChain", "Google Sheets"],
    githubUrl: "https://github.com/saif098-bit/AI-Email-Automation-Agent",
    featured: true,
  },
  {
    id: "fcfs-scheduling",
    title: "Cloud Order-Processing Simulator (FCFS Scheduling)",
    description:
      "A Flask REST API simulating a thread-safe FCFS scheduler that queues and dispatches orders across virtual machines of varying processing power.",
    bullets: [
      "Built a Flask REST API with a thread-safe FCFS scheduler that queues and dispatches orders across simulated virtual machines.",
      "Computed live waiting-time, response-time, and throughput metrics via dedicated API endpoints, configured for serverless and WSGI deployment.",
    ],
    tech: ["Python", "Flask", "Threading", "Gunicorn"],
    githubUrl: "https://github.com/saif098-bit/FCFS-Scheduling",
  },
  {
    id: "ai-hotel-chatbot",
    title: "AI Hotel Assistant Chatbot",
    description:
      "A Flask chatbot answering hotel FAQs via fuzzy matching, falling back to a locally hosted LLM for open-ended queries.",
    bullets: [
      "Built a Flask chatbot that answers hotel FAQs via fuzzy string matching against a SQLite knowledge base, falling back to a locally hosted LLM (Ollama — Phi-3/Mistral).",
      "Logged unanswered queries to a review file to support continuous FAQ improvement.",
    ],
    tech: ["Python", "Flask", "SQLite", "Ollama"],
    githubUrl: "https://github.com/saif098-bit/hotelbot",
  },
];