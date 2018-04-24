import React, { Component } from "react";
import styled from "styled-components";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Sidebar from "./Features/Layout/sidebar/components/Sidebar";
import Toolbar from "./Features/Layout/Toolbar";

import "./App.css";
import routes from "./Core/routing/routes_sidebar";
import { loggedIn } from "./Features/Auth/actions/actions_auth";

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 64px 1fr;
  grid-template-areas: "sidebar main";
  @media (min-width: 576px) {
    grid-template-columns: 128px 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 256px 1fr;
  }
`;

const Main = styled.main`
  grid-area: main;
  background-color: #fff;
`;

class App extends Component {
  componentWillMount = () => {
    this.props.loggedIn();
  };
  render() {
    if (localStorage.getItem("token") === null) {
      return <Redirect to="/login" />;
    }
    return (
      <Wrapper>
        <Sidebar />
        <Main>
          <Toolbar />
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Main>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loggedIn: () => dispatch(loggedIn())
  };
};

export default connect(null, mapDispatchToProps)(App);
