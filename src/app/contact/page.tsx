import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch — I'm exploring Technical Product Manager roles at companies building enterprise-grade software, AI products, or developer platforms.",
};

export default function ContactPage() {
  return <ContactContent />;
}
