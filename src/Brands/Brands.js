import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import {requestBrands} from "./actions/actions_brands";

class Brands extends Component {
  componentDidMount = () => {
    this.props.requestBrands();
  }
  render() {
    return <div>Brands</div>;
  }
}

const mapStateToProps = state => {
  return {
    brands: state.brands.brands,
    loading: state.brands.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestBrands: () => dispatch(requestBrands())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Brands);
