import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Cloud, Zap, Lightbulb } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const storyPoints = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Foundation",
      description: "Started my journey building responsive web applications with modern JavaScript frameworks"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Full Stack Evolution",
      description: "Expanded to backend development, building scalable SaaS, CRM, and HRMS platforms"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "DevOps Integration",
      description: "Embraced cloud technologies and CI/CD pipelines to deliver robust production systems"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Oracle Transformation",
      description: "Now specializing in Oracle Cloud & Integration, connecting enterprise systems with AI-powered solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            About <span className="gradient-text">My Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From crafting beautiful user interfaces to architecting enterprise integrations, 
            I've evolved as a developer who bridges the gap between modern web technologies 
            and enterprise systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I began my career as a frontend developer, passionate about creating intuitive 
                user experiences with Vue.js and React. This foundation taught me the importance 
                of user-centered design and clean, maintainable code.
              </p>
              <p>
                As I grew, I ventured into full-stack development, building real-world SaaS 
                platforms, CRM systems, and HRMS solutions. Working with production environments 
                taught me about scalability, security, and the importance of robust DevOps practices.
              </p>
              <p>
                Today, I'm transitioning into the Oracle ecosystem, focusing on cloud integration 
                and enterprise systems. I'm particularly excited about combining traditional enterprise 
                solutions with modern AI capabilities to create intelligent, automated workflows.
              </p>
              <div className="mt-6 p-4 bg-purple-100/50 border-l-4 border-purple-500 rounded-lg">
                <p className="font-medium text-purple-700">
                  "I enjoy solving complex system problems and building seamless integrations that 
                  connect disparate technologies into cohesive solutions."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Milestones</h3>
            {storyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="premium-card p-6 flex items-start gap-4"
              >
                <div className="p-3 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 text-white rounded-lg shadow-lg">
                  {point.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{point.title}</h4>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Highlight achievement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100/50 border border-green-200/50 rounded-full">
            <Zap className="w-5 h-5 text-green-700" />
            <span className="text-green-700 font-medium">
              Successfully led Angular → Nuxt 3 migration, improving performance by 40%
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
