import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor, Cloud, Database, Brain, Filter } from 'lucide-react';
import { skills } from '../../data/skills';
import type { Skill } from '../../types';

const categoryIcons = {
  engineering: <Monitor className="w-5 h-5" />,
  cloud: <Cloud className="w-5 h-5" />,
  oracle: <Database className="w-5 h-5" />,
  future: <Brain className="w-5 h-5" />
};

const categoryColors = {
  engineering: 'from-blue-500 to-blue-600',
  cloud: 'from-green-500 to-green-600',
  oracle: 'from-orange-500 to-orange-600',
  future: 'from-purple-500 to-purple-600'
};

const categoryTitles = {
  engineering: 'Engineering Skills',
  cloud: 'Cloud & DevOps',
  oracle: 'Oracle Ecosystem',
  future: 'Future Tech'
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const displayedSkills = selectedCategory 
    ? { [selectedCategory]: skillsByCategory[selectedCategory] }
    : skillsByCategory;

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

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white shadow-lg'
                : 'bg-white border border-gray-300 text-gray-700 hover:border-purple-400 hover:text-purple-600'
            }`}
          >
            <Filter className="w-4 h-4 inline mr-2" />
            All Skills
          </button>
          
          {Object.keys(skillsByCategory).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? `bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white shadow-lg`
                  : `bg-white border border-gray-300 text-gray-700 hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:text-white`
              }`}
            >
              {categoryIcons[category as keyof typeof categoryIcons]}
              <span className="ml-2">{categoryTitles[category as keyof typeof categoryTitles]}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {Object.entries(displayedSkills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 text-white rounded-lg shadow-lg">
                  {categoryIcons[category as keyof typeof categoryIcons]}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {categoryTitles[category as keyof typeof categoryTitles]}
                </h3>
                {category === 'oracle' && (
                  <span className="learning-badge">Currently Learning</span>
                )}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categorySkills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className="premium-card p-4 hover:scale-105 cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                        {skill.name}
                      </span>
                      {skill.isLearning && (
                        <span className="learning-badge text-xs">Learning</span>
                      )}
                    </div>
                    
                    {skill.level && (
                      <div className="mt-3">
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>Proficiency</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              duration: 1, 
                              delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05 
                            }}
                            className="h-2 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
