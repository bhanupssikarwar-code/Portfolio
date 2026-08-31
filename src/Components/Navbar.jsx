
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../Css/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="navbar-container">

        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          Bhanu
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

        </div>

        <div className="navbar-right">

          <a
            href="https://github.com/bhanupssikarwar-code"
            target="_blank"
            rel="noreferrer"
            className="nav-social"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/bhanu-pratap-singh-sikarwar-783044319/"
            target="_blank"
            rel="noreferrer"
            className="nav-social"
          >
            <FaLinkedin />
          </a>

          <a href="#contact" className="nav-hire">
            Let's Talk
          </a>

        </div>
        <button
          className={`menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
