"use client";

import { FadeIn } from "./fade-in";

interface MetricCardProps {
  value: string;
  label: string;
  context?: string;
  delay?: number;
}

export function MetricCard({ value, label, context, delay = 0 }: Readonly<MetricCardProps>) {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="text-center p-6 rounded-2xl border border-border/80 bg-surface/60 hover:border-accent/35 transition-colors">
        <p className="text-4xl font-extrabold text-foreground tracking-tight">
          {value}
        </p>
        <p className="mt-2 text-sm font-medium text-muted">{label}</p>
        {context && (
          <p className="mt-1 text-xs text-muted/70 leading-snug">{context}</p>
        )}
      </div>
    </FadeIn>
  );
}
