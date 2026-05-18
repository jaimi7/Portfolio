import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function MessageForm() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validateForm = () => {
    const tempErrors: typeof errors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');

    // Simulate premium backend API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset form status back to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="premium-card p-8 relative overflow-hidden">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send a Message</h3>

        <form className="space-y-3 sm:space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === 'submitting'}
              className={`w-full text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3 border ${errors.name ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-cyan-400'
                } rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 disabled:bg-slate-50 disabled:text-slate-400`}
              placeholder="Your Name"
            />
            {errors.name && (
              <span className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === 'submitting'}
              className={`w-full text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3 border ${errors.email ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-cyan-400'
                } rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 disabled:bg-slate-50 disabled:text-slate-400`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <span className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              disabled={status === 'submitting'}
              className={`w-full text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3 border ${errors.message ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-cyan-400'
                } rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 resize-none disabled:bg-slate-50 disabled:text-slate-400`}
              placeholder="Tell me about your project or opportunity..."
            />
            {errors.message && (
              <span className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full px-6 py-4 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] active:scale-95 disabled:scale-100 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </form>

        {/* Dynamic Success / Error toasts inside the form box */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-800"
            >
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
              <div>
                <p className="font-semibold text-sm">Message sent successfully!</p>
                <p className="text-xs text-green-700">Thank you, I'll get back to you as soon as possible.</p>
              </div>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-800"
            >
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
              <div>
                <p className="font-semibold text-sm">Failed to send message.</p>
                <p className="text-xs text-red-700">Please try again or email directly.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="mt-6 text-sm text-gray-600 text-center">
          Or email directly at <a href="mailto:pateljaimi77@gmail.com" className="text-cyan-600 hover:underline">pateljaimi77@gmail.com</a>
        </p>
      </div>
    </motion.div>
  );
}
