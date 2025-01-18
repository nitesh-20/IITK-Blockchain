const Tweet = require('../models/Tweet');
const User = require('../models/User');

exports.createTweet = async (req, res) => {
  const { content } = req.body;
  const userId = req.user.id; // JWT middleware extracts user ID

  try {
    const tweet = await Tweet.create({ content, userId });
    res.status(201).json(tweet);
  } catch (error) {
    res.status(500).json({ error: 'Error creating tweet' });
  }
};

exports.getTrendingTweets = async (req, res) => {
  try {
    const trendingTweets = await Tweet.findAll({
      order: [['likes', 'DESC']],
      limit: 10,
    });

    // Award tokens for trending tweets
    for (let tweet of trendingTweets) {
      if (!tweet.tokensAwarded) {
        const user = await User.findByPk(tweet.userId);
        user.tokens += 10; // Award 10 tokens
        await user.save();

        tweet.tokensAwarded = true;
        await tweet.save();
      }
    }

    res.status(200).json(trendingTweets);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching trending tweets' });
  }
};
