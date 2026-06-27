import type { Metadata } from "next";
import { WritingContent } from "./writing-content";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Product thinking in practice — perspectives on analytics, AI products, roadmaps, release strategy, and enterprise platforms.",
};

export default function WritingPage() {
  return <WritingContent />;
}
