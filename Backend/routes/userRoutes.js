const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Public Routes
router.post('/register', userController.register); // User registration
router.post('/login', userController.login);       // User login

module.exports = router;
