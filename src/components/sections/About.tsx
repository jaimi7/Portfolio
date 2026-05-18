import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDownCircle, Zap } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import HighlightPill from '../ui/HighlightPill';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <SectionHeader
          titleNormal="About"
          titleGradient="My Journey"
          subtitle="From crafting modern frontend experiences to building scalable full stack solutions, I've evolved as a developer focused on clean architecture, performance and real-world problem solving."
        />

        <div className="grid md:grid-cols-3 gap-10 items-center mb-12 sm:mb-16 pt-8 sm:pt-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='col-span-2'
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">My Story</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                I started my career as a <span className="font-semibold">frontend developer</span>, building responsive and user-focused applications
                using <span className="font-semibold">JavaScript, Vue.js, and React.js</span>, along with basic backend development using PHP.
                This foundation helped me develop a strong understanding of <span className="font-semibold">clean architecture, reusable components</span>,
                and intuitive user experiences.
              </p>

              <p>
                As I grew into <span className="font-semibold">full stack development</span>, I worked on real-world
                <span className="font-semibold"> SaaS platforms, CRM systems, HRMS solutions, and enterprise applications</span>
                using <span className="font-semibold">Node.js, Python (FastAPI), MongoDB, and MySQL</span>.
              </p>

              <p>
                Working in production environments gave me hands-on experience with
                <span className="font-semibold"> scalable system design, API development, cloud platforms</span>,
                and DevOps practices using <span className="font-semibold">AWS, Azure, Docker, and CI/CD pipelines</span>.
              </p>

              <p>
                I also focus heavily on <span className="font-semibold">engineering quality and testing</span>,
                using tools like <span className="font-semibold">Cypress, Vitest, Storybook, and Playwright</span>
                to build reliable and maintainable applications.
              </p>

              <p>
                Currently, I’m expanding my expertise in <span className="font-semibold">enterprise and cloud technologies</span>,
                focusing on <span className="font-semibold">integration systems, automation, and AI-driven solutions</span>
                to build smarter and more connected digital experiences.
              </p>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-cyan-100/50 border-l-4 border-cyan-500 rounded-lg">
                <p className="text-sm sm:text-base font-medium text-cyan-700">
                  "Passionate about solving complex technical challenges and creating scalable,
                  high-performance systems that seamlessly connect technologies and deliver meaningful user experiences."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="sm:space-y-6 flex flex-row sm:flex-col  gap-3 items-center md:items-end w-full"
          >
            <img
              src="/favicon.png"
              alt="Jaimi Patel"
              className="h-auto w-1/3 md:w-full max-w-[150px] md:max-w-none rounded-2xl shadow-md border border-slate-100"
              loading="lazy"
            />
            <a
              href="/Jaimi_Patel_CV.pdf"
              download="Jaimi_Patel_CV.pdf"
              className="w-full text-nowrap md:w-auto px-8 py-3 gradient-button flex items-center gap-3 font-semibold justify-center cursor-pointer"
            >
              Download CV
              <ArrowDownCircle className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Highlight achievement */}
        <HighlightPill
          icon={Zap}
          text="Successfully led Angular → Nuxt 3 migration, improving performance by 40%"
          inView={inView}
          delay={0.8}
          className="text-center mt-6 sm:mt-12"
        />
      </div>
    </section>
  );
}
