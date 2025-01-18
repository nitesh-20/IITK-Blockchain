import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Upload.css"

const Upload = () => {
  const [tweetContent, setTweetContent] = useState('');
  const [message, setMessage] = useState('');
  const [tweets, setTweets] = useState([]);
  const [trendingTweets, setTrendingTweets] = useState([]);
  const [relatedContent, setRelatedContent] = useState([]);
  const [trendsNearYou, setTrendsNearYou] = useState([]);

  // Fetch tweets from the backend
  const fetchTweets = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/tweets'); // Ensure the URL is correct
      if (Array.isArray(response.data)) {
        setTweets(response.data);
        setTrendingTweets(response.data.slice(0, 5)); // Assume the top 5 are trending
      } else {
        console.error('Expected an array of tweets, but received:', response.data);
      }
    } catch (error) {
      console.error('Error fetching tweets:', error);
    }
  };

  // Fetch trends near you (can be based on location or other criteria)
  const fetchTrendsNearYou = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/trends'); // Adjust the endpoint if needed
      if (Array.isArray(response.data)) {
        setTrendsNearYou(response.data); // Ensure trends data is an array
      } else {
        console.error('Expected an array of trends, but received:', response.data);
      }
    } catch (error) {
      console.error('Error fetching trends near you:', error);
    }
  };

  // Fetch related content for tweets
  const fetchRelatedContent = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/related-content'); // Adjust the endpoint
      if (Array.isArray(response.data)) {
        setRelatedContent(response.data);
      } else {
        console.error('Expected an array of related content, but received:', response.data);
      }
    } catch (error) {
      console.error('Error fetching related content:', error);
    }
  };

  useEffect(() => {
    fetchTweets();
    fetchTrendsNearYou();
    fetchRelatedContent();
  }, []);

  const handleTweetSubmit = async (e) => {
    e.preventDefault();

    if (!tweetContent) {
      setMessage('Please enter a tweet.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/tweets/create', { content: tweetContent });
      setMessage('Tweet posted successfully!');
      setTweetContent('');
      fetchTweets();  // Refresh tweets list after posting
    } catch (error) {
      setMessage('Error posting tweet, try again later.');
      console.error(error);
    }
  };

  const handleLikeTweet = async (tweetId) => {
    try {
      await axios.post(`http://localhost:5001/api/tweets/like/${tweetId}`);
      fetchTweets();  // Refresh likes count after liking
    } catch (error) {
      console.error('Error liking tweet:', error);
    }
  };

  return (
    <div className="upload-container">
      <h1>Upload Tweet</h1>
      <form onSubmit={handleTweetSubmit}>
        <textarea
          value={tweetContent}
          onChange={(e) => setTweetContent(e.target.value)}
          placeholder="Write your tweet here..."
          rows="4"
          cols="50"
        ></textarea>
        <button type="submit">Post Tweet</button>
      </form>
      {message && <p>{message}</p>}

      <div className="content-container">
        {/* Left section: Trending Tweets */}
        <div className="left-section">
          <h2>Trending Tweets</h2>
          <div>
            {trendingTweets.length > 0 ? (
              trendingTweets.map((tweet) => (
                <div key={tweet.id} className="tweet-card">
                  <p>{tweet.content}</p>
                  <p>Likes: {tweet.likes}</p>
                  <button onClick={() => handleLikeTweet(tweet.id)}>Like</button>
                </div>
              ))
            ) : (
              <p>No trending tweets available.</p>
            )}
          </div>
        </div>

        {/* Right section: Related Content */}
        <div className="right-section">
          <h2>Related Content</h2>
          <div>
            {relatedContent.length > 0 ? (
              relatedContent.map((content) => (
                <div key={content.id} className="content-card">
                  <p>{content.title}</p>
                  <p>{content.description}</p>
                </div>
              ))
            ) : (
              <p>No related content available.</p>
            )}
          </div>
        </div>
      </div>

      {/* Trends Near You Section */}
      <div className="trends-near-you">
        <h2>Trends Near You</h2>
        <div>
          {trendsNearYou.length > 0 ? (
            trendsNearYou.map((trend) => (
              <div key={trend.id} className="trend-card">
                <p>{trend.name}</p>
                <p>{trend.description}</p>
              </div>
            ))
          ) : (
            <p>No trends available near you.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upload;
