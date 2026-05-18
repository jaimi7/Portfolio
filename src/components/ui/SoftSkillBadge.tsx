import { motion } from 'framer-motion';

interface SoftSkillBadgeProps {
  skill: string;
  index: number;
  inView: boolean;
}

const softSkillStyles = [
  { border: 'border-purple-300/30', bg: 'bg-purple-200/10', text: 'text-purple-500', shadow: 'hover:shadow-purple-300/30' },
  { border: 'border-emerald-300/30', bg: 'bg-emerald-200/10', text: 'text-emerald-500', shadow: 'hover:shadow-emerald-300/30' },
  { border: 'border-orange-300/30', bg: 'bg-orange-200/10', text: 'text-orange-500', shadow: 'hover:shadow-orange-300/30' },
  { border: 'border-pink-300/30', bg: 'bg-pink-200/10', text: 'text-pink-500', shadow: 'hover:shadow-pink-300/30' },
  { border: 'border-blue-300/30', bg: 'bg-blue-200/10', text: 'text-blue-500', shadow: 'hover:shadow-blue-300/30' },
  { border: 'border-red-300/30', bg: 'bg-red-200/10', text: 'text-red-500', shadow: 'hover:shadow-red-300/30' }
];

export default function SoftSkillBadge({ skill, index, inView }: SoftSkillBadgeProps) {
  const style = softSkillStyles[index % softSkillStyles.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
      }}
      className={`text-nowrap text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 rounded-full border ${style.border} ${style.bg} ${style.text} font-medium hover:shadow-lg ${style.shadow} transition-all duration-300 cursor-default`}
    >
      {skill}
    </motion.div>
  );
}
