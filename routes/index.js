const path = require("path");
const express = require("express");
const app = express();
const router = require("express").Router();
const authRoutes = require("./auth");
const apiRoutes = require("./api");

// API Routes for all the data we send back and forth 
router.use("/api", apiRoutes);
// This one is just for the Googe ouath
router.use("/auth", authRoutes);



// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;