import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { requestOrders } from "../actions/actions_orders";
import Table from "./Table";
import Header from "../../Layout/Header";
import ordersLogo from "../images/ic_header_orders.png";

const Wrapper = styled.div`
  padding 20px;
`;

class Orders extends Component {
  componentDidMount = () => {
    this.props.requestOrders();
  };
  render() {
    return (
      <Wrapper>
        <Header logo={ordersLogo} text="Orders" company="Sony Inc." />
        <Table orders={this.props.orders} />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders.orders,
    loading: state.orders.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestOrders: () => dispatch(requestOrders())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
