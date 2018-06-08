const path = require("path");
const express = require("express");
const app = express();
const router = require("express").Router();
const authRoutes = require("./auth");
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

router.use("/auth", authRoutes);
// =>{
//   console.log("auth route!!");
// }

// );

// app.get("auth/google/", passport.authenticate("google",{
//   scope: ["profile"],
// })
// );

// app.get("auth/google/redirect", (req,res)=>{
//   console.log("this is the redirect route!");
//   res.redirect('/');
// })


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;