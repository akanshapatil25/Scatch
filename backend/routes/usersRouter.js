const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Register
router.post("/register", authController.registerUser);

// Login
router.post("/login", authController.loginUser);

// Logout
router.get("/logout", authController.logout);

module.exports = router;
