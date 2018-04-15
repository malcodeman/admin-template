import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";
import { requestBrands, uploadBrands } from "../actions/actions_brands";
import BrandsNewFrom from "./BrandsNewForm";

class BrandsNew extends Component {
  render() {
    return (
      <div>
        brands new<BrandsNewFrom uploadBrands={this.props.uploadBrands} />
      </div>
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
