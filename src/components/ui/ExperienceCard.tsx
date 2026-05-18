import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award, TrendingUp } from 'lucide-react';
import type { Experience } from '../../types';

interface ExperienceCardProps {
  job: Experience;
  inView: boolean;
  index: number;
  delayMultiplier?: number;
}

export function ExperienceCard({ job, inView, index, delayMultiplier = 0.1 }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.3 + index * delayMultiplier }}
      className="premium-card p-8 relative group hover:scale-105 transition-transform duration-300"
    >
      {/* Company header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-sky-400 via-cyan-400 to-teal-400 text-white rounded-lg shadow-lg group-hover:scale-110 transition-transform">
          <Briefcase className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 cursor-pointer">
            <a href={job.url} target="_blank" rel="noopener noreferrer">
              {job.company}
            </a>
          </h3>
          <p className="text-cyan-600 font-medium">{job.position}</p>
        </div>
      </div>

      {/* Duration */}
      <div className="flex items-center gap-2 text-gray-600 mb-6">
        <Calendar className="w-4 h-4" />
        <span className="text-sm font-medium">{job.duration}</span>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-cyan-600" />
            Key Responsibilities
          </h4>
          <ul className="space-y-2">
            {job.description.map((desc, descIndex) => (
              <li key={descIndex} className="text-gray-600 flex items-start gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <Award className="w-4 h-4 text-green-600" />
            Achievements
          </h4>
          <ul className="space-y-2">
            {job.achievements.map((achievement, achIndex) => (
              <li key={achIndex} className="text-gray-600 flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
