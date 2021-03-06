const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: {type: String, required: true},
    user: {type: String},
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
      }

})

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;



