import type { Metadata } from "next";
import { AISemanticSearchContent } from "./ai-semantic-search-content";

export const metadata: Metadata = {
  title: "AI-Powered PBI Search Tool",
  description:
    "How I shipped an AI-powered PBI search tool using AWS Bedrock + WebLLMs with vector embeddings, cutting sprint review time by 70%.",
};

export default function AISemanticSearchPage() {
  return <AISemanticSearchContent />;
}
