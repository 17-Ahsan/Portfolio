import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects, { projects } from "./components/Projects";
import ProjectModal from "./components/ProjectModal";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Reveal animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Loader />
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      
      <Hero />
      <About />
      <Skills />
      <Projects onOpenModal={(index) => setSelectedProjectIndex(index)} />
      <Experience />
      <Contact />
      <Footer />
      
      <ScrollTop />
      
      <ProjectModal
        project={selectedProjectIndex !== null ? projects[selectedProjectIndex] : null}
        onClose={() => setSelectedProjectIndex(null)}
      />
    </>
  );
}
