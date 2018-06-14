import React, {Component} from "react";
import API from "../../utils/API";
import "./Signup.css";


class Signup extends Component {
    constructor () {
        super();
        this.state ={
            fname: "",
            lname: "",
            email: "",
            username: "",
            password: ""

        };
        this.handleChange = this.handleChange.bind(this);
    }
// This was intended for local outath but never used
    handleChange = event => {
        console.log(event.target.value);
        console.log(event.target.name);
        this.setState({[event.target.name]: [event.target.value]});
    }

    formSubmission = event => {
        event.preventDefault();
        console.log("hello there");
        this.setState({[event.target.name]: [event.target.value]});
        console.log(this.state.fname, this.state.lname, this.state.email, this.state.username, this.state.password);
        this.userCreate();
    }

    userCreate = () => {
        console.log("This is where the api goes!");
        let first = this.state.fname;
        let last = this.state.lname;
        let email = this.state.email;
        let userName = this.state.username;
        let password = this.state.password;
        let body = {fname: first, lname: last, email: email, username: userName, password: password }
        console.log(body);
        API.createUser(body);
    }

    googleGetter = () => {
        API.googleLogin().then(res=> {
            console.log(res);
        })
    }
// Here we can sign in with google!
    render (){
        return (
        <div>
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col d-flex justify-content-center">
                    <h1>Sign in with Google!</h1>
                    
                </div>
            </div>
            <div className="row d-flex mt-3 justify-content-center">
                <div className="col d-flex justify-content-center">
                    <a className=" btn btn-googleplus  btn-lg" href="http://localhost:3001/auth/google/will">Google+</a>
                </div>
            </div>
        </div>

        )
    }
}

export default Signup;