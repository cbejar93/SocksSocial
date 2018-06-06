const router = require("express").Router();
const passport = require("passport")
// Google login 

router.use("/login",(req,res)=> {

});

router.use("/", passport.authenticate("google",{
    scope: ["profile"],
}) 
);

// callback route:

router.use("/redirect", (req,res)=>{
    res.send("You've reached the callback URI")
})


router.use("/logout", (req,res)=> {
    res.send("logging out");
})

module.exports = router;