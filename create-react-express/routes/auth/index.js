const router = require("express").Router();
const auth = require("./auth");

router.use("/google", auth);

// router.use("/post", postRoutes);

module.exports = router;