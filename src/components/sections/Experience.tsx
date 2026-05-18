import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { experience } from '@/data/experience';
import type { Experience } from '@/types';
import { ExperienceCard } from '@/components/ui/ExperienceCard';
import SectionHeader from '../ui/SectionHeader';
import ShowMoreButton from '../ui/ShowMoreButton';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  // Show only 2 experiences
  const featuredExperience = experience.slice(0, 2);

  return (
    <section id="experience" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleNormal="Professional"
          titleGradient="Journey"
          subtitle="Building scalable applications and connecting enterprise systems with modern technologies."
        />

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
          {featuredExperience.map((job: Experience, index: number) => (
            <ExperienceCard
              key={job.id}
              job={job}
              inView={inView}
              index={index}
              delayMultiplier={0.2}
            />
          ))}
        </div>

        {/* Show More Button */}
        <ShowMoreButton
          label="Show More Experience"
          onClick={() => navigate('/experience')}
          inView={inView}
          delay={0.8}
        />
      </div>
    </section>
  );
}
