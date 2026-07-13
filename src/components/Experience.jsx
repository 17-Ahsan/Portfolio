const experiences = [
  {
    date: "2024 — Present",
    title: "Full Stack Developer",
    place: "Horizon Tech Services Pvt. Ltd.",
    desc: "Building custom web applications for clients worldwide using the MERN stack and modern frontend technologies.",
    icon: "fas fa-briefcase",
    tags: [
      "React",
      "Nodejs",
      "Expressjs",
      "MongoDB",
      "PostGresql",
      "Tailwind CSS ",
    ],
  },
  {
    date: "2023 — 2024",
    title: "Frontend Developer",
    place: "AA Solutions",
    desc: "Developed responsive interfaces and collaborated with design teams to deliver pixel-perfect web experiences.",
    icon: "fas fa-briefcase",
    tags: ["JavaScript", "React", "CSS3", "Bootstrap", "Git"],
  },
];

const education = [
  {
    date: "2020 — 2024",
    title: "BS Computer Science",
    place: "University of Punjab",
    desc: "Studied software engineering, data structures, algorithms, and web development technologies.",
    icon: "fas fa-graduation-cap",
    tags: ["OOPS", "DSA", "Algorithms", "Web Dev"],
  },
  {
    date: "2023",
    title: "MERN Stack Certification",
    place: "Young Dev Intern",
    desc: "Completed intensive full-stack development program covering MongoDB, Express, React, and Node.js.",
    icon: "fas fa-graduation-cap",
    tags: ["MERN Stack", "React", "Node.js", "MongoDB", "Express"],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-inner">
        <div className="section-header">
          <div>
            <div className="section-number reveal">05 — Journey</div>
            <h2 className="section-title reveal reveal-delay-1">
              Experience &<br />
              Education
            </h2>
          </div>
        </div>

        <div className="exp-grid">
          <div>
            <h3 className="exp-section-subtitle reveal">Experience</h3>
            <div className="timeline">
              {experiences.map((exp, i) => (
                <div
                  key={exp.title + exp.place}
                  className={`timeline-item reveal ${i > 0 ? "reveal-delay-" + i : ""}`}
                >
                  <div className="timeline-icon-node">
                    <i className={exp.icon}></i>
                  </div>
                  <div className="timeline-card">
                    <div className="timeline-date-badge">{exp.date}</div>
                    <h4 className="timeline-title">{exp.title}</h4>
                    <div className="timeline-place">
                      <i className="fas fa-building"></i> {exp.place}
                    </div>
                    <p className="timeline-desc">{exp.desc}</p>
                    {exp.tags && exp.tags.length > 0 && (
                      <div className="timeline-tags">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="timeline-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="exp-section-subtitle reveal">Education</h3>
            <div className="timeline">
              {education.map((edu, i) => (
                <div
                  key={edu.title + edu.place}
                  className={`timeline-item reveal ${i > 0 ? "reveal-delay-" + i : ""}`}
                >
                  <div className="timeline-icon-node">
                    <i className={edu.icon}></i>
                  </div>
                  <div className="timeline-card">
                    <div className="timeline-date-badge">{edu.date}</div>
                    <h4 className="timeline-title">{edu.title}</h4>
                    <div className="timeline-place">
                      <i className="fas fa-university"></i> {edu.place}
                    </div>
                    <p className="timeline-desc">{edu.desc}</p>
                    {edu.tags && edu.tags.length > 0 && (
                      <div className="timeline-tags">
                        {edu.tags.map((tag) => (
                          <span key={tag} className="timeline-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
