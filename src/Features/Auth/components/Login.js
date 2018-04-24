import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

import Features from "./Features";
import LoginForm from "./LoginForm";

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
  submitLogin = () => {
    const email = "admin@shiff.co";
    const password = "Weareshiffco123###";
    axios
      .post("http://localhost:9000/api/v1/auth/login", { email, password })
      .then(res => {
        console.log(res);
        localStorage.setItem("token", `Bearer ${res.data.token}`);
        this.props.history.push("/");
      });
  };
  render() {
    return (
      <Wrapper>
        <Grid>
          <Features />
          <CenterWrapper>
            <FormWrapper>
              <Heading>Sign in to Shiff.</Heading>
              <Text>Enter your details below.</Text>
              <div>
                <LoginForm />
              </div>
            </FormWrapper>
          </CenterWrapper>
        </Grid>
      </Wrapper>
    );
  }
}

export default Login;
