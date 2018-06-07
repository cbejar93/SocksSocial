var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    comment: {type: String, required: true},
    post: {
        type: Schema.ObjectId,
        ref: 'Post',
      }

})

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;



