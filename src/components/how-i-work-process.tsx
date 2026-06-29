"use client";

import { FadeIn } from "@/components/fade-in";
import { SectionContainer, SectionHeader } from "@/components/section-container";

const processSteps = [
  {
    title: "Signal",
    description:
      "I use analytics, customer calls, and workflow observation to isolate the highest-friction product signals.",
  },
  {
    title: "Shape",
    description:
      "I turn ambiguous opportunities into clear problem statements, success metrics, and scoped requirements.",
  },
  {
    title: "Ship",
    description:
      "I partner tightly with design and engineering to deliver in controlled slices with explicit go/no-go checkpoints.",
  },
  {
    title: "Scale",
    description:
      "I close the loop with adoption, outcome measurement, and backlog refinement for the next decision cycle.",
  },
];

export function HowIWorkProcess() {
  return (
    <SectionContainer className="border-t border-border">
      <SectionHeader
        label="Operating Model"
        title="How I work from ambiguity to impact"
        description="A repeatable product rhythm I use to move from user signals to enterprise outcomes."
      />
      <div className="relative grid gap-4 md:grid-cols-4">
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        />
        {processSteps.map((step, index) => (
          <FadeIn key={step.title} delay={index * 0.08} direction="up">
            <div className="relative h-full rounded-xl border border-border bg-surface/80 p-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/15 text-accent text-xs font-semibold mb-3">
                {index + 1}
              </span>
              <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionContainer>
  );
}
