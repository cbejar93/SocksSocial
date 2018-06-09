import React from "react";
import "./Nav.css";
import logo from "../../images/ss_logo_white.png";

const Nav = () => (
    <div>
        <div className="jumbotron jumbotron-fluid mb-0">
            <div className="container">
                
            </div>
        </div>
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/to/nowhere">
                <img src={logo} width="150" height="50" alt="hi there" />
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto mr-5">
      <li className="nav-item mr-3">
        <a className="nav" href="/signup">Sign Up </a>
      </li>
      <li className="nav-item mr-3">
        <div className="nav" href="login">Log In</div>
      </li>
    </ul>
  </div>
            
        </nav>
    </div>


) 

export default Nav;