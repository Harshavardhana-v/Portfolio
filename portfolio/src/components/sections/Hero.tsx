import { ArrowDownRight, FileDown, Github, Linkedin, Mail, SquareCode } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import type { SocialIcon } from '../../types';
import { profile } from '../../data/profile';

const iconMap: Record<SocialIcon, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  leetcode: SquareCode,
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="scroll-mt-24">
      <div className="mx-auto flex min-h-[80vh] max-w-content flex-col justify-center px-5 py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent dark:text-accent-dark">
            {profile.roleTagline}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight text-ink dark:text-ink-dark sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted dark:text-ink-muted-dark">
            {profile.valueProposition}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent/90 dark:bg-accent-dark dark:text-canvas-dark dark:hover:bg-accent-dark/90"
            >
              View Projects
              <ArrowDownRight size={16} aria-hidden="true" />
            </a>
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent dark:border-line-dark dark:bg-surface-dark dark:text-ink-dark dark:hover:border-accent-dark"
            >
              Download Resume
              <FileDown size={16} aria-hidden="true" />
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-3" aria-label="Social links">
            {profile.socials.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target={social.icon === 'email' ? undefined : '_blank'}
                    rel={social.icon === 'email' ? undefined : 'noreferrer'}
                    className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-2 text-sm text-ink-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-ink dark:border-line-dark dark:text-ink-muted-dark dark:hover:border-accent-dark dark:hover:text-ink-dark"
                    aria-label={social.label}
                  >
                    <Icon size={16} aria-hidden="true" />
                    {social.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
