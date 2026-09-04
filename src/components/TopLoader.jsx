import React from 'react';
import './TopLoader.css';

export default function TopLoader({ isLoading, progress }) {
  if (!isLoading && progress === 0) return null;

  return (
    <div className={`top-loader-bar ${isLoading ? 'active' : 'complete'}`} style={{ width: `${progress}%` }}>
      <div className="top-loader-glow"></div>
    </div>
  );
}
