const mongoose = require("mongoose");
const Schema= moongose.Schema;

const userSchema = new Schema ({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
})

const User = mongoose.model("User", userSchema);

module.exports = User;