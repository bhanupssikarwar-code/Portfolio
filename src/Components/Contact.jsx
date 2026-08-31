
import "../Css/Contact.css";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-container">

        <div className="contact-header">

          <div>
            <span className="contact-kicker">
              CONTACT
            </span>

            <h2>
              Let's <span>talk</span>
              </h2>
          </div>

          <div className="available-badge">
            Available for opportunities
          </div>

        </div>

        <div className="contact-grid">

          <div className="contact-intro">

            <p className="intro-label">
              HAVE SOMETHING IN MIND?
            </p>

            <p className="intro-text">
              Whether it's a job opportunity, internship,
              collaboration or an interesting project,
              I'm always open to a conversation.
            </p>

            <a
              href="mailto:bhanu.p.ssikarwar01@gmail.com"
              className="email-link"
            >
              <span>
                bhanu.p.ssikarwar01@gmail.com
              </span>
            </a>

          </div>

          <div className="contact-details">
            <a
              href="mailto:bhanu.p.ssikarwar01@gmail.com"
              className="detail-card"
            >

              <div className="detail-icon">
                <FaEnvelope />
              </div>

              <div>
                <span>EMAIL</span>
                <p>Let's connect</p>
              </div>

              <b>↗</b>

            </a>

            <a
              href="tel:+919109216850"
              className="detail-card"
            >

              <div className="detail-icon">
                <FaPhone />
              </div>

              <div>
                <span>PHONE</span>
                <p>+91 9109216850</p>
              </div>

              <b>↗</b>

            </a>

            <div className="detail-card">

              <div className="detail-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <span>BASED IN</span>
                <p>Bengaluru, India</p>
              </div>

              <small>IND</small>

            </div>

          </div>

        </div>

        <div className="contact-bottom">

          <div className="social-area">

            <span>ELSEWHERE</span>

            <div className="social-links">

              <a
                href="https://github.com/bhanupssikarwar-code"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
                <b>↗</b>
              </a>

              <a
                href="https://www.linkedin.com/in/bhanu-pratap-singh-sikarwar-783044319/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
                LinkedIn
                <b>↗</b>
              </a>

            </div>

          </div>


          <a href="#home" className="back-top">

            <span>BACK TO TOP</span>

            <i>
              <FaArrowUp />
            </i>

          </a>

        </div>
        <div className="contact-footer">

          <span>
            Designed & built with React
          </span>

          <span>
            © 2026 Bhanu Pratap Singh Sikarwar
          </span>

        </div>

      </div>

    </section>
  );
}

export default Contact;

