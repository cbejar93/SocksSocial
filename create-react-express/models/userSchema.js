const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const userSchema = new Schema({
	username: String,
	googleID: String
});


// Create reference to User & export
const User = mongoose.model('User', userSchema);
module.exports = User;