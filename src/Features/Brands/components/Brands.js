import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { requestBrands } from "../actions/actions_brands";
import Brand from "./Brand";
import IconAddCircle from "./ic_add_circle.svg";

const BrandsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h3`
  text-transform: uppercase;
  color: #627381;
  font-size: 0.8rem;
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddIcon = styled.img`
  height: 20px;
  width: 20px;
  object-fit: cover;
  cursor: pointer;
`;

class Brands extends Component {
  componentDidMount = () => {
    this.props.requestBrands();
  };
  render() {
    return (
      <div>
        <BrandsContainer>
          <HeadingWrapper>
            <Heading>Brands</Heading>
            <AddIcon src={IconAddCircle} />
          </HeadingWrapper>
          {this.props.brands.map(brand => {
            return (
              <Brand key={brand.id} logo={brand.logoUrl} name={brand.name} />
            );
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
