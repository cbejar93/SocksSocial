const router = require("express").Router();
const userController = require("../../controllers/userController");
// This is to create a new user 
router.route("/")
    // .get(articlesController.findAll)
    .post(userController.create);
// This is to find the id of the user currently on the site. 
router.route("/:id")
    .get(userController.findOne);

module.exports = router;