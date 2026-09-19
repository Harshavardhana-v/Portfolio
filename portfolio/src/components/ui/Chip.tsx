interface ChipProps {
  label: string;
}

export function Chip({ label }: ChipProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-canvas px-3 py-1 text-xs font-medium text-ink dark:border-line-dark dark:bg-canvas-dark dark:text-ink-dark">
      {label}
    </span>
  );
}
