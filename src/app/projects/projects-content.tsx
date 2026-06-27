"use client";

import { FadeIn } from "@/components/fade-in";

const projects = [
  {
    name: "HalluciGuard",
    description:
      "LLM hallucination detection and guardrail framework. Validates model outputs against source context to catch confabulations before they reach users.",
    tech: ["JavaScript", "LLM", "Guardrails"],
    href: "https://github.com/VigneshKri/HalluciGuard",
    highlight: true,
  },
  {
    name: "InsightLayerAI",
    description:
      "AI-powered analytics layer that surfaces product insights from raw data — built to accelerate data-informed decision making for PMs.",
    tech: ["Python", "AI", "Analytics"],
    href: "https://github.com/VigneshKri/InsightLayerAI",
    highlight: true,
  },
  {
    name: "VoC Experiment Insight Copilot",
    description:
      "Voice of Customer experiment analysis tool. Helps PMs synthesize qualitative feedback and extract actionable insights from user research.",
    tech: ["TypeScript", "VoC", "Research"],
    href: "https://github.com/VigneshKri/VoC-Experiment-Insight-Copilot",
    highlight: true,
  },
  {
    name: "PM-Toolkit",
    description:
      "Collection of PM productivity tools — prioritization calculators, sprint planners, and decision frameworks built for day-to-day product work.",
    tech: ["JavaScript", "Product Management"],
    href: "https://github.com/VigneshKri/PM-Toolkit",
    highlight: true,
  },
];

export function ProjectsContent() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeIn direction="up">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Projects
          </p>
        </FadeIn>
        <FadeIn delay={0.1} direction="up">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl max-w-2xl">
            Tools and experiments
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} direction="up">
          <p className="mt-4 text-lg text-muted max-w-2xl leading-relaxed">
            Side projects built to solve real problems — from LLM guardrails
            and AI analytics to PM productivity tooling and release automation.
          </p>
        </FadeIn>

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.05} direction="up">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div
                  className={`h-full p-6 rounded-xl border transition-all duration-200 ${
                    project.highlight
                      ? "border-accent/30 bg-accent/5 hover:border-accent/50"
                      : "border-border bg-surface/50 hover:border-accent/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <svg
                      className="shrink-0 w-4 h-4 text-muted group-hover:text-accent transition-colors mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </div>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-accent/10 text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} direction="up">
          <div className="mt-10 text-center">
            <a
              href="https://github.com/VigneshKri"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
            >
              View all on GitHub
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
