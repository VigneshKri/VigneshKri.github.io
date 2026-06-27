"use client";

import { FadeIn } from "./fade-in";

interface MetricCardProps {
  value: string;
  label: string;
  delay?: number;
}

export function MetricCard({ value, label, delay = 0 }: MetricCardProps) {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="text-center p-6 rounded-xl border border-border bg-surface hover:border-accent/30 transition-colors">
        <p className="text-3xl font-bold text-accent tracking-tight">
          {value}
        </p>
        <p className="mt-2 text-sm font-medium text-muted">{label}</p>
      </div>
    </FadeIn>
  );
}
