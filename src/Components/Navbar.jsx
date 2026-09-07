import {
    FiFolder,
    FiUser,
    FiMail
} from "react-icons/fi";
import Mylogo from '../assets/images/Mylogo.png'
import "../Css/Navbar.css";

function Navbar() {

    return (
        <nav className="navbar">
            <a
                href="#home"
                className="navbar-logo"
            >
                <img src={Mylogo}></img>
            </a>
            <div className="navbar-icons">

                <a
                    href="#projects"
                    title="Projects"
                >
                    <FiFolder />
                </a>

                <a
                    href="#about"
                    title="About"
                >
                    <FiUser />
                </a>

                <a
                    href="#contact"
                    title="Contact"
                >
                    <FiMail />
                </a>

            </div>

        </nav>
    );
}

export default Navbar;