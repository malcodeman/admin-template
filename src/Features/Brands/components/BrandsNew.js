import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { requestBrands, uploadBrands } from "../actions/actions_brands";
import BrandsNewFrom from "./BrandsNewForm";
import Header from "../../Layout/Header";
import companyLogo from "../images/ic_header_company.png";

const Wrapper = styled.div`
  padding 20px;
`;

class BrandsNew extends Component {
  render() {
    return (
      <Wrapper>
        <Header logo={companyLogo} text="New Brand" company="Sony Inc." />
        <BrandsNewFrom uploadBrands={this.props.uploadBrands} />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    brands: state.brands.brands
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestBrands: () => dispatch(requestBrands()),
    uploadBrands: newBrand => dispatch(uploadBrands(newBrand))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BrandsNew);
