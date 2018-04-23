import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 20px 10px;
  border-bottom: 1px solid #dfe3e8;
  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
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

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Header = props => {
  return (
    <StyledHeader>
      <LeftWrapper>
        <Logo src={props.logo} />
        <InfoWrapper>
          <Company>{props.company}</Company>
          <Heading>{props.text}</Heading>
        </InfoWrapper>
      </LeftWrapper>
      <ButtonWrapper>{props.children}</ButtonWrapper>
    </StyledHeader>
  );
};

export default Header;
