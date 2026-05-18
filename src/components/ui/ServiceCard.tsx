import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconClass: string;
  index: number;
}

export default function ServiceCard({ title, description, icon: Icon, iconClass, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex gap-2 sm:gap-4 items-center mb-4 sm:mb-6">
        {/* Icon */}
        <div className={`bg-gradient-to-br ${iconClass} w-11 h-11 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center text-white rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>

        {/* Title */}
        <h4 className="text-base sm:text-xl font-semibold md:font-bold text-gray-900 mb-0">
          {title}
        </h4>
      </div>

      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
        {description}
      </p>
    </motion.div>
  );
}
