import "./Footer.css";
import { Reveal } from "./Reveal.jsx";

function Footer() {
  return (
    <Reveal minStage={11}>
      <section className="footer-container">
        <div className="footer">
          <a href="#about" className="footer-link">
            About
          </a>
          <a href="#projects" className="footer-link">
            Projects
          </a>
          <a href="#" className="footer-link">
            Resume
          </a>
          <a href="#" className="footer-link">
            Contact
          </a>
        </div>
        <h1 className="footer-text">Copyright© Quincy Zientek</h1>
      </section>
    </Reveal>
  );
}

export default Footer;
