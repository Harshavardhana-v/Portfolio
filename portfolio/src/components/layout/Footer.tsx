import { profile } from '../../data/profile';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface dark:border-line-dark dark:bg-surface-dark">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-ink-muted dark:text-ink-muted-dark">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-ink-muted dark:text-ink-muted-dark">
            Built with React + TypeScript
          </p>
        </div>
        <ul className="flex flex-wrap gap-4">
          {profile.navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="text-sm text-ink-muted transition hover:text-accent dark:text-ink-muted-dark dark:hover:text-accent-dark"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
