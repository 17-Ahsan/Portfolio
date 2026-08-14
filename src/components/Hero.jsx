import React from "react";
import developerTech from "../assets/Dev_Me.png";
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-eyebrow reveal">Software Developer — Pakistan</div>
        <h1 className="hero-title reveal reveal-delay-1">
          Ahsan
          <br />
          <span className="outline-text">Asif</span>
          <span className="hero-ml">(dev)</span>
        </h1>

        <div className="hero-sub-row reveal reveal-delay-2">
          <p className="hero-description">
            Full Stack Developer & MERN Stack specialist | passionate about
            creating unforgettable and beautiful digital experiences.
          </p>
        </div>

        {/* Developer Illustration */}
        <div className="hero-illustration reveal reveal-delay-3">
          <img
            src={developerTech}
            alt="Full Stack Developer"
            className="developer-tech-image"
          />
        </div>
      </div>
    </section>
  );
}
