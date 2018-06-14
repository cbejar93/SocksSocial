import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// Here I have set up my React Router that guides us through the apllication 
const App = () => (
    <Router>
      <div>
        <Nav className="mb-3" />
        <div className = "container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path= "/signup" component={Signup} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>

);

export default App;
