"use client";

import { FadeIn } from "@/components/fade-in";

const projects = [
  {
    name: "ConstructHub",
    description:
      "A 17-module construction management platform built from user research. Role-based access, proactive alerting, AI-powered analytics, and RICE-scored feature requests. Full PRD and user research docs included.",
    tech: ["React 19", "AI Analytics", "Role-Based Access", "Product Discovery"],
    href: "https://github.com/VigneshKri/ConstructHub",
    liveUrl: "https://constructsafe.netlify.app/",
    status: null,
  },
  {
    name: "PM-Toolkit",
    description:
      "A comprehensive PM productivity suite with 12+ modules — RICE prioritization, sprint planning with Kanban, OKR tracker, roadmap views, AI assistant, PRD generator, and stakeholder mapping.",
    tech: ["React", "RICE Framework", "AI Assistant", "12+ Modules"],
    href: "https://github.com/VigneshKri/PM-Toolkit",
    liveUrl: null,
    status: null,
  },
  {
    name: "InsightLayerAI",
    description:
      "End-to-end product analytics + decision intelligence pipeline. Tracks metrics, explains anomalies via RCA, forecasts trends, and generates PM briefings automatically.",
    tech: ["Python", "Supabase", "LLM Summaries", "n8n Automation"],
    href: "https://github.com/VigneshKri/InsightLayerAI",
    liveUrl: null,
    status: "WIP",
  },
  {
    name: "VoC Experiment Insight Copilot",
    description:
      "Voice of Customer experiment analysis tool. Helps PMs synthesize qualitative feedback and extract actionable insights from user research.",
    tech: ["TypeScript", "VoC", "Research Synthesis"],
    href: "https://github.com/VigneshKri/VoC-Experiment-Insight-Copilot",
    liveUrl: null,
    status: "WIP",
  },
];

export function ProjectsContent() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeIn direction="up">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
            Projects
          </p>
        </FadeIn>
        <FadeIn delay={0.1} direction="up">
          <h1 className="text-4xl font-extrabold tracking-[-0.03em] text-foreground sm:text-5xl max-w-3xl leading-[1.08]">
            Tools & <em className="italic">experiments.</em>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} direction="up">
          <p className="mt-5 text-lg text-muted max-w-2xl leading-[1.55] font-medium">
            Side projects built to solve real problems — from LLM guardrails
            and AI analytics to PM productivity tooling.
          </p>
        </FadeIn>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.05} direction="up">
              <div className="h-full p-6 rounded-2xl border border-border/70 bg-surface/40 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.04)] transition-all duration-300">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {project.name}
                    </h3>
                    {project.status && (
                      <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-semibold uppercase tracking-wider">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent/10 text-accent text-[11px] font-semibold hover:bg-accent/20 transition-colors"
                      >
                        Live Demo ↗
                      </a>
                    )}
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground transition-colors"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-foreground/6 text-foreground/70 dark:bg-foreground/10 dark:text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
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
