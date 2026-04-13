import { useState } from "react";
import "./Header.css";
import hamburger from "./assets/hamburger.svg";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header>
      <nav>
        <h1>
          <a className="logo" href="#top" onClick={scrollToTop}>
            Quincy Zientek
          </a>
        </h1>
        <ul className={`nav-links ${menuOpen ? "nav-links-visible" : ""}`}>
          <li>
            <a
              className="link"
              href="#about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="link"
              href="#projects"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Resume
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <img
          className="hamburger-icon"
          src={hamburger}
          alt=""
          onClick={toggleMenu}
        />
      </nav>
    </header>
  );
}

export default Header;
