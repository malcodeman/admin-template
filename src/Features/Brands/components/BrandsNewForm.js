import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";
import styled from "styled-components";
import { ButtonStyles } from "../../../Core/styles/button";

const SubmitButton = styled.button`
  ${ButtonStyles};
  width: 100%;
  @media (min-width: 576px) {
    width: auto;
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
`;

const FormItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 40px 0;
  margin-bottom: 40px;
  grid-gap: 20px;
  border-bottom: 1px solid #dfe3e8;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const FormItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoHeading = styled.h2`
  font-size: 1.2rem;
`;

const InfoText = styled.p`
  font-size: 1rem;
`;

const FormItemInput = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 20px;
`;

const InputWrapper = styled.div`
  border-radius: 2px;
  padding: 1rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  @media (min-width: 576px) {
    padding: 1.6rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const StyledButton = styled.button`
  ${ButtonStyles};
`;

const HiddinFileInput = styled.input`
  display: none;
`;

const ErrorMessage = styled.span`
  font-size: 0.8rem;
  color: #b00e23;
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

class FormikForm extends Component {
  openLogoFileInputDialog = e => {
    e.preventDefault();
    document.getElementById("logo").click();
  };
  render() {
    const { errors, touched, isSubmitting, setFieldValue } = this.props;
    return (
      <Form>
        <FormItem>
          <FormItemInfo>
            <InfoHeading>Brand display</InfoHeading>
            <InfoText>Manage display of brand</InfoText>
          </FormItemInfo>
          <FormItemInput>
            <InputWrapper>
              <LogoWrapper>
                <Label>Add image of brand logo</Label>
                <StyledButton onClick={this.openLogoFileInputDialog}>
                  Add brand logo
                </StyledButton>
                <HiddinFileInput
                  id="logo"
                  name="logo"
                  type="file"
                  onChange={event => {
                    setFieldValue("logo", event.currentTarget.files[0]);
                  }}
                />
              </LogoWrapper>
              {touched.logo &&
                errors.logo && <ErrorMessage>{errors.logo}</ErrorMessage>}
            </InputWrapper>
            <InputWrapper>
              <Label>Brand name</Label>
              <Input type="text" name="name" placeholder="E.g. Sony" />
              {touched.name &&
                errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </InputWrapper>
          </FormItemInput>
        </FormItem>
        <SubmitButtonContainer>
          <SubmitButton disabled={isSubmitting}>Create brand</SubmitButton>
        </SubmitButtonContainer>
      </Form>
    );
  }
}

const BrandsNewForm = withFormik({
  mapPropsToValues: props => ({
    name: props.name || "",
    logo: props.logo || ""
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    logo: Yup.mixed().required("Logo is required")
  }),
  handleSubmit(payload, bag) {
    bag.setSubmitting(false);
    bag.props.uploadBrands(payload, null, 2);
    bag.resetForm();
    window.confirm("Created new brand successfully");
  }
})(FormikForm);

export default BrandsNewForm;
