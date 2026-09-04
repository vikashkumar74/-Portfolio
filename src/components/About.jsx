import React from 'react';
import { User, Code2, Server, Database, GitBranch, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './About.css';

export default function About() {
  const highlights = [
    {
      icon: <Code2 size={24} color="#38bdf8" />,
      title: "Frontend Engineering",
      desc: "Creating responsive, accessible, and high-performance React.js applications with dynamic routing and clean component architecture."
    },
    {
      icon: <Server size={24} color="#6366f1" />,
      title: "Backend Development",
      desc: "Designing scalable RESTful APIs, request validation, authentication, and server logic using Node.js, Express.js, and PHP."
    },
    {
      icon: <Database size={24} color="#10b981" />,
      title: "Database Operations",
      desc: "Structuring efficient relational schemas in MySQL and document models in MongoDB with Mongoose schemas and index optimization."
    },
    {
      icon: <GitBranch size={24} color="#ec4899" />,
      title: "Workflow & E-Commerce",
      desc: "Extensive experience with WordPress/WooCommerce plugin customization, RMA return authorization workflows, and store management."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate about building robust web applications, solving complex algorithmic challenges, and writing clean, maintainable code.
        </p>

        <div className="about-grid">
          <div className="about-text-card glass-card">
            <div className="card-header-tag">
              <User size={18} color="#38bdf8" />
              <span>Developer Summary</span>
            </div>
            <h3>Full-Stack & Backend Focus</h3>
            <p>
              I am a <strong>Software Developer</strong> with hands-on experience building production-ready web applications across both the JavaScript/MERN stack and PHP/MySQL ecosystems.
            </p>
            <p>
              During my software engineering tenure at <strong>Webkul Software Pvt Ltd</strong> and web development internship at <strong>100Devs</strong>, I developed core features for return merchandise authorization (WooCommerce RMA), store locator plugin, and full-stack record management applications.
            </p>

            <div className="about-checklist">
              <div className="check-item">
                <CheckCircle2 size={18} color="#10b981" />
                <span>Strong foundation in Data Structures and Algorithms</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} color="#10b981" />
                <span>RESTful API design, debugging & version control</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} color="#10b981" />
                <span>Agile/SCRUM collaboration & technical communication</span>
              </div>
            </div>
          </div>

          <div className="about-cards-grid">
            {highlights.map((item, idx) => (
              <div key={idx} className="highlight-card glass-card">
                <div className="highlight-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
