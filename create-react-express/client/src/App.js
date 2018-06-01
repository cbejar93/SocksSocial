import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";

const App = () => (
    <Router>
      <div>
        <Nav />
        <div className = "container">
          <Switch>
            <Route path="/" component={Landing} />
          </Switch>
        </div>
      </div>
    </Router>

);

export default App;
