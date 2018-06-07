const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const postSchema = new Schema ({
    title: {type: String, required: true},
    url: {type: String, required: true},
    created: {type: String, required: true},
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
  
})

const Post = mongoose.model("Post", postSchema);

module.exports = Post;