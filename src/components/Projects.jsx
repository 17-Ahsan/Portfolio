import React, { useState, useRef, useEffect } from "react";

export const projects = [
  {
    title: "DEON",
    tag: "Single Page Application",
    desc: "A fully responsive single-page portfolio application...",
    fullDesc:
      "A fully responsive single-page portfolio application built to showcase my professional profile, technical skills, featured projects, and services. The application features smooth scrolling, interactive project cards with modal previews, light and dark theme support, animated UI components, and a modern user experience. It is optimized for desktop and mobile devices, providing recruiters and clients with an engaging way to explore my work and experience.",
    tech: [
      "React",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
      "Font Awesome",
      "Netlify",
    ],
    placeholder: "DEON",
    liveLink: "https://deon-app.netlify.app/",
  },
  {
    title: "MotorsHub",
    tag: "Automotive Website",
    desc: "MotorsHub is a responsive automotive website designed...",
    fullDesc:
      "MotorsHub is a responsive automotive website designed to deliver a premium browsing experience for car enthusiasts and potential buyers. The website features a modern hero section, interactive vehicle listings, smooth animations, intuitive navigation, and a mobile-friendly layout. Built with a focus on performance, clean UI, and responsive design, it demonstrates the ability to create visually engaging and user-centric automotive web applications.",
    tech: ["JavaScript", "HTML5", "CSS", "Bootstrap5", "Netlify"],
    placeholder: "MH",
    liveLink: "https://motorshub.netlify.app/",
  },
  {
    title: "Medtronic",
    tag: "Medtronic Landing Page",
    desc: "A healthcare web base landing page designed with...",
    fullDesc:
      "A healthcare web base landing page designed with a strong focus on user experience, accessibility, and modern UI principles. The website features engaging animations, intuitive navigation, service highlights, product showcases, call-to-action sections, and a mobile-first responsive layout. Built to demonstrate front-end development skills while delivering a professional and visually appealing healthcare web experience.",
    tech: ["React", "Tailwind CSS", "Netlify"],
    placeholder: "MH",
    liveLink: "https://medtronic-app.netlify.app/",
  },
  {
    title: "The Interactive Room",
    tag: "Interactive Web Experience",
    desc: "The Interactive Room is a modern web experience...",
    fullDesc:
      "The Interactive Room is a modern web experience designed to deliver an engaging and immersive user journey through interactive UI elements, smooth animations, and responsive layouts. The project emphasizes clean design, intuitive navigation, and dynamic visual effects to create a memorable browsing experience across desktop and mobile devices. It demonstrates expertise in building highly interactive front-end applications with a strong focus on performance, responsiveness, and user experience.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Netlify"],
    placeholder: "IR",
    liveLink: "https://theinteractiveroom.netlify.app/",
  },
];

export default function Projects({ onOpenModal }) {
  const [sliderPos, setSliderPos] = useState(0);
  const [loadedIframes, setLoadedIframes] = useState({});
  const sliderRef = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const currentPos = useRef(0);

  const getSlideWidth = () => {
    if (!sliderRef.current) return 444;
    const card = sliderRef.current.querySelector(".project-card");
    if (!card) return 444;
    return card.offsetWidth + 24;
  };

  const getMaxSlide = () => {
    if (!sliderRef.current) return 0;
    const totalWidth = projects.length * getSlideWidth();
    const visibleWidth = sliderRef.current.parentElement.offsetWidth;
    return Math.max(0, totalWidth - visibleWidth);
  };

  const handleNext = () => {
    const nextPos = Math.min(sliderPos + getSlideWidth(), getMaxSlide());
    setSliderPos(nextPos);
  };

  const handlePrev = () => {
    const prevPos = Math.max(sliderPos - getSlideWidth(), 0);
    setSliderPos(prevPos);
  };

  // Drag handlers
  const handleDragStart = (e) => {
    isDragging.current = true;
    startX.current = e.pageX || e.touches[0].pageX;
    scrollStart.current = sliderPos;
    currentPos.current = sliderPos;
    if (sliderRef.current) {
      sliderRef.current.style.transition = "none";
    }
  };

  useEffect(() => {
    const handleDragMove = (e) => {
      if (!isDragging.current) return;
      const x = e.pageX !== undefined ? e.pageX : e.touches[0].pageX;
      const diff = startX.current - x;
      const max = getMaxSlide();
      const nextPos = Math.max(0, Math.min(scrollStart.current + diff, max));
      currentPos.current = nextPos;
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(-${nextPos}px)`;
      }
    };

    const handleDragEnd = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      setSliderPos(currentPos.current);
      if (sliderRef.current) {
        sliderRef.current.style.transition =
          "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        sliderRef.current.style.transform = `translateX(-${currentPos.current}px)`;
      }
    };

    window.addEventListener("mousemove", handleDragMove);
    window.addEventListener("touchmove", handleDragMove);
    window.addEventListener("mouseup", handleDragEnd);
    window.addEventListener("touchend", handleDragEnd);

    return () => {
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchend", handleDragEnd);
    };
  }, [sliderPos]);

  return (
    <section
      className="section"
      id="projects"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="section-inner">
        <div className="section-header">
          <div>
            <div className="section-number reveal">04 — Projects</div>
            <h2 className="section-title reveal reveal-delay-1">
              Selected
              <br />
              Works
            </h2>
          </div>
          <p className="section-desc reveal reveal-delay-2">
            A curated selection of projects that showcase my expertise across
            the full development stack.
          </p>
        </div>

        <div className="projects-slider-wrap reveal">
          <div
            className="projects-slider"
            id="projectsSlider"
            ref={sliderRef}
            style={{ transform: `translateX(-${sliderPos}px)` }}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          >
            {projects.map((project, i) => {
              const isLoaded = loadedIframes[project.title];
              return (
                <div
                  key={project.title}
                  className="project-card"
                  onClick={() => onOpenModal(i)}
                >
                  <div className="project-img-wrap">
                    {project.liveLink && (
                      <iframe
                        src={project.liveLink}
                        title={project.title}
                        className={`project-iframe-preview ${isLoaded ? "loaded" : ""}`}
                        loading="lazy"
                        scrolling="no"
                        onLoad={() =>
                          setLoadedIframes((prev) => ({
                            ...prev,
                            [project.title]: true,
                          }))
                        }
                      />
                    )}
                    {!isLoaded && (
                      <div className="project-placeholder">
                        {project.placeholder}
                      </div>
                    )}
                    <div className="project-overlay">
                      <div className="project-overlay-text">View Details →</div>
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tag">{project.tag}</div>
                    <div className="project-name">{project.title}</div>
                    <div className="project-desc">{project.desc}</div>
                    <div className="project-links">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fas fa-external-link-alt"></i> Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="slider-controls">
            <button className="slider-btn" id="sliderPrev" onClick={handlePrev}>
              <i className="fas fa-arrow-left"></i>
            </button>
            <button className="slider-btn" id="sliderNext" onClick={handleNext}>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
