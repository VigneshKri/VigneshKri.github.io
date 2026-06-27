"use client";

import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { MetricCard } from "@/components/metric-card";
import { CaseStudyCard } from "@/components/case-study-card";
import { WritingCard } from "@/components/writing-card";
import { Timeline } from "@/components/timeline";
import { CTASection } from "@/components/cta-section";
import {
  SectionContainer,
  SectionHeader,
} from "@/components/section-container";

const metrics = [
  { value: "$2M", label: "Revenue Driven" },
  { value: "900+", label: "Users Reached" },
  { value: "200+", label: "User Stories Shipped" },
  { value: "7", label: "Enterprise Customers" },
];

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
    tags: ["Internal Product", "Azure DevOps", "Capacity Planning"],
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

const articles = [
  {
    title: "What Product Analytics Changed About My Thinking",
    description:
      "How moving from gut-feel prioritization to instrumented decision-making fundamentally changed the way I approach product problems.",
    href: "/writing#analytics",
    category: "Product Analytics",
  },
  {
    title: "Building AI Products Beyond Prompt Engineering",
    description:
      "The gap between a prototype and a production AI product is larger than most teams realize. Here is what I learned shipping one.",
    href: "/writing#ai-products",
    category: "AI Products",
  },
  {
    title: "Roadmaps Are Negotiation Documents",
    description:
      "A roadmap is not a project plan. It is a tool for aligning stakeholders around trade-offs and creating shared understanding.",
    href: "/writing#roadmaps",
    category: "Product Strategy",
  },
];

const experience = [
  {
    title: "Software Engineer I — Product Delivery Lead",
    subtitle: "Aurigo Software Technologies · Mobile Pod",
    description:
      "Leading product delivery for a 6-engineer pod — driving discovery, roadmap prioritization, and controlled GA rollouts for 7 enterprise DOT customers serving 900+ users.",
    period: "Dec 2025 – Present",
    current: true,
  },
  {
    title: "Associate Software Engineer",
    subtitle: "Automation & Delivery, Mobile Pod",
    description:
      "Evolved from IC automation into product delivery ownership. Redesigned CI/CD frameworks cutting deployment time 70%. Applied MoSCoW prioritization to backlog grooming and managed release-cadence stakeholder communications.",
    period: "Aug 2024 – Nov 2025",
  },
  {
    title: "Software Engineer Intern",
    subtitle: "Automation & Mobile",
    description:
      "Built cross-platform test automation infrastructure for iOS & Android. Configured DevOps CI/CD pipelines and contributed to Flutter mobile development with full product lifecycle exposure.",
    period: "Feb 2024 – Jul 2024",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Technical Product Manager
            </div>
          </FadeIn>
          <FadeIn delay={0.1} direction="up">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl max-w-3xl leading-[1.1]">
              Vignesh R Krishnan
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              Building AI-powered Enterprise SaaS Products through Product
              Discovery, Analytics and Engineering Depth.
            </p>
          </FadeIn>
          <FadeIn delay={0.3} direction="up">
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/vignesh-r-krishnan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-accent rounded-lg hover:bg-accent/90 transition-colors shadow-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/VigneshKri"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-foreground border border-border rounded-lg hover:bg-surface hover:border-accent/40 transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:vigneshrkrishnan5@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-foreground border border-border rounded-lg hover:bg-surface hover:border-accent/40 transition-colors"
              >
                Email
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Metrics */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {metrics.map((metric, i) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <SectionContainer className="border-t border-border">
        <SectionHeader
          label="Case Studies"
          title="Product work that drove business outcomes"
          description="Each case study documents real product decisions — from discovery and user research through execution and measurable impact."
        />
        <div className="space-y-4">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.href} {...study} delay={i * 0.1} />
          ))}
        </div>
        <FadeIn delay={0.3} direction="up">
          <div className="mt-8">
            <Link
              href="/case-studies"
              className="text-sm font-medium text-accent hover:text-accent/80 transition-colors inline-flex items-center"
            >
              View all case studies
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </SectionContainer>

      {/* Featured Writing */}
      <SectionContainer className="border-t border-border">
        <SectionHeader
          label="Writing"
          title="Product thinking in practice"
          description="Perspectives on building products — informed by experience shipping enterprise software and AI features."
        />
        <div>
          {articles.map((article, i) => (
            <WritingCard key={article.href} {...article} delay={i * 0.1} />
          ))}
        </div>
        <FadeIn delay={0.3} direction="up">
          <div className="mt-6">
            <Link
              href="/writing"
              className="text-sm font-medium text-accent hover:text-accent/80 transition-colors inline-flex items-center"
            >
              Read more
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </SectionContainer>

      {/* Experience Timeline */}
      <SectionContainer className="border-t border-border">
        <SectionHeader
          label="Experience"
          title="From engineering to product"
          description="A progression from writing code to owning product outcomes — each role building on the last."
        />
        <Timeline items={experience} />
      </SectionContainer>

      {/* CTA */}
      <div className="border-t border-border">
        <CTASection />
      </div>
    </>
  );
}
