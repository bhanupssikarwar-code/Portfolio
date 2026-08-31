
import "../Css/About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <div className="about-top">
          <div>
            <h2>
              Developer with a
              <span> product mindset.</span>
            </h2>
          </div>

          <p>
            I'm a Computer Science graduate focused on building
            modern web applications with clean interfaces,
            reliable backends and scalable APIs.
          </p>
        </div>

        <div className="about-main">

          <div className="about-intro">
            <span>ABOUT</span>

            <h3>
              Building things that are
              <br />
              <strong>simple, useful & fast.</strong>
            </h3>

            <p>
              I work across frontend and backend using React,
              JavaScript, Python, Django and REST APIs, with SQL
              and AWS for data and cloud.
            </p>
          </div>

          <div className="about-stack">
            <span>STACK</span>

            <div className="stack-list">
              <b>React</b>
              <b>JavaScript</b>
              <b>Python</b>
              <b>Django</b>
              <b>REST API</b>
              <b>SQL</b>
              <b>AWS</b>
              <b>Git</b>
            </div>
          </div>

        </div>

        <div className="about-highlights">

          <div>
            <span>01</span>
            <h4>Frontend</h4>
            <p>React · JavaScript · CSS</p>
          </div>

          <div>
            <span>02</span>
            <h4>Backend</h4>
            <p>Python · Django · REST APIs</p>
          </div>

          <div>
            <span>03</span>
            <h4>Cloud & Data</h4>
            <p>AWS · SQL · Git</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;

