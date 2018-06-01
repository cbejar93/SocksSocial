import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";

const App = () => (
    <Router>
      <div className = "container">
        <Switch>
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    </Router>

);

export default App;
