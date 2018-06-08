const router = require("express").Router();
const passport = require("passport")
// Google login 

router.use("/login",(req,res)=> {

});

router.use("/will", passport.authenticate("google",{
    scope: ["profile"],
})
);

// callback route:

router.use("/redirect", passport.authenticate("google"),(req,res)=>{
    // console.log(res);
    res.redirect('http://localhost:3000/home');
})


router.use("/logout", (req,res)=> {
    res.send("logging out");
})

module.exports = router;