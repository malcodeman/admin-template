import React from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";
import styled from "styled-components";

const Button = styled.button`
  background-color: #05b344;
  padding: 0.2rem 2rem;
  border: 0;
  min-height: 32px;
  cursor: pointer;
  color: #fff;
  font-size: 1rem;
  border-radius: 2px;
  width: 100%;
  @media (min-width: 576px) {
    width: auto;
  }
  &:disabled {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Label = styled.label`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.8);
  display: block;
  text-transform: capitalize;
  padding: 4px;
`;

const Input = styled(Field)`
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 32px;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  padding: 0;
  text-indent: 6px;
  width: 100%;
  border-radius: 2px;
`;

const FormikForm = ({
  values,
  errors,
  touched,
  isSubmitting,
  setFieldValue
}) => {
  return (
    <Form>
      <Label>Name</Label>
      <Input type="text" name="name" placeholder="Name" />
      {touched.name && errors.name && <p>{errors.name}</p>}
      <Label>Logo</Label>
      <input
        name="logo"
        type="file"
        onChange={event => {
          setFieldValue("logo", event.currentTarget.files[0]);
        }}
      />
      {touched.logo && errors.logo && <p>{errors.logo}</p>}
      <Button disabled={isSubmitting}>Save</Button>
    </Form>
  );
};

const BrandsNewForm = withFormik({
  mapPropsToValues: () => ({ name: "", logo: "" }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    logo: Yup.mixed().required("Logo is required")
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    const newBrand = {
      name: values.name,
      logo: values.logo
    };
    props.uploadBrands(newBrand, setErrors, setSubmitting);
    setSubmitting(false)
  }
})(FormikForm);

export default BrandsNewForm;
