import CaseStudyTimeline from "./CaseStudyTimeline";
import { ASSIGNMENTS } from "@/data/flyrank-internship";

export default function AssignmentTimeline() {
  return <CaseStudyTimeline items={ASSIGNMENTS} />;
}