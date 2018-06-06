import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => (
    <Router>
      <div>
        <Nav className="mb-3" />
        <div className = "container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path= "/signup" component={Signup} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>

);

export default App;
