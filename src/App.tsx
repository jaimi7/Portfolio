import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useDarkMode } from './components/common/DarkModeToggle';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import ProjectsPage from './components/pages/ProjectsPage';
import ExperiencePage from './components/pages/ExperiencePage';
import { DarkModeProvider } from './components/common/DarkModeToggle';

function AppContent() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
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
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Routes>
        <Route path="/" element={
          <>
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <main>
              <Hero />
              <About />
              <Services />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </>
        } />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300"
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
      <DarkModeProvider>
        <AppContent />
      </DarkModeProvider>
    </Router>
  );
}

export default App;
