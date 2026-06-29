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

export function ProductAnalyticsPipelineContent() {
  return (
    <>
      <CaseStudyHeader
        title="Product Analytics Pipeline (Pendo + Supabase)"
        description="Reframed telemetry from a reporting artifact into an operating decision system by integrating Pendo with Supabase and defining customer-level product-health rules used by Product, CS, and Engineering."
        tags={[
          "Pendo",
          "Supabase",
          "Decision Systems",
          "Customer Risk Detection",
          "Cross-Functional Operations",
        ]}
        metrics={[
          { value: "1.5K+", label: "DAU monitored" },
          { value: "~18%", label: "At-risk cohort reduction (estimated)" },
          { value: "~32%", label: "Faster issue triage (estimated)" },
          { value: "5", label: "Health signals automated" },
        ]}
        visualHook={<CaseStudySnapshot variant="analytics" />}
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-8 pb-20 xl:grid xl:grid-cols-[minmax(0,1fr)_260px] xl:gap-8">
        <div>
          <CaseStudyImpactStrip
            title="Operational Shift In The First Window"
            subtitle="From reactive incident review to proactive customer-risk intervention."
            items={[
              {
                label: "At-risk cohorts",
                before: "Frequent late detection",
                after: "Weekly flagged cohorts",
                delta: "~18% modeled reduction",
              },
              {
                label: "Triage cycle",
                before: "Cross-tool manual triage",
                after: "One-board action routing",
                delta: "~32% faster triage",
              },
              {
                label: "Signal coverage",
                before: "Fragmented indicators",
                after: "5 automated health signals",
                delta: "Higher decision consistency",
              },
            ]}
          />
        <CaseStudySection id="situation" title="Situation">
          <p>
            We had telemetry everywhere and decisions nowhere. Product,
            Customer Success, and Engineering were all looking at different
            slices of behavior data and escalating issues only after customers
            felt the pain. My goal was not to create another dashboard, but to
            build a shared decision layer that answered one question daily:
            which customer segments are slipping, why, and what do we do now?
          </p>
        </CaseStudySection>

        <CaseStudySection title="Why This Mattered">
          <p>
            At 1.5K+ DAU, minor conversion and reliability shifts can compound
            quickly into retention risk. We were strong at investigating known
            incidents, weak at detecting emerging ones. That delay caused poor
            prioritization: teams spent cycles on loud requests while hidden
            adoption drop-offs remained untreated.
          </p>
        </CaseStudySection>

        <CaseStudySection id="decision-framework" title="Core Product Decision">
          <p>
            I chose to build a rule-driven product-health system, not an ad hoc
            reporting stack. The decision principle was simple: every metric
            must map to an owner and an action.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>
              If a metric cannot change a weekly prioritization decision, it
              does not belong in the core dashboard.
            </li>
            <li>
              Account-level risk visibility beats global averages for retention
              workflows.
            </li>
            <li>
              Detection latency is as important as metric accuracy.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Hypotheses and Success Criteria">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Surfacing customer-level risk signals weekly will reduce the
              size of at-risk cohorts by enabling earlier intervention.
            </li>
            <li>
              Consolidating telemetry into one operational board will shorten
              triage-to-action time across cross-functional teams.
            </li>
            <li>
              Defining explicit business rules for health signals will increase
              prioritization quality versus relying on aggregate usage charts.
            </li>
          </ol>
        </CaseStudySection>

        <CaseStudySection id="execution-slices" title="Execution Lens">
          <p>
            I structured delivery in three slices so teams could use the system
            early rather than waiting for a perfect analytics platform.
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-semibold text-foreground">
                    Slice
                  </th>
                  <th className="text-left py-3 pr-4 font-semibold text-foreground">
                    Scope
                  </th>
                  <th className="text-left py-3 font-semibold text-foreground">
                    Decision unlocked
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium text-foreground">
                    Foundation
                  </td>
                  <td className="py-3 pr-4 text-muted">
                    Pendo to Supabase ingestion + data model standardization
                  </td>
                  <td className="py-3 text-muted">
                    Single source of behavioral truth by account
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium text-foreground">
                    Signal Layer
                  </td>
                  <td className="py-3 pr-4 text-muted">
                    Business rules for drop-offs, stalls, crash/kill,
                    data-loss, and engagement heatmaps
                  </td>
                  <td className="py-3 text-muted">
                    Early warning system for customer risk
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium text-foreground">
                    Operating View
                  </td>
                  <td className="py-3 pr-4 text-muted">
                    Interactive dashboard with account drill-down + triage cues
                  </td>
                  <td className="py-3 text-muted">
                    Faster cross-team prioritization and intervention
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CaseStudySection>

        <CaseStudySection id="trade-offs" title="Trade-offs I Made">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Picked rule transparency over model complexity so teams trusted
              the output and adopted it quickly.
            </li>
            <li>
              Prioritized actionable signal coverage over exhaustive event
              coverage to deliver value in weeks, not quarters.
            </li>
            <li>
              Chose customer-level diagnostics over prettier aggregate charts to
              improve retention decisions.
            </li>
          </ul>
        </CaseStudySection>

        <ArtifactPreview
          heading="Artifact Preview"
          artifacts={[
            {
              title: "Product Health Rulebook",
              detail:
                "Business-rule definitions that translated raw telemetry into decision-grade signals",
              snippet:
                "Drop-off spike alert when funnel completion falls >12% week-over-week for a customer cohort; route to Product + CS intervention queue.",
              visual: "rulebook",
            },
            {
              title: "Customer Risk Dashboard Spec",
              detail:
                "Dashboard layout and drill-down behavior for cross-functional triage",
              snippet:
                "Top panel: account risk index and trend. Mid panel: crash/data-loss incidents. Bottom panel: feature engagement heatmap and stalled journey markers.",
              visual: "dashboard",
            },
          ]}
        />

        <CaseStudySection id="impact-and-proof" title="Impact (Modeled Estimates)">
          <p>
            Using baseline incident and adoption patterns across 1.5K+ DAU, we
            modeled the first operating-window outcomes below. These are
            directional planning estimates, not audited financial claims.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            <div className="p-4 rounded-lg border border-border text-center">
              <p className="text-xl font-bold text-accent">~18%</p>
              <p className="text-xs text-muted mt-1">
                Reduction in at-risk customer cohorts
              </p>
            </div>
            <div className="p-4 rounded-lg border border-border text-center">
              <p className="text-xl font-bold text-accent">~32%</p>
              <p className="text-xs text-muted mt-1">
                Faster triage-to-action cycle
              </p>
            </div>
            <div className="p-4 rounded-lg border border-border text-center">
              <p className="text-xl font-bold text-accent">1.5K+</p>
              <p className="text-xs text-muted mt-1">
                Daily active users observed
              </p>
            </div>
            <div className="p-4 rounded-lg border border-border text-center">
              <p className="text-xl font-bold text-accent">5</p>
              <p className="text-xs text-muted mt-1">
                Automated health signals in one dashboard
              </p>
            </div>
          </div>
          <p className="mt-4">
            More importantly, teams changed behavior: weekly planning shifted
            from anecdotal incident recaps to account-level risk review with
            explicit owner actions.
          </p>
        </CaseStudySection>

        <CaseStudySection title="What This Proved">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              A product analytics system creates business value only when it is
              tied to decision ownership and operating cadence.
            </li>
            <li>
              Risk detection quality depends more on metric semantics and
              thresholds than on dashboard polish.
            </li>
            <li>
              Customer-level observability can become a proactive retention
              lever, not just a reporting layer.
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="What I Would Improve Next">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Add intervention efficacy tracking to quantify which actions best
              reduce risk by cohort type.
            </li>
            <li>
              Introduce account-level health score explainability so CS can
              communicate risk shifts with clearer narratives.
            </li>
            <li>
              Add automated weekly insight digests for stakeholders who do not
              actively use dashboards.
            </li>
          </ul>
        </CaseStudySection>

        <RelatedCaseStudies
          studies={[
            {
              title: "Sprint Resource Planner",
              href: "/case-studies/sprint-resource-planner",
            },
            {
              title: "AI-Powered PBI Search Tool",
              href: "/case-studies/ai-semantic-search",
            },
          ]}
        />
        </div>

        <CaseStudyStickyRail
          title="Analytics Pipeline"
          metrics={[
            { value: "1.5K+", label: "DAU Monitored" },
            { value: "~18%", label: "At-risk reduction (modeled)" },
            { value: "~32%", label: "Faster triage cycle (modeled)" },
          ]}
          checkpoints={[
            { label: "Situation & urgency", href: "#situation" },
            { label: "Decision framework", href: "#decision-framework" },
            { label: "Execution slices", href: "#execution-slices" },
            { label: "Trade-offs", href: "#trade-offs" },
            { label: "Impact and proof", href: "#impact-and-proof" },
          ]}
        />
      </div>
    </>
  );
}
