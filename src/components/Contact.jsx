import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'sent'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_56acpcn",
        "template_3efqpgw",
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        },
        "IW0kFMYintbcmftPR",
      );

      setStatus("sent");

      setTimeout(() => {
        setStatus("idle");
        setFormState({
          name: "",
          email: "",
          message: "",
        });
      }, 2500);
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  return (
    <section
      className="section"
      id="contact"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="section-inner">
        <div className="section-header">
          <div>
            <div className="section-number reveal">06 — Contact</div>
            <h2 className="section-title reveal reveal-delay-1">
              Let's work
              <br />
              together
            </h2>
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-left reveal">
            <h3>Got a project in mind?</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Let's create something
              remarkable together.
            </p>
            <div className="contact-social">
              <a
                href="https://github.com/17-Ahsan"
                target="_blank"
                className="social-link"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ahsan-asif-a77699282"
                target="_blank"
                className="social-link"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://x.com/_17ahsanbhatti"
                target="_blank"
                className="social-link"
                aria-label="Twitter"
              >
                <i className="fab fa-x-twitter"></i>
              </a>
              <a
                href="mailto:aa.bhatti655@gmail.com"
                target="_blank"
                className="social-link"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <form
            className="contact-form reveal reveal-delay-1"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                value={formState.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-submit">
              <button
                type="submit"
                className="btn-main btn-dark"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  background: status === "sent" ? "#22c55e" : "",
                  borderColor: status === "sent" ? "#22c55e" : "",
                }}
              >
                {status === "sent" ? (
                  <>
                    <i className="fas fa-check"></i> Sent!
                  </>
                ) : (
                  <>
                    Send Message{" "}
                    <i
                      className="fas fa-paper-plane"
                      style={{ fontSize: "0.7rem" }}
                    ></i>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
