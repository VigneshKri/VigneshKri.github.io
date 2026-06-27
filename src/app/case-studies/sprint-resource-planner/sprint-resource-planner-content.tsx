"use client";

import {
  CaseStudyHeader,
  CaseStudySection,
  RelatedCaseStudies,
} from "@/components/case-study-layout";

export function SprintResourcePlannerContent() {
  return (
    <>
      <CaseStudyHeader
        title="Sprint Resource Planner"
        description="Conceived and owned an internal product after identifying fragmented capacity visibility across Azure DevOps boards — delivered a sprint planning tool that became the single source of truth for workload allocation, carry-over tracking, and sprint readiness scoring across 3 pods."
        tags={[
          "Internal Product",
          "Azure DevOps",
          "Capacity Planning",
          "Cross-Pod Impact",
          "Flask + Python",
        ]}
        metrics={[
          { value: "~$150K", label: "Annual PM hours saved" },
          { value: "60%", label: "Reallocation effort reduced" },
          { value: "3 pods", label: "Org-wide adoption" },
          { value: "5+ PMs", label: "Active daily users" },
        ]}
      />

      <div className="mx-auto max-w-5xl px-6 lg:px-8 pb-20">
        <CaseStudySection title="Overview">
          <p>
            Sprint planning in large Azure DevOps organizations is broken.
            Capacity is invisible, overload goes unnoticed until standup,
            carry-over is a black hole, and sprint readiness is a gut feeling.
            I identified this fragmented capacity visibility across Azure DevOps
            boards, defined requirements through PM and engineering manager
            interviews, prioritized MVP scope, and delivered a sprint planning
            tool that became the single source of truth for workload allocation
            across 3 pods.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Problem">
          <p>
            PMs managing sprints in Azure DevOps had no single view of team
            capacity. To answer &ldquo;who has bandwidth?&rdquo; they had to
            open ADO, check the capacity tab, then mentally calculate hours per
            person across multiple boards. Key problems:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>
              <span className="font-medium text-foreground">Capacity was invisible</span> —
              no single view showing available bandwidth across a pod
            </li>
            <li>
              <span className="font-medium text-foreground">Overload went unnoticed</span> —
              a developer at 180% utilization wasn&apos;t flagged until they
              missed a deadline
            </li>
            <li>
              <span className="font-medium text-foreground">Carry-over was a black hole</span> —
              items spilled sprint to sprint with no trail; PMs couldn&apos;t
              answer &ldquo;how much unfinished work did we inherit?&rdquo;
            </li>
            <li>
              <span className="font-medium text-foreground">Sprint readiness was a gut feeling</span> —
              unestimated items, missing capacity, over-committed members were
              scattered across ADO tabs
            </li>
            <li>
              <span className="font-medium text-foreground">Cross-program risk was invisible</span> —
              a PGM managing 16 projects had no way to spot which pod was
              drowning without opening each board individually
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Business Context">
          <p>
            Program Managers were spending significant time on manual resource
            reallocation — opening multiple ADO boards, cross-referencing
            capacity tabs, and making spreadsheet calculations. This overhead
            directly impacted sprint predictability across the organization.
            Overloaded teams weren&apos;t surfaced until sprint commitment was
            already made, causing downstream delivery risk.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Discovery">
          <h3 className="text-sm font-semibold text-foreground mt-4 mb-2">
            Stakeholder Research
          </h3>
          <p>
            I conducted interviews with PMs and engineering managers to
            understand their sprint planning workflows. Every PM described a
            similar pattern: manually checking ADO capacity, building mental
            models of team load, and only discovering problems during standup
            when deadlines were already at risk.
          </p>

          <h3 className="text-sm font-semibold text-foreground mt-6 mb-2">
            Pain Point Mapping
          </h3>
          <p>
            Mapped the end-to-end sprint planning process and identified 6
            distinct friction points where Azure DevOps failed to provide
            the view PMs needed. The biggest gap: no cross-pod visibility
            for Program Managers managing multiple teams simultaneously.
          </p>

          <h3 className="text-sm font-semibold text-foreground mt-6 mb-2">
            Insights
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              PMs needed answers to simple questions — &ldquo;who has
              bandwidth?&rdquo;, &ldquo;is the sprint over-committed?&rdquo;,
              &ldquo;which pod is at risk?&rdquo; — that ADO couldn&apos;t
              answer without manual calculation
            </li>
            <li>
              The data existed in Azure DevOps — the problem was aggregation
              and visualization, not data collection
            </li>
            <li>
              Reassignment required opening individual items, changing
              AssignedTo, saving, then mentally recalculating both
              people&apos;s load — a UX problem solvable with drag-and-drop
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Solution Design">
          <p>
            I designed Sprint Resource Planner as a live capacity dashboard
            sitting on top of Azure DevOps, providing three views:
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-semibold text-foreground">
                    View
                  </th>
                  <th className="text-left py-3 font-semibold text-foreground">
                    What it answers
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium text-foreground">
                    Planning Board
                  </td>
                  <td className="py-3 text-muted">
                    &ldquo;Who has bandwidth?&rdquo; — allocation bars per
                    person, hours free/over, health status, drag-and-drop
                    reassignment with ADO write-back
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium text-foreground">
                    Sprint Readiness
                  </td>
                  <td className="py-3 text-muted">
                    &ldquo;Are we ready for next sprint?&rdquo; — OV-02
                    readiness score, carry-over detection, velocity trend,
                    actionable insights
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium text-foreground">
                    Portfolio
                  </td>
                  <td className="py-3 text-muted">
                    &ldquo;Which pod is at risk?&rdquo; — cross-program
                    roll-up ranked worst-prepared first, drill-down into any
                    pod
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-sm font-semibold text-foreground mt-6 mb-2">
            Key Features
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Carryover detection — items activated before sprint start flagged
              automatically with SP total
            </li>
            <li>
              Smart member list — only members with items in the sprint appear;
              missing members surfaced explicitly
            </li>
            <li>
              Drag-and-drop reassignment with optimistic UI and ADO write-back
              using optimistic concurrency control
            </li>
            <li>
              Live search — filter by member name, PBI title, or work item ID
            </li>
            <li>
              Workload health states — Available (&lt;70%), Healthy (70-89%),
              Near Capacity (90-100%), Overloaded (&gt;100%)
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Architecture Decisions">
          <p>
            Built as a Flask API + vanilla frontend reading live from Azure
            DevOps REST API v7.1. Key architecture decisions:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>
              <span className="font-medium text-foreground">
                Deterministic data flow:
              </span>{" "}
              ADO REST in the hot path, no LLM — predictable performance and
              zero hallucination risk for capacity numbers
            </li>
            <li>
              <span className="font-medium text-foreground">
                Cached reads with short TTL:
              </span>{" "}
              30-second cache on ADO reads; reassignment invalidates affected
              board cache immediately
            </li>
            <li>
              <span className="font-medium text-foreground">
                Auto-discovery:
              </span>{" "}
              Programs discovered automatically from all VSTS projects the PAT
              can access — zero manual configuration needed
            </li>
            <li>
              <span className="font-medium text-foreground">
                Optimistic concurrency:
              </span>{" "}
              Reassign uses op:test on /rev before writing — prevents conflicts
              when items are edited concurrently in ADO
            </li>
            <li>
              <span className="font-medium text-foreground">
                Audit trail:
              </span>{" "}
              Every reassignment logged — who changed what, when, from → to,
              ADO result
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Execution">
          <p>
            I owned the full product lifecycle — from problem identification
            through requirements, architecture, implementation, and rollout:
          </p>
          <ol className="list-decimal pl-5 space-y-2 mt-3">
            <li>
              <span className="font-medium text-foreground">
                Requirements:
              </span>{" "}
              Defined through PM and engineering manager interviews; prioritized
              MVP scope using the most critical pain points (capacity visibility
              and sprint readiness)
            </li>
            <li>
              <span className="font-medium text-foreground">
                Architecture:
              </span>{" "}
              Designed Flask API with service layer, ADO client abstraction
              (live/mock modes), and SQLite → Postgres-ready data layer
            </li>
            <li>
              <span className="font-medium text-foreground">
                Implementation:
              </span>{" "}
              Built the full stack — API endpoints, capacity model, ADO
              integration, planning board UI, readiness scoring, portfolio view
            </li>
            <li>
              <span className="font-medium text-foreground">
                Rollout:
              </span>{" "}
              Deployed internally; adopted as standard planning tool across 3
              pods with 5+ active PM users
            </li>
          </ol>
        </CaseStudySection>

        <CaseStudySection title="Trade-offs">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Chose vanilla frontend over React/Next.js to minimize
              dependencies and enable any PM to deploy locally without a
              complex build pipeline
            </li>
            <li>
              Used deterministic ADO REST over LLM-powered suggestions in the
              hot path — accuracy of capacity numbers was non-negotiable;
              Claude suggestion engine scaffolded as deferred feature
            </li>
            <li>
              Started with SQLite for zero-config deployment, with
              Postgres-ready schema for future production scaling
            </li>
            <li>
              Auto-discovery over manual configuration — slightly higher
              initial API calls but zero onboarding friction for new programs
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Impact">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            <div className="p-4 rounded-lg border border-border text-center">
              <p className="text-xl font-bold text-accent">~$150K</p>
              <p className="text-xs text-muted mt-1">
                Annual PM hours saved
              </p>
            </div>
            <div className="p-4 rounded-lg border border-border text-center">
              <p className="text-xl font-bold text-accent">60%</p>
              <p className="text-xs text-muted mt-1">
                Reallocation effort reduced
              </p>
            </div>
            <div className="p-4 rounded-lg border border-border text-center">
              <p className="text-xl font-bold text-accent">3 pods</p>
              <p className="text-xs text-muted mt-1">
                Adopted as standard tool
              </p>
            </div>
            <div className="p-4 rounded-lg border border-border text-center">
              <p className="text-xl font-bold text-accent">Before</p>
              <p className="text-xs text-muted mt-1">
                Overload surfaced pre-sprint
              </p>
            </div>
          </div>
          <p className="mt-4">
            By eliminating ~2 hours/week of manual capacity calculation per PM
            across 5+ PMs and 3 pods, the tool saves approximately $150K
            annually in PM productivity — time now redirected toward discovery,
            customer research, and strategic prioritization instead of
            spreadsheet gymnastics.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Lessons Learned">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Internal tools succeed when they answer a question faster than
              the existing workflow — Sprint Resource Planner replaced 15
              minutes of tab-switching with one screen
            </li>
            <li>
              Auto-discovery dramatically reduced adoption friction — PMs
              didn&apos;t need to configure anything, they just opened the tool
              and their programs appeared
            </li>
            <li>
              Building the mock client alongside the live client paid for
              itself immediately — offline development was 10x faster and
              enabled demos without PAT access
            </li>
            <li>
              The audit trail was an afterthought that became a critical
              feature — PMs needed to know who reassigned what and when for
              accountability
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="What I Would Improve Today">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Would wire up the Claude suggestion engine for intelligent
              rebalancing recommendations — the scaffolding exists but needs
              prompt engineering for the specific org context
            </li>
            <li>
              Would add real-time WebSocket updates so the board reflects ADO
              changes without manual refresh
            </li>
            <li>
              Would build a sprint retrospective view that auto-generates
              commitment vs. delivery analysis from historical data
            </li>
          </ul>
        </CaseStudySection>

        <RelatedCaseStudies
          studies={[
            {
              title: "Biometric Authentication Rollout",
              href: "/case-studies/biometric-authentication",
            },
            {
              title: "AI-Powered PBI Search Tool",
              href: "/case-studies/ai-semantic-search",
            },
          ]}
        />
      </div>
    </>
  );
}
