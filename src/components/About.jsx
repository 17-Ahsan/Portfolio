import React from "react";

export default function About() {
  return (
    <section className="section" id="about" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-inner">
        <div className="section-header">
          <div>
            <div className="section-number reveal">02 — About</div>
            <h2 className="section-title reveal reveal-delay-1">
              Just an ordinary<br />developer from Pakistan.
            </h2>
          </div>
          <p className="section-desc reveal reveal-delay-2">
            Building modern web applications with clean code and pixel-perfect
            designs.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-image-wrap reveal">
            <div className="about-placeholder">
              <svg
                viewBox="0 0 300 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="150"
                  cy="120"
                  r="50"
                  fill="var(--text-primary)"
                  opacity="0.1"
                />
                <path
                  d="M80 280 Q90 200 150 180 Q210 200 220 280"
                  fill="var(--text-primary)"
                  opacity="0.08"
                />
                <rect
                  x="120"
                  y="300"
                  width="60"
                  height="4"
                  rx="2"
                  fill="var(--text-primary)"
                  opacity="0.1"
                />
                <rect
                  x="110"
                  y="315"
                  width="80"
                  height="4"
                  rx="2"
                  fill="var(--text-primary)"
                  opacity="0.06"
                />
                <rect
                  x="130"
                  y="330"
                  width="40"
                  height="4"
                  rx="2"
                  fill="var(--text-primary)"
                  opacity="0.08"
                />
                {/* Code brackets */}
                <text
                  x="115"
                  y="140"
                  fontFamily="monospace"
                  fontSize="48"
                  fill="var(--text-primary)"
                  opacity="0.15"
                >
                  &lt;/&gt;
                </text>
              </svg>
            </div>
          </div>
          <div className="about-content">
            <p className="about-text reveal">
              I'm <strong>Ahsan Asif</strong>, a Full Stack Developer
              specializing in the MERN stack. I craft responsive, performant web
              applications that blend{" "}
              <strong>aesthetics with functionality</strong>. With a deep
              understanding of both frontend and backend development, I bring
              ideas to life through clean code and modern design principles.
            </p>
            <p className="about-text reveal reveal-delay-1">
              My focus is on building <strong>scalable solutions</strong> that
              provide seamless user experiences. From interactive UIs to robust
              APIs, I enjoy every aspect of the development process.
            </p>
            <div className="about-stats reveal reveal-delay-2">
              <div>
                <div className="stat-number">20+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div>
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Exp</div>
              </div>
              <div>
                <div className="stat-number">15+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
