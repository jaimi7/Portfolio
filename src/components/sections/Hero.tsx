import { motion } from 'framer-motion';
import { ArrowRight, Code, Globe, Mail, MessageCircle } from 'lucide-react';
import JaimiImage from '../../assets/Jaimi.png';

const skills = ['Vue', 'React', 'Node', 'Javascript', 'Python', 'FastAPI'];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Clean white background with subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-32 w-64 h-64 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
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
              I'm a <span className="text-purple-600 font-bold">Software Developer</span> |
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-gray-600 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I create web experiences that combine beautiful design with powerful functionality. 
              Specializing in modern frameworks and cutting-edge technologies to build applications that make a difference.
            </motion.p>

            {/* Skills */}
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-pink-100 text-pink-700 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
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

            {/* Social Links */}
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <span className="text-gray-600 mr-2">Follow me:</span>
              <a
                href="https://github.com/jaimipatel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Code className="w-5 h-5 text-gray-700" />
              </a>
              <a
                href="https://linkedin.com/in/jaimi-patel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Globe className="w-5 h-5 text-gray-700" />
              </a>
              <a
                href="https://twitter.com/jaimipatel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-gray-700" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative flex flex-col items-center space-y-8"
          >
            {/* Profile Image with Abstract Ring */}
            <div className="relative">
              {/* Abstract colorful ring */}
              <div className="absolute -top-8 -rigth-4  inset-0 w-80 h-80 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-60 animate-spin" />
              <div className="absolute -top-4 -rigth-4 inset-2 w-72 h-72 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full opacity-50 animate-spin" style={{ animationDirection: 'reverse' }} />
              
              {/* Profile Image */}
              <div className="relative left-6 w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src={JaimiImage} 
                  alt="Jaimi Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Code Snippet */}
            <motion.div
              className="absolute -top-12 -right-12 bg-white rounded-lg shadow-lg p-4 border border-gray-200 max-w-xs"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <pre className="text-xs text-gray-700 font-mono">
{`const developer = {
  name: "Jaimi",
  skills: ["Javascript", "Python"],
  passion: "Building amazing apps"
};`}
              </pre>
            </motion.div>

            {/* Stats Cards */}
            <div className="flex gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-gray-900">10+</div>
                <div className="text-gray-600">Projects</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-gray-900">4+</div>
                <div className="text-gray-600">Years</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
