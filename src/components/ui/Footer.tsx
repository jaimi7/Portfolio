import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="text-center p-6 border-t border-gray-200"
    >
      <p className="text-gray-600">
        © {currentYear} Jaimi Patel 
        <span className="text-cyan-600"> ♥ </span> 
      </p>
    </motion.div>
  );
}
