import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  @media (min-width: 576px) {
    justify-content: initial;
  }
`;

const Logo = styled.img`
  height: 32px;
  width: 32px;
  object-fit: cover;
  @media (min-width: 576px) {
    margin-right: 10px;
  }
`;

const Name = styled.span`
  font-size: 0.8rem;
  color: #627381;
  display: none;
  @media (min-width: 576px) {
    display: inline;
  }
`;

const Brand = props => {
  return (
    <Wrapper>
      <Logo src={props.logo} />
      <Name>{props.name}</Name>
    </Wrapper>
  );
};

export default Brand;
