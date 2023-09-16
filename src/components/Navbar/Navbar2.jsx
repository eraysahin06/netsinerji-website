import { useState } from 'react';
import './navbar.css';
import NetsinerjiLogo from '../../assets/NetsinerjiLogo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <button className="green-btn">Info Bank</button>
          <Link to="/about">
            <button className="green-btn">About</button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
