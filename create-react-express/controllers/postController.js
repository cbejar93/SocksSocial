const db = require("../models");

module.exports = {
    create: function(req, res){
        db.Post
            .create(req.body)
            .then(dbModal => res.json(dbModal))
            .catch(err=> res.status(422).json(err));
    },
    findAll: function(req,res) {
        db.Post
            .find(req.query)
            .then(dbModal => res.json(dbModal))
            .catch(err => res.status(422).json(err));
    }
}