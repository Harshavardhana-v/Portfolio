import type { Profile } from '../types';

export const profile: Profile = {
  name: 'Harshavardhana V',
  roleTagline: 'CSE Student · Full-Stack Developer · SDET · Applied ML Researcher',
  valueProposition:
    'Hire-ready engineer who ships full-stack products, automated tests, and applied ML — with published IEEE research in healthcare.',
  bio: 'Computer Science Engineering student at Dayananda Sagar College of Engineering (CGPA 8.86). I work across full-stack development, test automation, and DevOps, and I apply machine learning to healthcare problems. I care about verifiable work: internships, shipped projects, and peer-reviewed research rather than buzzwords.',
  email: 'harshavardhana@example.com',
  resumePath: '/resume.pdf',
  location: 'Bengaluru',
  education: 'B.E. CSE, Dayananda Sagar College of Engineering',
  currentFocus: 'Full-stack, SDET, and applied ML',
  quickFacts: [
    { label: 'Location', value: 'Bengaluru' },
    { label: 'Education', value: 'CSE @ DSCE · CGPA 8.86' },
    { label: 'Current focus', value: 'Full-stack · SDET · Applied ML' },
  ],
  socials: [
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/',
      icon: 'github',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      icon: 'linkedin',
    },
    {
      id: 'email',
      label: 'Email',
      href: 'mailto:harshavardhana@example.com',
      icon: 'email',
    },
    {
      id: 'leetcode',
      label: 'LeetCode',
      href: 'https://leetcode.com/',
      icon: 'leetcode',
    },
  ],
  navItems: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'research', label: 'Research', href: '#research' },
    { id: 'achievements', label: 'Achievements', href: '#achievements' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],
};

export const sectionIds = profile.navItems.map((item) => item.id);
