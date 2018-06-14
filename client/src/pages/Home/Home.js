import React, {Component} from "react";
// import { render } from 'react-dom';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import "./Home.css";
import API from "./../../utils/API";
import Socks from "../../components/SocksCard";
import Moment from "moment";

// This is the information for the clodinary upload

let CLOUDINARY_UPLOAD_PRESET = 'zalhcbr6';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dhazivqjc/image/upload';

class Home extends Component {
    constructor (){
        super();
        // This is where I set the state for user input and data being passed into components
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
//  When the web page load the first function does an axios request to the database to retrive the sock post, and then it checks the URL params to see who the user is
    componentDidMount (){
        this.postMaker();
        this.queryURL();
    }
// Here I am graby the URL and fixing it up to get the id of the User on the site
    queryURL = () => {
        // console.log(this.props)
        let user = this.props.location.search;
        var queryparams = user.split("=");
        // console.log(queryparams[1]);
        this.getUser(queryparams[1]);
    }
// This function sorts the socks and returns the sock array from highest votes to lowest votes
    sockSorter = (x) => {
        x.sort(function(a, b) {
            return  parseFloat(b.voteScore) - parseFloat(a.voteScore);
        });
    }
// This function grabs the id of the post voted up and then sends it to the API folder
    voteUp = (id) => {
        
        API.postUp(id);
        this.postMaker();
        

    }
// This is getting the information of the user to set the state
    getUser = (id) => {
        API.userInfo(id).then(res=>{
            // console.log(res.data);
            this.setState({user: res.data})
            // console.log(this.state.user);
        })
    }
// Same as the upvote function but instead removes a vote
    voteDown = (id) => {
        
        API.postDown(id);
        this.postMaker();
        
    }

// These to functions handle the image upload to cloudinary
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
            // console.log(response.body);
            let imageURL = response.body.url;
            this.setState({url: imageURL});
            // console.log(this.state.url);
          }
        });
      }
// this function watches all the inputs and uses ES6 to set the state of the comments and title
      handleChange = event => {
        console.log(event.target.value);
        console.log(event.target.name);
        this.setState({[event.target.name]: [event.target.value]});
    }
// Here is where we get the sock posts from the database and set the state to pass it down to our sock component
    postMaker = () => {
        API.getPost().then (res=>{
            console.log(res.data)
            this.sockSorter(res.data);
            this.setState({socks: res.data});

        for (var i = 0; i < res.data.length; i++){
            let cloudPic = res.data[i].url;
            API.getPicture(cloudPic).then(res=>{
                console.log("you made it past cloudinary API");
            })
          }
        })
    }
// This is the function that sends the post back to the database 
    formSubmission = event => {
        event.preventDefault();
        // console.log("hello there");
        this.setState({[event.target.name]: [event.target.value]});
        // console.log(this.state.title);
        document.getElementById("title").value= ""
        this.savePost();
    }
// Here we are sanatizing the information to have clean info to send back
    savePost = () => {
            let header = this.state.title;
            let photo = this.state.url;
            let created = Moment().format("MM-DD-YYYY");
            let body = {title: header, url:photo, created: created, user:this.state.user.username};
            console.log(body);
            API.createPost(body).then(res=> {
                this.postMaker();
            });

    }
// Here you can delete socks
    deleteSocks = (id) => {
        console.log(id)
        this.sockdeleter(id);
          
    }
// same as above
    sockdeleter = (id) => {
        API.deleteSock(id).then(res=> {
            this.postMaker();
        });
    }
// grabbing states to create a body to send back to the database 
    commentID = () => {
        let body = {comment: this.state.comment, user: this.state.user.username, post: this.state.postID};
        let id = this.state.postID;
        document.getElementById("comment").value= ""
        API.postComment(body, id)
        this.postMaker();
        
    }

    PostIDer = (event) => {
        event.preventDefault();
        // console.log(event.target.value, "this is the IDer");
        this.setState({postID: event.target.value});
        
    }

   
    render(){
        return (
<div>
    {/* This is the component that displays all the different socks we have */}
    <Socks
        socks={this.state.socks}
        deleteSocks={this.deleteSocks}
        commentIDer={this.PostIDer}
        handleChange={this.handleChange}
        commentID={this.commentID}
        voteUp={this.voteUp}
        voteDown= {this.voteDown}
    />
    {/* The sidenav used for making posts  */}
    <div className= "sidenav">
        <div className="row d-flex justify-content-center mt-3">
            <h3>Make a Post</h3>
            
        </ div>
        <div className="row">
            <div className="input-group mb-3 mt-3">
            {/* Here we change the state of the title */}
                <input type="text" id="title" name="title" placeholder="Title" onChange={this.handleChange} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
            </div>
        </div>
        <div className="row d-flex justify-content-center">
        {/* Dropzone is an NPM package that makes it easier to upload pictures */}
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