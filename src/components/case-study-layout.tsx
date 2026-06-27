"use client";

import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

interface CaseStudySectionProps {
  title: string;
  children: React.ReactNode;
}

export function CaseStudySection({ title, children }: CaseStudySectionProps) {
  return (
    <FadeIn direction="up">
      <div className="py-10 border-t border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">{title}</h2>
        <div className="text-sm text-muted leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </FadeIn>
  );
}

interface CaseStudyHeaderProps {
  title: string;
  description: string;
  tags: string[];
  metrics: { value: string; label: string }[];
}

export function CaseStudyHeader({
  title,
  description,
  tags,
  metrics,
}: CaseStudyHeaderProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeIn direction="up">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-sm text-muted hover:text-foreground transition-colors mb-8"
          >
            <svg
              className="mr-1 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            All case studies
          </Link>
        </FadeIn>
        <FadeIn delay={0.1} direction="up">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Case Study
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl max-w-3xl">
            {title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} direction="up">
          <p className="mt-4 text-lg text-muted max-w-2xl leading-relaxed">
            {description}
          </p>
        </FadeIn>
        <FadeIn delay={0.3} direction="up">
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
        {metrics.length > 0 && (
          <FadeIn delay={0.4} direction="up">
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="text-center p-4 rounded-lg border border-border"
                >
                  <p className="text-2xl font-bold text-accent">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs text-muted">{metric.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

interface RelatedStudy {
  title: string;
  href: string;
}

export function RelatedCaseStudies({ studies }: { studies: RelatedStudy[] }) {
  return (
    <FadeIn direction="up">
      <div className="py-10 border-t border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Related Case Studies
        </h2>
        <div className="space-y-3">
          {studies.map((study) => (
            <Link
              key={study.href}
              href={study.href}
              className="group flex items-center justify-between py-3 border-b border-border last:border-0"
            >
              <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                {study.title}
              </span>
              <svg
                className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
