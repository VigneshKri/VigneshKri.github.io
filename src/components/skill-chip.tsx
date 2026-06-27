interface SkillChipProps {
  label: string;
}

export function SkillChip({ label }: SkillChipProps) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent">
      {label}
    </span>
  );
}
