import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { requestOrders } from "../actions/actions_orders";
import Table from "./Table";

class Orders extends Component {
  componentDidMount = () => {
    this.props.requestOrders();
  };
  render() {
    return (
      <div>
        <Table orders={this.props.orders} />
      </div>
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
