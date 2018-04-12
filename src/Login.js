import React, { Component } from "react";
import axios from "axios";

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
      <div>
        Login
        <button onClick={this.submitLogin}>Login now</button>
      </div>
    );
  }
}

export default Login;
