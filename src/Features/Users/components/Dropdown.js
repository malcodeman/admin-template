import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import profileImage from "../images/profile.jpg";

const Menu = styled.nav`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 48px;
  background-color: #fff;
  box-shadow: 0 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 1rem;
  z-index: 1;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

const UserImage = styled.img`
  height: 32px;
  width: 32px;
  object-fit: cover;
  border-radius: 50%;
`;

const StyledLink = styled(Link)`
  line-height: 2;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.8);
`;

class Dropdown extends Component {
  state = {
    menu: false
  };
  openMenu = () => {
    this.setState({ menu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  };
  closeMenu = () => {
    this.setState({ menu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  };
  componentWillUnmount = () => {
    localStorage.removeItem("token");
    document.removeEventListener("click", this.closeMenu);
  };
  render() {
    return (
      <Menu onClick={this.openMenu}>
        <UserImage src={profileImage} />
        {this.state.menu ? (
          <Links>
            <StyledLink to="/login">Sign out</StyledLink>
          </Links>
        ) : null}
      </Menu>
    );
  }
}

export default Dropdown;
