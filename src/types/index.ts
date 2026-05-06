export interface Skill {
  name: string;
  category: 'engineering' | 'cloud' | 'oracle' | 'future';
  level?: number;
  isLearning?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'real' | 'learning';
  problem: string;
  solution: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface TimelineItem extends Experience {
  type: 'experience';
}

export type ProjectFilter = 'all' | 'frontend' | 'oracle' | 'ai';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
