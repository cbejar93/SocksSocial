// The most important require is express
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
// This is for the database 
const mongoose = require("mongoose");
const app = express();
// This is for express to use the prebuilt routes 
const routes = require("./routes");
// All the ones below are for google oauth
const session = require('express-session');
const passportSetup = require("./config/passport-setup");
const passport = require("passport");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// This grabs the body element of a response so the req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: [keys.session.cookieKey]
}))

// init passport 
app.use(passport.initialize());
app.use(passport.session());


// This is to try and mitagate CORS issues. 
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
// This is telling express to use the routes we have already set up 
app.use(routes);
// This is connecting to our database 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/socks");

// Send every request to the React app
// Define any API routes before this runs

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});



// Here we create a PORT to serve the webpage 
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
