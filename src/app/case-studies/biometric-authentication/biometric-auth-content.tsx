"use client";

import {
  CaseStudyHeader,
  CaseStudySection,
  RelatedCaseStudies,
} from "@/components/case-study-layout";

export function BiometricAuthContent() {
  return (
    <>
      <CaseStudyHeader
        title="Biometric Authentication Rollout"
        description="Led full product discovery for biometric authentication at Aurigo — identified login drop-off via Pendo funnel analysis, ran qualitative user surveys, wireframed UX in Figma, authored a PRD with MoSCoW-prioritized scope, and executed a controlled 5-customer GA rollout."
        tags={[
          "Product Discovery",
          "Pendo Analytics",
          "MoSCoW Prioritization",
          "Figma",
          "Enterprise GA",
        ]}
        metrics={[
          { value: "~$2M", label: "Contract value influenced" },
          { value: "5", label: "Enterprise onboards" },
          { value: "900+", label: "Users impacted" },
          { value: "5", label: "Customers in controlled GA" },
        ]}
      />

      <div className="mx-auto max-w-5xl px-6 lg:px-8 pb-20">
        <CaseStudySection title="Overview">
          <p>
            Enterprise DOT (Department of Transportation) customers using
            Aurigo&apos;s mobile platform were experiencing login friction that
            impacted session completion. As Product Delivery Lead for the mobile
            pod, I led the full product discovery and delivery of biometric
            authentication — from identifying the problem through analytics to
            executing a controlled 5-customer GA rollout that contributed to
            approximately $2M in customer contract value across 5 new enterprise
            onboards.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Problem">
          <p>
            Pendo funnel analysis revealed a significant login drop-off in the
            mobile application. Users in field environments (construction sites,
            inspections) needed fast re-authentication, but the existing
            credential-based flow created friction that directly impacted daily
            active usage and feature adoption metrics.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Business Context">
          <p>
            Authentication experience was surfacing in enterprise customer
            conversations. Multiple DOT accounts had raised login UX during
            quarterly reviews. The customer success team identified it as a
            factor in new customer onboarding friction — directly impacting
            contract expansion conversations worth approximately $2M across 5
            prospective enterprise onboards.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Customer Context">
          <p>
            Our users were field workers at DOT agencies — inspectors,
            construction managers, and supervisors who needed mobile access in
            environments without reliable connectivity. They required
            authentication that was fast enough for field workflows and secure
            enough to satisfy government compliance requirements.
          </p>
        </CaseStudySection>

        <CaseStudySection title="Discovery">
          <h3 className="text-sm font-semibold text-foreground mt-4 mb-2">
            Quantitative Analysis
          </h3>
          <p>
            I used Pendo funnel analysis to map the authentication flow and
            identify exactly where users were dropping off. The data showed a
            clear pattern of login abandonment at the credential entry step,
            particularly among users who needed to re-authenticate multiple
            times per shift.
          </p>

          <h3 className="text-sm font-semibold text-foreground mt-6 mb-2">
            Qualitative Research
          </h3>
          <p>
            Ran qualitative user surveys with field workers across enterprise
            accounts to understand workflow context and pain points. Key insight:
            users were re-authenticating frequently due to session timeouts in
            the field, and each instance disrupted their inspection workflow.
          </p>

          <h3 className="text-sm font-semibold text-foreground mt-6 mb-2">
            Insights
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Login drop-off was the primary friction point identified in Pendo
              funnel data
            </li>
            <li>
              Field workers needed sub-5-second authentication to maintain
              workflow continuity during inspections
            </li>
            <li>
              Enterprise admins required audit-grade authentication events for
              government compliance reporting
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Constraints">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Must support both iOS Face ID/Touch ID and Android BiometricPrompt
            </li>
            <li>
              Must not compromise existing security policies or compliance
              certifications
            </li>
            <li>
              Must be opt-in per enterprise tenant (admin-configurable)
            </li>
            <li>
              Engineering capacity: mobile pod (2 QE, 4 Dev) with competing
              sprint priorities
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Decision Framework">
          <p>
            I authored a PRD with MoSCoW-prioritized scope to align engineering
            and stakeholders on what we would ship in the controlled rollout
            versus future iterations.
          </p>
          <ul className="list-none space-y-3 mt-4">
            <li>
              <span className="font-semibold text-foreground">Must Have:</span>{" "}
              Face ID / Touch ID / Android biometric support, admin
              enable/disable toggle, audit logging for compliance
            </li>
            <li>
              <span className="font-semibold text-foreground">
                Should Have:
              </span>{" "}
              Fallback to password on biometric failure, enrollment UX flow
            </li>
            <li>
              <span className="font-semibold text-foreground">
                Could Have:
              </span>{" "}
              Biometric analytics dashboard for enterprise admins
            </li>
            <li>
              <span className="font-semibold text-foreground">
                Won&apos;t Have (this release):
              </span>{" "}
              Multi-factor biometric chains, offline biometric caching
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Execution">
          <p>
            I wireframed UX flows in Figma, authored the PRD with acceptance
            criteria, and coordinated delivery with the 6-engineer pod (2 QE,
            4 Dev). The rollout followed a controlled approach:
          </p>
          <ol className="list-decimal pl-5 space-y-2 mt-3">
            <li>
              <span className="font-medium text-foreground">
                UX Design:
              </span>{" "}
              Wireframed biometric enrollment and authentication flows in Figma
            </li>
            <li>
              <span className="font-medium text-foreground">
                PRD &amp; Sprint Planning:
              </span>{" "}
              Authored PRD with MoSCoW scope, defined sprint goals and
              acceptance criteria
            </li>
            <li>
              <span className="font-medium text-foreground">
                Controlled GA:
              </span>{" "}
              Rolled out to 5 enterprise customers with UAT-based go/no-go
              decision at each stage
            </li>
          </ol>
        </CaseStudySection>

        <CaseStudySection title="Trade-offs">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Chose platform-native biometrics over a cross-platform library to
              maximize security and UX quality, accepting higher engineering
              cost
            </li>
            <li>
              Made biometric opt-in rather than opt-out to respect enterprise
              security policies and avoid compliance complications
            </li>
            <li>
              Deferred the admin analytics dashboard to keep scope tight for
              the controlled GA timeline
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Impact">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            <div className="p-4 rounded-lg border border-border text-center">
              <p className="text-xl font-bold text-accent">~$2M</p>
              <p className="text-xs text-muted mt-1">
                Customer contract value
              </p>
            </div>
            <div className="p-4 rounded-lg border border-border text-center">
              <p className="text-xl font-bold text-accent">5</p>
              <p className="text-xs text-muted mt-1">New enterprise onboards</p>
            </div>
            <div className="p-4 rounded-lg border border-border text-center">
              <p className="text-xl font-bold text-accent">900+</p>
              <p className="text-xs text-muted mt-1">Users with biometric access</p>
            </div>
            <div className="p-4 rounded-lg border border-border text-center">
              <p className="text-xl font-bold text-accent">0</p>
              <p className="text-xs text-muted mt-1">
                Rollback incidents
              </p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Lessons Learned">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Pendo funnel analysis was critical in making the case for
              prioritization — without quantified drop-off data, this would
              have stayed in the backlog
            </li>
            <li>
              Controlled GA rollouts de-risk enterprise features significantly
              — beta customers caught edge cases internal testing missed
            </li>
            <li>
              Enterprise rollouts require more stakeholder alignment than
              consumer features — admin communication and documentation were as
              important as the feature itself
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
    </>
  );
}
