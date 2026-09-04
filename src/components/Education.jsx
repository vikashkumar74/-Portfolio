import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Academic foundation in Computer Science and Engineering.
        </p>

        <div className="education-grid">
          {educationData.map((edu, idx) => (
            <div key={idx} className="education-card glass-card">
              <div className="edu-icon-badge">
                <GraduationCap size={22} color="#38bdf8" />
              </div>

              <div className="edu-header">
                <h3>{edu.degree}</h3>
                <span className="edu-institution">{edu.institution}</span>
              </div>

              <div className="edu-meta">
                <div className="meta-badge">
                  <Calendar size={14} color="#38bdf8" />
                  <span>{edu.period}</span>
                </div>
                <div className="meta-badge">
                  <MapPin size={14} color="#38bdf8" />
                  <span>{edu.location}</span>
                </div>
              </div>

              <p className="edu-highlight">{edu.highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
