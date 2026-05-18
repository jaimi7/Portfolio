import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';
import { experience } from '@/data/experience';
import type { Experience } from '@/types';
import { ExperienceCard } from '@/components/ui/ExperienceCard';
import PageHeader from '../ui/PageHeader';
import { motion } from 'framer-motion';

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100/50 border border-green-200/50 rounded-full">
            <Award className="w-5 h-5 text-green-700" />
            <span className="text-green-700 font-medium">
              {experience.length} positions across {new Set(experience.map(job => job.company)).size} companies
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
