
import "../Css/Project.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "DevBoard Portfolio",
      category: "PORTFOLIO",
      color: "purple",
      description:
        "A modern developer portfolio designed to showcase projects, technical skills and professional experience.",
      tech: ["React", "JavaScript", "AWS S3", "Boto3"],
      highlights: [
        "Responsive React UI",
        "AWS S3 deployment",
        "Boto3 integration",
      ],
    },

    {
      number: "02",
      title: "Organic Mart",
      category: "E-COMMERCE",
      color: "orange",
      description:
        "A responsive e-commerce application with product browsing, dynamic routes and cart functionality.",
      tech: ["React", "JavaScript", "Bootstrap"],
      highlights: [
        "Product listing",
        "Dynamic routing",
        "Cart management",
      ],
    },

    {
      number: "03",
      title: "Advanced Student Database",
      category: "DATABASE",
      color: "blue",
      description:
        "A SQL-based database project focused on structured data management and advanced query operations.",
      tech: ["SQL", "Oracle", "Database"],
      highlights: [
        "Complex queries",
        "Data filtering",
        "Relational operations",
      ],
    },

    {
      number: "04",
      title: "Hand Sign Detection",
      category: "COMPUTER VISION",
      color: "green",
      description:
        "A computer vision project that detects hand signs using Python and OpenCV.",
      tech: ["Python", "OpenCV", "Computer Vision"],
      highlights: [
        "Image processing",
        "Hand detection",
        "Real-time recognition",
      ],
    },
  ];

  return (
    <section id="projects" className="projects-section">

      <div className="projects-container">
        <div className="projects-header">
          <span>Projects</span>

          <div className="projects-title-row">
            <h2>
              Built with
              <span> purpose</span>
            </h2>

            <p>
              A few projects that represent my approach to
              development, problem solving and learning.
            </p>

          </div>

        </div>

        <div className="projects-list">

          {projects.map((project) => (

            <article
              key={project.number}
              className={`project-item ${project.color}`}
            >

              <div className="project-index">
                {project.number}
              </div>

              <div className="project-main">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">

                  {project.tech.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

              <div className="project-details">

                <span className="details-label">
                  HIGHLIGHTS
                </span>

                <ul>

                  {project.highlights.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}

                </ul>

              </div>

            </article>

          ))}

        </div>

        <div className="projects-footer">

          <span>
            WANT TO SEE MORE?
          </span>

          <a href="https://github.com/bhanupssikarwar-code">
            Explore GitHub →
          </a>

        </div>

      </div>

    </section>
  );
}

export default Projects;

