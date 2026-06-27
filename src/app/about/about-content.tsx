"use client";

import { FadeIn } from "@/components/fade-in";
import { SkillChip } from "@/components/skill-chip";
import {
  SectionContainer,
  SectionHeader,
} from "@/components/section-container";
import { CTASection } from "@/components/cta-section";

const coreAreas = [
  "Product Discovery (Qual/Quant)",
  "RICE & MoSCoW Prioritization",
  "Roadmap & Sprint Planning",
  "Funnel Optimization",
  "Retention & North Star Metrics",
  "PRD & AC Authoring",
  "OKR Planning",
  "Stakeholder Management",
  "PLM & GTM Strategy",
  "Wireframing & Mobile UX",
];

const aiSkills = [
  "AWS Bedrock",
  "Prompt Engineering",
  "LLM Evaluation",
  "Semantic Search",
  "Vector Retrieval",
  "Guardrail Design",
];

const technicalSkills = [
  "Flutter",
  "Python",
  "Kotlin",
  "JS/TS",
  "SQL",
  "Docker",
  "Pendo",
  "Jira",
  "Azure DevOps",
  "Figma",
  "Confluence",
  "Miro",
];

export function AboutContent() {
  return (
    <>
      {/* Header */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn direction="up">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              About
            </p>
          </FadeIn>
          <FadeIn delay={0.1} direction="up">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl max-w-2xl">
              Engineer with the technical depth to ship AI-powered
              enterprise products from discovery to GA.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
              I combine strong engineering fundamentals with product strategy,
              analytics-driven decision making, and cross-functional delivery
              to drive measurable business outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Product Philosophy */}
      <SectionContainer className="border-t border-border">
        <SectionHeader
          label="Philosophy"
          title="How I think about products"
        />
        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn direction="up">
            <div>
              <h3 className="text-base font-semibold text-foreground mb-3">
                Discovery before delivery
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Every product decision starts with understanding the customer
                context. I use Pendo funnel analysis, qualitative user surveys,
                and support pattern analysis to frame problems before exploring
                solutions. The Sprint Resource Planner started with identifying
                fragmented capacity visibility — not with a feature request.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <div>
              <h3 className="text-base font-semibold text-foreground mb-3">
                Measure what matters
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                I architected an internal Pendo analytics platform (PostgreSQL
                pipeline) to surface DAU/MAU funnels, click heatmaps, and
                drop-off bottlenecks — accelerating roadmap decisions across 5+
                PMs. Product analytics changed how I prioritize: from gut-feel
                to instrumented decision-making.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div>
              <h3 className="text-base font-semibold text-foreground mb-3">
                Technical depth enables better trade-offs
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Having built CI/CD pipelines, Flutter apps, and AI search tools
                gives me the ability to evaluate engineering complexity, challenge
                timelines with context, and identify where simplification creates
                more value than sophistication. I can assess LLM guardrail
                strategies alongside product requirements.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <div>
              <h3 className="text-base font-semibold text-foreground mb-3">
                Prioritize with frameworks, not opinions
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                I apply RICE scoring to PBI prioritization, MoSCoW to scope
                definition, and sprint OKRs to align delivery with outcomes.
                Roadmaps are 2-quarter scoping documents. PRDs include
                acceptance criteria. Every artifact is designed to create shared
                understanding across engineering, QA, and stakeholders.
              </p>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>

      {/* Engineering Foundation */}
      <SectionContainer className="border-t border-border">
        <SectionHeader
          label="Foundation"
          title="Built on engineering fundamentals"
          description="My product instincts are grounded in hands-on experience building and shipping enterprise software."
        />
        <div className="space-y-8">
          <FadeIn direction="up">
            <div className="p-6 rounded-xl border border-border bg-surface/50">
              <h3 className="text-base font-semibold text-foreground mb-2">
                Enterprise Mobile Platform
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Led product delivery for an enterprise mobile platform serving
                7 DOT customers and 900+ users — owning the full delivery
                cycle from RICE-scored prioritization and 2-quarter roadmap
                scoping through sprint planning, UAT-based go/no-go decisions,
                and zero-rollback production releases.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <div className="p-6 rounded-xl border border-border bg-surface/50">
              <h3 className="text-base font-semibold text-foreground mb-2">
                AI Product Experience
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Shipped an AI-powered PBI search tool using Azure DevOps + AWS
                Bedrock + WebLLMs. Implemented text embeddings + VectorDB for
                semantic ticket retrieval, enforced LLM response guardrails,
                and ran prompt accuracy evaluations to optimize output
                reliability and response latency. Cut sprint review time ~70%.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="p-6 rounded-xl border border-border bg-surface/50">
              <h3 className="text-base font-semibold text-foreground mb-2">
                Analytics Infrastructure
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Architected an internal Pendo analytics platform with a
                PostgreSQL pipeline to surface DAU/MAU funnels, click
                heatmaps, and drop-off bottlenecks. Also built a Pendo →
                Supabase pipeline with n8n-automated exports — cutting
                ad-hoc sprint data turnaround from hours to minutes.
              </p>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>

      {/* Core Areas */}
      <SectionContainer className="border-t border-border">
        <SectionHeader label="Expertise" title="Core areas" />
        <FadeIn direction="up">
          <div className="flex flex-wrap gap-2">
            {coreAreas.map((area) => (
              <SkillChip key={area} label={area} />
            ))}
          </div>
        </FadeIn>
        <FadeIn direction="up" delay={0.15}>
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              AI Products
            </h3>
            <div className="flex flex-wrap gap-2">
              {aiSkills.map((skill) => (
                <SkillChip key={skill} label={skill} />
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn direction="up" delay={0.25}>
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Technical &amp; Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <SkillChip key={skill} label={skill} />
              ))}
            </div>
          </div>
        </FadeIn>
      </SectionContainer>

      {/* CTA */}
      <div className="border-t border-border">
        <CTASection />
      </div>
    </>
  );
}
