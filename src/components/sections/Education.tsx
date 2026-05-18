import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award, ExternalLink, School } from 'lucide-react';
import { education } from '@/data/education';
import SectionHeader from '../ui/SectionHeader';

export default function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const chronologicalEducation = [...education];

  return (
    <section id="education" ref={ref} className="py-24 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <SectionHeader
          titleNormal="Academic"
          titleGradient="Timeline"
          subtitle="A minimalist, chronological journey of my educational background."
        />

        {/* Infographic Horizontal Timeline (Desktop) & Minimalist vertical timeline (Mobile) */}
        <div className="relative py-12">
          {/* Main Horizontal Timeline Line (Desktop Only) */}
          <div className="absolute left-12 right-12 top-1/2 h-[3px] bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 opacity-30 transform -translate-y-1/2 hidden md:block" />

          {/* Grid Layout (Side-by-side columns on desktop, stacked on mobile) */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-8 relative">
            {chronologicalEducation.map((edu, index) => {

              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                  className={`relative flex flex-col items-center md:items-start text-center 
                    md:text-left `}
                >
                  {/* Timeline Junction Node */}
                  <div className="absolute left-1/2 md:left-10 top-[-36px] md:top-1/2 w-14 h-14 rounded-full bg-white border-[3px] border-cyan-400 text-cyan-500 shadow-md flex items-center justify-center transform -translate-x-1/2 md:-translate-x-6 md:-translate-y-1/2 overflow-hidden group hover:scale-110 transition-transform duration-300">
                    {edu.logo ? (
                      <img src={edu.logo} alt={edu.institute} className="w-full h-full object-contain p-1 bg-white" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-cyan-500" />
                    )}
                  </div>

                  {/* Chronological Content Group */}
                  <div className="w-full max-w-xl pt-8 md:pt-0 pl-20 md:pl-24">
                    {/* Duration Badge */}
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full mb-3 shadow-sm border border-cyan-100/50">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.duration}
                    </span>

                    {/* Degree Title */}
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight mb-2 hover:text-cyan-600 transition-colors">
                      {edu.degree}
                    </h3>

                    {/* School Name and Hyperlink */}
                    <div className="flex items-center gap-3 mb-3 justify-center md:justify-start w-fit px-3 z-10 bg-white">
                      <a
                        href={edu.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-cyan-600 transition-colors group"
                      >
                        <School className="w-4 h-4 text-cyan-500" />
                        <span>{edu.institute}</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>

                    {/* Description */}
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    {/* Academic Performance KPI Metrics */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-50/30 border border-cyan-100/30 rounded-xl">
                      <Award className="w-4 h-4 text-cyan-500" />
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mr-1">Score:</span>
                      <div className="flex gap-3 text-xs font-extrabold text-slate-800">
                        {edu.score?.cpi && (
                          <p>
                            CPI <span className="text-cyan-600">{edu.score.cpi}</span>
                          </p>
                        )}
                        {edu.score?.cgpa && (
                          <p>
                            CGPA <span className="text-teal-600">{edu.score.cgpa}</span>
                          </p>
                        )}
                        {edu.score?.percentage && (
                          <p>
                            Percentage <span className="text-cyan-600">{edu.score.percentage}</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
