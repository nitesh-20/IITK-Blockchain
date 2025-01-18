import React from 'react';
import './LeaderBoards.css';

const LeaderBoards = () => {
  // Example leaderboard data
  const dailyLeaders = [
    { name: 'Alice', tokens: 150, image: 'https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png', badge: 'Gold' },
    { name: 'Bob', tokens: 130, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8TBDW57ModHYlAdhqR1uU7Hq5ZVVh-nkFA&s', badge: 'Silver' },
    { name: 'Charlie', tokens: 120, image: 'https://www.shutterstock.com/image-photo/portrait-confident-man-arms-crossed-260nw-2333089669.jpg', badge: 'Bronze' },
  ];

  const weeklyLeaders = [
    { name: 'David', tokens: 110, image: 'https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png', badge: 'Gold' },
    { name: 'Eva', tokens: 100, image: 'https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png', badge: 'Silver' },
    { name: 'Frank', tokens: 90, image: 'https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png', badge: 'Bronze' },
  ];

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>

      {/* Leaderboard Sections */}
      <div className="leaderboard-sections">
        
        {/* Daily Top 3 */}
        <div className="section">
          <h3>Daily Top 3</h3>
          {dailyLeaders.map((leader, index) => (
            <div className="top-leaderboard" key={index}>
              <div className="rank">{index + 1}</div>
              <div className="leader-info">
                <img src={leader.image} alt={leader.name} />
                <div>
                  <h3>{leader.name}</h3>
                  <div className="tokens">Tokens: {leader.tokens}</div>
                  {leader.badge && <div className="badge">{leader.badge}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Top 3 */}
        <div className="section">
          <h3>Weekly Top 3</h3>
          {weeklyLeaders.map((leader, index) => (
            <div className="top-leaderboard" key={index}>
              <div className="rank">{index + 1}</div>
              <div className="leader-info">
                <img src={leader.image} alt={leader.name} />
                <div>
                  <h3>{leader.name}</h3>
                  <div className="tokens">Tokens: {leader.tokens}</div>
                  {leader.badge && <div className="badge">{leader.badge}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoards;
