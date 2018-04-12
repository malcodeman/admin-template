import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Auth/Login";
import App from "./App";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
