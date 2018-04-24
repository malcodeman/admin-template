import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";
import styled from "styled-components";
import { ButtonStyles } from "../../../Core/styles/button";

const SubmitButton = styled.button`
  ${ButtonStyles};
  width: 100%;
  @media (min-width: 768px) {
    width: 40%;
  }
`;

const Label = styled.label`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.8);
  display: block;
  padding: 4px;
`;

const Input = styled(Field)`
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 48px;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.8);
  padding: 0;
  text-indent: 6px;
  width: 100%;
  border-radius: 2px;
  font-size: 1rem;
  margin-bottom: 6px;
`;

const ErrorMessage = styled.span`
  font-size: 0.8rem;
  color: #b00e23;
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

class FormikForm extends Component {
  render() {
    const { errors, touched, isSubmitting } = this.props;
    return (
      <Form>
        <Label>Email Address</Label>
        <Input type="email" name="email" />
        {touched.email &&
          errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <Label>Password</Label>
        <Input type="password" name="password" />
        {touched.password &&
          errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        <SubmitButtonContainer>
          <SubmitButton disabled={isSubmitting}>Sign in</SubmitButton>
        </SubmitButtonContainer>
      </Form>
    );
  }
}

const LoginForm = withFormik({
  mapPropsToValues: props => ({
    email: props.email || "",
    password: props.password || ""
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required")
  }),
  handleSubmit(payload, bag) {
    bag.setSubmitting(false);
    //bag.props.uploadBrands(payload, null, 2);
    bag.resetForm();
  }
})(FormikForm);

export default LoginForm;
