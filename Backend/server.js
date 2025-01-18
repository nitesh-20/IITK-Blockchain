const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize app
const app = express();
const port = 5001;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Nitesh@2005', // use your database password
  database: 'tweets_db', // use your database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Routes
const tweetRoutes = require('./routes/tweetRoutes');
app.use('/api/tweets', tweetRoutes); // Route for tweet-related operations

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
