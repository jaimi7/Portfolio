import { motion } from 'framer-motion';
import { Palette, Code, Server, Layers, Cpu, Cloud } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating responsive and user-friendly interfaces using HTML, CSS, Tailwind CSS, and Bootstrap."
  },
  {
    icon: Code,
    title: "Frontend Development",
    description: "Building scalable and high-performance applications using Vue.js (Nuxt) and React (Next.js)."
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Developing efficient server-side applications with Node.js and Python (FastAPI), using MySQL, MongoDB"
  },
  {
    icon: Layers,
    title: "Full Stack Development",
    description: "Delivering complete solutions including UI, backend integration, and testing with Cypress."
  },
  {
    icon: Cpu,
    title: "Software Development & DevOps",
    description: "Managing CI/CD, deployment, and containerization using Docker and modern DevOps tools."
  },
  {
    icon: Cloud,
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
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-4 items-center mb-6">
                {/* Icon */}
                <div className="w-16 h-16 flex-shrink-0  flex items-center justify-center bg-gradient-to-br from-accent to-accent/80 text-white rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
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
