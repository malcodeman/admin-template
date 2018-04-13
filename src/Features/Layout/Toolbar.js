import React, { Component } from "react";
import styled from "styled-components";

import Users from "../Users/components/Users";

const StyledToolbar = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 48px;
  background-color: #e5e9ed;
  padding: 0 20px;
`;

class Toolbar extends Component {
  render() {
    return (
      <StyledToolbar>
        <Users />
      </StyledToolbar>
    );
  }
}

export default Toolbar;
