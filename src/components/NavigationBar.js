import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/NavigationBar.css';

const NavigationBar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Le Sutra</Link>
      </div>
      <ul className={isActive ? "navbar-menu active" : "navbar-menu"}>
        <li><Link to="/">Home</Link></li>
        <li className="dropdown">
          <Link to="#">The Company</Link>
          <div className="dropdown-content">
            <Link to="/who-we-are">Who we are</Link>
            <Link to="/featured-in">Featured in</Link>
          </div>
        </li>
        <li className="dropdown">
          <Link to="#">Hospitality</Link>
          <div className="dropdown-content">
            <Link to="/hotel-le-sutra">Hotel Le Sutra</Link>
            <Link to="/andhra-art-craft-hotel">Andhra Art & Craft Hotel</Link>
            <div className="dropdown-submenu">
              <Link to="#">Le Sutra Great Escapes</Link>
              <div className="dropdown-submenu-content">
                <Link to="/udaan">Udaan</Link>
                <Link to="/geometrica">Geometrica</Link>
              </div>
            </div>
          </div>
        </li>
        <li className="dropdown">
          <Link to="#">Real Estate</Link>
          <div className="dropdown-content">
            <div className="dropdown-submenu">
              <Link to="#">Le Sutra Art Homes</Link>
              <div className="dropdown-submenu-content">
                <Link to="/art-veda">Art Veda</Link>
                <Link to="/tribal-art-homes">Tribal Art Homes</Link>
              </div>
            </div>
          </div>
        </li>
        <li className="dropdown">
          <Link to="#">Dining</Link>
          <div className="dropdown-content">
            <Link to="/out-of-the-blue">Out of the Blue</Link>
            <Link to="/anglo-indian">Anglo Indian Cafe & Bistro</Link>
            <Link to="/olive-bar">Olive Bar and Kitchen</Link>
          </div>
        </li>
        <li><Link to="/angdai-day-spa">Angdai Day Spa</Link></li>
        <li className="dropdown">
          <Link to="#">Book Now</Link>
          <div className="dropdown-content">
            <Link to="/book-now/mumbai">Mumbai</Link>
            <Link to="/book-now/lonavala">Lonavala</Link>
            <Link to="/book-now/vishakapatnam">Vishakapatnam</Link>
          </div>
        </li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <i className={isActive ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default NavigationBar;
