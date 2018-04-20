import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  padding: 10px 10px 20px 10px;
  border-bottom: 1px solid #dfe3e8;
`;

const Logo = styled.img`
  height: 48px;
  width: 48px;
  object-fit: cover;
  margin-right: 10px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Company = styled.span`
  font-size: 0.8rem;
`;

const Heading = styled.h2`
  font-size: 1.2rem;
`;

const Header = props => {
  return (
    <StyledHeader>
      <Logo src={props.logo} />
      <InfoWrapper>
        <Company>{props.company}</Company>
        <Heading>{props.text}</Heading>
      </InfoWrapper>
    </StyledHeader>
  );
};

export default Header;
