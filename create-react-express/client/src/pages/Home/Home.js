import React, {Component} from "react";
// import { render } from 'react-dom';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import "./Home.css";
import API from "./../../utils/API";

let CLOUDINARY_UPLOAD_PRESET = 'zalhcbr6';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dhazivqjc/image/upload';



class Home extends Component {
    constructor (){
        super();
        this.state = {
            socks: [],
            user: [],
            title: "",
            uploadedFileCloudinaryUrl: '',
            signature: ''
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
            console.log(response.body);
            let signature = response.body.signature;
            this.setState({signature: signature});
            console.log(this.state.signature);
          }
        });
      }

      handleChange = event => {
        console.log(event.target.value);
        console.log(event.target.name);
        this.setState({[event.target.name]: [event.target.value]});
    }

    formSubmission = event => {
        event.preventDefault();
        console.log("hello there");
        this.setState({[event.target.name]: [event.target.value]});
        console.log(this.state.title);
        this.savePost();
    }

    savePost = () => {
            let header = this.state.title;
            let photo = this.state.signature;
            let created = new Date();
            let body = {title: header, signature:photo, created: created};
            console.log(body);
            API.createPost(body);

    }

   
    render(){
        return (
    <div className= "sidenav">
        <h5>Make a post</h5>
        <hr />
        <div className="input-group input-group-sm mb-3">
            <input type="text" name="title" placeholder="Title" onChange={this.handleChange} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
        </div>
        <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
        </Dropzone>
        <button type="button" onClick={this.formSubmission} class="btn btn-success d-flex justify-content-center">Post</button>

    </div>
        )
    }
}



export default Home;