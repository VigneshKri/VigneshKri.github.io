"use client";

import {
  CaseStudyHeader,
  CaseStudySection,
  RelatedCaseStudies,
} from "@/components/case-study-layout";
import { ArtifactPreview } from "@/components/artifact-preview";
import { CaseStudySnapshot } from "@/components/case-study-snapshot";
import { CaseStudyImpactStrip } from "@/components/case-study-impact-strip";
import { CaseStudyStickyRail } from "@/components/case-study-sticky-rail";

export function AISemanticSearchContent() {
  return (
    <>
      <CaseStudyHeader
        title="AI-Powered PBI Search Tool"
        description="Shipped an AI-powered PBI search tool using Azure DevOps + AWS Bedrock + WebLLMs — implementing text embeddings and VectorDB for semantic ticket retrieval, with LLM response guardrails and prompt accuracy evaluations."
        tags={[
          "AWS Bedrock",
          "WebLLMs",
          "Vector Embeddings",
          "Azure DevOps",
          "Guardrail Design",
        ]}
        metrics={[
          { value: "~70%", label: "Sprint review time cut" },
          { value: "<500ms", label: "P95 query latency" },
          { value: "LLM", label: "Guardrails enforced" },
          { value: "Prompt", label: "Accuracy evals run" },
        ]}
        visualHook={<CaseStudySnapshot variant="ai" />}
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-8 pb-20 xl:grid xl:grid-cols-[minmax(0,1fr)_260px] xl:gap-8">
        <div>
          <CaseStudyImpactStrip
            title="From Keyword Search To Semantic Retrieval"
            subtitle="Reduced planning friction by shifting from exact-match lookup to intent-aware discovery."
            items={[
              {
                label: "Ticket lookup time",
                before: "3-5 mins per query",
                after: "Intent-based retrieval",
                delta: "~70% time reduction",
              },
              {
                label: "Search reliability",
                before: "Keyword miss on intent",
                after: "Vector + keyword hybrid",
                delta: "Higher relevance",
              },
              {
                label: "Safety posture",
                before: "No LLM guardrails",
                after: "Policy-enforced responses",
                delta: "Enterprise-ready rollout",
              },
            ]}
          />
        <CaseStudySection title="Overview">
          <p>
            During sprint review sessions, PMs and engineers spent significant
            time manually searching Azure DevOps for relevant PBIs — trying
            different keyword combinations, scrolling through backlogs, and
            often failing to find related tickets. I shipped an AI-powered
            search tool that used text embeddings and vector retrieval to
            enable semantic ticket search, cutting per-ticket sprint review
            time by approximately 70%.
          </p>
        </CaseStudySection>

        <CaseStudySection id="problem-sizing" title="Problem">
          <p>
            Azure DevOps&apos; built-in search was keyword-based. When PMs
            needed to find related PBIs during sprint planning or review, they
            had to remember exact titles or IDs. Searching for &ldquo;login
            issues on mobile&rdquo; would return nothing if tickets were titled
            &ldquo;authentication failure on iOS.&rdquo; This gap slowed down
            sprint reviews, created duplicate tickets, and made it harder to
            assess related work across sprints.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Business Context">
          <p>
            Sprint review efficiency directly impacted delivery velocity. The
            time spent searching for and correlating PBIs was time not spent on
            prioritization decisions. Across the mobile pod and adjacent teams,
            this represented hours of lost PM productivity per sprint cycle.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Discovery">
          <h3 className="text-sm font-semibold text-foreground mt-4 mb-2">
            Problem Sizing
          </h3>
          <p>
            I observed sprint review sessions across the pod and tracked time
            spent on PBI search activities. PMs were averaging 3-5 minutes per
            ticket lookup, with multiple reformulation attempts. Across a
            typical sprint review touching 20+ items, this represented 60-100
            minutes of low-value search activity.
          </p>

          <h3 className="text-sm font-semibold text-foreground mt-6 mb-2">
            Technical Exploration
          </h3>
          <p>
            Evaluated the feasibility of semantic search using Azure DevOps
            APIs for ticket data access, AWS Bedrock for embedding generation,
            and WebLLMs for client-side inference. The key insight was that
            PBI titles and descriptions contained enough semantic signal to
            enable meaningful vector similarity matching.
          </p>

          <h3 className="text-sm font-semibold text-foreground mt-6 mb-2">
            Insights
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              The problem was semantic gap — users searched with intent
              language, but tickets used implementation language
            </li>
            <li>
              Text embeddings could capture conceptual similarity that
              keyword search fundamentally cannot
            </li>
            <li>
              LLM-powered response synthesis could summarize related tickets
              instead of just listing them
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Constraints">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Must work within existing AWS infrastructure (no new cloud
              providers)
            </li>
            <li>
              P95 query latency must remain under 500ms
            </li>
            <li>
              Content must not leave the organization&apos;s data boundary
              (data residency requirements)
            </li>
            <li>
              Must handle adversarial queries — prompt injection, off-topic
              requests, harmful content
            </li>
            <li>
              Must degrade gracefully to keyword search if AI service is
              unavailable
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection id="options-considered" title="Options Considered">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-semibold text-foreground">
                    Option
                  </th>
                  <th className="text-left py-3 pr-4 font-semibold text-foreground">
                    Pros
                  </th>
                  <th className="text-left py-3 pr-4 font-semibold text-foreground">
                    Cons
                  </th>
                  <th className="text-left py-3 font-semibold text-foreground">
                    Decision
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">
                    AWS Bedrock + vector embeddings
                  </td>
                  <td className="py-3 pr-4">
                    AWS-native, data stays in boundary, managed service
                  </td>
                  <td className="py-3 pr-4">
                    Newer service, limited model selection at launch
                  </td>
                  <td className="py-3 text-accent font-medium">Selected</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">OpenAI API + Pinecone</td>
                  <td className="py-3 pr-4">
                    Best model quality, rich ecosystem
                  </td>
                  <td className="py-3 pr-4">
                    Data leaves AWS, additional vendor, cost concerns
                  </td>
                  <td className="py-3">Rejected</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">
                    Enhanced keyword search (Elasticsearch tuning)
                  </td>
                  <td className="py-3 pr-4">
                    Lowest effort, no AI complexity
                  </td>
                  <td className="py-3 pr-4">
                    Doesn&apos;t solve the core semantic gap
                  </td>
                  <td className="py-3">Rejected</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CaseStudySection>

        <CaseStudySection id="decision-framework" title="Decision Framework">
          <p>
            The decision prioritized three factors in order: data residency
            compliance, integration complexity with existing infrastructure,
            and model quality. AWS Bedrock was the only option that satisfied
            all three constraints simultaneously.
          </p>
          <p>
            I defined the evaluation framework for the embedding strategy:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>
              <span className="font-medium text-foreground">
                Embedding model:
              </span>{" "}
              Evaluated Titan Embeddings vs. Cohere on 500 sample queries using
              relevance scoring
            </li>
            <li>
              <span className="font-medium text-foreground">
                Retrieval strategy:
              </span>{" "}
              Hybrid approach — semantic similarity for conceptual queries,
              keyword fallback for exact matches
            </li>
            <li>
              <span className="font-medium text-foreground">
                Prompt evaluation:
              </span>{" "}
              Defined a test suite of 100 representative queries with expected
              results for regression testing
            </li>
          </ul>
          <p className="mt-3">
            The evaluation showed that combining embedding similarity with
            keyword fallback for exact ID matches provided the best overall
            retrieval quality — pure semantic search missed exact-match queries
            while pure keyword search failed on conceptual queries.
          </p>
        </CaseStudySection>

        <CaseStudySection id="execution" title="Execution">
          <p>
            I implemented the full solution — from data pipeline through
            inference and guardrails:
          </p>
          <ol className="list-decimal pl-5 space-y-2 mt-3">
            <li>
              <span className="font-medium text-foreground">
                Data pipeline:
              </span>{" "}
              Connected to Azure DevOps APIs to extract PBI titles,
              descriptions, and metadata
            </li>
            <li>
              <span className="font-medium text-foreground">
                Embedding generation:
              </span>{" "}
              Used AWS Bedrock to generate text embeddings for the full PBI
              corpus, stored in VectorDB
            </li>
            <li>
              <span className="font-medium text-foreground">
                Semantic retrieval:
              </span>{" "}
              Implemented vector similarity search for natural language
              queries against the embedded PBI space
            </li>
            <li>
              <span className="font-medium text-foreground">
                LLM response synthesis:
              </span>{" "}
              Used WebLLMs for client-side response generation with enforced
              guardrails
            </li>
            <li>
              <span className="font-medium text-foreground">
                Prompt accuracy evals:
              </span>{" "}
              Ran systematic evaluations to optimize output reliability and
              response latency
            </li>
          </ol>
        </CaseStudySection>

        <ArtifactPreview
          heading="Artifact Preview"
          artifacts={[
            {
              title: "Prompt Safety Contract",
              detail: "System-level guardrails used for response generation",
              snippet:
                "Reject non-work queries, block prompt-injection patterns, cite retrieved PBIs only, and return deterministic fallback when confidence < threshold.",
              visual: "workflow",
            },
            {
              title: "Retrieval Quality Evaluation Grid",
              detail: "Regression suite for semantic relevance and latency",
              snippet:
                "100 benchmark queries scored for Precision@5, Recall@10, and hallucination rate; release gate required passing relevance and P95 latency targets.",
              visual: "grid",
            },
          ]}
        />

        <CaseStudySection title="Trade-offs">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Chose AWS Bedrock over OpenAI despite lower model quality to
              satisfy data residency — the constraint was non-negotiable
            </li>
            <li>
              Invested in guardrails before launch rather than iterating
              post-launch — enterprise customers required safety guarantees
              upfront
            </li>
            <li>
              Accepted higher initial latency for more accurate results —
              user research showed relevance mattered more than speed within
              acceptable thresholds
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection id="impact-and-improvements" title="Impact">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            <div className="p-4 rounded-lg border border-border text-center">
              <p className="text-xl font-bold text-accent">~70%</p>
              <p className="text-xs text-muted mt-1">
                Sprint review time cut
              </p>
            </div>
            <div className="p-4 rounded-lg border border-border text-center">
              <p className="text-xl font-bold text-accent">&lt;500ms</p>
              <p className="text-xs text-muted mt-1">
                P95 query latency
              </p>
            </div>
            <div className="p-4 rounded-lg border border-border text-center">
              <p className="text-xl font-bold text-accent">Semantic</p>
              <p className="text-xs text-muted mt-1">
                Natural language queries
              </p>
            </div>
            <div className="p-4 rounded-lg border border-border text-center">
              <p className="text-xl font-bold text-accent">Guardrails</p>
              <p className="text-xs text-muted mt-1">
                LLM output safety
              </p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Lessons Learned">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              AI product evaluation requires different quality criteria than
              traditional features — deterministic test suites are necessary
              but not sufficient for probabilistic systems
            </li>
            <li>
              Guardrails are a product feature, not an engineering
              afterthought — customers evaluated our AI maturity based on
              safety guarantees
            </li>
            <li>
              Shadow mode testing was invaluable — it revealed edge cases and
              quality gaps without impacting production users
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="What I Would Improve Today">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Would have built a feedback loop earlier — user thumbs-up/down
              on results to continuously improve retrieval quality
            </li>
            <li>
              Would have invested more in explainability — showing users why
              a result was returned to build trust in AI-powered results
            </li>
            <li>
              Would have defined cost monitoring dashboards before launch —
              AI inference costs scaled differently than expected
            </li>
          </ul>
        </CaseStudySection>

        <RelatedCaseStudies
          studies={[
            {
              title: "Product Analytics Pipeline",
              href: "/case-studies/product-analytics-pipeline",
            },
            {
              title: "Sprint Resource Planner",
              href: "/case-studies/sprint-resource-planner",
            },
          ]}
        />
        </div>

        <CaseStudyStickyRail
          title="AI-Powered Search"
          metrics={[
            { value: "~70%", label: "Review time reduction" },
            { value: "<500ms", label: "P95 latency" },
            { value: "Guardrails", label: "LLM safety enforced" },
          ]}
          checkpoints={[
            { label: "Problem sizing", href: "#problem-sizing" },
            { label: "Options considered", href: "#options-considered" },
            { label: "Decision framework", href: "#decision-framework" },
            { label: "Execution", href: "#execution" },
            { label: "Impact and improvements", href: "#impact-and-improvements" },
          ]}
        />
      </div>
    </>
  );
}
