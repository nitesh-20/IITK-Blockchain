import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="your-logo-url" alt="" className="logo" />
        <span>SocialFi</span>
      </div>
      <ul className="navbar-links">
        <li><button className="active">Home</button></li>
        <li>Explore</li>
        <li>Community</li>
        <li>Trending</li>
        <li>Notifications</li>
      </ul>
      <button className="connect-wallet">Connect Wallet</button>
    </nav>
  );
};

export default Navbar;
