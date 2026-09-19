import { useEffect, useState } from 'react';
import type { SectionId } from '../types';

export function useActiveSection(sectionIds: SectionId[], offset = 120) {
  const [activeId, setActiveId] = useState<SectionId>(sectionIds[0] ?? 'home');

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const nextId = visible[0]?.target.id as SectionId | undefined;
        if (nextId) {
          setActiveId(nextId);
        }
      },
      {
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: [0.15, 0.3, 0.6],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [offset, sectionIds]);

  return activeId;
}
