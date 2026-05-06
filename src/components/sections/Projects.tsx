import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Code, Filter, Lightbulb, Rocket } from 'lucide-react';
import { projects } from '../../data/projects';
import type { Project, ProjectFilter } from '../../types';

const filterButtons: { key: ProjectFilter; label: string; icon: React.ReactNode }[] = [
  { key: 'all', label: 'All Projects', icon: <Filter className="w-4 h-4" /> },
  { key: 'frontend', label: 'Frontend', icon: <Rocket className="w-4 h-4" /> },
  { key: 'oracle', label: 'Oracle', icon: <Lightbulb className="w-4 h-4" /> },
  { key: 'ai', label: 'AI', icon: <Lightbulb className="w-4 h-4" /> }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedFilter, setSelectedFilter] = useState<ProjectFilter>('all');

  const filteredProjects = projects.filter(project => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'frontend') return project.category === 'real';
    if (selectedFilter === 'oracle') return project.category === 'learning' && 
      project.techStack.some(tech => tech.toLowerCase().includes('oracle') || tech.toLowerCase().includes('apex'));
    if (selectedFilter === 'ai') return project.category === 'learning' && 
      project.techStack.some(tech => tech.toLowerCase().includes('ai'));
    return true;
  });

  const getProjectCategory = (project: Project) => {
    if (project.category === 'real') return 'Real Project';
    return 'Learning Project';
  };

  const getCategoryColor = (category: string) => {
    return category === 'Real Project' 
      ? 'from-blue-500 to-blue-600' 
      : 'from-purple-500 to-purple-600';
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A showcase of real-world applications and learning projects in Oracle ecosystem and AI integration.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {filterButtons.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === filter.key
                    ? 'bg-gradient-to-r from-accent to-accent/80 text-white shadow-lg'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-accent hover:text-accent'
                }`}
              >
                {filter.icon}
                <span className="ml-2">{filter.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className={`premium-card p-8 relative group hover:scale-105 transition-all duration-300 ${
                project.featured ? 'ring-2 ring-accent ring-offset-2' : ''
              }`}
            >
              {/* Project header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(getProjectCategory(project))} text-white`}>
                      {getProjectCategory(project)}
                    </span>
                    {project.featured && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Problem & Solution */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Problem</h4>
                  <p className="text-gray-600">{project.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-600">{project.solution}</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                {project.demoUrl && project.demoUrl !== '#' && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent to-accent/80 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    <Code className="w-4 h-4" />
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent/10 to-neon-blue/10 border border-accent/20 rounded-full">
            <Rocket className="w-5 h-5 text-accent" />
            <span className="gradient-text font-medium">
              Building the future of enterprise integrations
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
