import "../Css/Experience.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

function Experience() {
  return (
    <section id="experience" className="experience">

      <div className="container">

        <div className="text-center mb-5">
          <h5 className="section-subtitle">Journey</h5>
          <h2 className="section-title">Experience & Education</h2>
        </div>

        <div className="timeline">

          {/* Internship */}

          <div className="timeline-item">

            <div className="timeline-icon">
              <FaBriefcase />
            </div>

            <div className="timeline-content">

              <span>2025</span>

              <h4>Python Intern</h4>

              <h6>PrepInsta (Remote)</h6>

              <p>
                Worked on Python automation, SQL queries, data extraction,
                workflow optimization and collaborated on real-world tasks.
              </p>

            </div>

          </div>

          {/* Education */}

          <div className="timeline-item">

            <div className="timeline-icon">
              <FaGraduationCap />
            </div>

            <div className="timeline-content">

              <span>2021 - 2025</span>

              <h4>B.Tech Computer Science Engineering</h4>

              <h6>Graduate</h6>

              <p>
                Learned Python, Django, React.js, SQL, JavaScript,
                DBMS, Operating Systems and Data Structures while
                building multiple academic and personal projects.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;