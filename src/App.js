import React, { Component } from "react";
import styled from "styled-components";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Features/Layout/Sidebar";
import Toolbar from "./Features/Layout/Toolbar";

import "./App.css";
import routes from "./Core/routing/routes_sidebar";

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48px 1fr;
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

export default App;
