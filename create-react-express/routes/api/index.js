const router = require("express").Router();
const userRoutes = require("./user");
const postRoutes = require("./post");
const commentRoutes = require("./comment");
const profileRoutes = require("./profile");

router.use("/login", userRoutes);

router.use("/post", postRoutes);

router.use("/comment", commentRoutes);

router.use("/profile", profileRoutes);

router.use("/user", userRoutes);

module.exports = router;