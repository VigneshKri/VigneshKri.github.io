"use client";

import Link from "next/link";
import { FadeIn } from "./fade-in";

interface CaseStudyCardProps {
  title: string;
  description: string;
  href: string;
  tags: string[];
  metric?: { value: string; label: string };
  delay?: number;
}

export function CaseStudyCard({
  title,
  description,
  href,
  tags,
  metric,
  delay = 0,
}: CaseStudyCardProps) {
  return (
    <FadeIn delay={delay} direction="up">
      <Link href={href} className="group block">
        <article className="p-6 rounded-xl border border-border bg-surface/50 hover:border-accent/40 hover:bg-surface transition-all duration-200">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
                {description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {metric && (
              <div className="shrink-0 text-right sm:pl-6">
                <p className="text-2xl font-bold text-accent">{metric.value}</p>
                <p className="text-xs text-muted mt-1">{metric.label}</p>
              </div>
            )}
          </div>
          <div className="mt-4 flex items-center text-sm text-accent font-medium">
            Read case study
            <svg
              className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </article>
      </Link>
    </FadeIn>
  );
}
