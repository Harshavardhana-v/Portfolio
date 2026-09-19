import { FileBadge } from 'lucide-react';
import { researchPapers } from '../../data/research';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

export function Research() {
  return (
    <section id="research" className="scroll-mt-24 px-5 py-20">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Research"
          title="Published work"
          description="Peer-reviewed research is part of the engineering story, not a side note."
        />
        <div className="mx-auto grid max-w-3xl gap-6">
          {researchPapers.map((paper) => (
            <Card key={paper.id}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-ink-muted dark:text-ink-muted-dark">
                    {paper.venue} · {paper.location} · {paper.year}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink dark:text-ink-dark">
                    {paper.title}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent dark:bg-accent-dark/10 dark:text-accent-dark">
                  <FileBadge size={14} aria-hidden="true" />
                  {paper.badge}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-ink-muted dark:text-ink-muted-dark">
                {paper.summary}
              </p>
              {paper.href ? (
                <a
                  href={paper.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-medium text-accent dark:text-accent-dark"
                >
                  Read paper
                </a>
              ) : null}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
