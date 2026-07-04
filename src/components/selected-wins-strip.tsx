"use client";

import { FadeIn } from "@/components/fade-in";

const wins = [
  {
    value: "~18%",
    label: "At-risk cohort reduction",
    context: "Modeled from Pendo + Supabase analytics across 1.5K+ DAU",
  },
  {
    value: "~70%",
    label: "Sprint review time reduced",
    context: "AI-powered semantic PBI search tool",
  },
  {
    value: "~90%",
    label: "Planning time reduced",
    context: "10 hrs → under 1 hr/week · Sprint Resource Planner across 3 pods",
  },
];

export function SelectedWinsStrip() {
  return (
    <section className="pb-12 md:pb-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="grid gap-4 sm:grid-cols-3">
            {wins.map((win) => (
              <div
                key={win.label}
                className="rounded-2xl border border-border/70 bg-surface/50 p-6"
              >
                <p className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                  {win.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {win.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {win.context}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
