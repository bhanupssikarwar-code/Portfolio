import { motion } from "framer-motion";
import "../Css/Experience.css";

function Experience() {
    return (
        <section
            id="experience"
            className="experience-section"
        >

            <div className="experience-container">

                <motion.div
                    className="experience-header"

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
                        duration: 0.6
                    }}
                >

                    <span>
                        JOURNEY
                    </span>

                    <h2>
                        Experience,
                        <br />
                        <strong>
                            education & growth.
                        </strong>
                    </h2>

                </motion.div>

                <motion.div
                    className="journey-row first"

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
                        duration: 0.6
                    }}
                >

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
                            Gained practical experience working on
                            development tasks, improving problem-solving
                            skills and applying programming concepts to
                            real-world projects.
                        </p>

                    </div>


                    <div className="journey-side">

                        <span>
                            EXPERIENCE
                        </span>

                        <b>
                            01
                        </b>

                    </div>

                </motion.div>

                <motion.div
                    className="journey-row second"

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
                        duration: 0.6
                    }}
                >

                    <div className="journey-number blue-number">
                        02
                    </div>


                    <div className="journey-content">

                        <span className="journey-type blue">
                            EDUCATION
                        </span>

                        <h3>
                            B.Tech — Computer Science & Engineering
                        </h3>

                        <p className="journey-college">
                            Institute of Engineering & Science, IPS Academy, Indore
                        </p>

                        <p className="journey-date">
                            2021 — 2025
                        </p>

                        <p>
                            Built a strong foundation in programming,
                            databases, software development and computer
                            science fundamentals.
                        </p>

                    </div>


                    <div className="journey-side">

                        <span>
                            DEGREE
                        </span>

                        <b>
                            25
                        </b>

                    </div>

                </motion.div>

                <motion.div
                    className="cert-section"

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
                        duration: 0.6
                    }}
                >

                    <div className="cert-heading">

                        <span>
                            CERTIFICATIONS
                        </span>

                        <h3>
                            Cloud & <strong>AI.</strong>
                        </h3>

                    </div>


                    <div className="cert-grid">

                        <div className="cert-item">

                            <div className="cert-top">

                                <span>
                                    AWS
                                </span>

                                <span>
                                    01
                                </span>

                            </div>


                            <div className="cert-content">

                                <h4>
                                    AWS Certified
                                    <br />
                                    Cloud Practitioner
                                </h4>

                                <p>
                                    Demonstrates foundational knowledge
                                    of AWS cloud concepts, services and
                                    infrastructure.
                                </p>

                            </div>

                        </div>

                        <div className="cert-item">

                            <div className="cert-top">

                                <span>
                                    AWS
                                </span>

                                <span>
                                    02
                                </span>

                            </div>


                            <div className="cert-content">

                                <h4>
                                    AWS Machine
                                    <br />
                                    Learning Certificate
                                </h4>

                                <p>
                                    Certificate focused on fundamental
                                    machine learning concepts and AWS
                                    machine learning services.
                                </p>

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}

export default Experience;