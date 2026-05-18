import { motion } from 'framer-motion';

interface SkillProgressProps {
  name: string;
  level: number;
  inView: boolean;
  index: number;
}

const progressGradients = [
  'from-purple-400 via-indigo-400 to-blue-400',
  'from-emerald-400 via-teal-400 to-cyan-400',
  'from-orange-400 via-amber-400 to-yellow-400',
  'from-fuchsia-400 via-pink-400 to-rose-400',
  'from-sky-400 via-blue-400 to-indigo-400',
  'from-red-400 via-pink-400 to-orange-400'
];

const skillTextColors = [
  'group-hover:text-purple-600',
  'group-hover:text-emerald-600',
  'group-hover:text-orange-600',
  'group-hover:text-pink-600',
  'group-hover:text-blue-600',
  'group-hover:text-red-600'
];

export default function SkillProgress({ name, level, inView, index }: SkillProgressProps) {
  const gradClass = progressGradients[index % progressGradients.length];
  const textClass = skillTextColors[index % skillTextColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.05 * index
      }}
      className="p-2 hover:scale-105 cursor-pointer group"
    >
      <div className="mt-3">
        <div className="flex justify-between text-gray-600 mb-1">
          <span className={`font-medium text-gray-900 ${textClass} transition-colors`}>
            {name}
          </span>
          <span className="text-xs">{level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${level}%` } : {}}
            transition={{
              duration: 1,
              delay: 0.08 * index
            }}
            className={`h-2 rounded-full bg-gradient-to-r ${gradClass}`}
          />
        </div>
      </div>
    </motion.div>
  );
}
