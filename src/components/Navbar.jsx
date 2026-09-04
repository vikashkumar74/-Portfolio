import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Code2, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Navbar.css';

export default function Navbar({ onNavigate, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    onNavigate();
    setMobileMenuOpen(false);

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#hero" className="navbar-logo" onClick={(e) => handleNavClick(e, 'hero')}>
          <div className="logo-icon">
            <Code2 size={20} color="#38bdf8" />
          </div>
          <span className="logo-text">
            VIKASH<span className="logo-dot">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <a
            href="#about"
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'about')}
          >
            About
          </a>
          <a
            href="#skills"
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'skills')}
          >
            Skills
          </a>
          <a
            href="#experience"
            className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'experience')}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'projects')}
          >
            Projects
          </a>
          <a
            href="#education"
            className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'education')}
          >
            Education
          </a>
          <a
            href="#contact"
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact
          </a>
        </nav>

        <div className="navbar-actions">
          <button className="btn btn-outline resume-nav-btn" onClick={onOpenResume}>
            <FileText size={16} />
            <span>Resume</span>
          </button>
          
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
          <a href="#education" onClick={(e) => handleNavClick(e, 'education')}>Education</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          <button className="btn btn-primary" onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}>
            <FileText size={16} />
            <span>Download Resume</span>
          </button>
        </div>
      )}
    </header>
  );
}
