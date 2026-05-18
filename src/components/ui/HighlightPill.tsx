import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface HighlightPillProps {
  icon: LucideIcon;
  text: string | React.ReactNode;
  inView: boolean;
  delay?: number;
  className?: string;
}

export default function HighlightPill({
  icon: Icon,
  text,
  inView,
  delay = 0.8,
  className = 'text-center mt-16'
}: HighlightPillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-green-100/50 border border-green-200/50 rounded-full max-w-full shadow-sm text-left sm:text-center">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-700 flex-shrink-0" />
        <span className="text-green-700 font-medium text-xs sm:text-sm md:text-base break-words leading-relaxed">
          {text}
        </span>
      </div>
    </motion.div>
  );
}
