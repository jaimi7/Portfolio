import type { Project } from '@/types';

// Static image imports from assets/project
import athleads from '@/assets/project/athleads.png';
import blockchain from '@/assets/project/blockchain.png';
import crm_platform from '@/assets/project/crm_platform.png';
import hrms from '@/assets/project/hrms.png';
import lead_generation from '@/assets/project/lead_generation.png';
import legal_tech_platform from '@/assets/project/legal_tech_platform.png';
import microservice from '@/assets/project/microservice.png';
import qiigo from '@/assets/project/qiigo.png';
import quotation_creation from '@/assets/project/quotation_creation.png';
import sales_ai from '@/assets/project/sales_ai.png';
import iq_crm from '@/assets/project/iq-crm.png';
import medical_platform from '@/assets/project/medical_platform.png';
import soc_monitoring from '@/assets/project/soc_monitoring.png';
import no_img from '@/assets/project/no_img.png';
import gym from '@/assets/project/gym.png';
import netflix from '@/assets/project/netflix.png';
import restaurant from '@/assets/project/restaurant.png';


export const projects: Project[] = [
  // Real Projects
  {
    id: 'CRM Platform',
    name: 'Planfred',
    url: 'https://www.planfred.com/en/',
    title: 'Enterprise SaaS Construction Management Platform',
    category: 'real',
    overview: 'Enterprise-level construction project management platform designed to streamline communication, document control, task tracking, and collaboration across large-scale projects.',
    contribution: 'Worked as a Full Stack Developer in a collaborative development team, developing frontend features, integrating APIs for web and Ionic applications, contributing to backend services, and writing automated test cases to ensure application quality and reliability.',
    techStack: [
      'Vue.js',
      'Ionic',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.io',
      'Redis',
      'Stripe',
      'MinIO',
      'Cypress',
      'Tailwind CSS'
    ],
    tags: ['frontend', 'backend', 'fullstack', 'real'],
    img: crm_platform
  },

  {
    id: 'Legal Tech Platform',
    name: 'Lexpipe',
    url: 'https://lexpipe.com/',
    title: 'LegalTech & Litigation Analytics Platform',
    category: 'real',
    overview: 'Enterprise-level LegalTech platform designed to help law firms streamline litigation pricing, manage Alternative Fee Arrangements (AFA), and analyze legal data through interactive dashboards and advanced reporting systems.',
    contribution: 'Worked as a Full Stack Developer in a collaborative team, developing frontend modules, integrating APIs, contributing to CI/CD workflows, and optimizing backend performance using Python FastAPI and Redis. Also focused on testing and application quality using modern development practices.',
    techStack: [
      'Nuxt.js',
      'TypeScript',
      'PrimeVue',
      'Syncfusion',
      'Python',
      'FastAPI',
      'MongoDB',
      'AWS',
      'Azure',
      'Docker',
      'Storybook',
      'Vitest'
    ],
    tags: ['frontend', 'backend', 'fullstack', 'real'],
    img: legal_tech_platform
  },

  {
    id: 'Lead Generation and Management',
    name: 'Lead IP Insights',
    url: 'https://www.leadlex.com/',
    title: 'B2B LegalTech SaaS & Digital Consulting Platform',
    category: 'real',
    overview: 'Enterprise B2B LegalTech SaaS platform designed for IP law firms and professionals to improve client retention, business development, digital marketing, and operational efficiency through centralized client management and data-driven solutions.',
    contribution: 'Worked as a Frontend Developer in a collaborative development team, building responsive UI features, integrating APIs with backend services, and contributing to testing workflows. Collaborated closely with multiple frontend developers and development leads to deliver scalable and maintainable application features.',
    techStack: [
      'Vue',
      'Vuetify',
      'TypeScript',
      'Bootstrap',
      'Socket.io',
      'WIPO',
      'Apollo',
      'Jenkins',
      'GitHub Actions'
    ],
    tags: ['frontend', 'real'],
    img: lead_generation
  },

  {
    id: 'Medical Platform',
    name: 'Gemstar Inc',
    url: 'https://www.gemstarinc.com/',
    title: 'Medical Supply & Wholesale Management Platform',
    category: 'real',
    overview: 'Enterprise medical supply and wholesale platform designed to manage large-scale product distribution, inventory operations, and customer-focused healthcare supply services with high reliability and quality standards.',
    contribution: 'Individually migrated and redeveloped the complete frontend application from Angular to Nuxt 3, including responsive UI development, API integration, state management, and frontend architecture improvements to enhance performance and maintainability.',
    techStack: [
      'Nuxt 3',
      'Vue.js',
      'Pinia',
      'TypeScript',
      'Tailwind CSS',
      'REST API',
      'Axios'
    ],
    tags: ['frontend', 'real'],
    img: medical_platform
  },

  {
    id: 'HRMS Task Management',
    name: 'Zigtrack',
    title: 'HRMS & Task Management System',
    category: 'real',
    overview: 'Enterprise HRMS and task management platform designed to streamline employee management, task tracking, team collaboration, attendance workflows, and operational productivity within organizations.',
    contribution: 'Worked on the complete end-to-end development of the project, collaborating closely with UI, frontend, backend, database, and testing teams. Contributed to responsive UI development, frontend implementation, backend functionalities, API integration, and business workflow features within a collaborative development environment.',
    techStack: [
      'React',
      'Vue',
      'Vuetify',
      'Laravel',
      'PHP',
      'MySQL',
      'Bootstrap',
      'Microservices',
      'REST API'
    ],
    tags: ['frontend', 'backend', 'fullstack', 'real'],
    img: hrms
  },

  {
    id: 'Sales AI Platform',
    name: 'Visual Visitor Sales AI Platform',
    url: 'https://www.visualvisitor.com/',
    title: 'B2B & B2C Sales Intelligence AI Platform',
    category: 'real',
    overview: 'Enterprise-level Sales Intelligence and AI-driven marketing platform designed to help businesses identify website visitors, automate lead generation, improve customer engagement, and optimize sales and marketing workflows through data-driven insights and automation.',
    contribution: 'Worked as a Frontend Developer using Vue.js (Vue 2) in a collaborative development team, building responsive UI components, integrating backend APIs, developing dashboard and analytics features, and contributing to scalable frontend architecture for enterprise-level SaaS products. Also worked on developing frontend features for Chrome Extension plugins integrated with the platform.',
    techStack: [
      'Vue.js',
      'Vue 2',
      'JavaScript',
      'Bootstrap',
      'REST API'
    ],
    tags: ['frontend', 'real'],
    img: sales_ai
  },

  {
    id: 'Blockchain Web Platform',
    name: 'Blotix',
    url: 'https://www.blotix.io/',
    title: 'Blockchain & Web Infrastructure Platform',
    category: 'real',
    overview: 'Technology platform focused on blockchain infrastructure, software systems, and web-based solutions designed to present technical, educational, and informational experiences for digital platforms and emerging technologies.',
    contribution: 'Worked as a Frontend Developer, building responsive and interactive user interfaces, integrating APIs, and developing scalable frontend features for web applications. Collaborated with the development team to improve UI performance, usability, and maintainable frontend architecture.',
    techStack: [
      'Vue.js',
      'Nuxt.js',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'REST API'
    ],
    tags: ['frontend', 'real'],
    img: blockchain
  },

  {
    id: 'Admin Portal',
    name: 'SOCFortress',
    url: 'https://www.socfortress.co/',
    title: 'SOC Monitoring & Security Operations Platform',
    category: 'real',
    overview: 'Enterprise SaaS security operations platform designed to unify observability, security monitoring, threat intelligence, and SOAR workflows. The platform provides centralized customer management, service monitoring, CRM functionalities, and secure access to cybersecurity service platforms.',
    contribution: 'Worked as a Full Stack Developer with a small collaborative team, contributing to end-to-end development using Vue.js and Laravel. Developed responsive frontend modules, backend APIs, database functionalities, customer service workflows, and platform integrations while supporting deployment and CI/CD processes using Jenkins.',
    techStack: [
      'Vue 2',
      'Laravel',
      'PHP',
      'MySQL',
      'Jenkins',
      'REST API',
      'Bootstrap',
      'VUEXY'
    ],
    tags: ['frontend', 'backend', 'fullstack', 'real'],
    img: soc_monitoring
  },

  {
    id: 'Admin Panal',
    name: 'ES Summer Quotes',
    url: 'https://esworld.com/',
    title: 'Travel Quotation & Booking Management System',
    category: 'real',
    overview: 'Custom admin platform developed for a Dubai-based travel organization to streamline quotation creation, trip planning, customer management, and booking operations for travel services and tour packages.',
    contribution: 'Worked on developing the admin panel for quotation management, trip workflows, customer data handling, and booking-related operations. Contributed to frontend development, API integration, business logic implementation, and responsive dashboard features within a collaborative development environment.',
    techStack: [
      'Vue.js',
      'Laravel',
      'PHP',
      'MySQL',
      'Bootstrap',
      'REST API'
    ],
    tags: ['frontend', 'backend', 'real'],
    img: quotation_creation
  },

  {
    id: 'Athleads Scouting Platform',
    name: 'Athleads',
    url: 'https://athleads.com/',
    title: 'AI-Powered Football Scouting Platform',
    category: 'real',
    overview: 'AI-powered football scouting and player intelligence platform designed to centralize scouting workflows, player reports, analytics, and talent evaluation processes for football clubs and scouting organizations.',
    contribution: 'Worked as a Frontend Developer, building responsive and interactive UI features using Vue.js and GraphQL. Contributed to dashboard development, player profile interfaces, report management systems, API integration, and scalable frontend architecture within a collaborative product development team.',
    techStack: [
      'Vue.js',
      'TypeScript',
      'GraphQL',
      'Apollo GraphQL',
      'Pinia',
      'Tailwind CSS',
      'REST API',
      'Socket.io',
      'Vite'
    ],
    tags: ['frontend', 'real'],
    img: athleads
  },

  {
    id: 'IQ-CRM',
    name: 'IQ-CRM',
    url: 'https://qualteh.com/',
    title: 'Mobile CRM & Sales Management Platform',
    category: 'real',
    overview: 'Cloud-based mobile CRM and sales management platform designed to improve customer relationship management, sales operations, team collaboration, and business workflows across mobile and desktop environments.',
    contribution: 'Worked as a Frontend Developer, building responsive and mobile-first application features using Vue.js and Quasar Framework. Contributed to CRM dashboards, customer management modules, sales workflows, API integration, and cross-platform UI development for mobile and desktop experiences within a collaborative development team.',
    techStack: [
      'Vue.js',
      'Quasar Framework',
      'JavaScript',
      'Pinia',
      'REST API',
      'SCSS',
      'Cordova'
    ],
    tags: ['frontend', 'real'],
    img: iq_crm
  },

  {
    id: 'Microservice Admin Platform',
    name: 'Zig Auth',
    title: 'Internal Microservices Management Platform',
    category: 'real',
    overview: 'Internal enterprise platform designed to connect, monitor, and manage multiple microservices and business systems through a centralized admin interface.',
    contribution: 'Worked on frontend development using Nuxt.js, building scalable admin panel features, service management modules, API integrations, and responsive dashboards for monitoring and managing distributed microservice workflows.',
    techStack: [
      'Nuxt.js',
      'Vue.js',
      'Pinia',
      'Bootstrap',
      'REST API',
      'Microservices',
      'Docker'
    ],
    tags: ['frontend', 'real'],
    img: microservice
  },

  {
    id: 'Marketing Platform',
    name: 'Qiigo',
    url: 'https://qiigo.com/',
    title: 'B2B Digital Marketing & Franchise Management Platform',
    category: 'real',
    overview: 'Enterprise digital marketing platform designed for franchise brands, corporate businesses, and local companies to manage SEO, PPC, social media, reputation management, local listings, and customer engagement across multiple locations.',
    contribution: 'Worked as a Frontend Developer on the maintenance and optimization of the platform, focusing on bug fixing, UI improvements, frontend performance optimization, responsive design enhancements, and overall application stability within a collaborative development environment.',
    techStack: [
      'Vue.js',
      'JavaScript',
      'Bootstrap',
      'SCSS',
      'REST API',
      'Webpack',
    ],
    tags: ['frontend', 'real'],
    img: qiigo
  },

  // Demo

  // {
  //   id: 'Gym Platform',
  //   name: 'Gym Platform',
  //   url: '#',
  //   title: 'Gym Platform',
  //   category: 'learning',
  //   overview: '',
  //   contribution: '',
  //   techStack: [
  //   ],
  //   tags: ['learning'],
  //   img: gym
  // },
  // {
  //   id: 'Restaurant Management Platform',
  //   name: 'Restaurant Management Platform',
  //   url: '#',
  //   title: 'Restaurant Management Platform',
  //   category: 'learning',
  //   overview: '',
  //   contribution: '',
  //   techStack: [
  //   ],
  //   tags: ['learning'],
  //   img: restaurant
  // },
  // {
  //   id: 'Marketing Platform',
  //   name: 'Qiigo',
  //   url: 'https://qiigo.com/',
  //   title: 'B2B Digital Marketing & Franchise Management Platform',
  //   category: 'learning',
  //   overview: '',
  //   contribution: '',
  //   techStack: [
  //   ],
  //   tags: ['learning'],
  //   img: no_img
  // },
  // {
  //   id: 'Netflix Platform',
  //   name: 'Netflix',
  //   url: '#',
  //   title: 'Netflix Platform',
  //   category: 'learning',
  //   overview: '',
  //   contribution: '',
  //   techStack: [
  //   ],
  //   tags: ['learning'],
  //   img: netflix
  // }
];
