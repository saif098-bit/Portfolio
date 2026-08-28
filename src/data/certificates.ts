export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  format: "image" | "pdf";
  file: string; // path to the image OR the pdf
  thumbnail?: string; // static preview image for PDFs, shown in the grid instead of live-rendering the PDF
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
    thumbnail: "/images/certificate-thumbs/AI-Fluency-for-Builders.jpg",
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
    thumbnail: "/images/certificate-thumbs/AI-Fluency-for-nonprofits.jpg",
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
    thumbnail: "/images/certificate-thumbs/Claude-Code-101.jpg",
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
    thumbnail: "/images/certificate-thumbs/Claude-Code-in-Action.jpg",
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
    thumbnail: "/images/certificate-thumbs/AI-Fluency-For-Educators.jpg",
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
    thumbnail: "/images/certificate-thumbs/Teaching-The-AI-Fluency-Framework.jpg",
    description:
      "A practical framework for teaching effective AI use, covering core concepts, responsible practices, and real-world applications.",
    verifyUrl: "https://verify.skilljar.com/c/ix7x68aas7wd",
  },

  {
    "id": "Claude-Anthropic-API",
    "title": "Claude with the Anthropic API",
    "issuer": "Anthropic Academy",
    "date": "Aug 2026",
    "format": "pdf",
    "file": "/images/certificates/Building with the Claude API.pdf",
    "thumbnail": "/images/certificate-thumbs/Building with the Claude API.jpg",
    "description": "Comprehensive course on building applications using Claude via the Anthropic API, focusing on prompt engineering, tool use, and implementing the Model Context Protocol.",
    "verifyUrl": "https://verify.skilljar.com/c/9kscg4iuh6ak"
  },
  {
    "id": "Claude-Amazon-Bedrock",
    "title": "Claude with Amazon Bedrock",
    "issuer": "Anthropic Academy",
    "date": "Aug 2026",
    "format": "pdf",
    "file": "/images/certificates/Claude in Amazon Bedrock.pdf",
    "thumbnail": "/images/certificate-thumbs/Claude in Amazon Bedrock.jpg",
    "description": "Training on implementing Claude's API to build production-ready applications, retrieval-augmented generation (RAG) systems, and autonomous agents within the AWS managed infrastructure.",
    "verifyUrl": "https://verify.skilljar.com/c/mvat4qt7r2v9"
  },
  {
    "id": "Claude-Google-Vertex",
    "title": "Claude with Google Vertex AI",
    "issuer": "Anthropic Academy",
    "date": "Aug 2026",
    "format": "pdf",
    "file": "/images/certificates/Claude on Google Cloud.pdf",
    "thumbnail": "/images/certificate-thumbs/Claude on Google Cloud.jpg",
    "description": "Instructions for leveraging Claude models through Google Cloud's Vertex AI platform, including integrating managed AI endpoints into scalable production environments.",
    "verifyUrl": "https://verify.skilljar.com/c/un5co4n85jay"
  },
  {
    "id": "Claude-Platform-101",
    "title": "Claude Platform 101",
    "issuer": "Anthropic Academy",
    "date": "Aug 2026",
    "format": "pdf",
    "file": "/images/certificates/Claude Platform 101.pdf",
    "thumbnail": "/images/certificate-thumbs/Claude Platform 101.jpg",
    "description": "Core fundamentals of navigating and operating within the Claude developer platform, covering basic capabilities, console management, and everyday workflows.",
    "verifyUrl": "https://verify.skilljar.com/c/erexv6w2rhoy"
  },
  {
    "id": "Intro-Agent-Skills",
    "title": "Introduction to agent skills",
    "issuer": "Anthropic Academy",
    "date": "Aug 2026",
    "format": "pdf",
    "file": "/images/certificates/Introduction to agent skills.pdf",
    "thumbnail": "/images/certificate-thumbs/Introduction to agent skills.jpg",
    "description": "Covers how to build, configure, and share skills in Claude Code—reusable markdown instructions that Claude automatically applies to matching tasks for consistent team workflows.",
    "verifyUrl": "https://verify.skilljar.com/c/8o5rwkyg59rx"
  },
  {
    "id": "Intro-MCP",
    "title": "Introduction to Model Context Protocol",
    "issuer": "Anthropic Academy",
    "date": "Aug 2026",
    "format": "pdf",
    "file": "/images/certificates/Introduction to Model Context Protocol.pdf",
    "thumbnail": "/images/certificate-thumbs/Introduction to Model Context Protocol.jpg",
    "description": "Learn to build modular AI applications using MCP to connect Claude with external tools and data sources, encompassing both server and client implementations.",
    "verifyUrl": "https://verify.skilljar.com/c/w6brgr6cqixz"
  },
  {
    "id": "Intro-Subagents",
    "title": "Introduction to subagents",
    "issuer": "Anthropic Academy",
    "date": "Aug 2026",
    "format": "pdf",
    "file": "/images/certificates/Introduction to subagents.pdf",
    "thumbnail": "/images/certificate-thumbs/Introduction to subagents.jpg",
    "description": "Techniques for structuring, delegating tasks, and orchestrating multiple AI subagents to handle complex, multi-step operations effectively.",
    "verifyUrl": "https://verify.skilljar.com/c/djsx5jjyawi2"
  },
  {
    "id": "MCP-Advanced",
    "title": "Model Context Protocol: Advanced Topics",
    "issuer": "Anthropic Academy",
    "date": "Aug 2026",
    "format": "pdf",
    "file": "/images/certificates/Model Context Protocol Advanced Topics.pdf",
    "thumbnail": "/images/certificate-thumbs/Model Context Protocol Advanced Topics.jpg",
    "description": "Deep dive into advanced configurations, custom integrations, scaling strategies, and troubleshooting with the Model Context Protocol.",
    "verifyUrl": "https://verify.skilljar.com/c/xzg8gkf9f5nn"
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
    thumbnail: "/images/certificate-thumbs/AI-Fluency-for-Small-Businesses.jpg",
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
    thumbnail: "/images/certificate-thumbs/AI-Fluency-for-Students.jpg",
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
    thumbnail: "/images/certificate-thumbs/AI-Fluency-AI-Capabilities-&-Limitations.jpg",
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
    thumbnail: "/images/certificate-thumbs/Introduction-to-Claude-Cowork.jpg",
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
    thumbnail: "/images/certificate-thumbs/AI-Fluency-Framework-&-Foundations.jpg",
    description:
      "Core principles and foundational concepts for understanding, evaluating, and effectively using AI.",
    verifyUrl: "https://verify.skilljar.com/c/c4iwe7nsw4cm",
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
    "id": "Claude-101",
    "title": "Claude 101",
    "issuer": "Anthropic Academy",
    "date": "Jul 2026",
    "format": "pdf",
    "file": "/images/certificates/Claude-101.pdf",
    "thumbnail": "/images/certificate-thumbs/Claude-101.jpg",
    "description": "Fundamentals of Claude, covering its core features, capabilities, and practical applications for streamlining everyday tasks and professional workflows.",
    "verifyUrl": "https://verify.skilljar.com/c/wzoprcsqxo6a"
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
    thumbnail: "/images/certificate-thumbs/Prompt-engineering.jpg",
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
    id: "Arch-Technologies",
    title: "Machine Learning Internship",
    issuer: "Arch Technologies",
    date: "Mar 2026 – Apr 2026",
    format: "image",
    file: "/images/certificates/Arch_Technologies.jpeg",
    description:
      "Successfully completed an 8-week Machine Learning Internship and Training Program at Arch Technologies.",
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
    thumbnail: "/images/certificate-thumbs/Graphic-Designing-Certificate.jpg",
    description:
      "Successfully completed the Graphic Designing (UI/UX Designer) certificate course under the Prime Minister’s Youth Skills Development Program, achieving an A+ grade at Government Technical and Vocational Centre Boys, Nawan Sheher Abbottabad.",
    verifyUrl: "",
  },
]