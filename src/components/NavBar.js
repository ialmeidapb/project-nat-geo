import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (option) => {
    setSelected(option);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li
          className={`navbar-item ${selected === 'home' ? 'selected' : ''}`}
          onClick={() => handleClick('home')}
        >
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li
          className={`navbar-item ${selected === 'about' ? 'selected' : ''}`}
          onClick={() => handleClick('about')}
        >
          <Link to="/" className="navbar-link">OUR WORK</Link>
        </li>
        <li
          className={`navbar-item ${selected === 'services' ? 'selected' : ''}`}
          onClick={() => handleClick('services')}
        >
          <Link to="/" className="navbar-link">news</Link>
        </li>
        <li
          className={`navbar-item ${selected === 'contact' ? 'selected' : ''}`}
          onClick={() => handleClick('contact')}
        >
          <Link to="/" className="navbar-link">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
