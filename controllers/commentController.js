const db = require("../models");

module.exports = {
    create: function(req,res){
        const comment = new db.Comment (req.body)
            comment.save()
            .then((comment) =>{
                
            //   console.log(comment, "hello")

             return db.Post.findById(req.params.id)})

                    .then((dbPost)=>{ dbPost.comments.unshift(comment)
                        return dbPost.save()
                    }).then((post)=>{console.log(post)})
            // .catch(err => res.status(422).json(err))
            .catch(err=> res.status(422).json(err))
    }
}

// // CREATE Comment
// app.post('/posts/:postId/comments', function (req, res) {
//     // INSTANTIATE INSTANCE OF MODEL
//     const comment = new Comment(req.body)
  
//     // SAVE INSTANCE OF Comment MODEL TO DB
//     comment.save().then((comment) => {
//       return Post.findById(req.params.postId)
//     }).then((post) => {
//       post.comments.unshift(comment)
//       return post.save()
//     }).then((post) => {
//       res.redirect(`/`)
//     }).catch((err) => {
//       console.log(err)
//     })
//   })