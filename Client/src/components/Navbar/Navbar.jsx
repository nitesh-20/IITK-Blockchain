import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleConnectWallet = () => {
    console.log("Connect Wallet button clicked!");
    // Add your wallet connection logic here
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
    <div className="navbar-brand">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
    </div>
    <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
      <li>
        <Link to="/upload">Upload Media</Link>
      </li>
      <li>
        <Link to="/tradesphere">TradeSphere</Link>
      </li>
      <li>
        <Link to="/moneyminer">MoneyMiner</Link>
      </li>
      <li>
        <Link to="/papertrading">Paper-Trading</Link>
      </li>
      <li>
        <Link to="/buytokens">Buy Tokens</Link>
      </li>
      <li>
        <Link to="/tron">Tron</Link>
      </li>
    </ul>
    <div className="button-container">
      <button className="Login" onClick={() => console.log("Login clicked!")}>
        Login
      </button>
      <button className="connect-wallet" onClick={handleConnectWallet}>
        Connect Wallet
      </button>
    </div>
    <div className="navbar-toggle" onClick={toggleMenu}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </nav>
  
  );
};

export default Navbar;
