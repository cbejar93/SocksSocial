import axios from "axios";


export default {
 
    createUser: function (body) {
        return axios.post("api/users", body);
    },

    createPost: function (body) {
        return axios.post("api/post", body);
    },

    getPicture: function(id){
      return axios.get(`https://api.cloudinary.com/v1_1/dhazivqjc/image/${id}`);
    },

    getPost: function(){
        return axios.get("api/post")
    }
}