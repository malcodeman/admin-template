import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Features from "./Features";
import LoginForm from "./LoginForm";

import { submitLogin } from "../actions/actions_auth";

const Wrapper = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 4fr;
  }
`;

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  max-width: 50%;
  width: 100%;
  padding: 20px 0;
`;

const Heading = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 4rem;
`;

class Login extends Component {
  render() {
    if (this.props.authLoginSucceeded) {
      return <Redirect to="/" />;
    }
    return (
      <Wrapper>
        <Grid>
          <Features />
          <CenterWrapper>
            <FormWrapper>
              <Heading>Sign in to Shiff.</Heading>
              <Text>Enter your details below.</Text>
              <LoginForm submitLogin={this.props.submitLogin} />
            </FormWrapper>
          </CenterWrapper>
        </Grid>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    authLoginSucceeded: state.auth.authLoginSucceeded,
    authLoginFailed: state.auth.authLoginFailed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitLogin: loginData => dispatch(submitLogin(loginData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
