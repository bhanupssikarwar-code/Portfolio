import { motion } from "framer-motion";
import "../Css/Skills.css";

function Skills() {

    const skillGroups = [
        {
            title: "Frontend",
            skills: ["React", "JavaScript", "HTML", "CSS"]
        },
        {
            title: "Backend & APIs",
            skills: ["Python", "REST APIs"]
        },
        {
            title: "Database",
            skills: ["SQL", "Oracle SQL"]
        },
        {
            title: "Cloud & Tools",
            skills: ["AWS", "Git", "GitHub"]
        }
    ];

    return (
        <section className="skills" id="skills">

            <div className="skills-container">

                <motion.div
                    className="skills-heading"
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

                    <p className="skills-label">
                        SKILLS
                    </p>

                    <h2>
                        Technologies I use.
                    </h2>

                    <p className="skills-description">
                        A collection of technologies and tools
                        I've been using throughout my development
                        journey.
                    </p>

                </motion.div>

                <div className="skills-grid">

                    {skillGroups.map((group, index) => (

                        <motion.div
                            className={`skill-card card-${index + 1}`}
                            key={group.title}

                            initial={{
                                opacity: 0,
                                y: 25
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}

                            viewport={{
                                once: true
                            }}

                            transition={{
                                duration: 0.5,
                                delay: index * 0.1
                            }}

                            whileHover={{
                                y: -5
                            }}
                        >

                            <div className="skill-card-top">
                                <span className="skill-title">
                                    {group.title}
                                </span>

                            </div>


                            <div className="skill-tags">

                                {group.skills.map((skill) => (

                                    <span
                                        className="skill-tag"
                                        key={skill}
                                    >
                                        {skill}
                                    </span>

                                ))}

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Skills;