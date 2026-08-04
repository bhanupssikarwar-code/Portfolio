import "../Css/Project.css";
import Organicmart from "../assets/images/Organicmart.png"
import Studentmanagement from "../assets/images/Studentmanagement.png"
import portfolio from '../assets/images/Portfolioimage.png'
import Handsign from '../assets/images/Handsign.png'
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Organic Mart",
    tech: "React • Bootstrap • JavaScript",
    image: Organicmart,
    description:
      "A responsive grocery shopping website with product listing, add-to-cart functionality and modern UI.",
  },

  {
    title: "Employee Management System",
    tech: "Django • Python • SQLite",
    image: Studentmanagement,
    description:
      "Employee management system with CRUD operations, authentication and admin dashboard.",
  },

  {
    title: "Hand Gesture Recognition",
    tech: "Python • OpenCV",
    image: Handsign,
    description:
      "Real-time hand gesture recognition system using OpenCV and computer vision.",
  },

  {
    title: "Developer Portfolio",
    tech: "React • Bootstrap • CSS",
    image: portfolio,
    description:
      "Personal portfolio website showcasing projects, skills and experience with modern UI.",

  },
];

function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="container">

        <div className="text-center mb-5">
          <h5 className="section-subtitle">Portfolio</h5>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="row">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}

            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;