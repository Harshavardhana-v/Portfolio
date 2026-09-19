import { FormEvent, useState } from 'react';
import { Github, Linkedin, Mail, SquareCode } from 'lucide-react';
import type { SocialIcon } from '../../types';
import { profile } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

const iconMap: Record<SocialIcon, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  leetcode: SquareCode,
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setError('Please fill in name, email, and message.');
      return;
    }

    if (!emailPattern.test(email)) {
      setStatus('error');
      setError('Please enter a valid email address.');
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus('error');
      setError('Add VITE_WEB3FORMS_ACCESS_KEY to enable form delivery.');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
          subject: `Portfolio message from ${name}`,
        }),
      });

      const result: { success?: boolean } = await response.json();
      if (!response.ok || !result.success) {
        throw new Error('Submit failed');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
      setError('Something went wrong. Email me directly instead.');
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-20">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk"
          description="Use the form or email me directly."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-line bg-surface p-6 dark:border-line-dark dark:bg-surface-dark"
            noValidate
          >
            <label className="block text-sm font-medium text-ink dark:text-ink-dark" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-2 w-full rounded-xl border border-line bg-canvas px-3 py-2 text-sm text-ink dark:border-line-dark dark:bg-canvas-dark dark:text-ink-dark"
              required
            />

            <label
              className="mt-4 block text-sm font-medium text-ink dark:text-ink-dark"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-xl border border-line bg-canvas px-3 py-2 text-sm text-ink dark:border-line-dark dark:bg-canvas-dark dark:text-ink-dark"
              required
            />

            <label
              className="mt-4 block text-sm font-medium text-ink dark:text-ink-dark"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="mt-2 w-full rounded-xl border border-line bg-canvas px-3 py-2 text-sm text-ink dark:border-line-dark dark:bg-canvas-dark dark:text-ink-dark"
              required
            />

            <div className="mt-6">
              <Button type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Send message'}
              </Button>
            </div>

            {status === 'success' ? (
              <p className="mt-4 text-sm text-accent dark:text-accent-dark" role="status">
                Message sent. I’ll get back to you soon.
              </p>
            ) : null}
            {status === 'error' ? (
              <p className="mt-4 text-sm text-red-600 dark:text-red-400" role="alert">
                {error}
              </p>
            ) : null}
          </form>

          <div>
            <p className="text-sm text-ink-muted dark:text-ink-muted-dark">Direct email</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-1 inline-flex text-lg font-medium text-ink dark:text-ink-dark"
            >
              {profile.email}
            </a>
            <ul className="mt-8 flex flex-wrap gap-3" aria-label="Social links">
              {profile.socials.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target={social.icon === 'email' ? undefined : '_blank'}
                      rel={social.icon === 'email' ? undefined : 'noreferrer'}
                      className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-2 text-sm text-ink-muted transition hover:border-accent dark:border-line-dark dark:text-ink-muted-dark dark:hover:border-accent-dark"
                      aria-label={social.label}
                    >
                      <Icon size={16} aria-hidden="true" />
                      {social.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
