import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledTable = styled.table`
  width: 100%;
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
          <TableHeader>ID</TableHeader>
          <TableHeader>Start date</TableHeader>
          <TableHeader>End date</TableHeader>
          <TableHeader>Title</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader>Price</TableHeader>
        </tr>
      </thead>
      <tbody>
        {props.campaigns.map((campaign, index) => {
          return (
            <tr key={campaign.id}>
              <TableData>
                <Link
                  to="/orders"
                  onClick={() => this.props.filterOrders(campaign.id)}
                >
                  {campaign.id}
                </Link>
              </TableData>
              <TableData>{campaign.startDate}</TableData>
              <TableData>{campaign.endDate}</TableData>
              <TableData>{campaign.name}</TableData>
              <TableData>{campaign.status}</TableData>
              <TableData>{campaign.priceDiscount}</TableData>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default Table;
