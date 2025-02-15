import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <>
      <nav>
      <h1 className="grandior-text">Grandior</h1>
        <ul>
          <li><Link to="/">🏠Home</Link></li>
          <li><Link to="/fragrance">✨Fragrance</Link></li>
          <li><Link to="/candle">🕯️Candle</Link></li>
          <li><Link to="/sale">⚡Sale</Link></li>
          <li><Link to="/aboutus">ℹ️ About Us</Link></li>
          <li><Link to="/profile">👤Profile</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;