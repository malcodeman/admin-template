import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { requestUsers } from "../actions/actions_users";
import profileImage from "./profile.jpg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  height: 32px;
  width: 32px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
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
        <UserImage src={profileImage} />
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
