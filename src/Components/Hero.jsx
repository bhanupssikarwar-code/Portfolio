import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";
import "../Css/Hero.css";
import Bhanuimage from "../assets/images/Bhanuimage.jpg";
function Hero() {
    return (
        <section id="home" className="hero d-flex align-items-center">


            <div className="container">

                <div className="row align-items-center">

                    {/* Left Side */}

                    <div className="col-lg-7">

                        <p className="hello">👋 Hello, I'm</p>

                        <h1 className="hero-title">
                            Bhanu Pratap Singh <span>Sikarwar</span>
                        </h1>

                        <h3 className="typing">
                            Python & React Developer
                        </h3>

                        <p className="hero-text">
                            Computer Science & Engineering graduate passionate about building
                            responsive web applications and modern user
                            interfaces using React, Python and SQL.
                        </p>

                        <div className="mt-4">

                            <a
                                href="/Bhanu_Pratap_Singh_Sikarwar_resume.pdf"
                                download
                                className="btn btn-dark btn-lg me-3"
                            >
                                <FaDownload className="me-2" />
                                Download Resume
                            </a>

                            <a
                                href="/Bhanu_Pratap_Singh_Sikarwar_resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary btn-lg"
                            >
                                View Resume
                            </a>
                            <div className="row mt-5 g-4 stats">

                                <div className="col-md-4">
                                    <div className="stat-card">
                                        <h2>3+</h2>
                                        <p>Projects</p>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="stat-card">
                                        <h2>2025</h2>
                                        <p>Graduate</p>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="stat-card">
                                        <h2>1</h2>
                                        <p>Internship</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* Right Side */}

                    <div className="col-lg-5 text-center">

                        <div className="profile-box">

                            <img
                                src={Bhanuimage}
                                alt="profile"
                                className="profile-img"
                            />

                        </div>

                    </div>

                </div>

            </div>



        </section>


    );
}

export default Hero;