const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { protect } = require('../middleware/auth.middleware');

// GET  /api/auth/me      → Get current user info (Admin)
router.get('/me', protect, authController.getMe);

// POST /api/auth/login   → Login user
router.post('/login', authController.login);

// GET  /api/auth/logout  → Logout user
router.get('/logout', protect, authController.logout);

// POST /api/auth/register → Initial setup of admin account
router.post('/register', authController.register);

module.exports = router;
