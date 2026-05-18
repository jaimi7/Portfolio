import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import ProjectDetailModal from '@/components/ui/ProjectDetailModal';
import type { Project } from '@/types';
import SectionHeader from '../ui/SectionHeader';
import ShowMoreButton from '../ui/ShowMoreButton';

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
        <ShowMoreButton
          label="Show More Projects"
          onClick={() => navigate('/projects')}
          inView={inView}
          delay={0.6}
        />
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
