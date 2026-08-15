export interface Assignment {
  number: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
}

export const FLYRANK_INTERNSHIP = {
  company: "FlyRank AI",
  role: "Backend Engineering Internship",
  duration: "8 Weeks",
  track: "Backend Track",
  summary:
    "A structured backend engineering journey focused on building secure, scalable, API-driven applications — under the mentorship of the Director of AI & Analytics.",
  techStack: ["Python", "Flask", "REST API Design", "Gunicorn / WSGI", "SQL", "Git", "GitHub"],
  githubUrl: "https://github.com/saif098-bit/backend-engineering-internship",
};

// Edit these to match your actual assignments from the repo
export const ASSIGNMENTS: Assignment[] = [
  {
    number: "01",
    title: "Backend Fundamentals",
    tagline: "Core concepts & project setup",
    description:
      "Set up the foundational backend environment and covered core server-side concepts — routing, request/response handling, and project structure.",
    tags: ["Python", "Flask", "Project Setup"],
  },
  {
    number: "02",
    title: "Authentication & Access Control",
    tagline: "Securing routes and sessions",
    description:
      "Implemented authentication flows and protected routes, covering session/token handling and access control patterns.",
    tags: ["Auth", "Sessions", "Security"],
  },
  {
    number: "03",
    title: "API Development",
    tagline: "Building the CRUD API",
    description:
      "Built and submitted a CRUD API from scratch as a core backend assignment — designing clean, RESTful endpoints from the ground up.",
    tags: ["REST API", "CRUD", "Flask"],
  },
  {
    number: "04",
    title: "Database Integration",
    tagline: "Connecting persistent storage",
    description:
      "Integrated a relational database into the backend, covering schema design, queries, and data persistence patterns.",
    tags: ["SQL", "Database Design"],
  },
  {
    number: "05",
    title: "Security & Documentation",
    tagline: "Hardening and writing it up",
    description:
      "Applied backend security practices and wrote technical documentation, following the documentation standards required for the internship.",
    tags: ["Security", "Technical Docs"],
  },
];