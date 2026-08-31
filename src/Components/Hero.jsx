import "../Css/Hero.css";
import Bhanuimage from "../assets/images/Bhanuimage.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow hero-glow-purple"></div>
      <div className="hero-glow hero-glow-cyan"></div>

      <div className="container hero-container">
        <div className="hero-content">

          <div className="hero-badge">
            Available for opportunities
          </div>

          <p className="hero-intro">
            Hi, I'm
          </p>

          <h1>
            Bhanu Pratap
            <br />
            <span className="gradient-text">
              Singh Sikarwar
            </span>
          </h1>

          <h2>
            Full Stack Developer
          </h2>

          <p className="hero-description">
            I build modern, responsive and scalable digital solutions
            using <strong>React, Django, REST APIs, Python and SQL</strong>.
            I also work with AWS to build and deploy cloud-based solutions.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn btn-primary"
            >
              View My Work
            </a>

            <a
              href="/Bhanu_Pratap_Singh_Sikarwar_resume.pdf"
              className="btn btn-outline"
            >
              Download Resume
            </a>

          </div>
          <div className="hero-stack">
            <div className="stack-list">
              <span>React</span>
              <span>Python</span>
              <span>Django</span>
              <span>REST API</span>
              <span>SQL</span>
              <span>AWS</span>
            </div>

          </div>

        </div>
        <div className="hero-visual">

          <div className="hero-image-wrapper">

            <div className="image-glow"></div>

            <div className="image-border">

              <div className="hero-image-card">

                <img
                  src={Bhanuimage}
                  alt="Bhanu Pratap Singh Sikarwar"
                />

              </div>

            </div>

          </div>

          <div className="floating-card floating-card-one">
            <span className="floating-icon">{"</>"}</span>

            <div>
              <strong>Frontend</strong>
              <small>React.js</small>
            </div>
          </div>

          <div className="floating-card floating-card-two">
            <span className="floating-icon">⚡</span>

            <div>
              <strong>Backend</strong>
              <small>Django + REST</small>
            </div>
          </div>

          <div className="floating-card floating-card-three">
            <span className="floating-icon">☁</span>

            <div>
              <strong>Cloud</strong>
              <small>AWS</small>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;