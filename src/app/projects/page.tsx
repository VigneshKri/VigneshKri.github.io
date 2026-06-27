import type { Metadata } from "next";
import { ProjectsContent } from "./projects-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Side projects and tools built to solve real product and engineering problems — from LLM guardrails to PM productivity tooling.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
