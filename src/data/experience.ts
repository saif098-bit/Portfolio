export type ExperienceType = "work" | "volunteer" | "education" | "internship";

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
    period: "1st July – 7th September 2026",
    current: false,
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
    period: "1st June – 31st August 2026",
    current: false,
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
    period: "1st July – 16th August 2026",
    current: false,
    bullets: [
      "Contributing to community-focused social work initiatives, gaining hands-on experience in outreach, coordination, and service delivery.",
      "Developing communication, teamwork, and leadership skills through direct involvement in on-ground social welfare activities.",
    ],
    tags: ["Community Outreach", "Communication", "Leadership"],
  },
  {
  id: "arch-technologies",
  type: "internship",
  role: "Machine Learning Intern",
  organization: "Arch Technologies",
  period: "1st March – 28th April 2026",
  current: false,
  bullets: [
    "Completed an 8-week Machine Learning Internship and Training Program at Arch Technologies.",
    "Gained practical experience in machine learning concepts, model development, and data-driven problem solving.",
    "Strengthened technical skills through hands-on training and practical machine learning tasks."
  ],
  tags: ["Machine Learning", "Python", "Data Science"],
},
{
  id: "techniknest",
  type: "work",
  role: "Cybersecurity Intern",
  organization: "Technik Nest Pvt Ltd",
  period: "21st July – 31st August 2025",
  current: false,
  bullets: [
    "Completed a 6-week Cybersecurity Internship focused on identifying vulnerabilities and understanding common security risks.",
    "Learned to apply basic security protocols and practices to improve system and application security."
  ],
  tags: ["Cybersecurity", "Vulnerability Assessment", "Security Protocols"],
},
  {
    id: "education",
    type: "education",
    role: "BS Artificial Intelligence",
    organization: "University of Haripur",
    period: "Expected Graduation: 2027",
    current: true,
    bullets: [
      "Maintaining a CGPA of 3.89 / 4.00 while building a strong foundation in machine learning, computer vision, and AI systems.",
      "Combining coursework with independent projects spanning backend development, agentic AI workflows, and LLM-powered applications.",
    ],
    tags: ["Machine Learning", "Computer Vision", "CGPA 3.89 / 4.00"],
  },
];