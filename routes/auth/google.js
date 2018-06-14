const router = require("express").Router();
const passport = require("passport")
// Google login 

router.use("/login",(req,res)=> {

});
// This routes us to google and tells it what information we want from a user 
router.use("/will", passport.authenticate("google",{
    scope: ["profile"],
})
);

// callback route:
// the redirect route to go back to the react app
router.use("/redirect", passport.authenticate("google"),(req,res)=>{
    console.log(req.user); 
    const id = req.locals._id; 
    // res.redirect("/api/profile/")
    res.redirect(`http://localhost:3000/home?user=${id}`);
})


router.use("/logout", (req,res)=> {
    console.log("hello there");
    req.logout();
})

module.exports = router;