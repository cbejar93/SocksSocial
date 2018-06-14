const router = require("express").Router();
const commentController = require("./../../controllers/commentController");
// This one is to get the post commetents
router.route("/:id")
    .get()
    .post(commentController.create);

module.exports = router;