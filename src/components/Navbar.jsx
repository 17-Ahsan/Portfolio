import { useEffect, useState } from "react";

export default function Navbar({
  theme,
  toggleTheme,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active nav link check
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav-main ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          AHSAN<sup>©</sup>
        </a>
        <ul className="nav-links">
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
            >
              <span className="nav-index"></span>Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              <span className="nav-index"></span>About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
            >
              <span className="nav-index"></span>Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
            >
              <span className="nav-index"></span>Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={activeSection === "experience" ? "active" : ""}
            >
              <span className="nav-index"></span>Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              <span className="nav-index"></span>Contact
            </a>
          </li>
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            className="theme-toggle"
            id="themeToggle"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <i className={theme === "dark" ? "fas fa-sun" : "fas fa-moon"}></i>
          </button>
          <button
            className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
            id="hamburger"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
