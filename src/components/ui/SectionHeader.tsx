import { motion } from 'framer-motion';

interface SectionHeaderProps {
  titleNormal: string;
  titleGradient: string;
  subtitle: string;
  className?: string;
}

export default function SectionHeader({ titleNormal, titleGradient, subtitle, className = 'mb-16' }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`text-center ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
        {titleNormal} <span className="gradient-text">{titleGradient}</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
}
