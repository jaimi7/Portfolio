import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import type { Project } from '@/types';
import defaultProjectImage from '@/assets/project/....png'; // Fallback project illustration

interface ProjectCardProps {
  project: Project;
  inView: boolean;
  index: number;
  onOpenDetails?: () => void;
}

export function ProjectCard({ project, inView, index, onOpenDetails }: ProjectCardProps) {
  const getProjectCategory = (project: Project) => {
    return project.category === 'real' ? 'Real Project' : 'Learning Project';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
      onClick={onOpenDetails}
      className="group bg-white border border-slate-100 rounded-2xl shadow-md shadow-slate-100/50 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer"
    >
      {/* 1. Thumbnail Container */}
      <div className="relative w-full aspect-video overflow-hidden bg-slate-50">
        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
          <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 text-white shadow-sm">
            {getProjectCategory(project)}
          </span>
          <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-950/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
            {project.id}
          </span>
        </div>

        {/* Thumbnail Image */}
        <img
          src={project.img || defaultProjectImage}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Hover image overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* 2. Content Details Section */}
      <div className="p-5 md:p-6 flex flex-col flex-1">
        {/* Project Title */}
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors">
          {project.title}
        </h3>

        {/* Overview & Contribution Stack */}
        <div className="text-xs md:text-sm space-y-4 mb-6 flex-1">
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Overview</h4>
            <p className="text-gray-600 leading-relaxed">{project.overview}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Contribution</h4>
            <p className="text-gray-600 leading-relaxed">{project.contribution}</p>
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2.5 py-1 bg-cyan-50/80 text-cyan-700 border border-cyan-100/30 rounded-lg text-xs font-medium hover:bg-cyan-100/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-slate-100">
          {project.demoUrl && project.demoUrl !== '#' && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-300 flex-1 justify-center"
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
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-semibold transition-colors flex-1 justify-center"
            >
              <Code className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
