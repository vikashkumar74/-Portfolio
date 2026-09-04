import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo-icon">
            <Code2 size={20} color="#38bdf8" />
          </div>
          <span className="logo-text">VIKASH KUMAR</span>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Vikash Kumar. Built with React.js & Pure Custom CSS.
        </p>

        <button className="back-to-top-btn" onClick={scrollToTop} title="Back to top">
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
