"use client";

import Link from "next/link";
import { FadeIn } from "./fade-in";

interface WritingCardProps {
  title: string;
  description: string;
  href: string;
  category: string;
  delay?: number;
}

export function WritingCard({
  title,
  description,
  href,
  category,
  delay = 0,
}: WritingCardProps) {
  return (
    <FadeIn delay={delay} direction="up">
      <Link href={href} className="group block">
        <article className="py-6 border-b border-border group-last:border-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                {category}
              </p>
              <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                {title}
              </h3>
              <p className="mt-1.5 text-sm text-muted leading-relaxed line-clamp-2">
                {description}
              </p>
            </div>
            <svg
              className="shrink-0 w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all mt-1"
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
          </div>
        </article>
      </Link>
    </FadeIn>
  );
}
