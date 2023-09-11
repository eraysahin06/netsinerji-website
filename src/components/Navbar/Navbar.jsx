import React, { useState } from 'react';
import './navbar.css';
import NetsinerjiLogo from '../../assets/NetsinerjiLogo.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and X icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
      <div className="nav-left">
        <Link to="/">
          <img src={NetsinerjiLogo} alt="netsinerji logo" />
        </Link>
        <Link to="/">
          <h1>Netsinerji</h1>
        </Link>
      </div>
      <div className="nav-right">
        <div
          className={`menu-icon ${isMenuOpen ? 'hidden' : ''}`}
          onClick={toggleMenu}
        >
          <FaBars className="bars" color="#fff" />
        </div>
        <div
          className={`menu-icon ${!isMenuOpen ? 'hidden' : ''}`}
          onClick={toggleMenu}
        >
          <FaTimes className="times" color="#fff" />
        </div>
        <ul className={`nav-items ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/">
            <li>Services</li>
          </Link>
          <Link to="/">
            <li>Info Bank</li>
          </Link>
          <Link to="/">
            <li>About</li>
          </Link>
          <Link to="/">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
