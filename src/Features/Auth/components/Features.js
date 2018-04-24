import React from "react";
import styled from "styled-components";

import cityImage from "../images/city.jpg";

const Wrapper = styled.aside`
  background-image: url(${cityImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
`;

const ColorOverlay = styled.div`
  background: rgb(255, 171, 2, 0.4);
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Features = () => {
  return (
    <Wrapper>
      <ColorOverlay>
        <Content />
      </ColorOverlay>
    </Wrapper>
  );
};

export default Features;
