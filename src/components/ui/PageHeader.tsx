import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
  navTitle: string;
  titleNormal: string;
  titleGradient: string;
  subtitle: string;
  inView: boolean;
  inViewRef: (node?: Element | null) => void;
  backLabel?: string;
  onBack?: () => void;
}

export default function PageHeader({
  navTitle,
  titleNormal,
  titleGradient,
  subtitle,
  inView,
  inViewRef,
  backLabel = 'Back to Home',
  onBack = () => window.history.back()
}: PageHeaderProps) {
  return (
    <>
      {/* Top Bar Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors font-semibold cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
              {backLabel}
            </button>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">{navTitle}</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Main Title Content Section */}
      <motion.div
        ref={inViewRef}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center my-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
          {titleNormal} <span className="gradient-text">{titleGradient}</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </motion.div>
    </>
  );
}
