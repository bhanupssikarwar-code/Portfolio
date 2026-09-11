import { motion } from "framer-motion";
import "../Css/About.css";

function About() {
    return (
        <section className="about" id="about">

            <div className="about-container">

                <motion.div
                    className="about-intro"
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

                    <p className="about-label">
                        ABOUT ME
                    </p>

                    <h2>
                        Hey, thanks for stopping by.
                    </h2>

                    <p className="about-introduction">
                        I'm <strong>Bhanu</strong>, a Computer Science & Engineering
                        graduate from India who genuinely enjoys
                        building things with code — products that
                        solve problems, make things easier, and turn
                        ideas into something real.
                    </p>

                </motion.div>
                <motion.div
                    className="story"
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

                    <h3>
                        My Story
                    </h3>


                    <p>
                        I started my journey in Computer Science
                        because I was curious about how software works
                        and how simple ideas can become something people
                        can actually use.
                    </p>


                    <p>
                        During college, I explored different areas of
                        development and gradually found myself enjoying
                        <strong> web development </strong>
                        the most. I started with HTML and CSS, moved
                        into JavaScript, and eventually discovered React and Node.js.
                    </p>


                    <blockquote>
                        I've always learned best by building.
                    </blockquote>


                    <p>
                        Instead of only following tutorials, I started
                        creating projects and solving problems along
                        the way. Every project taught me something
                        different — from understanding frontend
                        applications to connecting APIs, handling data,
                        working with databases, and making applications
                        responsive.
                    </p>


                    <p>
                        One of the projects I built was an
                        <strong> E-commerce Web Application</strong>
                        using React, JavaScript, HTML and CSS.
                        Building it helped me understand components,
                        state management, user interfaces and how
                        different parts of a frontend application
                        work together.
                    </p>


                    <p>
                        I also built a
                        <strong> Weather Application</strong>,
                        where I worked with APIs and learned how to
                        fetch data, handle loading and error states,
                        and display information dynamically.
                    </p>


                    <blockquote>
                        Every project made me a little better than
                        the previous one.
                    </blockquote>


                    <p>
                        My learning didn't stop at frontend development.
                        I also explored
                        <strong> Python, SQL and AWS</strong>
                        because I wanted to understand more of what
                        happens behind the interface.
                    </p>

                    <p>
                        With Python, I worked on projects such as
                        <strong>Hand Sign Detection using OpenCV</strong>.
                        With SQL, I worked on an
                        <strong>E-Commerce Sales Analytics Database
                            using Oracle SQL</strong>, where I practiced
                        database design, relationships, joins,
                        subqueries and analytical queries.
                        I also developed an
                        <strong> Application Management System using Node.js and Express.js</strong>,
                        where I worked with REST APIs, CRUD operations,
                        authentication and database integration.
                    </p>


                    <p>
                        I also started learning AWS and cloud
                        fundamentals to understand how applications
                        are deployed and how cloud services are used
                        in real-world software development.
                    </p>


                    <p>
                        Today, my main focus is becoming a strong
                        <strong> full-stack developer.</strong>
                    </p>

                    <div className="story-skills">

                        <span>React</span>

                        <span>Node.js</span>

                        <span>Express.js</span>

                        <span>JavaScript</span>

                        <span>Python</span>

                        <span>SQL</span>

                        <span>AWS</span>

                        <span>Rest Api</span>

                        <span>Git & GitHub</span>

                    </div>


                    <p>
                        But I'm still learning.
                    </p>


                    <blockquote>
                        There is always another technology to explore,
                        another project to build, and another problem
                        to solve.
                    </blockquote>


                    <p>
                        I'm currently focused on improving my
                        development skills, building better projects,
                        understanding software engineering fundamentals,
                        and preparing myself for a professional role
                        where I can learn from experienced developers
                        and contribute to real products.
                    </p>


                    <p>
                        I don't want to just write code.
                    </p>


                    <p>
                        I want to understand
                        <strong> why something is being built,
                            who it helps, and how it can be made better.</strong>
                    </p>


                    <p>
                        That's the direction I'm taking with my career.
                    </p>


                    <blockquote className="final-quote">
                        Still learning. Still building. Still improving.
                    </blockquote>

                </motion.div>

            </div>

        </section>
    );
}

export default About;