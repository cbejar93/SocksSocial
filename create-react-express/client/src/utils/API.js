import axios from "axios";
import cloudinary from "cloudinary";

cloudinary.config({
    cloud_name: 'dhazivqjc',
    api_key: '369733376192735',
    api_secret: 'dr004k0H8yVwUUHnI3kstMshUQk'
});

export default {

    pictureUpload: function(picture){
        return (
            cloudinary.uploader.upload(picture, function(result){
                console.log(result);
            })
        )
    },
    
    createUser: function (body) {
        return axios.post("api/users", body);
    }
}