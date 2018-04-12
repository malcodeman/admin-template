import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledSidebar = styled.aside`
  grid-area: sidebar;
  background-color: #191414;
  display: flex;
  flex-direction: column;
`;

export default Sidebar => {
  return (
    <StyledSidebar>
      <Link to="/">Home</Link>
      <Link to="/campaigns">Campaigns</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/brands">Brands</Link>
    </StyledSidebar>
  );
};
