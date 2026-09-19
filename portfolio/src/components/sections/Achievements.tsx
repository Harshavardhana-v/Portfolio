import { Trophy } from 'lucide-react';
import { achievements } from '../../data/achievements';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24 px-5 py-20">
      <div className="mx-auto max-w-content">
        <SectionHeading eyebrow="Achievements" title="Beyond coursework" />
        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((item) => (
            <Card key={item.id}>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent dark:bg-accent-dark/10 dark:text-accent-dark">
                <Trophy size={18} aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-semibold text-ink dark:text-ink-dark">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-muted dark:text-ink-muted-dark">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
