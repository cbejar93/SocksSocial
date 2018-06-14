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
            .find(req.query).populate("comments")
            .then(dbModal => res.json(dbModal))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res){
        db.Post
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    upVote: function(req, res){
        db.Post
          .findById({ _id: req.params.id })
           
            // Here we change the score of a post by adding one
            .then((dbModel)=>{ dbModel.voteScore = dbModel.voteScore +1
                return dbModel.save()
            })
        .catch(err => res.status(422).json(err));
    },
    downVote: function(req,res){
        db.Post
        .findById({ _id: req.params.id })
        // Do the same as above but subtract one
        .then((dbModel)=>{ dbModel.voteScore = dbModel.voteScore -1
            return dbModel.save()
        })
        .catch(err => res.status(422).json(err));
    }
}