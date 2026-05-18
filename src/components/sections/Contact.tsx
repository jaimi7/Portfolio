import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Globe, Code, MapPin } from 'lucide-react';
import MessageForm from '@/components/ui/MessageForm';
import SectionHeader from '../ui/SectionHeader';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'pateljaimi77@gmail.com',
      href: 'mailto:pateljaimi77@gmail.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 9974087135',
      href: 'tel:+919974087135',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/jaimi-patel',
      href: 'https://www.linkedin.com/in/jaimi-patel-080084209/',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Code className="w-5 h-5" />,
      label: 'GitHub',
      value: 'github.com/jaimi7',
      href: 'https://github.com/jaimi7',
      color: 'from-gray-700 to-gray-900'
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleNormal="Let's"
          titleGradient="Connect"
          subtitle="I'm always interested in discussing new opportunities, challenging projects, and innovative ideas in enterprise integration and cloud technologies."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === 'Email' || contact.label === 'Phone' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="premium-card p-6 flex items-center gap-4 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-br from-sky-400 via-cyan-400 to-teal-400 text-white rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{contact.label}</p>
                    <p className="font-medium text-gray-900 group-hover:text-cyan-600 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex items-center gap-3 text-gray-600"
            >
              <MapPin className="w-5 h-5 text-cyan-600" />
              <span>Available for remote and hybrid opportunities</span>
            </motion.div>
          </motion.div>

          {/* Message Form */}
          <MessageForm />
        </div>

      </div>
    </section>
  );
}
