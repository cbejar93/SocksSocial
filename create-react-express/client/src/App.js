import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import Signup from "./pages/Signup";

const App = () => (
    <Router>
      <div>
        <Nav />
        <div className = "container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path= "/singup" component={Signup} />
          </Switch>
        </div>
      </div>
    </Router>

);

export default App;
