import { Palette, Code, Server, Layers, Cpu, Cloud } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import ServiceCard from '../ui/ServiceCard';

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
        <SectionHeader
          titleNormal="What"
          titleGradient="I Offer"
          subtitle="End-to-end development and integration solutions built for performance, scalability, and real-world impact."
          className="mb-16"
        />

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              iconClass={service.iconClass}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
