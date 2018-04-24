import React, { Component } from "react";
import styled from "styled-components";

import Users from "../Users/components/Users";
import Dropdown from "../Users/components/Dropdown";

const StyledToolbar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 48px;
  background-color: #e5e9ed;
  padding: 0 20px;
`;

class Toolbar extends Component {
  render() {
    return (
      <StyledToolbar>
        <Users />
        <Dropdown />
      </StyledToolbar>
    );
  }
}

export default Toolbar;
