import { motion } from 'framer-motion';
import SkillToolIcon from './SkillToolIcon';

interface ToolCardProps {
  name: string;
  icon: string;
  index: number;
  inView: boolean;
}

const hoverBorders = [
  'hover:border-purple-400/40',
  'hover:border-emerald-400/40',
  'hover:border-orange-400/40',
  'hover:border-pink-400/40',
  'hover:border-blue-400/40',
  'hover:border-red-400/40'
];

export default function ToolCard({ name, icon, index, inView }: ToolCardProps) {
  const borderHoverClass = hoverBorders[index % hoverBorders.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className={`shadow-md border border-gray-50 rounded-2xl p-3 sm:p-5 flex flex-col items-center justify-center ${borderHoverClass} 
      hover:-translate-y-10 transition-all duration-300`}
    >
      <SkillToolIcon type={icon} />
      <span className="font-semibold text-gray-800 text-center mt-1 sm:mt-2 text-sm sm:text-base">
        {name}
      </span>
    </motion.div>
  );
}
