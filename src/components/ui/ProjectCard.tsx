import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  inView: boolean;
  index: number;
}

export function ProjectCard({ project, inView, index }: ProjectCardProps) {
  const getProjectCategory = (project: Project) => {
    if (project.category === 'real') return 'Real Project';
    return 'Learning Project';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
      className={`premium-card px-4 md:px-8 py-4 md:py-6 relative group hover:scale-105 transition-all duration-300`}
    >
      {/* Project header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center flex-wrap gap-3 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 text-white text-nowrap">
              {getProjectCategory(project)}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium text-cyan-500 border border-cyan-500 text-nowrap">
              {project.id}
            </span>
          </div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Problem & Solution */}
      <div className="text-xs md:text-sm lg:text-base space-y-3 md:space-y-4 mb-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-1 md:mb-2">Overview</h4>
          <p className="text-gray-600">{project.overview}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1 md:mb-2">Contribution</h4>
          <p className="text-gray-600">{project.contribution}</p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-sky-50 text-cyan-800 rounded-full text-xs font-semibold hover:bg-cyan-100/50 hover:text-cyan-600 transition-colors"
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
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
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
  );
}
