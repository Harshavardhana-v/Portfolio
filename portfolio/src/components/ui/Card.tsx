import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-line bg-surface p-6 shadow-lift transition duration-300 hover:-translate-y-1 dark:border-line-dark dark:bg-surface-dark ${className}`}
    >
      {children}
    </div>
  );
}
