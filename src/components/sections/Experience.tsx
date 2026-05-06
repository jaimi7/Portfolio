import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Award, TrendingUp } from 'lucide-react';
import { experience } from '../../data/experience';
import type { Experience } from '../../types';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building scalable applications and connecting enterprise systems with modern technologies.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sky-400 via-cyan-400 to-teal-400 rounded-full" />

          {experience.map((job: Experience, index: number) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-cyan-500 rounded-full z-10 shadow-lg" />

              {/* Content card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="premium-card p-8 relative group hover:scale-105 transition-transform duration-300">
                  {/* Company header */}
                  <div className="flex items-center gap-3 mb-4 justify-between">
                    <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                      <div className="p-3 bg-gradient-to-br from-sky-400 via-cyan-400 to-teal-400 text-white rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{job.company}</h3>
                        <p className="text-cyan-600 font-medium">{job.position}</p>
                      </div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className={`flex items-center gap-2 text-gray-600 mb-6 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{job.duration}</span>
                  </div>

                  {/* Description */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-cyan-600" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {job.description.map((desc, descIndex) => (
                          <li key={descIndex} className="text-gray-600 flex items-start gap-2">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-green-600" />
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-600 flex items-start gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100/50 border border-green-200/50 rounded-full">
            <Award className="w-5 h-5 text-green-700" />
            <span className="text-green-700 font-medium">
              4+ years of experience building production-ready applications
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
