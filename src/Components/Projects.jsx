import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import "../Css/Project.css";

function Projects() {

    const projects = [
        {
            number: "01",
            category: "WEB DEVELOPMENT",
            title: "E-commerce Web Application",
            description:
                "A responsive e-commerce application built with React and JavaScript. I focused on creating a smooth shopping experience with reusable components, dynamic product rendering, state management and cart functionality. The project helped me understand how a real-world frontend application is structured and how different parts of an application communicate with each other.",
            technologies: ["React", "JavaScript", "HTML", "CSS"],
            theme: "blue"
        },

        {
            number: "02",
            category: "API INTEGRATION",
            title: "Weather Application",
            description:
                "A dynamic weather application that allows users to search for cities and view weather information. It integrates REST APIs to retrieve location and weather data while handling asynchronous requests, loading states, errors and dynamic UI updates.",
            technologies: ["React", "JavaScript", "REST APIs"],
            theme: "lavender"
        },

        {
            number: "03",
            category: "COMPUTER VISION",
            title: "Hand Sign Detection",
            description:
                "A computer vision project developed using Python and OpenCV to detect hand signs from visual input. The project provided practical experience with image processing, computer vision concepts and working with visual data.",
            technologies: ["Python", "OpenCV"],
            theme: "green"
        },

        {
            number: "04",
            category: "DATABASE & ANALYTICS",
            title: "E-Commerce Sales Analytics",
            description:
                "An Oracle SQL database project created to analyze e-commerce sales and customer data. I designed relational tables with keys and constraints and used joins, subqueries, aggregate functions and analytical queries to extract meaningful information.",
            technologies: ["Oracle SQL", "SQL", "Database Design"],
            theme: "peach"
        }
    ];

    return (
        <section className="projects" id="projects">

            <div className="projects-container">

                <motion.div
                    className="projects-heading"

                    initial={{
                        opacity: 0,
                        y: 30
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    viewport={{
                        once: true
                    }}

                    transition={{
                        duration: 0.7
                    }}
                >

                    <span className="projects-label">
                        SELECTED WORK
                    </span>

                    <h2>
                        Projects I've built.
                    </h2>

                    <p>
                        A collection of applications and experiments
                        that represent what I've learned by building
                        things myself.
                    </p>

                </motion.div>

                <div className="project-stack">

                    {projects.map((project, index) => (

                        <div
                            className="project-space"
                            key={project.title}
                        >

                            <motion.article
                                className={`project-panel ${project.theme}`}

                                style={{
                                    zIndex: index + 1
                                }}

                                initial={{
                                    opacity: 0,
                                    y: 80
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}

                                viewport={{
                                    once: true,
                                    amount: 0.15
                                }}

                                transition={{
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                whileHover={{
                                    scale: 1.03,
                                    y: -6
                                }}
                            >

                                <div className="project-panel-top">

                                    <span>
                                        {project.number}
                                    </span>

                                    <span>
                                        {project.category}
                                    </span>

                                </div>

                                <div className="project-panel-content">

                                    <h3>
                                        {project.title}
                                    </h3>

                                    <p>
                                        {project.description}
                                    </p>

                                </div>

                                <div className="project-panel-bottom">

                                    {project.technologies.map(
                                        (technology) => (
                                            <span key={technology}>
                                                {technology}
                                            </span>
                                        )
                                    )}

                                </div>

                            </motion.article>

                        </div>

                    ))}

                </div>

                <motion.div
                    className="projects-github"

                    initial={{
                        opacity: 0,
                        y: 20
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    viewport={{
                        once: true
                    }}

                    transition={{
                        duration: 0.6
                    }}
                >

                    <p>
                        Want to see more?
                    </p>

                    <a
                        href="https://github.com/bhanupssikarwar-code"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiGithub />
                        <span>
                            Visit my GitHub
                        </span>
                    </a>

                </motion.div>

            </div>

        </section>
    );
}

export default Projects;