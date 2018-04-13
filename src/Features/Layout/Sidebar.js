import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Brands from "../Brands/components/Brands";

const StyledSidebar = styled.aside`
  grid-area: sidebar;
  background-color: #191414;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Logo = styled.div`
  height: 48px;
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
  object-fit: cover;
  margin-right: 10px;
  @media (min-width: 576px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  height: 32px;
  display: flex;
  align-items: center;
  color: #627381;
`;

const LinkText = styled.span`
  font-size: 1rem;
`;

const NavlinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
`;

export default Sidebar => {
  return (
    <StyledSidebar>
      <Logo />
      <NavlinksWrapper>
        <StyledNavLink
          to="/"
          exact
          activeStyle={{
            color: "#fff"
          }}
        >
          <LinkText>Home</LinkText>
        </StyledNavLink>
        <StyledNavLink
          to="/campaigns"
          activeStyle={{
            color: "#fff"
          }}
        >
          <LinkText>Campaigns</LinkText>
        </StyledNavLink>
        <StyledNavLink
          to="/orders"
          activeStyle={{
            color: "#fff"
          }}
        >
          <LinkText
            activeStyle={{
              color: "#fff"
            }}
          >
            Orders
          </LinkText>
        </StyledNavLink>
        <StyledNavLink
          to="/reports"
          activeStyle={{
            color: "#fff"
          }}
        >
          <LinkText>Reports</LinkText>
        </StyledNavLink>
      </NavlinksWrapper>
      <Brands />
    </StyledSidebar>
  );
};
