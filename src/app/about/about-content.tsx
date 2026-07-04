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
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn direction="up">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              About
            </p>
          </FadeIn>
          <FadeIn delay={0.1} direction="up">
            <h1 className="text-4xl font-extrabold tracking-[-0.03em] text-foreground sm:text-5xl max-w-3xl leading-[1.08]">
              Engineer by training.{" "}
              <em className="italic">Product manager by conviction.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <p className="mt-6 text-lg text-muted max-w-2xl leading-[1.55] font-medium">
              I combine strong engineering fundamentals with product strategy,
              analytics-driven decision making, and cross-functional delivery
              to drive measurable business outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* About Me — Story + Stats */}
      <SectionContainer className="border-t border-border">
        <SectionHeader
          label="About Me"
          title="How I got here."
        />
        <div className="grid md:grid-cols-[1fr_280px] gap-12 md:gap-16">
          <FadeIn direction="up">
            <div className="space-y-5 text-base text-muted leading-[1.7]">
              <p>
                I didn&apos;t start in product — I started by <strong className="text-foreground font-semibold">developing mobile applications</strong>,
                writing CI/CD pipelines, and building test automation frameworks for enterprise apps.
                Being close to code, deployment, release cadences, and real user feedback gave me a
                perspective most PMs don&apos;t have: <strong className="text-foreground font-semibold">I know what shipping actually costs.</strong>
              </p>
              <p>
                That foundation is why I gravitated toward product work. I wanted to
                be the person deciding <em>what</em> gets built, not just <em>how</em>.
                Since then, I&apos;ve proposed and shipped AI-powered tools, architected
                analytics infrastructure, and contributed to delivery for enterprise
                customers serving 900+ users.
              </p>
              <p>
                At the core, I care about two things: deeply understanding what
                customers actually need (not just what they say), and giving teams
                enough clarity to build the right thing — without overcomplicating it.
              </p>
              <blockquote className="mt-6 pl-4 border-l-2 border-accent/50 italic text-foreground/80">
                &ldquo;Every decision is a bet. My job is to make it an informed one.&rdquo;
              </blockquote>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <div className="space-y-4">
              {[
                { value: "2+", label: "Years in Product & Delivery", sub: "Enterprise B2B SaaS at Aurigo" },
                { value: "~70%", label: "Sprint review time cut", sub: "AI-powered search tool" },
                { value: "900+", label: "Enterprise users served", sub: "7 DOT customer accounts" },
                { value: "~$150K", label: "Annual PM hours saved", sub: "Sprint Resource Planner" },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl border border-border/80 bg-surface/50">
                  <p className="text-2xl font-extrabold text-foreground tracking-tight">{stat.value}</p>
                  <p className="text-sm font-semibold text-foreground mt-1">{stat.label}</p>
                  <p className="text-xs text-muted mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </SectionContainer>

      {/* Product Philosophy */}
      <SectionContainer className="border-t border-border">
        <SectionHeader
          label="Philosophy"
          title="How I think about products"
        />
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn direction="up">
            <div className="p-5 rounded-xl border border-border/70 bg-surface/40 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.04)] transition-all duration-300">
              <h3 className="text-base font-bold text-foreground mb-2">
                Discovery before delivery
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Every product decision starts with understanding the customer
                context. I use Pendo funnel analysis, qualitative user surveys,
                and support pattern analysis to frame problems before exploring
                solutions.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <div className="p-5 rounded-xl border border-border/70 bg-surface/40 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.04)] transition-all duration-300">
              <h3 className="text-base font-bold text-foreground mb-2">
                Measure what matters
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                I architected an internal Pendo analytics platform to surface
                DAU/MAU funnels, click heatmaps, and drop-off bottlenecks.
                Product analytics changed how I prioritize: from gut-feel to
                instrumented decision-making.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="p-5 rounded-xl border border-border/70 bg-surface/40 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.04)] transition-all duration-300">
              <h3 className="text-base font-bold text-foreground mb-2">
                Technical depth enables better trade-offs
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Having built CI/CD pipelines, Flutter apps, and AI search tools
                gives me the ability to evaluate engineering complexity and
                identify where simplification creates more value than sophistication.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <div className="p-5 rounded-xl border border-border/70 bg-surface/40 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.04)] transition-all duration-300">
              <h3 className="text-base font-bold text-foreground mb-2">
                Prioritize with frameworks, not opinions
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                I apply RICE scoring to PBI prioritization, MoSCoW to scope
                definition, and sprint OKRs to align delivery with outcomes.
                Every artifact creates shared understanding across engineering
                and stakeholders.
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
                Contributed to product delivery for an enterprise mobile
                platform serving 7 DOT customers and 900+ users — supporting
                prioritization and 2-quarter roadmap scoping, sprint planning,
                UAT-based go/no-go decisions, and stable production releases.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <div className="p-6 rounded-xl border border-border bg-surface/50">
              <h3 className="text-base font-semibold text-foreground mb-2">
                AI Product Experience
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Initiated and helped ship an AI-powered PBI search tool using
                Azure DevOps + AWS Bedrock + WebLLMs. Implemented text
                embeddings + VectorDB for semantic ticket retrieval, enforced
                LLM response guardrails, and ran prompt accuracy evaluations to
                improve output reliability and response latency. Cut sprint
                review time ~70%.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="p-6 rounded-xl border border-border bg-surface/50">
              <h3 className="text-base font-semibold text-foreground mb-2">
                Analytics Infrastructure
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Proposed and architected an internal Pendo analytics platform
                with a PostgreSQL pipeline to surface DAU/MAU funnels, click
                heatmaps, and drop-off bottlenecks. Also built a Pendo →
                Supabase pipeline with n8n-automated exports, cutting ad-hoc
                sprint data turnaround from hours to minutes.
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

      {/* Education & Certifications */}
      <SectionContainer className="border-t border-border">
        <SectionHeader label="Background" title="Education & certifications" />
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn direction="up">
            <div className="p-5 rounded-xl border border-border/70 bg-surface/40">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.12em] mb-2">Education</p>
              <h3 className="text-base font-bold text-foreground">
                B.E., Information Science &amp; Engineering
              </h3>
              <p className="text-sm text-muted mt-1">
                Vidyavardhaka College of Engineering, Mysore
              </p>
              <p className="text-sm text-muted mt-0.5">
                2024 · CGPA: 9.05 / 10
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <div className="p-5 rounded-xl border border-border/70 bg-surface/40">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.12em] mb-2">Certifications</p>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  CSPO (Certified Scrum Product Owner)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  CSM (Certified ScrumMaster)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  Aha! Product Management Professional
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  Model Context Protocol: Advanced Topics (Anthropic)
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>

      {/* CTA */}
      <div className="border-t border-border">
        <CTASection />
      </div>
    </>
  );
}
