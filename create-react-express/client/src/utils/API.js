import axios from "axios";


export default {
 
    createUser: function (body) {
        return axios.post("api/users", body);
    },

    createPost: function (body) {
        return axios.post("api/post", body);
    },

    getPicture: function(url){
      return axios.get(url);
    },

    getPost: function(){
        return axios.get("api/post")
    },

    deleteSock: function (id){
        return axios.delete("api/post/" +id);

    },

    googleResponse: function () {
        return axios.get("auth/google/redirect");
    },

    postComment: function(body, id){
        return axios.post("api/comment/"+id , body)
    },

    googleLogOut: function () {
        return axios.get("auth/google/logout")
    },

    postUp: function (id) {
        return axios.post("api/post/upvote/"+id)
    },

    postDown: function (id) {
        return axios.post("api/post/downvote/"+id)
    }
}