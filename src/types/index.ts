export interface TechnicalSkills {
  name: string;
  level?: number;
}

export interface Tools {
  name: string;
  icon: string;
}

export type SoftSkills = string;

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  url?: string;
  description: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'real' | 'learning';
  overview: string;
  contribution: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  name?: string;
  url?: string;
  tags?: string[];
}

export interface TimelineItem extends Experience {
  type: 'experience';
}

export type ProjectFilter = 'all' | 'frontend' | 'backend' | 'fullstack' | 'real' | 'learning';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Education {
  id: string;
  institute: string;
  degree: string;
  duration: string;
  score?: {
    cpi?: string;
    cgpa?: string;
    percentage?: string;
  };
  description?: string;
  url?: string;
}