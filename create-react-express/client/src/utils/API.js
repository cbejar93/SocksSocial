import axios from "axios";

export default {
    createUser: function (body) {
        return axios.post("api/signup", body);
    }
}