// routes/tronAuth.js
const express = require("express");
const jwt = require("jsonwebtoken");
const TronWeb = require("tronweb");

const router = express.Router();

const JWT_SECRET = "UYEFM0D0HHFQSMYY"; // Use a secure secret for JWT signing

// TRON Web initialization
const tronWeb = new TronWeb({
  fullHost: "https://api.trongrid.io", // TRON public API endpoint
});

// TRON login route
router.post("/tron-login", async (req, res) => {
  const { address, signedMessage } = req.body;

  try {
    const message = "Login to MyApp"; // The same message the user signed

    // Verify the signed message
    const isValid = await tronWeb.trx.verifyMessage(message, signedMessage, address);

    if (isValid) {
      // If the signature is valid, create a JWT token
      const token = jwt.sign({ address }, JWT_SECRET, { expiresIn: "1h" });
      res.json({ token });
    } else {
      res.status(400).json({ message: "Invalid signature" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during TRON login verification" });
  }
});

module.exports = router;
