import React from 'react';
import { Code, Layers, Zap, Award } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';
import './Achievements.css';

export default function Achievements() {
  const icons = {
    Code: <Code size={28} color="#38bdf8" />,
    Layers: <Layers size={28} color="#6366f1" />,
    Zap: <Zap size={28} color="#10b981" />
  };

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2 className="section-title">Key Achievements</h2>
        <p className="section-subtitle">
          Milestones achieved through continuous problem solving, rapid development, and consistent coding practice.
        </p>

        <div className="achievements-grid">
          {achievementsData.map((item, idx) => (
            <div key={idx} className="achievement-card glass-card">
              <div className="achievement-icon-wrapper">
                {icons[item.icon]}
              </div>

              <div className="achievement-body">
                <div className="achievement-number gradient-text">{item.number}</div>
                <h3 className="achievement-label">{item.label}</h3>
                <p className="achievement-detail">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
