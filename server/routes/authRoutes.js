const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/dashboard', authMiddleware, (req, res) => res.json({ message: "Welcome to the dashboard" }));

module.exports = router;
