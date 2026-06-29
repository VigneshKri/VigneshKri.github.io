"use client";

import { FadeIn } from "@/components/fade-in";

type SnapshotVariant = "analytics" | "planning" | "ai";

function AnalyticsSnapshot() {
  return (
    <div className="rounded-2xl border border-accent/30 dark:border-accent/40 bg-gradient-to-br from-accent/5 dark:from-accent/10 to-background p-3 sm:p-4">
      <div className="flex items-center justify-between mb-2.5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          Customer Risk Dashboard
        </p>
        <p className="text-[11px] text-muted">Updated weekly</p>
      </div>
      <div className="mb-2.5 flex flex-wrap gap-1.5 text-[10px]">
        <span className="rounded border border-border bg-background/70 px-2 py-1">
          <span className="text-muted">Owner:</span>{" "}
          <span className="font-medium text-foreground">Product Ops</span>
        </span>
        <span className="rounded border border-border bg-background/70 px-2 py-1">
          <span className="text-muted">Trigger:</span>{" "}
          <span className="font-medium text-foreground">Drop-off &gt;12%</span>
        </span>
        <span className="rounded border border-border bg-background/70 px-2 py-1">
          <span className="text-muted">Action:</span>{" "}
          <span className="font-medium text-foreground">CS Intervention</span>
        </span>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-border p-3 bg-background/80">
          <div className="flex items-center justify-between">
            <p className="text-[11px] text-muted">At-risk accounts</p>
            <span className="rounded-full border border-accent/40 bg-accent/10 px-1.5 py-0.5 text-[9px] font-semibold text-accent">
              Improving
            </span>
          </div>
          <p className="text-lg font-bold text-foreground mt-1">-18%</p>
          <div className="mt-2 grid grid-cols-7 gap-1">
            {[7, 6, 6, 5, 5, 4, 4].map((h, i) => (
              <div key={i} className="rounded-sm bg-accent/35" style={{ height: `${h * 3}px` }} />
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-border p-3 bg-background/80">
          <p className="text-[11px] text-muted">Health rules</p>
          <div className="mt-2 space-y-1.5">
            <div className="rounded bg-accent/12 border border-accent/30 px-2 py-1 text-[10px]">Drop-off &gt; 12% WoW</div>
            <div className="rounded bg-accent/12 border border-accent/30 px-2 py-1 text-[10px]">Crash spike threshold</div>
            <div className="rounded bg-accent/12 border border-accent/30 px-2 py-1 text-[10px]">Stalled journey &gt; 2 steps</div>
          </div>
        </div>
        <div className="rounded-lg border border-border p-3 bg-background/80">
          <p className="text-[11px] text-muted">Action routing</p>
          <div className="mt-2 flex items-center gap-1.5 text-[10px] text-muted">
            <span className="rounded border border-border px-1.5 py-0.5">Product</span>
            <span>→</span>
            <span className="rounded border border-border px-1.5 py-0.5">CS</span>
            <span>→</span>
            <span className="rounded border border-border px-1.5 py-0.5">Eng</span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-border">
            <div className="h-full w-[68%] rounded-full bg-accent" />
          </div>
          <p className="mt-1 text-[10px] text-muted">Avg intervention SLA: 72h</p>
        </div>
      </div>
      <div className="mt-2.5 flex items-center justify-between gap-2 text-[10px] text-muted">
        <div className="hidden sm:flex items-center gap-3">
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Healthy
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-amber-500" /> At Risk
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-rose-500" /> Critical
          </span>
        </div>
        <span className="sm:hidden">Legend: risk states</span>
        <span>Snapshot: Week 27</span>
      </div>
    </div>
  );
}

function PlanningSnapshot() {
  return (
    <div className="rounded-2xl border border-accent/30 dark:border-accent/40 bg-gradient-to-br from-accent/5 dark:from-accent/10 to-background p-3 sm:p-4">
      <div className="flex items-center justify-between mb-2.5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          Sprint Planning Board
        </p>
        <p className="text-[11px] text-muted">Live capacity view</p>
      </div>
      <div className="mb-2.5 flex flex-wrap gap-1.5 text-[10px]">
        <span className="rounded border border-border bg-background/70 px-2 py-1">
          <span className="text-muted">Owner:</span>{" "}
          <span className="font-medium text-foreground">Delivery PM</span>
        </span>
        <span className="rounded border border-border bg-background/70 px-2 py-1">
          <span className="text-muted">Trigger:</span>{" "}
          <span className="font-medium text-foreground">Load &gt; 100%</span>
        </span>
        <span className="rounded border border-border bg-background/70 px-2 py-1">
          <span className="text-muted">Action:</span>{" "}
          <span className="font-medium text-foreground">Rebalance Scope</span>
        </span>
      </div>
      <div className="grid gap-3 md:grid-cols-4">
        {["Backlog", "In Progress", "Review", "Done"].map((col, idx) => (
          <div key={col} className="rounded-lg border border-border p-2.5 bg-background/80">
            <p className="text-[10px] text-muted mb-2">{col}</p>
            {Array.from({ length: idx === 3 ? 4 : 3 }).map((_, i) => (
              <div key={i} className="h-4 rounded bg-border/75 mb-1" />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg border border-border p-3 bg-background/80">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-muted">Readiness score</span>
          <span className="inline-flex items-center gap-2">
            <span className="font-semibold text-foreground">84 / 100</span>
            <span className="rounded-full border border-accent/40 bg-accent/10 px-1.5 py-0.5 text-[9px] font-semibold text-accent">
              Watch
            </span>
          </span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-border">
          <div className="h-full w-[84%] rounded-full bg-accent" />
        </div>
      </div>
      <div className="mt-2.5 flex items-center justify-between text-[10px] text-muted">
        <span className="hidden sm:inline">Legend: Blue = committed capacity, Grey = remaining</span>
        <span className="sm:hidden">Legend: capacity split</span>
        <span>Snapshot: Sprint 42</span>
      </div>
    </div>
  );
}

function AISnapshot() {
  return (
    <div className="rounded-2xl border border-accent/30 dark:border-accent/40 bg-gradient-to-br from-accent/5 dark:from-accent/10 to-background p-3 sm:p-4">
      <div className="flex items-center justify-between mb-2.5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          Semantic Search Flow
        </p>
        <p className="text-[11px] text-muted">Guardrail-first inference</p>
      </div>
      <div className="mb-2.5 flex flex-wrap gap-1.5 text-[10px]">
        <span className="rounded border border-border bg-background/70 px-2 py-1">
          <span className="text-muted">Owner:</span>{" "}
          <span className="font-medium text-foreground">PM + ML Eng</span>
        </span>
        <span className="rounded border border-border bg-background/70 px-2 py-1">
          <span className="text-muted">Trigger:</span>{" "}
          <span className="font-medium text-foreground">Query submitted</span>
        </span>
        <span className="rounded border border-border bg-background/70 px-2 py-1">
          <span className="text-muted">Action:</span>{" "}
          <span className="font-medium text-foreground">Rank + Respond</span>
        </span>
      </div>
      <div className="grid gap-2 md:grid-cols-5 text-[10px]">
        {["Query", "Embed", "Retrieve", "Guardrail", "Answer"].map((node, i) => (
          <div key={node} className="rounded border border-accent/30 bg-accent/10 px-2 py-2 text-center font-medium">
            {node}
            {i < 4 && <span className="ml-1 text-muted">→</span>}
          </div>
        ))}
      </div>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border border-border p-3 bg-background/80">
          <p className="text-[11px] text-muted mb-1">Retrieval quality</p>
          <div className="grid grid-cols-4 gap-1">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={`h-4 rounded-sm ${i % 5 === 0 ? "bg-accent/45" : "bg-border/80"}`}
              />
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-border p-3 bg-background/80">
          <p className="text-[11px] text-muted">P95 latency</p>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-lg font-bold text-foreground">&lt;500ms</p>
            <span className="rounded-full border border-accent/40 bg-accent/10 px-1.5 py-0.5 text-[9px] font-semibold text-accent">
              Stable
            </span>
          </div>
          <p className="text-[10px] text-muted mt-1">Prompt injection blocked by policy layer</p>
        </div>
      </div>
      <div className="mt-2.5 flex items-center justify-between text-[10px] text-muted">
        <span className="hidden sm:inline">Legend: Highlighted cells = high relevance matches</span>
        <span className="sm:hidden">Legend: match intensity</span>
        <span>Snapshot: Eval v1.3</span>
      </div>
    </div>
  );
}

export function CaseStudySnapshot({ variant }: { variant: SnapshotVariant }) {
  return (
    <FadeIn direction="up">
      <div>
        {variant === "analytics" && <AnalyticsSnapshot />}
        {variant === "planning" && <PlanningSnapshot />}
        {variant === "ai" && <AISnapshot />}
      </div>
    </FadeIn>
  );
}
