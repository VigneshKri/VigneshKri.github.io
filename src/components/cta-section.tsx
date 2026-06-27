"use client";

import Link from "next/link";
import { FadeIn } from "./fade-in";

export function CTASection() {
  return (
    <FadeIn direction="up">
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-xl border border-border bg-surface p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Let&apos;s build products together
            </h2>
            <p className="mt-4 text-muted max-w-xl mx-auto">
              I&apos;m exploring Technical Product Manager roles at companies
              building enterprise-grade software, AI products, or developer
              platforms.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-accent rounded-lg hover:bg-accent/90 transition-colors shadow-sm"
              >
                Get in touch
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-foreground bg-transparent border border-border rounded-lg hover:bg-surface hover:border-accent/40 transition-colors"
              >
                View case studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
