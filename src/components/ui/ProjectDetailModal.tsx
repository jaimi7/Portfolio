import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code, Zap, ShieldAlert } from 'lucide-react';
import type { Project } from '@/types';
import defaultProjectImage from '@/assets/project/....png';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!project) return null;

  const getProjectCategory = (category: string) => {
    return category === 'real' ? 'Real Project' : 'Learning Project';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
          >
            {/* Scrollable Container */}
            <div className="overflow-y-auto flex-1 custom-scrollbar">
              {/* 1. Header Image Banner */}
              <div className="relative w-full h-[220px] md:h-[350px] overflow-hidden bg-slate-100">
                <img
                  src={project.img || defaultProjectImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
                {/* Visual Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />

                {/* Overlaid Header Info */}
                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 text-white">
                  <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                    {project.name || project.id}
                  </h2>
                  <p className="text-cyan-300 text-sm md:text-base mt-1 font-medium">
                    {project.title}
                  </p>
                </div>

                {/* Close Button overlay */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/40 hover:bg-slate-950/70 border border-white/10 text-white/90 hover:text-white backdrop-blur-md transition-all duration-200 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 pl-8">
                <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 text-white shadow-sm">
                  {getProjectCategory(project.category)}
                </span>
                <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-950/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
                  {project.id}
                </span>
              </div>

              {/* 2. Modal Body Details */}
              <div className="p-6 md:p-8 space-y-8">
                {/* Overview & Contribution Section columns */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left: The Overview */}
                  <div className="space-y-3 bg-yellow-50/20 border border-yellow-100/50 p-5 rounded-2xl">
                    <h4 className="font-bold text-gray-900 flex items-center gap-2 text-sm md:text-base">
                      <ShieldAlert className="w-5 h-5 text-yellow-500" />
                      THE OVERVIEW
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      {project.overview}
                    </p>
                  </div>

                  {/* Right: Contribution */}
                  <div className="space-y-3 bg-emerald-50/20 border border-emerald-100/50 p-5 rounded-2xl">
                    <h4 className="font-bold text-gray-900 flex items-center gap-2 text-sm md:text-base">
                      <Zap className="w-5 h-5 text-emerald-500" />
                      MY CONTRIBUTION
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>
                </div>

                {/* Technologies Grid */}
                <div className="space-y-3">
                  <span className="text-cyan-500 font-extrabold text-xs tracking-wider uppercase flex items-center gap-1.5">
                    <span className="w-4 h-0.5 bg-cyan-500 rounded" /> Technologies Used
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-slate-50 text-slate-700 border border-slate-100 rounded-xl text-xs font-semibold hover:bg-slate-100 transition-colors flex items-center gap-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Action Footer Buttons */}
            <div className="bg-slate-50 border-t border-slate-100">
              <div className="p-5 md:p-6 flex gap-3 w-fit">
                {project.demoUrl && project.demoUrl !== '#' && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-nowrap flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 text-white rounded-2xl text-sm md:text-base font-bold shadow-lg hover:shadow-cyan-500/20 hover:opacity-95 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex-1 cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4 md:w-5 h-5" />
                    Live Preview
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-sm md:text-base font-bold shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex-1 cursor-pointer"
                  >
                    <Code className="w-4 h-4 md:w-5 h-5" />
                    View Source
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
