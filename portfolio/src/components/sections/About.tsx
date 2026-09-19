import { profile } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-20">
      <div className="mx-auto max-w-content">
        <SectionHeading eyebrow="About" title="A serious, hire-ready engineer" />
        <p className="mx-auto max-w-3xl text-center text-base leading-7 text-ink-muted dark:text-ink-muted-dark">
          {profile.bio}
        </p>
        <dl className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          {profile.quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-line bg-surface p-5 text-center dark:border-line-dark dark:bg-surface-dark"
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-accent dark:text-accent-dark">
                {fact.label}
              </dt>
              <dd className="mt-2 text-sm font-medium text-ink dark:text-ink-dark">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
