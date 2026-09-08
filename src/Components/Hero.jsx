import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
    FiFileText,
    FiArrowDown
} from "react-icons/fi";
import Bhanuimage from '../assets/images/Bhanuimage.jpg'

import "../Css/Hero.css";

function AnimatedText() {

    const texts = [
        "Build Products.",
        "Write Code.",
        "Create.",
        "Design.",
        "Learn.",
        "Tackle Challenges"

    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setIndex(
                (previous) =>
                    (previous + 1) % texts.length
            );
        }, 2000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className="animated-text">

            <span>
                Love to
            </span>

            <motion.span
                key={texts[index]}
                className="animated-word"
                initial={{
                    opacity: 0,
                    y: 15
                }}
                animate={{
                    opacity: 1,
                    y:0
                }}
                transition={{
                    duration: 0.5
                }}
            >
                {texts[index]}
            </motion.span>

        </div>
    );
}

function Hero() {

    return (
        <section
            className="hero"
            id="home"
        >
            <div className="hero-content">

                <motion.div
                    className="profile-wrapper"

                    initial={{
                        opacity: 0,
                        x: -30
                    }}

                    animate={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: 0.8
                    }}
                >

                    <motion.div
                        className="profile-image"

                         whileHover={{
                           scale: 1.03,
                        y: -6
                         }}

                        whileTap={{
                             scale: 0.98
                         }}
                    >

                        <img
                            src={Bhanuimage}
                            alt="Bhanu Pratap Singh Sikarwar"
                        />

                    </motion.div>

                    <motion.div
                        className="hello-message"

                        initial={{
                            opacity: 0,
                            x: 10
                        }}

                        animate={{
                            opacity: 1,
                            x: 0
                        }}

                        transition={{
                            delay: 0.8,
                            duration: 0.5
                        }}
                    >
                        Hello 👋
                    </motion.div>

                </motion.div>


                <div className="hero-text">

                    <motion.p
                        className="hero-greeting"

                        initial={{
                            opacity: 0,
                            y: 15
                        }}

                        animate={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            delay: 0.2,
                            duration: 0.6
                        }}
                    >
                        👋 I'm
                    </motion.p>


                    <motion.h1

                        initial={{
                            opacity: 0,
                            y: 25
                        }}

                        animate={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            delay: 0.3,
                            duration: 0.7
                        }}
                    >

                        <span className="name-first">
                            Bhanu Pratap Singh
                        </span>

                        <br />

                        <span className="name-last">
                            Sikarwar
                        </span>

                    </motion.h1>


                    <motion.div

                        initial={{
                            opacity: 0
                        }}

                        animate={{
                            opacity: 1
                        }}

                        transition={{
                            delay: 0.5
                        }}
                    >
                        <AnimatedText />
                    </motion.div>


                    <motion.p
                        className="hero-description"

                        initial={{
                            opacity: 0,
                            y: 20
                        }}

                        animate={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            delay: 0.7,
                            duration: 0.6
                        }}
                    >

                        <span className="description-highlight">
                            Fullstack developer
                        </span>{" "}

                        passionate about building modern,
                        responsive and user-friendly
                        applications.

                    </motion.p>


                    <motion.div
                        className="hero-buttons"

                        initial={{
                            opacity: 0,
                            y: 20
                        }}

                        animate={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            delay: 0.9,
                            duration: 0.6
                        }}
                    >

                        <motion.a
                            href="#projects"
                            className="work-button"

                            whileHover={{
                                y: -4
                            }}

                            whileTap={{
                                scale: 0.97
                            }}
                        >
                            View My Work
                        </motion.a>


                        <motion.a
                            href="/Bhanu_Pratap_Singh_Sikarwar_resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="resume-button"

                            whileHover={{
                                y: -4
                            }}

                            whileTap={{
                                scale: 0.97
                            }}
                        >

                            <FiFileText />

                            <span>
                                Resume
                            </span>

                        </motion.a>

                    </motion.div>

                </div>

            </div>


            <motion.div
                className="scroll-indicator"

                animate={{
                    y: [0, 8, 0]
                }}

                transition={{
                    duration: 1.5,
                    repeat: Infinity
                }}
            >

                <FiArrowDown />

            </motion.div>

        </section>
    );
}

export default Hero;