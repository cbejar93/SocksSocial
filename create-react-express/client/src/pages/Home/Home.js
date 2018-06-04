import React, {Component} from "react";
// import { render } from 'react-dom';
import Dropzone from 'react-dropzone';
import request from 'superagent';


let CLOUDINARY_UPLOAD_PRESET = 'zalhcbr6';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dhazivqjc/image/upload';



class Home extends Component {
    constructor (){
        super();
        this.state = {
            socks: [],
            user: [],
            title: "",
            uploadedFileCloudinaryUrl: ''
        }
    }

    onImageDrop(files) {
        this.setState({
          uploadedFile: files[0]
        });
    
        this.handleImageUpload(files[0]);
      }

      handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                            .field('file', file);
    
        upload.end((err, response) => {
          if (err) {
            console.error(err);
          }
    
          if (response.body.secure_url !== '') {
            this.setState({
              uploadedFileCloudinaryUrl: response.body.secure_url
            });
          }
        });
      }

    // uploadWidget = () => {		
	// 	cloudinary.openUploadWidget({ cloud_name: 'dhazivqjc', upload_preset: 'zalhcbr6', tags:['socks'] }, 
    //   		function(error, result){ 
    //   			console.log(error);
    //   	});      	
	// }

    // uploadWidget() {
    //             cloudinary.openUploadWidget({ cloud_name: 'dhazivqjc', upload_preset: 'PRESET', tags:['socks']},
    //             function(error, result) {
    //             console.log(result);
    //         })
    // }


    render(){
        return (
        <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
        </Dropzone>
        )
    }
}



export default Home;