import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { requestCampaigns } from "./actions/actions_campaigns";

class Campaigns extends Component {
  componentDidMount = () => {
    this.props.requestCampaigns();
  };
  render() {
    return <div>Campaigns</div>;
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
