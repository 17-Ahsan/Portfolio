import React, { useEffect, useState } from "react";

export default function ProjectModal({ project, onClose }) {
  const [showClass, setShowClass] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      // Trigger animation on next tick
      const timer = setTimeout(() => setShowClass(true), 50);
      setIframeLoaded(false); // Reset loading state for new project
      return () => {
        clearTimeout(timer);
      };
    } else {
      document.body.style.overflow = "";
      setShowClass(false);
    }
  }, [project]);

  if (!project) return null;

  const handleClose = () => {
    setShowClass(false);
    // Wait for animation to finish before calling parent onClose
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleBackdropClick = (e) => {
    if (e.target.id === "projectModalBackdrop") {
      handleClose();
    }
  };

  return (
    <div
      className={`project-modal-backdrop ${showClass ? "show" : ""}`}
      id="projectModalBackdrop"
      style={{ display: "flex" }}
      onClick={handleBackdropClick}
    >
      <div className="project-modal">
        <button className="modal-close" id="modalClose" onClick={handleClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className={`modal-image ${iframeLoaded ? "has-iframe" : ""}`} id="modalImage">
          {project.liveLink ? (
            <>
              <iframe
                src={project.liveLink}
                title={project.title}
                className={`modal-iframe-preview ${iframeLoaded ? "loaded" : ""}`}
                loading="lazy"
                onLoad={() => setIframeLoaded(true)}
              />
              {!iframeLoaded && (
                <div className="modal-placeholder-skeleton">
                  {project.placeholder}
                </div>
              )}
            </>
          ) : (
            project.placeholder
          )}
        </div>
        <div className="modal-body">
          <h3 id="modalTitle">{project.title}</h3>
          <p id="modalDesc">{project.fullDesc || project.desc}</p>
          <div className="modal-tech" id="modalTech">
            {project.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="modal-links" id="modalLinks">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-main btn-dark"
                style={{ fontSize: "0.75rem", padding: "10px 24px", textDecoration: "none" }}
              >
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            )}
            <button className="btn-main btn-outline" style={{ fontSize: "0.75rem", padding: "10px 24px" }}>
              <i className="fab fa-github"></i> GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
