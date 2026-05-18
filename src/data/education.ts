import type { Education } from '@/types';

export const education:Education[] = [
  {
    id: 'bachelor',
    institute: 'Government Engineering College, Modasa',
    degree: 'Bachelor of Engineering (B.E.) in Information Technology',
    duration: 'Aug 2018 - May 2022',
    url:'https://www.gecmodasa.ac.in/',
    score: {
      cpi: '7.78',
      cgpa: '8.54'
    },
    description:
      'Completed Bachelor’s degree in Information Technology with focus on software engineering..'
  },

  {
    id: 'highschool',
    institute: 'Lok Vidhyalaya, Utadi',
    degree: 'Higher Secondary Certificate (HSC) - Science Stream',
    duration: 'Mar 2016 - Mar 2018',
    url:'https://schools.org.in/valsad/24250108803/lok-vidhyala-untdi.html',
    score: {
      percentage: '70%'
    },
    description:
      'Completed higher secondary education in Science stream with core subjects including Mathematics, Physics, and Chemistry.'
  }
];