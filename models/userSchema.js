const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const userSchema = new Schema({
	username: String,
	googleID: String,
	comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
	posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});


// Create reference to User & export
const User = mongoose.model('User', userSchema);
module.exports = User;