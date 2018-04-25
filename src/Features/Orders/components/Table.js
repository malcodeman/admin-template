import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import OrderStatusForm from "./OrderStatusForm";
import { updateOrdersStatus } from "../actions/actions_orders";

const StyledTable = styled.table`
  width: 100%;
`;

const TableHeader = styled.th`
  font-weight: 300;
  text-align: left;
  padding-bottom: 20px;
`;

const TableData = styled.td`
  padding-bottom: 20px;
`;

const Table = props => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <TableHeader>Order</TableHeader>
          <TableHeader>Brand</TableHeader>
          <TableHeader>Campaign</TableHeader>
          <TableHeader>Display Name</TableHeader>
          <TableHeader>Post url</TableHeader>
          <TableHeader>Status</TableHeader>
        </tr>
      </thead>
      <tbody>
        {props.orders.map((order, index) => {
          return (
            <tr key={order.orderId}>
              <TableData>{order.orderId}</TableData>
              <TableData>{order.brandName}</TableData>
              <TableData>{order.campaignName}</TableData>
              <TableData>{order.userDisplayName}</TableData>
              <TableData>
                {order.posts.instagram ? (
                  <a target="_blank" href={order.posts.instagram.postUrl}>
                    {order.posts.instagram.postUrl}
                  </a>
                ) : (
                  ""
                )}
              </TableData>
              <TableData>
                <OrderStatusForm
                  statuses={[
                    { id: "1", value: "ordered" },
                    { id: "2", value: "shipped" },
                    { id: "3", value: "paid" },
                    { id: "4", value: "failed" }
                  ]}
                  updateOrdersStatus={props.updateOrdersStatus}
                  orderStatus={order.orderStatus}
                  orderID={order.orderId}
                />
              </TableData>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    updateOrdersStatus: newStatus => dispatch(updateOrdersStatus(newStatus))
  };
};

export default connect(null, mapDispatchToProps)(Table);
