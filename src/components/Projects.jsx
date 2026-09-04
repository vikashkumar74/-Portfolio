import React, { useState } from 'react';
import { ExternalLink, Github, Heart, Check } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import './Projects.css';

const LIKES_STORAGE_KEY = 'vikash_portfolio_project_likes_v1';

export default function Projects({ onTriggerTopLoader }) {
  const [likesState, setLikesState] = useState(() => {
    try {
      const saved = localStorage.getItem(LIKES_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const state = {};
        projectsData.forEach((p) => {
          if (parsed[p.id] && typeof parsed[p.id].count === 'number') {
            state[p.id] = parsed[p.id];
          } else {
            state[p.id] = { count: p.initialLikes, liked: false };
          }
        });
        return state;
      }
    } catch (err) {
      console.error('Failed to parse saved project likes:', err);
    }

    const state = {};
    projectsData.forEach((p) => {
      state[p.id] = { count: p.initialLikes, liked: false };
    });
    return state;
  });

  const handleLike = (id) => {
    setLikesState((prev) => {
      const current = prev[id] || { count: 0, liked: false };
      const newLiked = !current.liked;
      const updated = {
        ...prev,
        [id]: {
          count: newLiked ? current.count + 1 : Math.max(0, current.count - 1),
          liked: newLiked
        }
      };

      try {
        localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save project likes to localStorage:', err);
      }

      return updated;
    });
  };

  const handleProjectLinkClick = (url) => {
    if (!url) return;
    onTriggerTopLoader();
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Real-world applications and enterprise modules featuring full-stack architectures, real-time collaboration, and e-commerce workflows.
        </p>

        <div className="projects-grid">
          {projectsData.map((project) => {
            const likeInfo = likesState[project.id] || { count: project.initialLikes, liked: false };

            return (
              <div key={project.id} className="project-card glass-card">
                {/* Visual Image Preview */}
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-image-overlay"></div>
                  <span className="project-category-badge">{project.category}</span>
                </div>

                <div className="project-body">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="project-company">{project.company}</span>
                  </div>

                  <p className="project-desc">{project.description}</p>

                  <ul className="project-points">
                    {project.points.map((pt, idx) => (
                      <li key={idx}>
                        <Check size={14} color="#38bdf8" className="bullet-icon" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div className="project-tech-stack">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="tech-badge">{t}</span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="project-actions">
                    {project.hasLive && (
                      <button
                        className="btn btn-primary project-action-btn"
                        onClick={() => handleProjectLinkClick(project.liveDemo)}
                      >
                        <span className="pulse-dot-green"></span>
                        <span>Live Demo</span>
                        <ExternalLink size={15} />
                      </button>
                    )}

                    {project.hasCode && (
                      <button
                        className="btn btn-secondary project-action-btn"
                        onClick={() => handleProjectLinkClick(project.github)}
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </button>
                    )}

                    <button
                      className={`btn like-btn ${likeInfo.liked ? 'liked' : ''}`}
                      onClick={() => handleLike(project.id)}
                      title={likeInfo.liked ? "Unlike project" : "Like project"}
                    >
                      <Heart
                        size={17}
                        className={likeInfo.liked ? 'heart-filled' : ''}
                      />
                      <span>{likeInfo.count}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
