const router = require("express").Router();
const commentController = require("./../../controllers/commentController");

router.route("/:id")
    .get()
    .post(commentController.create);

module.exports = router;