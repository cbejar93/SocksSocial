import React, {Component} from "react";
import Input from "../../components/Input";
import API from "../../utils/API";

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
        userCreate();
    }

    userCreate = () => {
        console.log("This is where the api goes!");
        let body = {fname: this.state.fname, lname: this.state.lname, email: this.state.email, username: this.state.username, password: this.state.password }
        API.createUser(body)
    }

    render (){
        return (
            <div>
                <Input
                    handleChange={this.handleChange}
                    formSubmission={this.formSubmission}
                
                />
            </div>
        )
    }
}

export default Signup;