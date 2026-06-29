"use client";

import { FadeIn } from "@/components/fade-in";

type ArtifactVisualVariant =
  | "dashboard"
  | "workflow"
  | "scorecard"
  | "rulebook"
  | "grid"
  | "kanban";

interface ArtifactPreviewItem {
  title: string;
  detail: string;
  snippet: string;
  visual?: ArtifactVisualVariant;
}

interface ArtifactPreviewProps {
  heading?: string;
  artifacts: ArtifactPreviewItem[];
}

const visualLabel: Record<ArtifactVisualVariant, string> = {
  dashboard: "Dashboard",
  workflow: "Workflow",
  scorecard: "Scorecard",
  rulebook: "Rulebook",
  grid: "Eval Grid",
  kanban: "Planning Board",
};

function ArtifactVisual({
  variant = "dashboard",
}: {
  variant?: ArtifactVisualVariant;
}) {
  const base =
    "relative overflow-hidden rounded-lg border border-accent/25 bg-gradient-to-br from-surface to-background p-3";

  if (variant === "workflow") {
    return (
      <div className={`${base} h-36`} aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(35,131,226,0.15),transparent_55%)]" />
        <div className="relative h-full">
          <div className="grid grid-cols-3 gap-2 mt-4">
            {[
              { name: "Ingest", style: "bg-accent/15 border-accent/35" },
              { name: "Guardrail", style: "bg-accent/12 border-accent/30" },
              { name: "Route", style: "bg-accent/10 border-accent/25" },
            ].map((node) => (
              <div
                key={node.name}
                className={`rounded-md border p-2 text-center ${node.style}`}
              >
                <p className="text-[10px] font-semibold text-foreground">{node.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-3 gap-2">
            <div className="h-px bg-accent/40" />
            <div className="h-px bg-accent/35" />
            <div className="h-px bg-accent/30" />
          </div>
          <p className="absolute bottom-2 right-2 text-[10px] text-muted uppercase tracking-[0.08em]">
            Flow Confidence 91%
          </p>
        </div>
      </div>
    );
  }

  if (variant === "scorecard") {
    return (
      <div className={`${base} h-36`} aria-hidden="true">
        <div className="grid grid-cols-3 gap-2 h-full">
          {[
            { k: "Capacity", v: "84" },
            { k: "Carryover", v: "12" },
            { k: "Risk", v: "Amber" },
          ].map((item) => (
            <div key={item.k} className="rounded-md border border-accent/25 p-2">
              <p className="text-[10px] text-muted">{item.k}</p>
              <p className="text-xs font-semibold text-foreground mt-0.5">{item.v}</p>
            </div>
          ))}
          <div className="col-span-3 rounded-md border border-accent/20 p-2">
            <p className="text-[10px] text-muted mb-1">Readiness Trend</p>
            <div className="grid grid-cols-8 gap-1">
              {[40, 44, 52, 57, 61, 69, 78, 84].map((n, i) => (
                <div key={i} className="h-7 rounded-sm bg-border/75 relative overflow-hidden">
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-accent/45"
                    style={{ height: `${Math.max(18, Math.min(100, n))}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "rulebook") {
    return (
      <div className={`${base} h-36`} aria-hidden="true">
        <div className="grid grid-cols-2 gap-2 h-full">
          <div className="rounded-md border border-accent/25 p-2.5">
            <p className="text-[10px] font-semibold text-accent uppercase tracking-[0.08em]">
              Rule Trigger
            </p>
            <p className="text-[10px] text-muted mt-1">Funnel drop &gt; 12% WoW</p>
            <div className="mt-2 h-1.5 w-full rounded bg-border" />
            <div className="mt-1.5 h-1.5 w-4/5 rounded bg-border" />
          </div>
          <div className="rounded-md border border-accent/25 p-2.5">
            <p className="text-[10px] font-semibold text-accent uppercase tracking-[0.08em]">
              Action Route
            </p>
            <p className="text-[10px] text-muted mt-1">Product + CS intervention</p>
            <div className="mt-2 h-1.5 w-full rounded bg-border" />
            <div className="mt-1.5 h-1.5 w-2/3 rounded bg-border" />
          </div>
          <div className="col-span-2 rounded-md border border-accent/20 bg-accent/6 px-2.5 py-2">
            <p className="text-[10px] text-muted">
              SLA: owner assigned within 24h, mitigation plan within 72h
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className={`${base} h-36`} aria-hidden="true">
        <p className="text-[10px] text-muted mb-2 uppercase tracking-[0.1em]">
          Retrieval Quality Matrix
        </p>
        <div className="grid grid-cols-4 grid-rows-3 gap-1 h-[86px]">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`rounded-sm border ${
                i % 5 === 0
                  ? "border-accent/40 bg-accent/20"
                  : "border-border bg-background/60"
              }`}
            />
          ))}
        </div>
        <div className="mt-1.5 flex items-center justify-between text-[10px] text-muted">
          <span>Precision@5</span>
          <span>Recall@10</span>
        </div>
      </div>
    );
  }

  if (variant === "kanban") {
    return (
      <div className={`${base} h-36`} aria-hidden="true">
        <div className="grid grid-cols-3 gap-2 h-full">
          {[
            { name: "Backlog", cards: 3 },
            { name: "In Progress", cards: 2 },
            { name: "Done", cards: 4 },
          ].map((col) => (
            <div key={col.name} className="rounded-md border border-accent/20 p-1.5">
              <p className="text-[10px] text-muted mb-1">{col.name}</p>
              {Array.from({ length: col.cards }).map((_, i) => (
                <div key={i} className="h-3.5 rounded bg-border/70 mb-1" />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`${base} h-36`} aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(35,131,226,0.2),transparent_45%)]" />
      <div className="relative h-full rounded-md border border-accent/25 p-2">
        <p className="text-[10px] text-muted mb-1">Account Risk Dashboard</p>
        <div className="grid grid-cols-6 gap-1 h-full">
          <div className="col-span-4 rounded bg-border/80" />
          <div className="col-span-2 rounded bg-accent/20" />
          <div className="col-span-3 rounded bg-accent/16" />
          <div className="col-span-3 rounded bg-border/80" />
          <div className="col-span-2 rounded bg-border/75" />
          <div className="col-span-2 rounded bg-accent/18" />
          <div className="col-span-2 rounded bg-border/70" />
        </div>
      </div>
    </div>
  );
}

export function ArtifactPreview({
  heading = "Artifact Preview",
  artifacts,
}: ArtifactPreviewProps) {
  return (
    <FadeIn direction="up">
      <div className="py-10 border-t border-border">
        <h2 className="text-lg font-semibold text-foreground mb-2">{heading}</h2>
        <p className="text-sm text-muted mb-5">
          A quick look at the product artifacts used to drive alignment and execution.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {artifacts.map((artifact, index) => (
            <div
              key={artifact.title}
              className="rounded-xl border border-border bg-surface/70 p-4 shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                  {visualLabel[artifact.visual ?? "dashboard"]}
                </p>
                <p className="text-[10px] uppercase tracking-[0.1em] text-muted">
                  Updated {index === 0 ? "This Sprint" : "Last Sprint"}
                </p>
              </div>
              <ArtifactVisual variant={artifact.visual} />
              <p className="mt-3 text-sm font-semibold text-foreground">{artifact.title}</p>
              <p className="mt-1 text-xs text-muted">{artifact.detail}</p>
              <div className="mt-3 rounded-lg border border-accent/25 bg-background p-3">
                <p className="text-xs text-muted leading-relaxed">{artifact.snippet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
