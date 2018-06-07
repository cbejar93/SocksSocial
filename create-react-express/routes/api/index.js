const router = require("express").Router();
const userRoutes = require("./user");
const postRoutes = require("./post");
const commentRoutes = require("./comment");

router.use("/login", userRoutes);

router.use("/post", postRoutes);

router.use("/comment", commentRoutes);

module.exports = router;