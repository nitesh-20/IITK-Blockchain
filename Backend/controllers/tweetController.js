const db = require('../config/db');

// Get all tweets
const getTweets = (req, res) => {
  db.query('SELECT * FROM tweets ORDER BY created_at DESC', (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching tweets' });
    }
    res.json(results);
  });
};

// Post a new tweet
const createTweet = (req, res) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ message: 'Tweet content is required' });
  }

  const query = 'INSERT INTO tweets (content) VALUES (?)';
  db.query(query, [content], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error posting tweet' });
    }
    res.status(201).json({ message: 'Tweet posted successfully' });
  });
};

module.exports = {
  getTweets,
  createTweet,
};
