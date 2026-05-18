import { motion } from 'framer-motion';
import { ExternalLink, Code, ArrowRight } from 'lucide-react';
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

        {/* Tech Stack Tags */}
        <div className="mb-6 pr-10 text-gray-700 text-sm font-medium truncate" title={project.techStack.join(', ')}>
          {project.techStack.join(', ')}
        </div>

        <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-slate-100">
          <div
            className="flex items-center gap-2 text-cyan-600 group-hover:text-cyan-700 cursor-pointer py-2 px-4 rounded-md  hover:shadow-lg"
            onClick={onOpenDetails}
          >
            <p className="text-sm font-medium">View More</p>
            <ArrowRight className="w-4 h-4" />
          </div>
          {/* Action Buttons */}
          <div className="flex gap-3">
            {project.demoUrl && project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-300 flex-1 justify-center"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white rounded-full text-sm font-semibold transition-colors flex-1 justify-center"
              >
                <Code className="w-4 h-4" />
              </a>
            )}
          </div>
        </div></div>
    </motion.div>
  );
}
