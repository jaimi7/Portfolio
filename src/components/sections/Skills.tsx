import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Wrench, BrainCircuit } from 'lucide-react';
import { technicalSkills, tools, softSkills } from '@/data/skills';
import SkillToolIcon from '@/components/ui/SkillToolIcon';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set spanning modern web development, cloud technologies,
            and enterprise integration systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5">
          {/* Left Side */}
          <div className='md:col-span-1 lg:col-span-2 md:pr-12 lg:pr-20'>
            <div className="flex items-center gap-3 mb-10">
              <Code2 className="w-7 h-7 text-orange-400" />
              <h3 className="text-2xl font-bold text-gray-600">Technical Expertise</h3>
            </div>

            <div>
              {technicalSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 * 0.1
                  }}
                  className="p-2 hover:scale-105 cursor-pointer group"
                >
                  {skill.level && (
                    <div className="mt-3">
                      <div className="flex justify-between  text-gray-600 mb-1">
                        <span className="font-medium text-gray-900 group-hover:text-cyan-600 transition-colors">
                          {skill.name}
                        </span>
                        <span className='text-xs'>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: 0.8 * 0.1
                          }}
                          className="h-2 rounded-full bg-gradient-to-r from-fuchsia-300 via-purple-300 to-indigo-300"
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="md:col-span-2 lg:col-span-3 space-y-14">
            {/* Tools */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Wrench className="w-7 h-7 text-red-400" />
                <h3 className="text-2xl font-bold text-gray-600">
                  Tools & Technologies
                </h3>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                    }}
                    className="shadow-md border border-gray-50 rounded-2xl p-5 flex flex-col items-center justify-center hover:border-cyan-400/40 
                    hover:-translate-y-10 transition-all duration-300"
                  >
                    <SkillToolIcon type={tool.icon} />
                    <span className="font-semibold text-gray-800 text-center">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <BrainCircuit className="w-7 h-7 text-orange-400" />
                <h3 className="text-2xl font-bold text-gray-600">Soft Skills</h3>
              </div>

              <div className="flex flex-wrap gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className="text-sm px-4 py-2 rounded-full border border-fuchsia-300/30 bg-fuchsia-200/10 text-pink-500 font-medium hover:shadow-lg hover:shadow-fuchsia-300/30 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}