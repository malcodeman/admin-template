import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import campaignsLogo from "../images/ic_header_campaigns.png";
import { requestCampaigns } from "../actions/actions_campaigns";
import Table from "./Table";
import Header from "../../Layout/Header";

const Wrapper = styled.div`
  padding 20px;
`

class Campaigns extends Component {
  componentDidMount = () => {
    this.props.requestCampaigns();
  };
  render() {
    return (
      <Wrapper>
        <Header logo={campaignsLogo} text="Campaigns" company="Sony Inc." />
        <Table campaigns={this.props.campaigns} />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    campaigns: state.campaigns.campaigns,
    loading: state.campaigns.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestCampaigns: () => dispatch(requestCampaigns())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Campaigns);
