import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import CampaignsNewForm from "./CampaignsNewForm";
import Header from "../../Layout/Header";
import companyLogo from "../images/ic_header_company.png";

import { uploadCampaigns } from "../actions/actions_campaigns";
import { requestBrands } from "../../Brands/actions/actions_brands";

const Wrapper = styled.div`
  padding 20px;
`;

class BrandsNew extends Component {
  componentDidMount = () => {
    this.props.requestBrands();
  };
  render() {
    if (this.props.uploadProductImageSucceeded) {
      return <Redirect to="/campaigns" />;
    }
    return (
      <Wrapper>
        <Header logo={companyLogo} text="New Campaign" company="Sony Inc." />
        {this.props.brands && (
          <CampaignsNewForm
            uploadCampaigns={this.props.uploadCampaigns}
            brands={this.props.brands}
            idBrand={1}
          />
        )}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    brands: state.brands.brands,
    loading: state.brands.loading,
    uploadProductImageSucceeded: state.campaigns.uploadProductImageSucceeded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestBrands: () => dispatch(requestBrands()),
    uploadCampaigns: newCampaign => dispatch(uploadCampaigns(newCampaign))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BrandsNew);
