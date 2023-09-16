import { useState } from 'react';
import './navbar.css';
import NetsinerjiLogo from '../../assets/NetsinerjiLogo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
      <div className="nav-left">
        <a href="/">
          <img src={NetsinerjiLogo} alt="netsinerji logo" />
        </a>
        <a href="/">
          <h1>Netsinerji</h1>
        </a>
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
          <ScrollLink
            to="home-section"
            spy={true}
            smooth={true}
            offset={-76}
            duration={400}
            activeClass="active-item"
            onClick={closeMenu}
          >
            <li>Home</li>
          </ScrollLink>
          <ScrollLink
            to="services-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={400}
            activeClass="active-item"
            onClick={closeMenu}
          >
            <li>Services</li>
          </ScrollLink>
          <ScrollLink
            to="solutions-section"
            spy={true}
            smooth={true}
            offset={-60}
            duration={400}
            activeClass="active-item"
            onClick={closeMenu}
          >
            <li>Solutions</li>
          </ScrollLink>
          <ScrollLink
            to="contact-section"
            spy={true}
            smooth={true}
            offset={0}
            duration={400}
            activeClass="active-item"
            onClick={closeMenu}
          >
            <li>Contact</li>
          </ScrollLink>
          <button className="green-btn">Info Bank</button>
          <Link to="/about">
            <button className="green-btn">About</button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
