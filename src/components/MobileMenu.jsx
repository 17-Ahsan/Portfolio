import React from "react";

export default function MobileMenu({ open, onClose }) {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className={`mobile-menu ${open ? "open" : ""}`} id="mobileMenu">
      <a href="#home" onClick={handleLinkClick}>
        Home
      </a>
      <a href="#about" onClick={handleLinkClick}>
        About
      </a>
      <a href="#skills" onClick={handleLinkClick}>
        Skills
      </a>
      <a href="#projects" onClick={handleLinkClick}>
        Projects
      </a>
      <a href="#experience" onClick={handleLinkClick}>
        Experience
      </a>
      <a href="#contact" onClick={handleLinkClick}>
        Contact
      </a>
    </div>
  );
}
