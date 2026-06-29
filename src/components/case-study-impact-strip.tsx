"use client";

import { FadeIn } from "@/components/fade-in";

interface ImpactItem {
  label: string;
  before: string;
  after: string;
  delta: string;
}

export function CaseStudyImpactStrip({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: ImpactItem[];
}) {
  return (
    <FadeIn direction="up">
      <section className="pb-8 md:pb-10">
        <div className="rounded-2xl border border-border bg-surface/70 p-4 sm:p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
            Before / After
          </p>
          <h3 className="mt-2 text-lg font-semibold tracking-[-0.01em] text-foreground">
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted">{subtitle}</p>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-background/85 p-3"
              >
                <p className="text-xs text-muted">{item.label}</p>
                <div className="mt-2 flex items-end justify-between gap-2">
                  <div>
                    <p className="text-[11px] text-muted">Before</p>
                    <p className="text-sm font-semibold text-foreground">{item.before}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted">After</p>
                    <p className="text-sm font-semibold text-foreground">{item.after}</p>
                  </div>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-border" />
                <p className="mt-2 text-[11px] font-semibold text-accent">{item.delta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
