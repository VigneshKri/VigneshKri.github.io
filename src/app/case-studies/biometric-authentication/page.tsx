import type { Metadata } from "next";
import { BiometricAuthContent } from "./biometric-auth-content";

export const metadata: Metadata = {
  title: "Biometric Authentication Rollout",
  description:
    "How I led full product discovery for biometric authentication — from Pendo funnel analysis through controlled 5-customer GA rollout contributing to ~$2M in contract value.",
};

export default function BiometricAuthPage() {
  return <BiometricAuthContent />;
}
