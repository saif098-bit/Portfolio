export interface CaseStudyItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
}

export const INFINITYWAVE_INTERNSHIP = {
  company: "InfinityWave Inc.",
  role: "Data Annotator",
  duration: "3 Months",
  track: "ML Pipeline & Computer Vision Data",
  summary:
    "A hands-on internship combining structured workshops on the end-to-end machine learning pipeline with real-world data annotation work for InfinityWave's cricket computer vision project.",
  techStack: ["Python", "pandas", "NumPy", "scikit-learn", "matplotlib", "seaborn", "CVAT"],
  githubUrl: "https://github.com/saif098-bit/infinity-wave-internship",
};

export const INFINITYWAVE_TASKS: CaseStudyItem[] = [
  {
    number: "01",
    title: "ML Pipeline Workshops",
    tagline: "Data preprocessing → training → validation → testing",
    description:
      "Completed structured workshops covering the full end-to-end machine learning pipeline — from raw data preprocessing through model training, validation, and final testing.",
    tags: ["Data Preprocessing", "Model Training", "Validation"],
  },
  {
    number: "02",
    title: "Heart Disease Prediction Model",
    tagline: "SVM classifier — 91.3% test accuracy",
    description:
      "Built an end-to-end ML pipeline project predicting heart disease from patient data using a Support Vector Machine, achieving 91.3% test accuracy — applying the workshop pipeline to a real dataset.",
    tags: ["SVM", "scikit-learn", "91.3% Accuracy"],
  },
  {
    number: "03",
    title: "CVAT Annotation Workflow",
    tagline: "Real-world computer vision data labeling",
    description:
      "Performed hands-on data annotation using CVAT for a real-world computer vision project, following structured labeling guidelines for a cricket dataset.",
    tags: ["CVAT", "Computer Vision", "Data Labeling"],
  },
  {
    number: "04",
    title: "Cricket CV Dataset Labeling",
    tagline: "Pitch, stump, bowler, and batsman annotation",
    description:
      "Labeled pitch boundaries, stumps, bowler, and batsman positions across match footage, contributing to a structured training dataset for a cricket computer vision model.",
    tags: ["Object Detection", "Sports CV", "Dataset Prep"],
  },
];