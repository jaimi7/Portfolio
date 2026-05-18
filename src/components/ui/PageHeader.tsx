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
          <div className="flex items-center justify-between h-16 gap-2">
            <button
              onClick={onBack}
              className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-cyan-600 transition-colors font-semibold cursor-pointer text-sm sm:text-base flex-shrink-0"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden xs:inline sm:inline">{backLabel}</span>
              <span className="inline xs:hidden">Back</span>
            </button>
            <h1 className="text-sm sm:text-xl md:text-2xl font-bold text-gray-900 truncate text-center flex-1 min-w-0">
              {navTitle}
            </h1>
            <div className="w-16 sm:w-20 flex-shrink-0"></div>
          </div>
        </div>
      </div>

      {/* Main Title Content Section */}
      <motion.div
        ref={inViewRef}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center my-8 sm:my-16 px-4"
      >
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-6 font-serif">
          {titleNormal} <span className="gradient-text">{titleGradient}</span>
        </h2>
        <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-full sm:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
          {subtitle}
        </p>
      </motion.div>
    </>
  );
}
