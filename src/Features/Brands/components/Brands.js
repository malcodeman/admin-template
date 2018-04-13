import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { requestBrands } from "../actions/actions_brands";
import Brand from "./Brand";

const BrandsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h3`
  text-transform: uppercase;
  color: #627381;
  font-size: .8rem;
`;

class Brands extends Component {
  componentDidMount = () => {
    this.props.requestBrands();
  };
  render() {
    return (
      <div>
        <BrandsContainer>
          <Heading>Brands</Heading>
          {this.props.brands.map(brand => {
            return <Brand key={brand.id} logo={brand.logoUrl} name={brand.name} />;
          })}
        </BrandsContainer>
      </div>
    );
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
