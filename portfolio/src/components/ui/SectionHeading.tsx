import { motion, useReducedMotion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="mx-auto mb-12 max-w-2xl text-center"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45 }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent dark:text-accent-dark">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink dark:text-ink-dark sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-ink-muted dark:text-ink-muted-dark">{description}</p>
      ) : null}
    </motion.div>
  );
}
