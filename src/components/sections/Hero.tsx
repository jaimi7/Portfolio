import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import JaimiImage from '@/assets/Jaimi.png';
import OrbitingElements from '@/components/ui/OrbitingElements';

const skills = ['Vue', 'React', 'Node', 'Javascript', 'Python', 'FastAPI'];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 md:py-0 flex items-center justify-center relative overflow-hidden">
      {/* Clean white background with subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-32 w-64 h-64 bg-gradient-to-r from-sky-100/20 to-cyan-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-r from-cyan-100/20 to-teal-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Available for freelance work */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Available for freelance work
              </span>
            </motion.div>

            {/* Greeting and Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-xl text-gray-600 mb-2">Hey there! I'm</div>
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-gray-900 font-serif"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Jaimi Patel
              </motion.h1>
            </motion.div>

            {/* Title */}
            <motion.div
              className="text-xl md:text-2xl text-gray-700 font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I'm a <span className="text-cyan-600 font-bold">Software Developer</span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-600 leading-relaxed text-md sm:text-lg pb-2 sm:pb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I create web experiences that combine beautiful design with powerful functionality.
              Specializing in modern frameworks and cutting-edge technologies to build applications that make a difference.
            </motion.p>

            {/* Skills */}
            <motion.div
              className="flex flex-wrap gap-1 sm:gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 sm:px-4 sm:py-2 bg-pink-100 text-pink-700 rounded-xl text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 py-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 gradient-button flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 gradient-outline-button flex items-center gap-2"
              >
                <span className="flex items-center gap-2">
                  Let's Talk
                  <Mail className="w-4 h-4" />
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative flex flex-col items-center space-y-8"
          >
            {/* Advanced Profile Section */}
            <div className="relative w-full h-auto flex items-center justify-center">
              {/* Floating Code Window */}
              <motion.div
                className="hidden sm:block absolute -top-20 -right-28 w-78 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl z-20"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                style={{ transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="text-cyan-500">const developer = {'{'}</div>
                  <div className="pl-4 text-blue-500">
                    name: <span className="text-green-500">"Jaimi"</span>,
                  </div>
                  <div className="pl-4 text-blue-500">
                    skills: <span className="text-yellow-500">["Javascript", "Python"]</span>,
                  </div>
                  <div className="pl-4 text-blue-500">
                    passion: <span className="text-pink-500">"Building amazing apps"</span>
                  </div>
                  <div className="text-cyan-500">{'}'}</div>
                </div>
              </motion.div>

              {/* Central Avatar */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 z-10">
                {/* Morphing Blob Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-sky-400 via-cyan-500 to-teal-600 opacity-20 blur-2xl rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Profile Image with Glow */}
                <motion.div
                  className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-500 rounded-full"></div>
                  <img
                    src={JaimiImage}
                    alt="Jaimi Patel"
                    className="absolute w-full h-full rounded-full object-cover p-2"
                  />
                </motion.div>

                {/* Orbiting Elements */}
                <OrbitingElements />
              </div>

              {/* Stats Cards */}
              <motion.div
                className="absolute -bottom-10 left-0 sm:-bottom-32 sm:left-10 bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl z-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                style={{ transform: 'perspective(1000px) rotateX(-5deg) rotateY(5deg)' }}
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-1 sm:mb-2">10+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Projects</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -right-2 sm:-bottom-12 sm:-right-12 bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl z-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                style={{ transform: 'perspective(1000px) rotateX(-5deg) rotateY(5deg)' }}
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-1 sm:mb-2">4+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Years</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
