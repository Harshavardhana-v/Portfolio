import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'codesage',
    title: 'CodeSage',
    oneLiner: 'VS Code-style collaborative code review platform.',
    bullets: [
      'Editor-first review experience modeled after VS Code, built for structured feedback on real code.',
      'Realtime collaboration for comments and review state across sessions.',
      'Graph visualizations for review flow and code relationships.',
    ],
    techStack: [
      'Next.js',
      'React',
      'Node.js',
      'Monaco Editor',
      'Socket.IO',
      'D3.js / React Flow',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/' }],
  },
  {
    id: 'amr-prediction',
    title: 'AMR-Prediction',
    oneLiner:
      'Clinical decision support system for antimicrobial resistance prediction.',
    bullets: [
      'Predicts antimicrobial resistance to support clinical decision-making.',
      'Uses XGBoost with SHAP explanations so predictions are inspectable, not black-box.',
      'GPT-3.5 Turbo integration to help clinicians interpret model output in plain language.',
    ],
    techStack: ['React', 'Flask', 'XGBoost', 'SHAP', 'GPT-3.5 Turbo'],
    links: [
      { label: 'GitHub', href: 'https://github.com/' },
      { label: 'Live Demo', href: 'https://example.com' },
    ],
  },
];
