const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");
const session = require('express-session');
const passportSetup = require("./config/passport-setup");
const passport = require("passport");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
// const cors = require("cors")

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: [keys.session.cookieKey]
}))

// init passport 
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if(req.method === "OPTIONS"){
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
  }
  next();
});

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/socks");

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
// app.use(passport.initialize())
// app.use(passport.session())



app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
