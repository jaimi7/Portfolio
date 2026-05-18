import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ShowMoreButtonProps {
  label: string;
  onClick: () => void;
  inView: boolean;
  delay?: number;
  className?: string;
}

export default function ShowMoreButton({
  label,
  onClick,
  inView,
  delay = 0.6,
  className = ''
}: ShowMoreButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className={`text-center ${className}`}
    >
      <button
        onClick={onClick}
        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        {label}
        <ArrowRight className="w-5 h-5" />
      </button>
    </motion.div>
  );
}
