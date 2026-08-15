export type ExperienceType = "work" | "volunteer" | "education";

export interface ExperienceItem {
  id: string;
  type: ExperienceType;
  role: string;
  organization: string;
  period: string;
  current: boolean;
  bullets: string[];
  tags: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "flyrank",
    type: "work",
    role: "Backend Engineering Intern",
    organization: "FlyRank AI",
    period: "2026 — Present",
    current: true,
    bullets: [
      "Completing an 8-week backend engineering internship combining live technical training, self-directed learning, and hands-on backend development tasks.",
      "Built and submitted a CRUD API from scratch as a core backend assignment, demonstrating practical REST API design and implementation.",
      "Working under the mentorship of the Director of AI & Analytics, applying backend engineering practices and technical documentation standards in a remote engineering setting.",
    ],
    tags: ["Flask", "REST API Design", "Python", "Technical Documentation"],
  },
  {
    id: "infinitywave",
    type: "work",
    role: "Data Annotator",
    organization: "InfinityWave Inc.",
    period: "1-Month Internship — Present",
    current: true,
    bullets: [
      "Working as a Data Annotator, labeling and structuring datasets to support machine learning model training pipelines.",
      "Applying attention-to-detail and quality-control practices to ensure annotation consistency and accuracy across large datasets.",
    ],
    tags: ["Data Annotation", "Data Quality", "Machine Learning Pipelines"],
  },
  {
    id: "al-khidmat",
    type: "volunteer",
    role: "Social Work Volunteer",
    organization: "Al-Khidmat Pakistan",
    period: "Present",
    current: true,
    bullets: [
      "Contributing to community-focused social work initiatives, gaining hands-on experience in outreach, coordination, and service delivery.",
      "Developing communication, teamwork, and leadership skills through direct involvement in on-ground social welfare activities.",
    ],
    tags: ["Community Outreach", "Communication", "Leadership"],
  },
  {
    id: "education",
    type: "education",
    role: "BS Artificial Intelligence",
    organization: "University of Haripur",
    period: "Expected Graduation: 2027",
    current: false,
    bullets: [
      "Maintaining a CGPA of 3.89 / 4.00 while building a strong foundation in machine learning, computer vision, and AI systems.",
      "Combining coursework with independent projects spanning backend development, agentic AI workflows, and LLM-powered applications.",
    ],
    tags: ["Machine Learning", "Computer Vision", "CGPA 3.89 / 4.00"],
  },
];