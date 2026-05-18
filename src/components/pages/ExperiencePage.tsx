import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';
import { experience } from '@/data/experience';
import type { Experience } from '@/types';
import { ExperienceCard } from '@/components/ui/ExperienceCard';
import PageHeader from '../ui/PageHeader';
import HighlightPill from '../ui/HighlightPill';

export default function ExperiencePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        navTitle="Professional Journey"
        titleNormal="Complete"
        titleGradient="Experience"
        subtitle="A comprehensive journey through building scalable applications and connecting enterprise systems with modern technologies."
        inView={inView}
        inViewRef={ref}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
          {experience.map((job: Experience, index: number) => (
            <ExperienceCard
              key={job.id}
              job={job}
              inView={inView}
              index={index}
              delayMultiplier={0.1}
            />
          ))}
        </div>

        {/* Stats */}
        <HighlightPill
          icon={Award}
          text={`${experience.length} positions across ${new Set(experience.map(job => job.company)).size} companies`}
          inView={inView}
          delay={0.8}
          className="text-center mt-12 sm:mt-16"
        />
      </div>
    </div>
  );
}
