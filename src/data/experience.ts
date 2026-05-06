import type { Experience } from '../types';

export const experience: Experience[] = [
  {
    id: 'albiorix',
    company: 'Albiorix Technology',
    position: 'Full Stack Developer',
    duration: '2022 - Present',
    description: [
      'Built scalable frontend systems using Vue.js and Nuxt.js',
      'Led migration project from Angular to Nuxt 3, improving performance by 40%',
      'Worked with modern deployment pipelines and CI/CD processes'
    ],
    achievements: [
      'Successfully migrated enterprise application to modern stack',
      'Reduced page load times by 40% through optimization',
      'Implemented automated testing reducing bugs by 60%'
    ]
  },
  {
    id: 'zignuts',
    company: 'Zignuts Technolab',
    position: 'Full Stack Developer',
    duration: '2021 - 2022',
    description: [
      'Delivered SaaS, CRM, and HRMS platforms for enterprise clients',
      'Integrated complex APIs and handled real-time data systems',
      'Worked in production environments with DevOps best practices'
    ],
    achievements: [
      'Built 3 major SaaS platforms serving 10K+ users',
      'Implemented real-time collaboration features using WebSockets',
      'Set up CI/CD pipelines reducing deployment time by 50%'
    ]
  }
];
