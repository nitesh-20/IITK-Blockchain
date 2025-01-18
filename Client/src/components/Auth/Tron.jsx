import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Tron.css";

const Login = () => {
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkTronLink = async () => {
      if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
        // TRONLink is installed and an account is connected
        setAddress(window.tronWeb.defaultAddress.base58);
      } else {
        // TRONLink is not connected or no account is detected
        setError("No TRON address detected. Please ensure TRONLink is connected.");
      }
    };

    // Wait for TRONLink to fully load
    const interval = setInterval(() => {
      if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
        clearInterval(interval); // Stop checking once detected
        checkTronLink();
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleTronLogin = async () => {
    if (address) {
      try {
        const message = "Login to MyApp"; // Message to be signed
        const signedMessage = await window.tronWeb.trx.sign(message); // Request the user to sign the message

        // Send address and signed message to your server for verification
        const response = await axios.post("http://localhost:5000/api/users/tron-login", {
          address,
          signedMessage,
        });

        if (response.data.token) {
          // Save the JWT token and redirect to the homepage
          localStorage.setItem("token", response.data.token);
          navigate("/");
        }
      } catch (err) {
        console.error("TRON login failed", err);
        setError("TRON login failed. Please try again.");
      }
    } else {
      setError("No TRON address detected. Please ensure TRONLink is connected.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <p>Connected Address: {address || "None"}</p>
        <button type="button" className="tron-login-btn" onClick={handleTronLogin}>
          Login with TRON Wallet
        </button>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
