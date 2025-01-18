const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: { msg: 'Username cannot be empty' }, // Ensure username is not empty
      len: {
        args: [3, 30], // Username must be between 3 and 30 characters
        msg: 'Username must be between 3 and 30 characters',
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: { msg: 'Email cannot be empty' }, // Ensure email is not empty
      isEmail: { msg: 'Please enter a valid email address' }, // Ensure email format is valid
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Password cannot be empty' }, // Ensure password is not empty
      len: {
        args: [8, 100], // Password must be at least 8 characters
        msg: 'Password must be at least 8 characters long',
      },
    },
  },
  tokens: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: {
      min: {
        args: [0], // Ensure tokens cannot be negative
        msg: 'Tokens cannot be negative',
      },
    },
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

module.exports = User;
