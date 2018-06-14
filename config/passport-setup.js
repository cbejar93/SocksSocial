const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
const User = require("../models/userSchema");


// This is for all teh Goole user verification shout-out to the net-ninja for his help


passport.use(new GoogleStrategy({
    // options for strat
    callbackURL: "auth/google/redirect",
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    proxy: true,
    passReqToCallback: true

}, (req, accessToken, refreshToken, profile, done) => {
//   check if user already exists in our db
User.findOne({googleID: profile.id}).then((currentUser)=>{
        if(currentUser){
            req.locals = currentUser._id; 
            // already have the user
            console.log("user is "+ currentUser);
            done(null, currentUser);
        }else{
            // if not create user in db
            new User({
                username: profile.displayName,
                googleID: profile.id
            }).save().then((newUser)=>{
                req.locals = currentUser._id; 
                console.log("new user created: "+ newUser);
                done(null, newUser);
            })
        }
});

   

})

)

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser((id, done)=>{
    User.findById(id).then((user)=>{
        done(null, id);
    });
    
});