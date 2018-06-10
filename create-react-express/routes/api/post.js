const router = require("express").Router();
const postController = require("../../controllers/postController");

router.route("/")
    .get(postController.findAll)
    .post(postController.create);
    
router.route("/:id")
    .delete(postController.remove);

router.route("/upvote/:id")
    .get(postController.upVote)
    
    
router.route("/downvote/:id")
    .get(postController.downVote);

module.exports = router;