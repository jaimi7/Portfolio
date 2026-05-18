import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import ProjectDetailModal from '@/components/ui/ProjectDetailModal';
import type { Project } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();
  const featuredProjects = projects.slice(0, 3);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" ref={ref} className="py-20 bg-white">
      <div className="max-w-full mx-4 px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleNormal="Featured"
          titleGradient="Projects"
          subtitle="Showcasing scalable web applications, enterprise solutions, and modern development projects."
          className="mb-16"
        />

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              inView={inView}
              index={index}
              onOpenDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Show More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Show More Projects
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Project Detail Modal Pop-up */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        index={selectedProject ? projects.indexOf(selectedProject) : 0}
      />
    </section>
  );
}
