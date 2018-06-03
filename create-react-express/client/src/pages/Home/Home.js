import React, {Component} from "react";
import { render } from 'react-dom';
import cloudinary from 'cloudinary-react';

class Home extends Component {
    constructor (){
        super();
        this.state = {
            socks: [],
            user: [],
            title: "",
        }
    }

    uploadWidget() {
                cloudinary.openUploadWidget({ cloud_name: 'dhazivqjc', upload_preset: 'PRESET', tags:['socks']},
                function(error, result) {
                console.log(result);
            })
    }

    render(){
        return (
            <div>
                    <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                        Add Image
                    </button>
            </div>
        )
    }
}



export default Home;