export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  format: "image" | "pdf";
  file: string; // path to the image OR the pdf
  description: string;
  verifyUrl?: string; // leave undefined/omit for non-verifiable certificates
}

export const CERTIFICATES: Certificate[] = [
  {
    id: "AI-Fluency-for-Builders",
    title: "AI Fluency for Builders",
    issuer: "Anthropic Academy",
    date: "Aug 2026",
    format: "pdf",
    file: "/images/certificates/AI-Fluency-for-Builders.pdf",
    description:
      "A certification focused on applying AI effectively to build, solve, and innovate with modern AI tools.",
    verifyUrl: "https://verify.skilljar.com/c/atpnbcyb7u44",
  },
  {
    id: "AI-Fluency-for-nonprofits",
    title: "AI Fluency for nonprofits",
    issuer: "Anthropic Academy",
    date: "Aug 2026",
    format: "pdf",
    file: "/images/certificates/AI-Fluency-for-nonprofits.pdf",
    description:
      "A certification focused on using AI effectively to improve nonprofit operations, impact, and innovation.",
    verifyUrl: "https://verify.skilljar.com/c/ozwmhgf8e2nr",
  },
  {
    id: "Claude-Code-101",
    title: "Claude Code 101",
    issuer: "Anthropic Academy",
    date: "Aug 2026",
    format: "pdf",
    file: "/images/certificates/Claude-Code-101.pdf",
    description:
      "Introduction to Claude Code, covering AI-assisted coding, development workflows, and practical software-building techniques.",
    verifyUrl: "https://verify.skilljar.com/c/nw6h9pkohwvx",
  },
  {
    id: "Claude-Code-in-Action",
    title: "Claude Code in Action",
    issuer: "Anthropic Academy",
    date: "Aug 2026",
    format: "pdf",
    file: "/images/certificates/Claude-Code-in-Action.pdf",
    description:
      "Practical experience using Claude Code for AI-assisted software development, automation, and real-world coding workflows.",
    verifyUrl: "https://verify.skilljar.com/c/df5hnmu8kv7c",
  },
  {
    id: "AI-Fluency-For-Educators",
    title: "AI Fluency for educators",
    issuer: "Anthropic Academy",
    date: "Aug 2026",
    format: "pdf",
    file: "/images/certificates/AI-Fluency-For-Educators.pdf",
    description:
      "Practical AI skills for educators, focused on enhancing teaching, learning, productivity, and classroom innovation.",
    verifyUrl: "https://verify.skilljar.com/c/esw3i4sgw8yd",
  },
  {
    id: "Teaching-The-AI-Fluency-Framework",
    title: "Teaching the AI Fluency Framework",
    issuer: "Anthropic Academy",
    date: "Aug 2026",
    format: "pdf",
    file: "/images/certificates/Teaching-The-AI-Fluency-Framework.pdf",
    description:
      "A practical framework for teaching effective AI use, covering core concepts, responsible practices, and real-world applications.",
    verifyUrl: "https://verify.skilljar.com/c/ix7x68aas7wd",
  },
  {
    id: "Are-Prompts-The-New-Programming-Language",
    title: "Are Prompts The New Programming Language",
    issuer: "Volume Up with SES",
    date: "Jul 2026",
    format: "image",
    file: "/images/certificates/Are-Prompts-The-New-Programming-Language.jpeg",
    description:
      "Explores how prompt design is evolving into a powerful way to communicate with and program AI systems.",
    verifyUrl: "",
  },
  {
    id: "AI-Fluency-for-Small-Businesses",
    title: "AI Fluency for Small Businesses",
    issuer: "Anthropic Academy",
    date: "Jul 2026",
    format: "pdf",
    file: "/images/certificates/AI-Fluency-for-Small-Businesses.pdf",
    description:
      "Practical AI skills for small businesses to improve productivity, efficiency, decision-making, and growth.",
    verifyUrl: "https://verify.skilljar.com/c/3orohhkdnfih",
  },
  {
    id: "AI-Fluency-for-Students",
    title: "AI Fluency for Students",
    issuer: "Anthropic Academy",
    date: "Jul 2026",
    format: "pdf",
    file: "/images/certificates/AI-Fluency-for-Students.pdf",
    description:
      "Practical AI skills for students to enhance learning, productivity, research, and future career readiness.",
    verifyUrl: "https://verify.skilljar.com/c/68wzfkqwdh4f",
  },
  {
    id: "AI-Fluency-AI-Capabilities-&-Limitations",
    title: "AI Fluency: AI Capabilities & Limitations",
    issuer: "Anthropic Academy",
    date: "Jul 2026",
    format: "pdf",
    file: "/images/certificates/AI-Fluency-AI-Capabilities-&-Limitations.pdf",
    description:
      "Understanding AI capabilities and limitations to use AI effectively, responsibly, and with realistic expectations.",
    verifyUrl: "https://verify.skilljar.com/c/t5owxobkiinr",
  },
  {
    id: "Introduction-to-Claude-Cowork",
    title: "Introduction to Claude Cowork",
    issuer: "Anthropic Academy",
    date: "Jul 2026",
    format: "pdf",
    file: "/images/certificates/Introduction-to-Claude-Cowork.pdf",
    description:
      "An introduction to Claude Cowork, exploring AI-powered task automation, productivity, and collaborative workflows.",
    verifyUrl: "https://verify.skilljar.com/c/hdtbzbcxw356",
  },
  {
    id: "AI-Fluency-Framework-&-Foundations",
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic Academy",
    date: "Jul 2026",
    format: "pdf",
    file: "/images/certificates/AI-Fluency-Framework-&-Foundations.pdf",
    description:
      "Core principles and foundational concepts for understanding, evaluating, and effectively using AI.",
    verifyUrl: "https://verify.skilljar.com/c/c4iwe7nsw4cm",
  },
  {
    id: "Claude-101",
    title: "Claude 101",
    issuer: "Anthropic Academy",
    date: "Jul 2026",
    format: "pdf",
    file: "/images/certificates/Claude-101.pdf",
    description:
      "Fundamentals of Claude, covering its features, capabilities, and practical applications for everyday tasks and workflows.",
    verifyUrl: "https://verify.skilljar.com/c/wzoprcsqxo6a",
  },
  {
    id: "Design-Responsile-AI",
    title: "Design Responsible AI Security, Governance, Risk Management, and Compliance",
    issuer: "Microsoft",
    date: "Jul 2026",
    format: "image",
    file: "/images/certificates/Design-Responsile-AI.jpeg",
    description:
      "Successfully completed Microsoft training focused on responsible AI security, governance, risk management, and compliance.",
    verifyUrl: "",
  },
  {
    id: "Design-AI-Agents",
    title: "Design AI Agents for Business Solutions",
    issuer: "Microsoft",
    date: "Jul 2026",
    format: "image",
    file: "/images/certificates/Design-AI-Agents.jpeg",
    description:
      "Successfully completed Microsoft training on designing AI agents to develop practical, intelligent solutions for business applications.",
    verifyUrl: "",
  },
  {
    id: "Monitor-Analyse",
    title: "Monitor, Analyze, and Tune AI Agents",
    issuer: "Microsoft",
    date: "Jul 2026",
    format: "image",
    file: "/images/certificates/Monitor-Analyse.jpeg",
    description:
      "Successfully completed Microsoft training focused on monitoring, analyzing, and tuning AI agents for improved performance and reliability.",
    verifyUrl: "",
  },
  {
    id: "Intro-to-Agentic-AI",
    title: "Introduction to Agentic AI Business Solutions",
    issuer: "Microsoft",
    date: "Jul 2026",
    format: "image",
    file: "/images/certificates/Intro-to-Agentic-AI.jpeg",
    description:
      "Successfully completed Microsoft training introducing agentic AI concepts and their application in developing business solutions.",
    verifyUrl: "",
  },
  {
    id: "Prompt-engineering",
    title: "One Million Prompters – Certificate of Completion",
    issuer: "Dubai Centre for Artificial Intelligence (Dubai Future Foundation)",
    date: "Jun 2026",
    format: "pdf",
    file: "/images/certificates/Prompt-engineering.pdf",
    description:
      "Successfully completed the One Million Prompters initiative, developing prompt engineering skills for AI systems and contributing to a future-ready AI workforce.",
    verifyUrl: "https://omp.dub.ai/certificate/C9RzvdVpeUKK",
  },
  {
    id: "AWS-Event",
    title: "AWS Cloud Club Orientation",
    issuer: "AWS Cloud Clubs",
    date: "May 2026",
    format: "image",
    file: "/images/certificates/AWS-Event.jpeg",
    description:
      "Successfully attended the AWS Cloud Club Orientation session, gaining an introduction to the AWS Cloud Clubs community and its activities.",
    verifyUrl: "",
  },
  {
    id: "Cybersecurity-Internship",
    title: "Cybersecurity Internship",
    issuer: "Technik Nest (Private Limited)",
    date: "Sep 2025",
    format: "image",
    file: "/images/certificates/Cybersecurity-Internship.jpeg",
    description:
      "Successfully completed a 6-week Cybersecurity Internship at Technik Nest, gaining practical experience in identifying vulnerabilities and implementing security protocols.",
    verifyUrl: "",
  },
  {
    id: "Graphic-Designing-Certificate",
    title: "Graphic Designing (UI/UX Designer)",
    issuer: "National Vocational & Technical Training Commission (NAVTTC)",
    date: "Sep 2023",
    format: "pdf",
    file: "/images/certificates/Graphic-Designing-Certificate.pdf",
    description:
      "Successfully completed the Graphic Designing (UI/UX Designer) certificate course under the Prime Minister’s Youth Skills Development Program, achieving an A+ grade at Government Technical and Vocational Centre Boys, Nawan Sheher Abbottabad.",
    verifyUrl: "",
  },
]