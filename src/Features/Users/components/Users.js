import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { requestUsers } from "../actions/actions_users";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const UserAccount = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  font-size: 0.8rem;
`;

class Users extends Component {
  componentDidMount = () => {
    this.props.requestUsers();
  };
  render() {
    return (
      <Wrapper>
        <UserAccount>
          <Text>{this.props.users.displayName}</Text>
          <Text>{this.props.users.email}</Text>
        </UserAccount>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    loading: state.users.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUsers: () => dispatch(requestUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
