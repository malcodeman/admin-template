import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import style from "./App.css";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <h2>Home</h2>
  },
  {
    path: "/campaigns",
    main: () => <h2>Campaigns</h2>
  },
  {
    path: "/brands",
    main: () => <h2>Brands</h2>
  }
];

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

const Sidebar = styled.aside`
  grid-area: sidebar;
  background-color: black;
`;

const Main = styled.main`
  grid-area: main;
  background-color: orange;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Sidebar>
            <Link to="/">Home</Link>
            <Link to="/campaigns">Campaigns</Link>
            <Link to="/brands">Brands</Link>
          </Sidebar>
          <Main>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Main>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
