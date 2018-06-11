const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
    // .get(articlesController.findAll)
    .post(userController.create);

router.route("/:id")
    .get(userController.findOne);

module.exports = router;