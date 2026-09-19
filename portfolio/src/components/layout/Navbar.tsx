import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile, sectionIds } from '../../data/profile';
import { useActiveSection } from '../../hooks/useActiveSection';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-canvas/85 backdrop-blur-md dark:border-line-dark/70 dark:bg-canvas-dark/85">
      <nav
        className="mx-auto flex max-w-content items-center justify-between px-5 py-3"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="font-display text-sm font-semibold tracking-tight text-ink dark:text-ink-dark"
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {profile.navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`rounded-full px-3 py-1.5 text-sm transition ${
                    isActive
                      ? 'bg-accent/10 text-accent dark:bg-accent-dark/10 dark:text-accent-dark'
                      : 'text-ink-muted hover:text-ink dark:text-ink-muted-dark dark:hover:text-ink-dark'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden dark:border-line-dark"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-nav" className="border-t border-line px-5 py-4 lg:hidden dark:border-line-dark">
          <ul className="flex flex-col gap-2">
            {profile.navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="block rounded-lg px-2 py-2 text-sm text-ink dark:text-ink-dark"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
