const router = require("express").Router();
const googleRoutes = require("./google");

// putting google in the req.params
router.use("/google", googleRoutes);

module.exports = router;