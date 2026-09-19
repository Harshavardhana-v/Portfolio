import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/projects';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Chip } from '../ui/Chip';

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-20">
      <div className="mx-auto max-w-content">
        <SectionHeading eyebrow="Projects" title="Work you can inspect" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="group flex flex-col">
              <h3 className="font-display text-2xl font-semibold text-ink dark:text-ink-dark">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-ink-muted dark:text-ink-muted-dark">
                {project.oneLiner}
              </p>
              <ul className="mt-4 hidden list-disc space-y-2 pl-5 text-sm text-ink-muted group-hover:block group-focus-within:block dark:text-ink-muted-dark md:block">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li key={tech}>
                    <Chip label={tech} />
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={`${project.id}-${link.label}`}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent dark:text-accent-dark"
                  >
                    {link.label === 'GitHub' ? (
                      <Github size={15} aria-hidden="true" />
                    ) : (
                      <ExternalLink size={15} aria-hidden="true" />
                    )}
                    {link.label}
                  </a>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
