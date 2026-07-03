interface TagProps {
  label: string;
  accent?: boolean;
}

export function Tag({ label, accent }: TagProps) {
  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-lg text-2xs font-mono font-medium border transition-all duration-200 ${
        accent
          ? 'bg-accent/10 text-accent border-accent/20 hover:bg-accent/15'
          : 'bg-surface-2 text-subtle border-dim hover:border-soft hover:text-secondary'
      }`}
    >
      {label}
    </span>
  );
}
