import React, { useRef } from 'react';
import { X, Download, Printer, Code2 } from 'lucide-react';
import { portfolioAssets } from '../data/portfolioAssets';
import './ResumeModal.css';

export default function ResumeModal({ isOpen, onClose }) {
  const resumeFrameRef = useRef(null);

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = portfolioAssets.resumePdf;
    link.download = portfolioAssets.resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    const frameWindow = resumeFrameRef.current?.contentWindow;

    if (frameWindow) {
      frameWindow.focus();
      frameWindow.print();
      return;
    }

    window.open(portfolioAssets.resumePdf, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
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

            <button className="btn btn-secondary modal-btn" onClick={handlePrint}>
              <Printer size={16} />
              <span>Print PDF</span>
            </button>

            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={22} />
            </button>
          </div>
        </div>

        <div className="resume-pdf-viewer">
          <iframe
            ref={resumeFrameRef}
            src={portfolioAssets.resumePdf}
            title="Vikash Kumar Resume PDF"
            className="resume-pdf-frame"
          />
        </div>
      </div>
    </div>
  );
}
