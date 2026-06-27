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
      <div className="absolute left-[7px] top-3 bottom-3 w-px bg-border" />

      <div className="space-y-10">
        {items.map((item, index) => (
          <FadeIn key={index} delay={index * 0.1} direction="up">
            <div className="relative pl-8">
              {/* Dot */}
              <div
                className={`absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 ${
                  item.current
                    ? "bg-accent border-accent shadow-sm shadow-accent/30"
                    : "bg-background border-muted/40"
                }`}
              />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-sm text-accent font-medium mt-0.5">
                      {item.subtitle}
                    </p>
                  )}
                  <p className="mt-2 text-sm text-muted leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
                <span className="text-xs text-muted whitespace-nowrap font-medium shrink-0 mt-1 sm:mt-0">
                  {item.period}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
