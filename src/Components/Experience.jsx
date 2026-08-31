
import "../Css/Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <span>Journey</span>
          <h2>
            Experience,
            <br />
            <strong>education & growth.</strong>
          </h2>
        </div>
        <div className="journey-row">

          <div className="journey-number">
            01
          </div>

          <div className="journey-content">

            <span className="journey-type">
              INTERNSHIP
            </span>

            <h3>
              PrepInsta
            </h3>

            <p className="journey-date">
              Internship
            </p>

            <p>
              Gained practical experience working on development
              tasks, improving problem-solving skills and applying
              programming concepts to real-world projects.
            </p>

          </div>

          <div className="journey-side">
            <span>EXPERIENCE</span>
            <b>01</b>
          </div>

        </div>
        <div className="journey-row">

          <div className="journey-number">
            02
          </div>

          <div className="journey-content">

            <span className="journey-type blue">
              EDUCATION
            </span>

            <h3>
              B.Tech — Computer Science & Engineering
            </h3>

            <p className="journey-date">
              2021 — 2025
            </p>

            <p>
              Built a strong foundation in programming, databases,
              software development and computer science fundamentals.
            </p>

          </div>

          <div className="journey-side">
            <span>DEGREE</span>
            <b>25</b>
          </div>

        </div>
        <div className="cert-section">

          <div className="cert-heading">

            <span>CERTIFICATIONS</span>

            <h3>
              Cloud & <strong>AI.</strong>
            </h3>

          </div>


          <div className="cert-grid">

            <div className="cert-item">

              <div className="cert-top">
                <span>AWS</span>
                <span>01</span>
              </div>

              <h4>
                AWS Certified
                <br />
                Cloud Practitioner
              </h4>

              <p>
                Demonstrates foundational knowledge of AWS
                cloud concepts, services and infrastructure.
              </p>

            </div>


            <div className="cert-item">

              <div className="cert-top">
                <span>AWS</span>
                <span>02</span>
              </div>

              <h4>
                AWS Machine
                <br />
                Learning Certificate
              </h4>

              <p>
                Certificate focused on fundamental machine
                learning concepts and AWS machine learning services.
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;

