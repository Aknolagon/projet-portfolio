import { Link } from "react-scroll";
import "../styles/NavBar.scss";
import { useState } from "react";
import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import Logo from "../assets/Logo.webp";
import { useTheme } from "../context/ThemeContext";

function NavBar() {
  const { handleTheme } = useTheme();
  const [isOnMode, setIsOnMode] = useState(false);

  const handleOnMode = () => {
    setIsOnMode((prevMode) => !prevMode);
    handleTheme();
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="" className="portfolio">
          <span>Portfolio</span>
        </a>
        <ul className="navlist">
          <li className="navlist-corners">
            <Link to="/" className="active" smooth={true} duration={100}>
              Accueil
            </Link>
          </li>
          <li className="navlist-corners">
            <Link to="/aboutme" className="active" smooth={true} duration={100}>
              À propos
            </Link>
          </li>
          <li className="navlist-corners">
            <Link to="/skills" className="active" smooth={true} duration={100}>
              Skills
            </Link>
          </li>
          <li className="navlist-corners">
            <Link
              to="/projects"
              className="active"
              smooth={true}
              duration={100}
            >
              Mes Projets
            </Link>
          </li>
          <li className="navlist-corners">
            <Link to="/contact" className="active" smooth={true} duration={100}>
              Me Contacter
            </Link>
          </li>
        </ul>
      </div>
      <div className="mode">
        <button
          className={`glowing-btn ${isOnMode ? "on" : "off"}`}
          onClick={handleOnMode}
        >
          <span className="glowing-txt">
            {isOnMode ? (
              <>
                O<span className="faulty-letter">N</span>
              </>
            ) : (
              <>
                O<span className="faulty-letter">F</span>F
              </>
            )}
          </span>
        </button>
      </div>
      <div className="social-links">
        <li>
          <a
            href="https://www.linkedin.com/in/prasanna-kalki-64b5231b4/"
            target="_blank"
            rel="noreferrer"
          >
            <RiLinkedinFill />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Aknolagon"
            target="_blank"
            rel="noreferrer"
          >
            <RiGithubFill />
          </a>
        </li>
        <li>
          <Link to="/contact" className="active" smooth={true} duration={100}>
            <BiLogoGmail />
          </Link>
        </li>
      </div>
      <a href="" className="home-logo" to="/">
        <img className="logo" src={Logo} alt="logo" />
      </a>
    </nav>
  );
}

export default NavBar;
