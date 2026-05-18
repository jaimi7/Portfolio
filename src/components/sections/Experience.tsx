import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { experience } from '../../data/experience';
import type { Experience } from '../../types';
import { ExperienceCard } from '../ui/ExperienceCard';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  // Show only 2 experiences
  const featuredExperience = experience.slice(0, 2);

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building scalable applications and connecting enterprise systems with modern technologies.
          </p>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => navigate('/experience')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Show More Experience
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
