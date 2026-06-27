"use client";

import { FadeIn } from "@/components/fade-in";
import { CaseStudyCard } from "@/components/case-study-card";

const caseStudies = [
  {
    title: "Biometric Authentication Rollout",
    description:
      "Led full product discovery — identified login drop-off via Pendo funnel analysis, ran user surveys, wireframed UX in Figma, authored a PRD with MoSCoW-prioritized scope, and executed a controlled 5-customer GA rollout contributing to ~$2M in contract value.",
    href: "/case-studies/biometric-authentication",
    tags: ["Product Discovery", "Pendo", "MoSCoW", "Enterprise GA"],
    metric: { value: "$2M", label: "Contract value influenced" },
  },
  {
    title: "Sprint Resource Planner",
    description:
      "Conceived and owned an internal sprint planning tool after identifying fragmented capacity visibility across Azure DevOps — became the single source of truth for workload allocation, carry-over tracking, and sprint readiness scoring across 3 pods.",
    href: "/case-studies/sprint-resource-planner",
    tags: ["Internal Product", "Azure DevOps", "Capacity Planning", "Org-wide"],
    metric: { value: "~$150K", label: "Annual PM hours saved" },
  },
  {
    title: "AI-Powered PBI Search Tool",
    description:
      "Cut per-ticket sprint review time ~70% by shipping an AI-powered search tool using Azure DevOps + AWS Bedrock + WebLLMs — with text embeddings, VectorDB retrieval, LLM guardrails, and prompt accuracy evaluations.",
    href: "/case-studies/ai-semantic-search",
    tags: ["AWS Bedrock", "LLM", "Vector Search", "Guardrails"],
    metric: { value: "70%", label: "Review time reduction" },
  },
];

export function CaseStudiesContent() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeIn direction="up">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Case Studies
          </p>
        </FadeIn>
        <FadeIn delay={0.1} direction="up">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl max-w-2xl">
            Product work that drove business outcomes
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} direction="up">
          <p className="mt-4 text-lg text-muted max-w-2xl leading-relaxed">
            Each case study documents the full product lifecycle — from
            discovery and user research through trade-offs, execution, and
            measurable impact. These are product decision records, not project
            showcases.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-4">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.href} {...study} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
