import type { Skill } from '../types';

export const skills: Skill[] = [
  // Engineering Skills
  { name: 'Vue.js', category: 'engineering', level: 90 },
  { name: 'Nuxt.js', category: 'engineering', level: 85 },
  { name: 'React.js', category: 'engineering', level: 88 },
  { name: 'Next.js', category: 'engineering', level: 82 },
  { name: 'Node.js', category: 'engineering', level: 85 },
  { name: 'Express.js', category: 'engineering', level: 80 },
  { name: 'NestJS', category: 'engineering', level: 75 },
  { name: 'TypeScript', category: 'engineering', level: 88 },
  { name: 'Tailwind CSS', category: 'engineering', level: 92 },
  { name: 'Bootstrap', category: 'engineering', level: 85 },

  // Cloud & DevOps
  { name: 'Docker', category: 'cloud', level: 80 },
  { name: 'AWS', category: 'cloud', level: 75 },
  { name: 'AWS S3', category: 'cloud', level: 85 },
  { name: 'AWS SQS', category: 'cloud', level: 78 },
  { name: 'Jenkins', category: 'cloud', level: 72 },
  { name: 'CI/CD Pipelines', category: 'cloud', level: 80 },
  { name: 'Netlify', category: 'cloud', level: 88 },
  { name: 'Azure', category: 'cloud', level: 70 },

  // Oracle Ecosystem (Learning)
  { name: 'Oracle Integration Cloud (OIC)', category: 'oracle', level: 65, isLearning: true },
  { name: 'Oracle APEX', category: 'oracle', level: 60, isLearning: true },
  { name: 'PL/SQL', category: 'oracle', level: 55, isLearning: true },
  { name: 'SQL', category: 'oracle', level: 75, isLearning: true },
  { name: 'BIP Reports', category: 'oracle', level: 50, isLearning: true },
  { name: 'Oracle SaaS (P2P)', category: 'oracle', level: 45, isLearning: true },
  { name: 'Oracle SaaS (O2C)', category: 'oracle', level: 45, isLearning: true },

  // Future Tech
  { name: 'AI Integrations', category: 'future', level: 70 },
  { name: 'REST APIs', category: 'future', level: 90 },
  { name: 'GraphQL', category: 'future', level: 75 },
  { name: 'WebSockets', category: 'future', level: 78 },
  { name: 'API Design', category: 'future', level: 85 },
  { name: 'System Integration', category: 'future', level: 80 },
];
