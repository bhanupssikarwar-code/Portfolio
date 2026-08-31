import "../Css/Skills.css";

function Skills() {
  const skills = [
    { name: "React.js", short: "REACT", color: "purple" },
    { name: "JavaScript", short: "JS", color: "yellow" },
    { name: "Python", short: "PY", color: "blue" },
    { name: "Django", short: "DJ", color: "green" },
    { name: "REST APIs", short: "API", color: "orange" },
    { name: "SQL", short: "SQL", color: "pink" },
    { name: "AWS", short: "AWS", color: "cyan" },
    { name: "Git & GitHub", short: "GIT", color: "red" },
  ];

  return (
    <section id="skills" className="skills-section">

      <div className="skills-container">
        <div className="skills-intro">

          <span className="skills-eyebrow">
            MY TOOLKIT
          </span>

          <h2>
            I speak
            <br />
            <span>code</span>
          </h2>

          <p>
            The technologies and tools I use to transform ideas
            into functional, scalable and engaging applications.
          </p>

          <div className="skills-counter">
            <strong>08</strong>
            <span>CORE<br />TECHNOLOGIES</span>
          </div>

          <div className="skills-caption">
            Always exploring something new
          </div>

        </div>
        <div className="skills-showcase">
          <div className="skills-orbit">

            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`tech-item ${skill.color} tech-${index + 1}`}
              >
                <div className="tech-symbol">
                  {skill.short}
                </div>

                <div className="tech-name">
                  {skill.name}
                </div>
              </div>
            ))}

            <div className="orbit-center">
              <span>&lt;/&gt;</span>
              <small>FULL<br />STACK</small>
            </div>

          </div>

        </div>

      </div>
      <div className="skills-tools">

        <div className="tool-title">
          <span>ALSO WORKING WITH</span>
        </div>

        <div className="tool-list">

          <span>HTML5</span>
          <span>CSS3</span>
          <span>Bootstrap</span>
          <span>Vite</span>
          <span>Docker</span>
          <span>VS Code</span>

        </div>

      </div>

    </section>
  );
}

export default Skills;