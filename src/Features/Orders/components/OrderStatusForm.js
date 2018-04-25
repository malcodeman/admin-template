import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";
import styled from "styled-components";

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

const ErrorMessage = styled.span`
  font-size: 0.8rem;
  color: #b00e23;
`;

class FormikForm extends Component {
  handleSelectChange = e => {
    this.props.setFieldValue("orderStatus", e.target.value);
    this.props.submitForm();
  };
  render() {
    const { errors, touched, isSubmitting } = this.props;
    return (
      <Form>
        <Input
          component="select"
          name="orderStatus"
          onChange={this.handleSelectChange}
          disabled={isSubmitting}
        >
          {this.props.statuses.map(status => {
            return (
              <option key={status.id} value={status.value}>
                {status.value}
              </option>
            );
          })}
        </Input>
        {touched.orderStatus &&
          errors.orderStatus && (
            <ErrorMessage>{errors.orderStatus}</ErrorMessage>
          )}
      </Form>
    );
  }
}

const OrderStatusForm = withFormik({
  mapPropsToValues: props => ({
    orderID: props.orderID || "",
    orderStatus: props.orderStatus || ""
  }),
  validationSchema: Yup.object().shape({
    orderStatus: Yup.string().required("Order status is required")
  }),
  enableReinitialize: true,
  handleSubmit(payload, bag) {
    bag.setSubmitting(false);
    bag.props.updateOrdersStatus(payload);
  }
})(FormikForm);

export default OrderStatusForm;
