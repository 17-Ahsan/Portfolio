import React from "react";

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
          <svg
            viewBox="0 0 400 350"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Desk */}
            <rect
              x="80"
              y="220"
              width="240"
              height="8"
              rx="4"
              fill="var(--text-primary)"
              opacity="0.15"
            />
            <rect
              x="110"
              y="228"
              width="8"
              height="80"
              rx="2"
              fill="var(--text-primary)"
              opacity="0.1"
            />
            <rect
              x="282"
              y="228"
              width="8"
              height="80"
              rx="2"
              fill="var(--text-primary)"
              opacity="0.1"
            />
            {/* Monitor */}
            <rect
              x="140"
              y="140"
              width="120"
              height="80"
              rx="8"
              fill="var(--text-primary)"
              opacity="0.1"
            />
            <rect
              x="148"
              y="148"
              width="104"
              height="60"
              rx="4"
              fill="var(--text-primary)"
              opacity="0.06"
            />
            {/* Screen lines */}
            <rect
              x="158"
              y="160"
              width="50"
              height="3"
              rx="1.5"
              fill="var(--text-primary)"
              opacity="0.15"
            />
            <rect
              x="158"
              y="168"
              width="70"
              height="3"
              rx="1.5"
              fill="var(--text-primary)"
              opacity="0.1"
            />
            <rect
              x="158"
              y="176"
              width="40"
              height="3"
              rx="1.5"
              fill="var(--text-primary)"
              opacity="0.15"
            />
            <rect
              x="158"
              y="184"
              width="60"
              height="3"
              rx="1.5"
              fill="var(--text-primary)"
              opacity="0.08"
            />
            <rect
              x="158"
              y="192"
              width="35"
              height="3"
              rx="1.5"
              fill="var(--text-primary)"
              opacity="0.12"
            />
            {/* Monitor stand */}
            <rect
              x="192"
              y="220"
              width="16"
              height="12"
              rx="2"
              fill="var(--text-primary)"
              opacity="0.1"
            />
            {/* Person - Chair */}
            <ellipse
              cx="310"
              cy="260"
              rx="35"
              ry="18"
              fill="var(--text-primary)"
              opacity="0.08"
            />
            {/* Person - Body */}
            <circle
              cx="320"
              cy="190"
              r="16"
              fill="var(--text-primary)"
              opacity="0.15"
            />
            <path
              d="M305 210 Q310 250 320 260 Q330 250 335 210"
              fill="var(--text-primary)"
              opacity="0.1"
            />
            {/* Coffee cup */}
            <rect
              x="60"
              y="205"
              width="16"
              height="18"
              rx="3"
              fill="var(--text-primary)"
              opacity="0.1"
            />
            <path
              d="M76 210 Q84 212 82 218 Q80 224 76 222"
              stroke="var(--text-primary)"
              strokeWidth="2"
              opacity="0.08"
              fill="none"
            />
            {/* Steam */}
            <path
              d="M65 200 Q67 192 65 186"
              stroke="var(--text-primary)"
              strokeWidth="1.5"
              opacity="0.08"
              fill="none"
            />
            <path
              d="M70 202 Q72 194 70 188"
              stroke="var(--text-primary)"
              strokeWidth="1.5"
              opacity="0.06"
              fill="none"
            />
            {/* Cat */}
            <ellipse
              cx="56"
              cy="302"
              rx="18"
              ry="10"
              fill="var(--text-primary)"
              opacity="0.12"
            />
            <circle
              cx="46"
              cy="294"
              r="7"
              fill="var(--text-primary)"
              opacity="0.12"
            />
            <path
              d="M40 288 L42 280 L46 286"
              fill="var(--text-primary)"
              opacity="0.12"
            />
            <path
              d="M46 288 L50 280 L52 286"
              fill="var(--text-primary)"
              opacity="0.12"
            />
            <path
              d="M72 300 Q82 298 80 304"
              stroke="var(--text-primary)"
              strokeWidth="2"
              opacity="0.1"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
