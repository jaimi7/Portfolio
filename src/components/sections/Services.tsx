import { motion } from 'framer-motion';
import { Palette, Code, Server, Layers, Cpu, Cloud } from 'lucide-react';

const services = [
  {
    icon: Palette,
    iconClass: 'from-red-400 via-pink-400 to-orange-400 ',
    title: "UI/UX Design",
    description: "Creating responsive and user-friendly interfaces using HTML, CSS, Tailwind CSS, and Bootstrap."
  },
  {
    icon: Code,
    iconClass: 'from-orange-400 via-amber-400 to-yellow-400 ',
    title: "Frontend Development",
    description: "Building scalable and high-performance applications using Vue.js (Nuxt) and React (Next.js)."
  },
  {
    icon: Server,
    iconClass: 'from-purple-400 via-violet-400 to-indigo-400 ',
    title: "Backend Development",
    description: "Developing efficient server-side applications with Node.js and Python (FastAPI), using MySQL, MongoDB"
  },
  {
    icon: Layers,
    iconClass: 'from-lime-400 via-green-400 to-emerald-400 ',
    title: "Full Stack Development",
    description: "Delivering complete solutions including UI, backend integration, and testing with Cypress."
  },
  {
    icon: Cpu,
    iconClass: 'from-indigo-400 via-blue-400 to-sky-400 ',
    title: "Software Development",
    description: "Managing CI/CD, deployment, and containerization using Docker and modern DevOps tools."
  },
  {
    icon: Cloud,
    iconClass: 'from-fuchsia-500 via-pink-500 to-rose-500 ',
    title: "Oracle Cloud & APEX",
    description: "Developing enterprise solutions with Oracle APEX, OIC, and BIP, using SQL and PL/SQL."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            What <span className="gradient-text">I Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end development and integration solutions built for performance, scalability, and real-world impact.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-4 items-center mb-6">
                {/* Icon */}
                <div className={`bg-gradient-to-br ${service.iconClass} w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center text-white rounded-lg shadow-lg group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h4>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
