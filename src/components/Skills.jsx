import React, { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML5", icon: "fab fa-html5", level: 95 },
  { name: "CSS3", icon: "fab fa-css3-alt", level: 90 },
  { name: "Bootstrap", icon: "fab fa-bootstrap", level: 88 },
  { name: "JavaScript", icon: "fab fa-js-square", level: 90 },
  { name: "React", icon: "fab fa-react", level: 85 },
  { name: "Node.js", icon: "fab fa-node-js", level: 82 },
  { name: "MongoDB", icon: "fas fa-database", level: 80 },
  { name: "Git", icon: "fab fa-git-alt", level: 85 },
  { name: "TypeScript", icon: "fas fa-code", level: 75 },
  { name: "Express", icon: "fas fa-server", level: 80 },
];

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="skills" ref={containerRef}>
      <div className="section-inner">
        <div className="section-header">
          <div>
            <div className="section-number reveal">03 — Skills</div>
            <h2 className="section-title reveal reveal-delay-1">
              Tools &<br />Technologies
            </h2>
          </div>
        </div>

        <div className="skills-grid" id="skillsGrid">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`skill-card reveal ${i < 5 ? "reveal-delay-" + ((i % 4) + 1) : ""}`}
            >
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar-wrap">
                <div
                  className="skill-bar"
                  style={{ width: animate ? `${skill.level}%` : "0%" }}
                ></div>
              </div>
              <div className="skill-percent">{skill.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
