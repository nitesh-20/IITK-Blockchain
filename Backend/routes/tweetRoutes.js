const express = require('express');
const tweetController = require('../controllers/tweetController');
const authenticateToken = require('../middlewares/authMiddleware'); // JWT authentication middleware
const router = express.Router();

// Protected Routes
router.post('/create', authenticateToken, tweetController.createTweet); // Create a new tweet
router.get('/trending', authenticateToken, tweetController.getTrendingTweets); // Get trending tweets

module.exports = router;
