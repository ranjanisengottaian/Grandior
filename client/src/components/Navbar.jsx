import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <div className="logo-sec">
            <img src="/assets/logo.png" alt="Logo" />
          </div>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/fragrance">Fragrance</Link></li>
          <li><Link to="/candle">Candle</Link></li>
          <li><Link to="/sale">Sale</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;