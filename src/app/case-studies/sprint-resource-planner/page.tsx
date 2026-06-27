import type { Metadata } from "next";
import { SprintResourcePlannerContent } from "./sprint-resource-planner-content";

export const metadata: Metadata = {
  title: "Sprint Resource Planner",
  description:
    "How I conceived and owned an internal product that became the single source of truth for sprint planning across 3 pods — reducing manual resource reallocation effort by 60%.",
};

export default function SprintResourcePlannerPage() {
  return <SprintResourcePlannerContent />;
}
