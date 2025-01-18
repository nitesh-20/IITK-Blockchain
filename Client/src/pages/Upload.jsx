// client/src/pages/upload.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [tweetContent, setTweetContent] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle tweet submission
  const handleTweetSubmit = async (e) => {
    e.preventDefault();

    if (!tweetContent) {
      setMessage('Please enter a tweet.');
      return;
    }

    try {
      // Sending the tweet to the backend
      const response = await axios.post('/api/tweets/create', { content: tweetContent });
      setMessage('Tweet posted successfully!');
      setTweetContent('');
    } catch (error) {
      setMessage('Error posting tweet, try again later.');
      console.error(error);
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default Upload;
