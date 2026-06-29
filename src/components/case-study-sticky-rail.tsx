"use client";

interface RailMetric {
  value: string;
  label: string;
}

interface RailCheckpoint {
  label: string;
  href?: string;
}

export function CaseStudyStickyRail({
  title,
  metrics,
  checkpoints,
}: Readonly<{
  title: string;
  metrics: RailMetric[];
  checkpoints: RailCheckpoint[];
}>) {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-24 rounded-2xl border border-border bg-surface/80 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
          Quick Scan
        </p>
        <h3 className="mt-2 text-sm font-semibold text-foreground">{title}</h3>

        <div className="mt-3 space-y-2.5">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg border border-border bg-background/85 p-2.5"
            >
              <p className="text-sm font-semibold text-foreground">{metric.value}</p>
              <p className="text-[11px] text-muted">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg border border-border bg-background/80 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted mb-2">
            Sections
          </p>
          <div className="space-y-1.5">
            {checkpoints.map((checkpoint) =>
              checkpoint.href ? (
                <a
                  key={checkpoint.label}
                  href={checkpoint.href}
                  className="block text-[12px] text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                >
                  • {checkpoint.label}
                </a>
              ) : (
                <p key={checkpoint.label} className="text-[12px] text-muted">
                  • {checkpoint.label}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
