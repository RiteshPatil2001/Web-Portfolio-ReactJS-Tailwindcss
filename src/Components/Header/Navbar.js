import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faLaptopCode, faFileLines, faTrophy } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Ritesh Patil
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/home" className='NavList'><FontAwesomeIcon icon={faHouse} /> Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className='NavList'><FontAwesomeIcon icon={faUser} />  About</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className='NavList'><FontAwesomeIcon icon={faLaptopCode} /> Projects</NavLink>
        </li>
        <li>
          <NavLink to="/certificates" className='NavList'><FontAwesomeIcon icon={faTrophy} /> Certificates</NavLink>
        </li>
        <li>
          <NavLink className='NavList' to="/resume"><FontAwesomeIcon icon={faFileLines} /> Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar