import { Code2 } from 'lucide-react';
import { skillGroups } from '../../data/skills';
import { SectionHeading } from '../ui/SectionHeading';
import { Chip } from '../ui/Chip';

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-5 py-20">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Skills"
          title="Grouped by how I actually work"
          description="No percentage bars — just the tools used in internships, projects, and research."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.id}
              className="rounded-2xl border border-line bg-surface p-6 dark:border-line-dark dark:bg-surface-dark"
            >
              <div className="mb-4 flex items-center gap-2">
                <Code2 size={16} className="text-accent dark:text-accent-dark" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold text-ink dark:text-ink-dark">
                  {group.category}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Chip label={skill} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
