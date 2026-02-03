import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Make sure to import it
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Dragon Warriors Logo" className="nav-logo-img" />
        </Link>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={toggleMenu}>Team</NavLink>
          <NavLink to="/robot" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={toggleMenu}>Robot</NavLink>

          <NavLink to="/outreach" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={toggleMenu}>Outreach</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={toggleMenu}>Gallery</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={toggleMenu}>Contact</NavLink>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
