import React, { useState } from 'react';
import TopLoader from './components/TopLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import './index.css';

export default function App() {
  const [loaderState, setLoaderState] = useState({ isLoading: false, progress: 0 });
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const triggerTopLoader = () => {
    setLoaderState({ isLoading: true, progress: 30 });

    setTimeout(() => {
      setLoaderState({ isLoading: true, progress: 75 });
    }, 150);

    setTimeout(() => {
      setLoaderState({ isLoading: false, progress: 100 });
    }, 450);

    setTimeout(() => {
      setLoaderState({ isLoading: false, progress: 0 });
    }, 800);
  };

  const handleOpenResume = () => {
    triggerTopLoader();
    setTimeout(() => {
      setIsResumeOpen(true);
    }, 250);
  };

  return (
    <div className="app-main-wrapper">
      {/* YouTube Style Top Progress Loader Bar */}
      <TopLoader isLoading={loaderState.isLoading} progress={loaderState.progress} />

      {/* Ambient Lighting Layers */}
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>
      <div className="bg-glow-3"></div>

      {/* Sticky Header Nav */}
      <Navbar onNavigate={triggerTopLoader} onOpenResume={handleOpenResume} />

      {/* Main Sections */}
      <main>
        <Hero onNavigate={triggerTopLoader} onOpenResume={handleOpenResume} />
        <About />
        <Skills />
        <Experience />
        <Projects onTriggerTopLoader={triggerTopLoader} />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View & Download Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
