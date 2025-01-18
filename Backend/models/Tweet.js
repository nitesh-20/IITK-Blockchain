const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Tweet = sequelize.define('Tweet', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  retweets: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  tokensAwarded: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

// Relationship
Tweet.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Tweet, { foreignKey: 'userId' });

module.exports = Tweet;
