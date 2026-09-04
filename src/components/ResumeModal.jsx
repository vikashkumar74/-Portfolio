import React from 'react';
import { X, Download, Printer, CheckCircle2, Briefcase, GraduationCap, Code2, Award, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { personalInfo, skillsData, experienceData, projectsData, educationData, achievementsData } from '../data/portfolioData';
import './ResumeModal.css';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Vikash_Kumar_Resume.pdf';
    link.download = 'Vikash_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Toolbar */}
        <div className="resume-modal-header">
          <div className="modal-title-group">
            <Code2 size={20} color="#38bdf8" />
            <span>Vikash Kumar - Official Resume</span>
          </div>

          <div className="modal-actions">
            <button className="btn btn-primary modal-btn" onClick={handleDownload}>
              <Download size={16} />
              <span>Download PDF</span>
            </button>

            <button className="btn btn-secondary modal-btn print-hide" onClick={handlePrint}>
              <Printer size={16} />
              <span>Print</span>
            </button>

            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body - Styled Document */}
        <div className="resume-document-paper">
          <header className="resume-doc-header">
            <h1 className="doc-name">{personalInfo.name}</h1>
            <p className="doc-role">{personalInfo.title}</p>
            
            <div className="doc-contacts">
              <span><MapPin size={14} /> {personalInfo.location}</span>
              <span><Mail size={14} /> {personalInfo.email}</span>
              <span><Phone size={14} /> {personalInfo.phone}</span>
              <span><Code2 size={14} /> LeetCode</span>
              <span><Linkedin size={14} /> LinkedIn</span>
              <span><Github size={14} /> GitHub</span>
            </div>
          </header>

          {/* Doc Section: Summary */}
          <div className="doc-section">
            <h2 className="doc-section-heading">Summary</h2>
            <p className="doc-summary">{personalInfo.summary}</p>
          </div>

          {/* Doc Section: Skills */}
          <div className="doc-section">
            <h2 className="doc-section-heading">Skills</h2>
            <div className="doc-skills-list">
              {Object.entries(skillsData).map(([cat, list]) => (
                <div key={cat} className="doc-skill-row">
                  <strong>{cat}:</strong> {list.join(', ')}
                </div>
              ))}
            </div>
          </div>

          {/* Doc Section: Experience */}
          <div className="doc-section">
            <h2 className="doc-section-heading">Experience</h2>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="doc-item">
                <div className="doc-item-header">
                  <div>
                    <strong className="doc-item-title">{exp.company}</strong>
                    <span className="doc-item-sub"> — {exp.role}</span>
                  </div>
                  <div className="doc-item-meta">{exp.location} | {exp.period}</div>
                </div>
                <ul className="doc-bullet-list">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Doc Section: Projects */}
          <div className="doc-section">
            <h2 className="doc-section-heading">Projects</h2>
            {projectsData.map((proj, idx) => (
              <div key={idx} className="doc-item">
                <div className="doc-item-header">
                  <strong className="doc-item-title">{proj.title}</strong>
                  <span className="doc-item-meta">{proj.company}</span>
                </div>
                <ul className="doc-bullet-list">
                  {proj.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Doc Section: Education */}
          <div className="doc-section">
            <h2 className="doc-section-heading">Education</h2>
            {educationData.map((edu, idx) => (
              <div key={idx} className="doc-item-simple">
                <div>
                  <strong>{edu.institution}</strong> — {edu.degree}
                </div>
                <div className="doc-item-meta">{edu.location} ({edu.period})</div>
              </div>
            ))}
          </div>

          {/* Doc Section: Achievements */}
          <div className="doc-section">
            <h2 className="doc-section-heading">Achievements</h2>
            <ul className="doc-bullet-list">
              {achievementsData.map((ach, idx) => (
                <li key={idx}><strong>{ach.label} ({ach.number}):</strong> {ach.detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
