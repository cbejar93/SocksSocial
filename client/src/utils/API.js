import axios from "axios";

// This is where we do most of the backend communication
export default {
//  This function is not used
    createUser: function (body) {
        return axios.post("api/users", body);
    },
// This function is to create a post 
    createPost: function (body) {
        return axios.post("api/post", body);
    },
// This function is to get a picture back from the cloudinary servers 
    getPicture: function(url){
      return axios.get(url);
    },
// This function gets a post back from our own sever
    getPost: function(){
        return axios.get("api/post")
    },
// This deletes socks off our databse 
    deleteSock: function (id){
        return axios.delete("api/post/" +id);

    },
// Not used
    googleResponse: function () {
        return axios.get("auth/google/redirect");
    },
// This creates new comments and associates them with the post by the ID 
    postComment: function(body, id){
        return axios.post("api/comment/"+id , body)
    },
// This logs users out of the website 
    googleLogOut: function () {
        return axios.get("auth/google/logout")
    },
// This is to be able to vote up a post
    postUp: function (id) {
        return axios.get("api/post/upvote/"+id)
    },
// This is to be able to vote down a post
    postDown: function (id) {
        return axios.get("api/post/downvote/"+id)
    },
// This is to grab user info from the database 
    userInfo: function (id) {
        return axios.get("api/user/"+id)
    }

}