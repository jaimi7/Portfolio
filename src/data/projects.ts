import type { Project } from '../types';

export const projects: Project[] = [
  // Real Projects
  {
    id: 'crm-platform',
    title: 'Enterprise CRM Platform',
    category: 'real',
    problem: 'Client needed a scalable CRM system to manage 50K+ customer relationships with real-time collaboration',
    solution: 'Built a full-stack CRM with Vue.js, Node.js, and PostgreSQL featuring real-time updates, advanced analytics, and mobile-responsive design',
    techStack: ['Vue.js', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'Tailwind CSS'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'ecommerce-system',
    title: 'Multi-vendor E-commerce System',
    category: 'real',
    problem: 'Startup needed a marketplace platform supporting multiple vendors with inventory management and payment processing',
    solution: 'Developed a comprehensive e-commerce platform with vendor dashboards, inventory tracking, and integrated payment gateways',
    techStack: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Stripe API', 'AWS S3'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'hrms-dashboard',
    title: 'HRMS Analytics Dashboard',
    category: 'real',
    problem: 'HR department needed real-time analytics for employee performance, attendance, and payroll management',
    solution: 'Created an intuitive dashboard with data visualization, automated reporting, and employee self-service features',
    techStack: ['Nuxt.js', 'TypeScript', 'Express', 'MySQL', 'Chart.js', 'Docker'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'saas-admin',
    title: 'SaaS Admin Panel',
    category: 'real',
    problem: 'SaaS company needed a scalable admin panel for multi-tenant management with role-based access control',
    solution: 'Built a modular admin system with tenant isolation, user management, and comprehensive analytics',
    techStack: ['React.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'JWT'],
    demoUrl: '#',
    githubUrl: '#'
  },

  // Learning Projects (Oracle & AI Focus)
  {
    id: 'oic-integration',
    title: 'OIC Integration Demo',
    category: 'learning',
    problem: 'Learning Oracle Integration Cloud by building API-to-API integration patterns',
    solution: 'Created a demo showing REST API integration with OIC, including data transformation and error handling',
    techStack: ['Oracle Integration Cloud', 'REST APIs', 'Postman', 'JSON Transformation'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'apex-dashboard',
    title: 'APEX Analytics Dashboard',
    category: 'learning',
    problem: 'Exploring Oracle APEX capabilities by building a business intelligence dashboard',
    solution: 'Developed an interactive dashboard with charts, filters, and real-time data updates using APEX',
    techStack: ['Oracle APEX', 'PL/SQL', 'Oracle DB', 'JavaScript', 'CSS'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'ai-automation',
    title: 'AI-powered Automation Tool',
    category: 'learning',
    problem: 'Building an AI tool to automate repetitive business tasks and improve workflow efficiency',
    solution: 'Created a proof-of-concept automation system using AI APIs for document processing and data extraction',
    techStack: ['Python', 'OpenAI API', 'Node.js', 'Express', 'React', 'MongoDB'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  }
];
