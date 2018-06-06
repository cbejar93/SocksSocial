const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");

passport.use(new GoogleStrategy({
    // options for strat
    callbackURL: "auth/google/redirect",
    clientID: keys.google.clientID,
    clientSeceret: keys.google.clientSeceret,
    proxy: true

}, () => {

})

)