import React, { Component } from "react";
import styled from "styled-components";

import Header from "../../Layout/Header";
import reportsLogo from "../images/ic_header_reports.png";

const Wrapper = styled.div`
  padding 20px;
`;

class Reports extends Component {
  render() {
    return (
      <Wrapper>
        <Header logo={reportsLogo} text="Reports" company="Sony Inc." />
      </Wrapper>
    );
  }
}

export default Reports;
