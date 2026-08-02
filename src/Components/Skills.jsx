import "../Css/Skills.css";
import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaBootstrap,
  FaAws
} from "react-icons/fa";

import { SiDjango, SiMysql } from "react-icons/si";

const skills = [
  { icon: <FaPython />, name: "Python", percent: 90 },
  { icon: <SiDjango />, name: "Django", percent: 80 },
  { icon: <FaReact />, name: "React.js", percent: 90 },
  { icon: <FaJs />, name: "JavaScript", percent: 90 },
  { icon: <FaHtml5 />, name: "HTML5", percent: 95 },
  { icon: <FaCss3Alt />, name: "CSS3", percent: 90 },
  { icon: <FaBootstrap />, name: "Bootstrap", percent: 90 },
  { icon: <SiMysql />, name: "SQL", percent: 90 },
  { icon: <FaGitAlt />, name: "Git", percent: 80 },
  { icon: <FaGithub />, name: "GitHub", percent: 85 },
  { icon: <FaAws />, name: "Aws", percent: 85 }
];

function Skills() {
  return (
    <section id="skills" className="skills ">

      <div className="container">

        <div className="text-center mb-5">
          <h5 className="section-subtitle text-success">Technical Skills</h5>
          <h2 className="section-title ">My Skills</h2>
        </div>

        <div className="row">

          {skills.map((skill, index) => (

            <div className="col-lg-4 col-md-6 mb-4" key={index}>

              <div className="skill-card">

                <div className="skill-header">

                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <h5>{skill.name}</h5>

                </div>

                <div className="progress">

                  <div
                    className="progress-bar bg-success progress-animation"
                    style={{ width: `${skill.percent}%` }}
                  >
                    {skill.percent}%
                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;