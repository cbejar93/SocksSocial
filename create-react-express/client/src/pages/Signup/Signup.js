import React, {Component} from "react";

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
        this.setState({[event.target.name]: [event.target.value]})
    }

    render (){
        return (
            <div>
                
            </div>
        )
    }
}