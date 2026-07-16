import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch — Technical Product Engineer building enterprise software, AI systems, and developer tools.",
};

export default function ContactPage() {
  return <ContactContent />;
}
