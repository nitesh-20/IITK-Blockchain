const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database'); // Database configuration
const jwt = require('jsonwebtoken'); // JWT for token generation
const TronWeb = require('tronweb'); // TronWeb for TRON blockchain interaction
require('dotenv').config(); // Load environment variables

const userRoutes = require('./routes/userRoutes'); // User routes
const tweetRoutes = require('./routes/tweetRoutes'); // Tweet routes

const app = express();
const PORT = process.env.PORT || 3000; // Use PORT from .env or default to 5000

// TRON Web initialization
const tronWeb = new TronWeb({
  fullHost: "https://api.trongrid.io", // Public TRON API endpoint
});

// Sample secret for JWT
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS for cross-origin requests

// API Routes
app.use('/api/users', userRoutes); // User-related routes
app.use('/api/tweets', tweetRoutes); // Tweet-related routes

// New Route for TRON login
app.post("/api/users/tron-login", async (req, res) => {
  const { address, signedMessage } = req.body;

  try {
    // Verify the signature using TronWeb
    const message = "Login to MyApp"; // The same message the user signed
    const isValid = await tronWeb.trx.verifyMessage(message, signedMessage, address);

    if (isValid) {
      // Signature is valid, create a JWT token
      const token = jwt.sign({ address }, JWT_SECRET, { expiresIn: "1h" });

      // Return the token to the frontend
      res.json({ token });
    } else {
      res.status(400).json({ message: "Invalid signature." });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error during TRON login verification." });
    console.error(err);
  }
});

// Global Error-Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace for debugging
  res.status(500).json({ 
    message: 'Something went wrong', 
    error: err.message 
  }); // Send a generic error response
});

// Test Database Connection and Start Server
sequelize
  .authenticate() // Check database connection
  .then(() => {
    console.log('Database connected successfully');
    return sequelize.sync(); // Sync database models
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
