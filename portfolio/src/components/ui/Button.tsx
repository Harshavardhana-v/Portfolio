import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent/90 dark:bg-accent-dark dark:text-canvas-dark dark:hover:bg-accent-dark/90',
  secondary:
    'border border-line bg-surface text-ink hover:border-accent dark:border-line-dark dark:bg-surface-dark dark:text-ink-dark dark:hover:border-accent-dark',
  ghost:
    'text-ink-muted hover:text-ink dark:text-ink-muted-dark dark:hover:text-ink-dark',
};

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
