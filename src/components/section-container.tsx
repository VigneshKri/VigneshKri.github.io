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
    <section id={id} className={`py-20 md:py-28 ${className}`}>
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
    <div className="mb-12 md:mb-16">
      {label && (
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted max-w-2xl">{description}</p>
      )}
    </div>
  );
}
