import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { uploadCampaigns } from "../actions/actions_campaigns";
import CampaignsNewForm from "./CampaignsNewForm";
import Header from "../../Layout/Header";
import companyLogo from "../images/ic_header_company.png";

const Wrapper = styled.div`
  padding 20px;
`;

class BrandsNew extends Component {
  render() {
    return (
      <Wrapper>
        <Header logo={companyLogo} text="New Campaign" company="Sony Inc." />
        <CampaignsNewForm uploadCampaigns={this.props.uploadCampaigns} />
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    uploadCampaigns: newCampaign => dispatch(uploadCampaigns(newCampaign))
  };
};

export default connect(null, mapDispatchToProps)(BrandsNew);
