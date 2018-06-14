const mongoose = require("mongoose");
const Schema= mongoose.Schema;
// The schema for the posts
const postSchema = new Schema ({
    title: {type: String, required: true},
    url: {type: String, required: true},
    created: {type: String, required: true},
    user: {type: String},
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    voteScore: {type: Number, default: 0}
    
  
})

const Post = mongoose.model("Post", postSchema);

module.exports = Post;