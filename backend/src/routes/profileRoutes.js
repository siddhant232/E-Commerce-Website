
const express = require("express");
const authmiddleware = require("../middleware/authMiddleware");
const { profile } = require("../controllers/profileController");
const router = express.Router();


router.post("/profile", authmiddleware, profile);

module.exports = router;