import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const Logo = styled.img`
  height: 24px;
  width: 24px;
  object-fit: cover;
  margin-right: 10px;
`;

const Name = styled.span`
  font-size: 0.8rem;
  color: #627381;
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
