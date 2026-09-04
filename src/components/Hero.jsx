import React from 'react';
import { FileText, ArrowRight, Github, Linkedin, Code, MapPin, Mail, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export default function Hero({ onNavigate, onOpenResume }) {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    onNavigate();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    onNavigate();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = (e) => {
    if (e) e.preventDefault();
    onNavigate();
    
    // Direct PDF file download
    const link = document.createElement('a');
    link.href = '/Vikash_Kumar_Resume.pdf';
    link.download = 'Vikash_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Open resume modal preview
    onOpenResume();
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={14} color="#38bdf8" />
            <span>Available for Software Engineering Roles</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <h2 className="hero-subtitle">{personalInfo.title}</h2>

          <p className="hero-description">{personalInfo.summary}</p>

          <div className="hero-meta">
            <div className="meta-item">
              <MapPin size={16} color="#38bdf8" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="meta-item">
              <Mail size={16} color="#38bdf8" />
              <span>{personalInfo.email}</span>
            </div>
          </div>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary" onClick={handleScrollToProjects}>
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>

            <button className="btn btn-secondary" onClick={handleDownloadResume}>
              <FileText size={18} />
              <span>Download Resume</span>
            </button>

            <a href="#contact" className="btn btn-outline" onClick={handleScrollToContact}>
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              title="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              title="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              title="LeetCode Profile"
            >
              <Code size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card-wrapper">
            {/* User Profile Avatar */}
            <div className="profile-image-container">
              <div className="profile-glow-ring"></div>
              <img
                src="/profile.jpg"
                alt="Vikash Kumar"
                className="profile-img"
              />
              <div className="online-status-badge" title="Active Developer">
                <span className="pulse-dot"></span>
                <span>Active</span>
              </div>
            </div>

            <div className="code-window-card">
              <div className="window-header">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="window-title">
                  <Terminal size={14} /> vikash-dev.config.js
                </div>
              </div>
              <div className="window-body">
                <pre>
                  <code>
                    <span className="code-keyword">const</span> developer = &#123;<br />
                    {"  "}name: <span className="code-string">'{personalInfo.name}'</span>,<br />
                    {"  "}role: <span className="code-string">'{personalInfo.title}'</span>,<br />
                    {"  "}stack: [<span className="code-string">'React.js'</span>, <span className="code-string">'Node.js'</span>, <span className="code-string">'PHP'</span>, <span className="code-string">'MySQL'</span>, <span className="code-string">'MongoDB'</span>],<br />
                    {"  "}status: <span className="code-string">'Production Ready'</span><br />
                    &#125;;
                  </code>
                </pre>
              </div>
            </div>

            {/* Float Cards */}
            <div className="hero-stat-floating float-1">
              <div className="stat-num gradient-text">500+</div>
              <div className="stat-text">LeetCode & Codewars</div>
            </div>

            <div className="hero-stat-floating float-2">
              <div className="stat-num gradient-text">30+</div>
              <div className="stat-text">Full-Stack Web Apps</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
