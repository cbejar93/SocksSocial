import React, {Component} from "react";
// import { render } from 'react-dom';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import "./Home.css";
import API from "./../../utils/API";
import Socks from "../../components/SocksCard";
import Moment from "moment";

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
            url: '',
            postID: "",
            comment: ""
        }
    }

    componentDidMount (){
        this.postMaker();
    }

    sockSorter = (x) => {
        x.sort(function(a, b) {
            // console.log(a.voteScore);
            return  parseFloat(b.voteScore) - parseFloat(a.voteScore);
        });
    }

    voteUp = (event) => {
        event.preventDefault();
        let postID = event.target.value;
        console.log(postID);
        API.postUp(postID);

    }

    voteDown = (event) => {
        event.preventDefault();
        let postID = event.target.value;
        console.log(postID);
        API.postDown(postID);
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
            let imageURL = response.body.url;
            this.setState({url: imageURL});
            console.log(this.state.url);
          }
        });
      }

      handleChange = event => {
        console.log(event.target.value);
        console.log(event.target.name);
        this.setState({[event.target.name]: [event.target.value]});
    }

    postMaker = () => {
        API.getPost().then (res=>{
            console.log(res.data)
            this.sockSorter(res.data);
            // console.log(sorted);
            this.setState({socks: res.data});

        for (var i = 0; i < res.data.length; i++){
            // this.setState({socks: res.data[i]});
            let cloudPic = res.data[i].url;
            // console.log(cloudPic);
            API.getPicture(cloudPic).then(res=>{
                // console.log(res);
                console.log("you made it past cloudinary API");
            })
          }
        })
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
            let photo = this.state.url;
            let created = Moment().format("DD-MM-YYYY");
            let body = {title: header, url:photo, created: created};
            console.log(body);
            API.createPost(body);

    }

    deleteSocks = (id) => {
        console.log(id)
        this.sockdeleter(id);
          
    }

    sockdeleter = (id) => {
        API.deleteSock(id);
    }

    commentID = () => {
        let body = {comment: this.state.comment, post: this.state.postID};
        let id = this.state.postID;
        API.postComment(body, id);
    }

    PostIDer = (event) => {
        event.preventDefault();
        console.log(event.target.value, "this is the IDer");
        this.setState({postID: event.target.value});
        
    }

   
    render(){
        return (
<div>
    <Socks
        socks={this.state.socks}
        deleteSocks={this.deleteSocks}
        commentIDer={this.PostIDer}
        handleChange={this.handleChange}
        commentID={this.commentID}
        voteUp={this.voteUp}
        voteDown= {this.voteDown}
    />
    <div className= "sidenav">
        <div className="row d-flex justify-content-center mt-3">
            <h3>Make a Post</h3>
            
        </ div>
        <div className="row">
            <div className="input-group mb-3 mt-3">
                <input type="text" name="title" placeholder="Title" onChange={this.handleChange} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <Dropzone
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
                <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
        </div>
        <div className="row d-flex justify-content-center mt-3">
            <button type="button" onClick={this.formSubmission} className="btn btn-light d-flex justify-content-center mt-2">Post</button>
        </div>
    </div>
</div>
        )
    }
}



export default Home;