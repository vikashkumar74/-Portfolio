import React, { useState } from 'react';
import { Code, Cpu, Database, ShoppingBag, Wrench, CheckCircle } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categoryIcons = {
    "Languages": <Code size={18} color="#38bdf8" />,
    "Frameworks / Libraries": <Cpu size={18} color="#6366f1" />,
    "Databases": <Database size={18} color="#10b981" />,
    "Commerce Platforms": <ShoppingBag size={18} color="#ec4899" />,
    "Tools": <Wrench size={18} color="#f59e0b" />,
    "Core Competencies": <CheckCircle size={18} color="#8b5cf6" />
  };

  const categories = ['All', ...Object.keys(skillsData)];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Skills and competencies specified in resume, honed through full-stack development and practical software engineering.
        </p>

        {/* Category Filters */}
        <div className="skills-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, items]) => {
            if (activeCategory !== 'All' && activeCategory !== category) return null;

            return (
              <div key={category} className="skill-category-card glass-card">
                <div className="category-header">
                  <div className="category-icon-box">{categoryIcons[category]}</div>
                  <h3>{category}</h3>
                </div>

                <div className="skills-tags-container">
                  {items.map((skill, idx) => (
                    <div key={idx} className="skill-badge-item">
                      <span className="skill-dot"></span>
                      <span className="skill-name">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
