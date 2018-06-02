import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";

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
        <Footer />
      </div>
    </Router>

);

export default App;
