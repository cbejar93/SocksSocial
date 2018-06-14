const router = require("express").Router();
const postController = require("../../controllers/postController");
// This is to get posts and create
router.route("/")
    .get(postController.findAll)
    .post(postController.create);
    // to delete
router.route("/:id")
    .delete(postController.remove);
// To increase the post score
router.route("/upvote/:id")
    .get(postController.upVote)
    
    // to decrease the posts score
router.route("/downvote/:id")
    .get(postController.downVote);

module.exports = router;