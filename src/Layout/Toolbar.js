import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledToolbar = styled.aside`
  display: flex;
  justify-content: flex-end;
  height: 48px;
  background-color: #E5E9ED;
`;

class Toolbar extends Component {
  render() {
    return (
      <StyledToolbar>
        Toolbar
      </StyledToolbar>
    );
  }
}


export default Toolbar;