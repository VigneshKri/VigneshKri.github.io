interface SignatureMotifProps {
  className?: string;
  compact?: boolean;
}

export function SignatureMotif({
  className = "",
  compact = false,
}: SignatureMotifProps) {
  const size = compact
    ? "w-24 h-24 sm:w-32 sm:h-32"
    : "w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative ${size} ${className}`}
    >
      <div className="absolute inset-0 rounded-full border border-accent/22" />
      <div className="absolute inset-[14%] rounded-full border border-accent/16" />
      <div className="absolute inset-[28%] rounded-full border border-accent/12" />
      <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/70" />
      <div className="absolute top-[21%] left-[72%] w-1.5 h-1.5 rounded-full bg-accent/52" />
      <div className="absolute top-[70%] left-[19%] w-1.5 h-1.5 rounded-full bg-accent/44" />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_transparent_45%,_var(--color-background)_88%)]" />
    </div>
  );
}
