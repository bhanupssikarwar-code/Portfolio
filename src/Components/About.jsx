import "../Css/About.css";
import { FaGraduationCap, FaLaptopCode, FaBriefcase } from "react-icons/fa";
import Bhanuimage from "../assets/images/Bhanuimage.jpg";

function About() {
  return (
    <section id="about" className="about">

      <div className="container">

        <div className="text-center mb-5">
          <h5 className="section-subtitle">Who I Am</h5>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="row align-items-center">

          {/* Left Side */}

          <div className="col-lg-5">

            <div className="about-image">

              <img
                src={Bhanuimage}
                alt="developer"
              />

            </div>

          </div>

          {/* Right Side */}

          <div className="col-lg-7">

            <h3 className="mb-4 text-white mt-3">
              Passionate Full Stack Developer
            </h3>

            <p className="about-text">

              I'm Bhanu Pratap Singh, a Computer Science & Engineering graduate with
              experience in Python, Django, React.js, JavaScript and SQL.

              I enjoy solving real-world problems and developing responsive,
              scalable and user-friendly web applications.

            </p>

            <div className="row mt-5">

              <div className="col-md-4">

                <div className="info-card">

                  <FaGraduationCap className="about-icon"/>

                  <h5>Education</h5>

                  <p>B.Tech CSE (2025)</p>

                </div>

              </div>

              <div className="col-md-4">

                <div className="info-card">

                  <FaLaptopCode className="about-icon"/>

                  <h5>Projects</h5>

                  <p>3+ Completed</p>

                </div>

              </div>

              <div className="col-md-4">

                <div className="info-card">

                  <FaBriefcase className="about-icon"/>

                  <h5>Experience</h5>

                  <p>PrepInsta Intern</p>

                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;