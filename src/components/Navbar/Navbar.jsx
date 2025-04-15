import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToTop = () => {
    scroll.scrollToTop();
    setMenuOpen(false);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav  className=" navbar-dark bg-dark d-flex justify-content-between" >
      <div className="p-4 ps-0 ">  <a className="navbar-brand  mt-3 ms-5" href="#Home">Portfolio<span style={{color:"red"}}>.</span></a></div>
      <div className="menu ms-5" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="home" smooth={true} duration={500} onClick={scrollToTop}>
            Home
          </Link>{" "}
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={handleMenuClick}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={handleMenuClick}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={handleMenuClick}
          >
            Contact
          </Link>
        </li>
        <li>
        <a href="https://docs.google.com/document/d/1f1BmhDA-36O3z2e52Au3wrWJedeqfa9kmB3SAchjpqc/edit?usp=sharing" className="btn btn-outline-danger mt-3 mb-2   ms-4 ">Download CV</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
