import { experience } from '../../data/experience';
import { SectionHeading } from '../ui/SectionHeading';
import { Chip } from '../ui/Chip';

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-5 py-20">
      <div className="mx-auto max-w-content">
        <SectionHeading eyebrow="Experience" title="Internships, reverse chronological" />
        <ol className="relative space-y-8 border-l border-line pl-6 dark:border-line-dark">
          {experience.map((entry) => (
            <li key={entry.id} className="relative">
              <span
                className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent dark:bg-accent-dark"
                aria-hidden="true"
              />
              <article className="rounded-2xl border border-line bg-surface p-6 dark:border-line-dark dark:bg-surface-dark">
                <p className="text-sm text-ink-muted dark:text-ink-muted-dark">
                  {entry.startDate} – {entry.endDate} · {entry.location}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-ink dark:text-ink-dark">
                  {entry.role}
                </h3>
                <p className="text-sm font-medium text-accent dark:text-accent-dark">{entry.company}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-muted dark:text-ink-muted-dark">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {entry.techStack.map((tech) => (
                    <li key={tech}>
                      <Chip label={tech} />
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
