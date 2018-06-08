const router = require("express").Router();
const googleRoutes = require("./google");

router.use("/google", googleRoutes);
// =>{
//     console.log("google route!!");
// });

module.exports = router;