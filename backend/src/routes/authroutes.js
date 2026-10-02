const express = require("express");
const { register,login,logout } = require("../controllers/authController");

const router = express.Router();

// Register Route
router.post("/register", register)

// Login Route
router.post("/login", login);

//Logout Route
router.post("/logout", logout);

module.exports = router;
