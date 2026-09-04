import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          Hands-on software engineering roles building production features, REST APIs, and responsive full-stack applications.
        </p>

        <div className="timeline-wrapper">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-icon">
                  <Briefcase size={18} color="#38bdf8" />
                </div>
              </div>

              <div className="timeline-content glass-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company-group">
                      <span className="exp-company">{exp.company}</span>
                      <span className="exp-badge">{exp.type}</span>
                    </div>
                  </div>

                  <div className="exp-meta">
                    <div className="meta-badge">
                      <Calendar size={14} color="#38bdf8" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="meta-badge">
                      <MapPin size={14} color="#38bdf8" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="exp-points-list">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <CheckCircle2 size={16} color="#10b981" className="point-icon" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
