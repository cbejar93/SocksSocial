const db = require("../models");

module.exports = {
    // Here is where we create a new comment with the body of the request
    create: function(req,res){
        const comment = new db.Comment (req.body)
            comment.save()
            .then((comment) =>{
                
            //   console.log(comment, "hello")
// Then with the request params we find the post and associate it with that comments so we only have to call the post in the front end
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