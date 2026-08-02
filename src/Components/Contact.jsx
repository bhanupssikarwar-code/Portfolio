import "../Css/Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="container">

        <div className="text-center mb-5">
          <h5 className="section-subtitle text-success">Get In Touch</h5>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="row g-5">

          {/* Left Side */}

          <div className="col-lg-5">

            <div className="contact-info">

              <h3 >Let's Connect 👋</h3>

              <p>
                I'm currently looking for Software Engineer,
                Python Developer and Full Stack Developer
                opportunities. Feel free to contact me.
              </p>

              <div className="contact-item text-white">
                <FaEnvelope className="icon"/>
                <span>bhanu.p.ssikarwar01@gmail.com</span>
              </div>

              <div className="contact-item text-white">
                <FaPhone className="icon"/>
                <span>+91 9109216850</span>
              </div>

              <div className="contact-item text-white">
                <FaMapMarkerAlt className="icon"/>
                <span>Bengaluru, India</span>
              </div>

              <div className="social-links">

                <a href="https://github.com/bhanupssikarwar-code">
                  <FaGithub />
                </a>

                <a href="https://www.linkedin.com/in/bhanu-pratap-singh-sikarwar-783044319/">
                  <FaLinkedin />
                </a>

              </div>

            </div>

          </div>

          </div>

        </div>

    </section>
  );
}

export default Contact;