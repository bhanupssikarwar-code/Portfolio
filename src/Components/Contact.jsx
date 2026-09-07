import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FiCloud,
    FiCopy,
    FiGithub,
    FiLinkedin,
    FiMail,
    FiMapPin,
    FiSun
} from "react-icons/fi";

import Mylogo from "../assets/images/Mylogo.png";

import "../Css/Contact.css";

function Contact() {

    const [temperature, setTemperature] = useState(null);

    useEffect(() => {

        async function getWeather() {

            try {

                const response = await fetch(
                    "https://api.open-meteo.com/v1/forecast?latitude=12.9716&longitude=77.5946&current=temperature_2m&temperature_unit=celsius&timezone=Asia%2FKolkata"
                );

                const data = await response.json();

                setTemperature(
                    Math.round(data.current.temperature_2m)
                );

            } catch (error) {

                console.log(
                    "Weather error:",
                    error
                );

            }
        }

        getWeather();

        const interval = setInterval(
            getWeather,
            10 * 60 * 1000
        );

        return () => clearInterval(interval);

    }, []);


    function copyEmail() {

        navigator.clipboard.writeText(
            "your-email@gmail.com"
        );

    }


    return (
        <section
            className="contact"
            id="contact"
        >

            <div className="contact-container">

                <motion.div
                    className="contact-main"

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
                        duration: 0.7
                    }}
                >

                    <span className="contact-label">
                        GET IN TOUCH
                    </span>

                    <h2>
                        Let's build something
                        <br />
                        <strong>
                            meaningful together.
                        </strong>
                    </h2>

                    <p className="contact-description">
                        I'm always open to discussing new opportunities,
                        interesting projects, collaborations or simply
                        having a conversation about technology.
                    </p>

                    <button
                        className="email-button"
                        onClick={copyEmail}
                    >

                        <span>
                            Email ID: bhanu.p.ssikarwar01@gmail.com
                        </span>

                    </button>

                </motion.div>

            </div>

            <footer className="portfolio-footer">

                <div className="footer-container">

                    <div className="footer-profile">

                        <a
                            href="#home"
                            className="footer-logo"
                        >
                            <img
                                src={Mylogo}
                                alt="Bhanu Pratap Singh Sikarwar"
                            />
                        </a>

                        <h3>
                            Bhanu Pratap Singh Sikarwar
                        </h3>

                        <p>
                            Fullstack Developer
                        </p>

                    </div>

                    <div className="footer-socials">

                        <a
                            href="mailto:bhanu.p.ssikarwar01@gmail.com"
                            aria-label="Email"
                            title="Email"
                        >
                            <FiMail />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/bhanu-pratap-singh-sikarwar-783044319"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            title="LinkedIn"
                        >
                            <FiLinkedin />
                        </a>

                        <a
                            href="https://github.com/bhanupssikarwar-code"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            title="GitHub"
                        >
                            <FiGithub />
                        </a>

                    </div>


                    <div className="footer-info">

                        <div className="footer-location">

                            <FiMapPin />

                            <span>
                                Built with care in Bengaluru, India
                            </span>

                        </div>


                        <div className="footer-weather">

                            <FiCloud />

                            <span>
                                {temperature !== null
                                    ? `${temperature}°C`
                                    : "Loading..."}
                            </span>

                        </div>

                    </div>

                    <div className="footer-bottom">

                        <span>
                            © 2024 Bhanu Pratap Singh Sikarwar
                        </span>

                        <div className="footer-nav">

                            <a href="#about">
                                About
                            </a>

                            <a href="#skills">
                                Skills
                            </a>

                            <a href="#experience">
                                Experience
                            </a>

                            <a href="#projects">
                                Projects
                            </a>

                            <a href="#contact">
                                Contact
                            </a>

                        </div>

                        <a
                            href="#home"
                            className="back-top"
                        >
                            Back to top ↑
                        </a>

                    </div>

                </div>

            </footer>

        </section>
    );
}

export default Contact;