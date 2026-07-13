import React, { useEffect, useState } from "react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-top ${visible ? "visible" : ""}`}
      id="scrollTop"
      aria-label="Scroll to top"
      onClick={scrollToTop}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}
