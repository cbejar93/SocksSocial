const router = require("express").Router();

const authCheck = (req,res, next) => {
    if (!req.user){
            // runs if user is not logged in 
            res.redirect("api/signup")
    }else{
        // if logged in 
        next();
    }
}
router.get("/", authCheck, (req,res)=>{
    // res.send("you are logged in as -" + req.user);
    res.redirect('http://localhost:3000/home');

});

module.exports = router;