import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product philosophy, engineering foundation, and the journey from software engineering to technical product management.",
};

export default function AboutPage() {
  return <AboutContent />;
}
