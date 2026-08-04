function ProjectCard({ project }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-4">
      <div className="project-card">
        <div className="project-img">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-content">
          <span>{project.tech}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;