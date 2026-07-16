"use client";

import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { MetricCard } from "@/components/metric-card";
import { CaseStudyCard } from "@/components/case-study-card";
import { WritingCard } from "@/components/writing-card";
import { Timeline } from "@/components/timeline";
import { CTASection } from "@/components/cta-section";
import { SelectedWinsStrip } from "@/components/selected-wins-strip";
import { HowIWorkProcess } from "@/components/how-i-work-process";
import {
  SectionContainer,
  SectionHeader,
} from "@/components/section-container";

const metrics = [
  { value: "$2M+", label: "Contract Value Supported" },
  { value: "1.5K+", label: "DAU Monitored", context: "Daily actives via Pendo · separate from 900+ cumulative release reach" },
  { value: "95%", label: "Cycle Time Cut", context: "Mobile release cycle, 1 day → 30 min" },
  { value: "7", label: "Enterprise Customers" },
];

const caseStudies = [
  {
    title: "Product Analytics Pipeline",
    description:
      "Turned fragmented telemetry into a decision system by integrating Pendo with Supabase and defining customer-risk rules that changed how Product, CS, and Engineering prioritized weekly actions.",
    href: "/case-studies/product-analytics-pipeline",
    tags: ["Pendo", "Supabase", "Analytics", "Customer Risk"],
    metric: { value: "~18%", label: "At-risk cohort reduction (estimated)" },
  },
  {
    title: "Sprint Resource Planner",
    description:
      "Conceived and owned an internal sprint planning tool after identifying fragmented capacity visibility across Azure DevOps — became the single source of truth for workload allocation, carry-over tracking, and sprint readiness scoring across 3 pods.",
    href: "/case-studies/sprint-resource-planner",
    tags: ["Internal Product", "Azure DevOps", "Capacity Planning"],
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
      "Acting Product Owner for a 6-engineer mobile pod (2 QE, 4 Dev) — owning discovery, roadmap, prioritization, and GA releases for 7 enterprise DOT customers serving 900+ users.",
    period: "Dec 2025 – Present",
    current: true,
  },
  {
    title: "Associate Software Engineer",
    subtitle: "Automation & Delivery, Mobile Pod",
    description:
      "Worked as an IC developer across Delivery and DevOps, while also beginning to contribute to product management work. Redesigned CI/CD workflows that cut deployment time by 70%, supported backlog grooming with MoSCoW prioritization, and contributed to release planning, release activities, and stakeholder communication.",
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
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn direction="up">
            <p className="text-sm font-medium text-muted mb-4">
              Product Engineer - Product Delivery &amp; AI Systems
            </p>
          </FadeIn>
          <FadeIn delay={0.1} direction="up">
            <h1 className="text-5xl font-extrabold text-foreground sm:text-6xl lg:text-7xl max-w-4xl leading-[1.0] tracking-[-0.035em]">
              Vignesh{" "}
              <span className="text-accent">Krishnan</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-[1.4rem] text-muted max-w-2xl leading-[1.5] font-medium">
              I build{" "}
              <strong className="text-foreground font-bold">enterprise SaaS products</strong>{" "}
              at the intersection of AI, analytics, and engineering depth —{" "}
              <em className="italic">turning ambiguous signals into shipped outcomes.</em>
            </p>
          </FadeIn>
          <FadeIn delay={0.25} direction="up">
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                SaaS · Analytics
              </span>
              <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                AI / LLM
              </span>
              <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                B2B Software
              </span>
              <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                DevOps
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.3} direction="up">
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/vignesh-r-krishnan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-12 px-6 py-3 text-sm font-semibold text-white bg-accent rounded-full hover:bg-accent/85 transition-colors shadow-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/VigneshKri"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-12 px-6 py-3 text-sm font-semibold text-foreground border border-border rounded-full hover:bg-surface hover:border-foreground/30 transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:vigneshrkrishnan5@gmail.com"
                className="inline-flex items-center justify-center gap-2 min-h-12 px-6 py-3 text-sm font-semibold text-foreground border border-border rounded-full hover:bg-surface hover:border-foreground/30 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <SelectedWinsStrip />

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

      <HowIWorkProcess />

      {/* CTA */}
      <div className="border-t border-border">
        <CTASection />
      </div>
    </>
  );
}
