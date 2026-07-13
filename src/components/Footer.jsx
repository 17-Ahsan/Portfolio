import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-text">
          © 2026 Ahsan Asif. All rights reserved.
        </div>
        <div className="footer-links">
          <a href="#" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
