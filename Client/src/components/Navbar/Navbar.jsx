import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">MyWebsite</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/trending">Trending</Link></li>
        <li><Link to="/notification">Notification</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
