import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({
  children,
  className = "",
  id,
}: SectionContainerProps) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  label,
  title,
  description,
}: {
  label?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-14 md:mb-20">
      {label && (
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-extrabold tracking-[-0.03em] leading-[1.08] text-foreground sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg text-muted max-w-2xl leading-[1.55] font-medium">
          {description}
        </p>
      )}
    </div>
  );
}
