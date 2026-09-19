export type SectionId =
  | 'home'
  | 'about'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'research'
  | 'achievements'
  | 'contact';

export type SocialIcon = 'github' | 'linkedin' | 'email' | 'leetcode';

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface NavItem {
  id: SectionId;
  label: string;
  href: `#${SectionId}`;
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  roleTagline: string;
  valueProposition: string;
  bio: string;
  email: string;
  resumePath: string;
  location: string;
  education: string;
  currentFocus: string;
  quickFacts: QuickFact[];
  socials: SocialLink[];
  navItems: NavItem[];
}

export interface SkillGroup {
  id: string;
  category: string;
  skills: string[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  highlights: string[];
  techStack: string[];
}

export interface ProjectLink {
  label: 'GitHub' | 'Live Demo';
  href: string;
}

export interface Project {
  id: string;
  title: string;
  oneLiner: string;
  bullets: string[];
  techStack: string[];
  links: ProjectLink[];
}

export interface ResearchPaper {
  id: string;
  title: string;
  venue: string;
  year: string;
  location: string;
  summary: string;
  href?: string;
  badge: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
}
