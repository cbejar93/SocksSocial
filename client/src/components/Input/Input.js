import React from "react";

const Input = props => (
  <form className="row mt-5 mb-5">
    <div className="input-group input-group-sm mb-3">
        <input type="text" name="fname" placeholder="First Name" onChange={props.handleChange} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
    </div>
    <div className="input-group input-group-sm mb-3">
        <input type="text" name="lname" placeholder="Last Name" onChange={props.handleChange} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
    </div>
    <div className="input-group input-group-sm mb-3">
        <input type="text" name="email" placeholder="Email" onChange={props.handleChange} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
    </div>
    <div className="input-group input-group-sm mb-3">
        <input type="text" name="username" placeholder="User Name" onChange={props.handleChange} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
    </div>
    <div className="input-group input-group-sm mb-3">
        <input type="password" name="password" placeholder="Password" onChange={props.handleChange} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
    </div>
    <button type="button" onClick={props.formSubmission} className="btn btn-success mb-4">Submit</button>

  </form>
)

export default Input;