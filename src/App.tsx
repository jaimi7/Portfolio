import { useState, useEffect, lazy, Suspense } from 'react';
import { ArrowUp } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/sections/Hero';

// Lazy load heavy homepage sections and secondary pages
const About = lazy(() => import('@/components/sections/About'));
const Services = lazy(() => import('@/components/sections/Services'));
const Skills = lazy(() => import('@/components/sections/Skills'));
const Experience = lazy(() => import('@/components/sections/Experience'));
const Education = lazy(() => import('@/components/sections/Education'));
const Projects = lazy(() => import('@/components/sections/Projects'));
const Contact = lazy(() => import('@/components/sections/Contact'));
const ProjectsPage = lazy(() => import('@/components/pages/ProjectsPage'));
const ExperiencePage = lazy(() => import('@/components/pages/ExperiencePage'));

// Premium, high-end loading component for lazy suspense fallbacks
function PageLoader() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-slate-100 rounded-full"></div>
        <div className="absolute top-0 w-16 h-16 border-4 border-t-cyan-500 border-r-cyan-500 rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-sm font-semibold bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-pulse tracking-wide">
        Loading Portfolio...
      </p>
    </div>
  );
}

function AppContent() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <main>
                <Hero />
                <About />
                <Services />
                <Skills />
                <Experience />
                <Education />
                <Projects />
                <Contact />
              </main>
              <Footer />
            </>
          } />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
      </Suspense>
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
