import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-left">
          <img
            src="https://i.postimg.cc/V6HxL6hC/openart-234579aeadcc47aca8e373008198dfdf-raw.jpg"
            alt="Sanjoy Chattopadhyay"
            className="footer-image"
          />
          <span className="footer-text">
            © 2025 Sanjoy Chattopadhyay &nbsp;|&nbsp; Powered by{" "}
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>{" "}
            &{" "}
            <a
              href="https://vitejs.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite
            </a>
          </span>
        </div>

        <div className="footer-right">
          <a
            href="https://www.linkedin.com/in/sanjoy-chattopadhyay-390b3a1a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Sanjoy-Chattopadhay"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>

      <div
        className="scroll-up-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fa-solid fa-chevron-up"></i>
      </div>
    </footer>
  );
};

export default Footer;
