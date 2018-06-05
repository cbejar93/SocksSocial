// const mongoose = require("mongoose");
// const User = mongoose.model("User");
const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.User
            .create(req.body)
            .then(dbModal => res.json(dbModal))
            .catch(err => res.status(422).json(err));
    },
}