import "../Css/Footer.css";
function Footer() {
  return (<>
    <footer className="footer">
      <h2 className="footer-name">Bhanu Pratap Singh Sikarwar</h2>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <p className="footer-text">
        © Bhanu Pratap Singh Sikarwar. All Rights Reserved.
      </p>

      <p className="footer-react">
        Made with using React.js
      </p>
    </footer>
  </>)
}

export default Footer;