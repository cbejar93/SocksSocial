// const mongoose = require("mongoose");
// const User = mongoose.model("User");
const db = require("../models");
// create a new user and find one user here
module.exports = {
    create: function(req, res) {
        db.User
            .create(req.body)
            .then(dbModal => res.json(dbModal))
            .catch(err => res.status(422).json(err));
    },
    findOne: function(req,res){
        db.User
            .findById({ _id: req.params.id})
            .then((dbModel)=>{  res.json(dbModel)
            })
    }
}