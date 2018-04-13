import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledTable = styled.table`
  widtableheader: 100%;
`;

const TableHeader = styled.th`
  font-weight: 300;
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
                <select
                  defaultValue={order.orderStatus}
                  onChange={this.handleChangeStatus}
                >
                  <option value="shipped">Shipped</option>
                  <option value="ordered">Ordered</option>
                  <option value="paid">Paid</option>
                  <option value="failed">Failed</option>
                </select>
              </TableData>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default Table;
