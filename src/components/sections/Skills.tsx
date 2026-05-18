import { useInView } from 'react-intersection-observer';
import { Code2, Wrench, BrainCircuit } from 'lucide-react';
import { technicalSkills, tools, softSkills } from '@/data/skills';
import SectionHeader from '../ui/SectionHeader';
import SkillProgress from '@/components/ui/SkillProgress';
import ToolCard from '@/components/ui/ToolCard';
import SoftSkillBadge from '@/components/ui/SoftSkillBadge';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleNormal="Technical"
          titleGradient="Expertise"
          subtitle="A comprehensive skill set spanning modern web development, cloud technologies, and enterprise integration systems."
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 lg:grid-cols-5">
          {/* Left Side: Technical Skills */}
          <div className='md:col-span-1 lg:col-span-2 md:pr-12 lg:pr-20' ref={ref}>
            <div className="flex items-center gap-3 mb-10">
              <Code2 className="w-7 h-7 text-orange-400" />
              <h3 className="text-2xl font-bold text-gray-600">Technical Expertise</h3>
            </div>

            <div className="space-y-1">
              {technicalSkills.map((skill, index) => (
                <SkillProgress
                  key={skill.name}
                  name={skill.name}
                  level={skill.level || 0}
                  inView={inView}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Tools & Soft Skills */}
          <div className="md:col-span-2 lg:col-span-3 space-y-14 mt-12 md:mt-0">
            {/* Tools */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Wrench className="w-7 h-7 text-red-400" />
                <h3 className="text-2xl font-bold text-gray-600">
                  Tools & Technologies
                </h3>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
                {tools.map((tool, index) => (
                  <ToolCard
                    key={tool.name}
                    name={tool.name}
                    icon={tool.icon}
                    index={index}
                    inView={inView}
                  />
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <BrainCircuit className="w-7 h-7 text-orange-400" />
                <h3 className="text-2xl font-bold text-gray-600">Soft Skills</h3>
              </div>

              <div className="flex flex-wrap gap-4">
                {softSkills.map((skill, index) => (
                  <SoftSkillBadge
                    key={skill}
                    skill={skill}
                    index={index}
                    inView={inView}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}