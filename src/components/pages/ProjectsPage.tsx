import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Filter, Monitor, Server, Layers, Briefcase, BookOpen, Rocket, ArrowLeft } from 'lucide-react';
import { projects } from '@/data/projects';
import type { Project, ProjectFilter } from '@/types';
import { ProjectCard } from '@/components/ui/ProjectCard';
import ProjectDetailModal from '@/components/ui/ProjectDetailModal';

const filterButtons: { key: ProjectFilter; label: string; icon: React.ReactNode }[] = [
  { key: 'all', label: 'All Projects', icon: <Filter className="w-4 h-4" /> },
  { key: 'frontend', label: 'Frontend', icon: <Monitor className="w-4 h-4" /> },
  { key: 'backend', label: 'Backend', icon: <Server className="w-4 h-4" /> },
  { key: 'fullstack', label: 'Full Stack', icon: <Layers className="w-4 h-4" /> },
  { key: 'real', label: 'Real Projects', icon: <Briefcase className="w-4 h-4" /> },
  { key: 'learning', label: 'Learning', icon: <BookOpen className="w-4 h-4" /> }
];

export default function ProjectsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedFilter, setSelectedFilter] = useState<ProjectFilter>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === 'all') return true;

    return project.tags?.some(
      (tag) => tag.toLowerCase() === selectedFilter.toLowerCase()
    );
  });


  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={handleGoBack}
              className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </button>
            <h1 className="text-2xl font-bold text-gray-900">All Projects</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-full mx-6 px-2 sm:px-4 lg:px-6 py-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Complete <span className="gradient-text">Project Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A showcase of real-world applications, scalable SaaS platforms,
            learning projects, and modern full stack solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {filterButtons.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`px-5 py-2 flex items-center gap-2 rounded-full font-semibold transition-all duration-300 ${selectedFilter === filter.key
                    ? 'bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 text-white shadow-lg'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-cyan-400 hover:text-cyan-600'
                  }`}
              >
                {filter.icon}
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              inView={inView}
              index={index}
              onOpenDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100/50 border border-green-200/50 rounded-full">
            <Rocket className="w-5 h-5 text-green-700" />
            <span className="text-green-700 font-medium">
              {filteredProjects.length} projects showcasing enterprise integration expertise
            </span>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal Pop-up */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
