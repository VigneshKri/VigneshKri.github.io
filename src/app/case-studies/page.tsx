import type { Metadata } from "next";
import { CaseStudiesContent } from "./case-studies-content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Product case studies documenting discovery, decision-making, execution, and measurable business impact.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
