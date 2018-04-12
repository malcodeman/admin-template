import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./Core/store";
import Login from "./Features/Auth/Login";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
