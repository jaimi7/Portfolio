import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award, TrendingUp } from 'lucide-react';
import type { Experience } from '@/types';

interface ExperienceCardProps {
  job: Experience;
  inView: boolean;
  index: number;
  delayMultiplier?: number;
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
  'text-purple-600',
  'text-emerald-600',
  'text-orange-600',
  'text-pink-600',
  'text-blue-600',
  'text-red-600'
];

const bgColors = [
  'bg-purple-500',
  'bg-emerald-500',
  'bg-orange-500',
  'bg-pink-500',
  'bg-blue-500',
  'bg-red-500'
];

export function ExperienceCard({ job, inView, index, delayMultiplier = 0.1 }: ExperienceCardProps) {
  const gradClass = gradients[index % gradients.length];
  const textClass = textColors[index % textColors.length];
  const bgClass = bgColors[index % bgColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.3 + index * delayMultiplier }}
      className="premium-card p-6 sm:p-8 relative group hover:scale-105 transition-transform duration-300"
    >
      {/* Company header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 bg-gradient-to-br ${gradClass} text-white rounded-lg shadow-lg group-hover:scale-110 transition-transform`}>
          <Briefcase className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold md:font-bold text-gray-900 cursor-pointer">
            <a href={job.url} target="_blank" rel="noopener noreferrer">
              {job.company}
            </a>
          </h3>
          <p className={`${textClass} font-medium text-sm md:text-base`}>{job.position}</p>
        </div>
      </div>

      {/* Duration */}
      <div className="flex items-center gap-2 text-gray-600 mb-4 sm:mb-6">
        <Calendar className="w-4 h-4" />
        <span className="text-xs sm:text-sm font-medium">{job.duration}</span>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <TrendingUp className={`w-4 h-4 ${textClass}`} />
            Key Responsibilities
          </h4>
          <ul className="space-y-2">
            {job.description.map((desc, descIndex) => (
              <li key={descIndex} className="text-gray-600 flex items-start gap-2">
                <span className={`w-2 h-2 ${bgClass} rounded-full mt-2 flex-shrink-0 text-sm sm:text-base`} />
                <span className='text-sm sm:text-base'>{desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-600" />
            Achievements
          </h4>
          <ul className="space-y-2">
            {job.achievements.map((achievement, achIndex) => (
              <li key={achIndex} className="text-gray-600 flex items-start gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0 text-sm sm:text-base" />
                <span className='text-sm sm:text-base'>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
