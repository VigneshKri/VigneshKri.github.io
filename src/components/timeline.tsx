"use client";

import { FadeIn } from "./fade-in";

interface TimelineItem {
  title: string;
  subtitle: string;
  description: string;
  period: string;
  current?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-accent/60 via-border to-border" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <FadeIn key={index} delay={index * 0.1} direction="up">
            <div className="relative pl-10">
              {/* Dot */}
              <div
                className={`absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 transition-all ${
                  item.current
                    ? "bg-accent border-accent shadow-[0_0_0_4px_rgba(196,93,62,0.15)]"
                    : "bg-surface border-border hover:border-accent/40"
                }`}
              />

              <div className="p-5 rounded-xl border border-border/70 bg-surface/40 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.04)] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-bold text-foreground">
                        {item.title}
                      </h3>
                      {item.current && (
                        <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-semibold uppercase tracking-wider">
                          Current
                        </span>
                      )}
                    </div>
                    {item.subtitle && (
                      <p className="text-sm text-accent font-medium mt-1">
                        {item.subtitle}
                      </p>
                    )}
                    <p className="mt-3 text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-xs text-muted whitespace-nowrap font-semibold shrink-0 mt-1 sm:mt-0 bg-surface/80 px-2.5 py-1 rounded-full border border-border/60">
                    {item.period}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
