import React, { Component } from "react";
import styled from "styled-components";

import Header from "../../Layout/Header";
import companyLogo from "../images/ic_header_company.png";

const Wrapper = styled.div`
  padding 20px;
`;

class Home extends Component {
  render() {
    return <Wrapper>
      <Header logo={companyLogo} text="Welcome to Shiff!" company="Sony Inc." />
    </Wrapper>;
  }
}

export default Home;
