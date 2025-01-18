const express = require('express');
const router = express.Router();
const { getTweets, createTweet } = require('../controllers/tweetController');

// Define routes
router.get('/', getTweets);          // Get all tweets
router.post('/create', createTweet); // Create a new tweet

module.exports = router;
