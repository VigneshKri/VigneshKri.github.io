"use client";

import { FadeIn } from "@/components/fade-in";
import { CaseStudyCard } from "@/components/case-study-card";

const caseStudies = [
  {
    title: "Product Analytics Pipeline",
    description:
      "Reframed analytics from reporting to operations by integrating Pendo with Supabase, defining product-health rules, and creating an account-level risk workflow used for weekly cross-functional decisions.",
    href: "/case-studies/product-analytics-pipeline",
    tags: ["Pendo", "Supabase", "Product Analytics", "Dashboard"],
    metric: { value: "~18%", label: "At-risk cohort reduction (estimated)" },
  },
  {
    title: "Sprint Resource Planner",
    description:
      "Conceived and owned an internal sprint planning tool after identifying fragmented capacity visibility across Azure DevOps — became the single source of truth for workload allocation, carry-over tracking, and sprint readiness scoring across 3 pods.",
    href: "/case-studies/sprint-resource-planner",
    tags: ["Internal Product", "Azure DevOps", "Capacity Planning", "Org-wide"],
    metric: { value: "~90%", label: "Planning time reduced" },
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
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeIn direction="up">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
            Case Studies
          </p>
        </FadeIn>
        <FadeIn delay={0.1} direction="up">
          <h1 className="text-4xl font-extrabold tracking-[-0.03em] text-foreground sm:text-5xl max-w-3xl leading-[1.08]">
            Work I'm <em className="italic">proud of.</em>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} direction="up">
          <p className="mt-5 text-lg text-muted max-w-2xl leading-[1.55] font-medium">
            Real problems. Real users. Real outcomes.
          </p>
        </FadeIn>

        <div className="mt-14 space-y-5">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.href} {...study} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
