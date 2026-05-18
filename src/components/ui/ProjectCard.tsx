import { motion } from 'framer-motion';
import { ExternalLink, Code, ArrowRight } from 'lucide-react';
import type { Project } from '@/types';
import defaultProjectImage from '@/assets/project/no_img.png'; // Fallback project illustration

interface ProjectCardProps {
  project: Project;
  inView: boolean;
  index: number;
  onOpenDetails?: () => void;
}

const gradients = [
  'from-purple-500 via-violet-500 to-indigo-500',
  'from-lime-500 via-green-500 to-emerald-500',
  'from-orange-500 via-amber-500 to-yellow-500',
  'from-fuchsia-500 via-pink-500 to-rose-500',
  'from-indigo-500 via-blue-500 to-sky-500',
  'from-red-500 via-pink-500 to-orange-500'
];

const textColors = [
  'text-purple-600 hover:text-purple-700',
  'text-emerald-600 hover:text-emerald-700',
  'text-orange-600 hover:text-orange-700',
  'text-pink-600 hover:text-pink-700',
  'text-blue-600 hover:text-blue-700',
  'text-red-600 hover:text-red-700'
];

const hoverTitleColors = [
  'group-hover:text-purple-600',
  'group-hover:text-emerald-600',
  'group-hover:text-orange-600',
  'group-hover:text-pink-600',
  'group-hover:text-blue-600',
  'group-hover:text-red-600'
];

const borderColors = [
  'hover:border-purple-200/60 hover:shadow-purple-500/5',
  'hover:border-emerald-200/60 hover:shadow-emerald-500/5',
  'hover:border-orange-200/60 hover:shadow-orange-500/5',
  'hover:border-pink-200/60 hover:shadow-pink-500/5',
  'hover:border-blue-200/60 hover:shadow-blue-500/5',
  'hover:border-red-200/60 hover:shadow-red-500/5'
];

const badgeColors = [
  'bg-purple-950/80 text-purple-400 border-purple-500/30',
  'bg-emerald-950/80 text-emerald-400 border-emerald-500/30',
  'bg-orange-950/80 text-orange-400 border-orange-500/30',
  'bg-pink-950/80 text-pink-400 border-pink-500/30',
  'bg-blue-950/80 text-blue-400 border-blue-500/30',
  'bg-red-950/80 text-red-400 border-red-500/30'
];

export function ProjectCard({ project, inView, index, onOpenDetails }: ProjectCardProps) {
  const getProjectCategory = (project: Project) => {
    return project.category === 'real' ? 'Real Project' : 'Learning Project';
  };

  const gradClass = gradients[index % gradients.length];
  const textClass = textColors[index % textColors.length];
  const titleHoverClass = hoverTitleColors[index % hoverTitleColors.length];
  const borderClass = borderColors[index % borderColors.length];
  const badgeClass = badgeColors[index % badgeColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
      className={`group bg-white border border-slate-100 rounded-2xl shadow-md shadow-slate-100/50 hover:shadow-xl ${borderClass} hover:-translate-y-2 transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer`}
    >
      {/* 1. Thumbnail Container */}
      <div className="relative w-full aspect-video overflow-hidden bg-slate-50">
        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
          <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r ${gradClass} text-white shadow-sm`}>
            {getProjectCategory(project)}
          </span>
          <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${badgeClass} border backdrop-blur-md`}>
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
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
        {/* Project Title */}
        <h3 className={`text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-4 ${titleHoverClass} transition-colors`}>
          {project.title}
        </h3>

        {/* Tech Stack Tags */}
        <div className="mb-4 sm:mb-6 pr-6 sm:pr-10 text-gray-700 text-sm font-medium truncate" title={project.techStack.join(', ')}>
          {project.techStack.join(', ')}
        </div>

        <div className="flex items-center justify-between gap-3 mt-auto pt-2 sm:pt-4 border-t border-slate-100">
          <div
            className={`flex items-center gap-2 ${textClass} cursor-pointer py-1 sm:py-2 px-4 rounded-md hover:shadow-lg`}
            onClick={onOpenDetails}
          >
            <p className="text-sm font-medium">View More</p>
            <ArrowRight className="w-4 h-4" />
          </div>
          {/* Action Buttons */}
          <div className="flex gap-3">
            {/* {project.demoUrl && project.demoUrl !== '#' && ( */}
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`w-8 h-8 flex items-center justify-center bg-gradient-to-r ${gradClass} text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-300`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            {/* )} */}
            {/* {project.githubUrl && project.githubUrl !== '#' && ( */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white rounded-full text-sm font-semibold transition-colors"
            >
              <Code className="w-4 h-4" />
            </a>
            {/* )} */}
          </div>
        </div></div>
    </motion.div>
  );
}
