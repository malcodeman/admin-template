import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { requestCampaigns } from "./actions/actions_campaigns";
import Table from "./components/Table";

class Campaigns extends Component {
  componentDidMount = () => {
    this.props.requestCampaigns();
  };
  render() {
    return (
      <div>
        <Table campaigns={this.props.campaigns} />
      </div>
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
