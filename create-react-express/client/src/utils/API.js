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
    }
}