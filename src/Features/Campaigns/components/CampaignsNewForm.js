import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";
import styled from "styled-components";
import moment from "moment";
import uuidV1 from "uuid/v1";

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
  openProductImageFileInputDialog = e => {
    e.preventDefault();
    document.getElementById("productImage").click();
  };
  openGuidelinesImageFileInputDialog = e => {
    e.preventDefault();
    document.getElementById("guidelinesImage").click();
  };
  render() {
    const { errors, touched, isSubmitting, setFieldValue } = this.props;
    return (
      <Form>
        <FormItem>
          <FormItemInfo>
            <InfoHeading>Product Display</InfoHeading>
            <InfoText>
              Manage the display of your product within Shiff.
            </InfoText>
          </FormItemInfo>
          <FormItemInput>
            <InputWrapper>
              <LogoWrapper>
                <Label>Add image of your product</Label>
                <StyledButton onClick={this.openProductImageFileInputDialog}>
                  Add product image
                </StyledButton>
                <HiddinFileInput
                  id="productImage"
                  name="productImage"
                  type="file"
                  onChange={event => {
                    setFieldValue("productImage", event.currentTarget.files[0]);
                  }}
                />
              </LogoWrapper>
              {touched.productImage &&
                errors.productImage && (
                  <ErrorMessage>{errors.productImage}</ErrorMessage>
                )}
            </InputWrapper>
            <InputWrapper>
              <Label>Product title</Label>
              <Input
                type="text"
                name="name"
                placeholder="E.g. Sony Playstation 4"
              />
              {touched.name &&
                errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
              <Label>Product description</Label>
              <Input
                type="text"
                name="description"
                placeholder="E.g. Best gaming console"
              />
              {touched.description &&
                errors.description && (
                  <ErrorMessage>{errors.description}</ErrorMessage>
                )}
              <Label>Brand</Label>
              <Input type="number" name="idBrand" />
              {touched.idBrand &&
                errors.idBrand && <ErrorMessage>{errors.idBrand}</ErrorMessage>}
            </InputWrapper>
          </FormItemInput>
        </FormItem>
        <FormItem>
          <FormItemInfo>
            <InfoHeading>Product Price</InfoHeading>
            <InfoText>
              Set the discount price for influencers(must be at least 20% off
              your regular retail price).
            </InfoText>
          </FormItemInfo>
          <FormItemInput>
            <InputWrapper>
              <Label>Shiff price</Label>
              <Input type="number" name="priceDiscount" />
              {touched.priceDiscount &&
                errors.priceDiscount && (
                  <ErrorMessage>{errors.priceDiscount}</ErrorMessage>
                )}
              <Label>Regular retail price</Label>
              <Input type="number" name="priceRegular" />
              {touched.priceRegular &&
                errors.priceRegular && (
                  <ErrorMessage>{errors.priceRegular}</ErrorMessage>
                )}
            </InputWrapper>
          </FormItemInput>
        </FormItem>
        <FormItem>
          <FormItemInfo>
            <InfoHeading>Product Quantity</InfoHeading>
            <InfoText>
              Set the quantity of products within the during of your campaign.
            </InfoText>
          </FormItemInfo>
          <FormItemInput>
            <InputWrapper>
              <Label>Quantity</Label>
              <Input type="number" name="quantity" />
              {touched.quantity &&
                errors.quantity && (
                  <ErrorMessage>{errors.quantity}</ErrorMessage>
                )}
            </InputWrapper>
          </FormItemInput>
        </FormItem>
        <FormItem>
          <FormItemInfo>
            <InfoHeading>Campaign Dates</InfoHeading>
            <InfoText>Set the duration of your campaign.</InfoText>
          </FormItemInfo>
          <FormItemInput>
            <InputWrapper>
              <Label>Start date</Label>
              <Input type="date" name="startDate" />
              {touched.startDate &&
                errors.startDate && (
                  <ErrorMessage>{errors.startDate}</ErrorMessage>
                )}
              <Label>End date</Label>
              <Input type="date" name="endDate" />
              {touched.endDate &&
                errors.endDate && <ErrorMessage>{errors.endDate}</ErrorMessage>}
            </InputWrapper>
          </FormItemInput>
        </FormItem>
        <FormItem>
          <FormItemInfo>
            <InfoHeading>Post Guidelines</InfoHeading>
            <InfoText>
              Set what an approved post/image must contain in terms of copy,
              imagery, hashtags and hadles.
            </InfoText>
          </FormItemInfo>
          <FormItemInput>
            <InputWrapper>
              <LogoWrapper>
                <Label>Add guidelines image</Label>
                <StyledButton onClick={this.openGuidelinesImageFileInputDialog}>
                  Add image
                </StyledButton>
                <HiddinFileInput
                  id="guidelinesImage"
                  name="guidelinesImage"
                  type="file"
                  onChange={event => {
                    setFieldValue(
                      "guidelinesImage",
                      event.currentTarget.files[0]
                    );
                  }}
                />
              </LogoWrapper>
              {touched.guidelinesImage &&
                errors.guidelinesImage && (
                  <ErrorMessage>{errors.guidelinesImage}</ErrorMessage>
                )}
            </InputWrapper>
            <InputWrapper>
              <Label>Description</Label>
              <Input
                type="text"
                name="postGuidelines"
                placeholder="E.g. Sony"
              />
              {touched.postGuidelines &&
                errors.postGuidelines && (
                  <ErrorMessage>{errors.postGuidelines}</ErrorMessage>
                )}
              <Label>Hashtags</Label>
              <Input
                type="text"
                name="postGuidelinesHashtags"
                placeholder="E.g. #shiff #sony #playstation"
              />
              {touched.postGuidelinesHashtags &&
                errors.postGuidelinesHashtags && (
                  <ErrorMessage>{errors.postGuidelinesHashtags}</ErrorMessage>
                )}
              <Label>Handles</Label>
              <Input
                type="text"
                name="postGuidelineHandles"
                placeholder="E.g. https://www.instagram.com/lenameyerlandrut/"
              />
              {touched.postGuidelineHandles &&
                errors.postGuidelineHandles && (
                  <ErrorMessage>{errors.postGuidelineHandles}</ErrorMessage>
                )}
            </InputWrapper>
          </FormItemInput>
        </FormItem>
        <SubmitButtonContainer>
          <SubmitButton disabled={isSubmitting}>Create campaign</SubmitButton>
        </SubmitButtonContainer>
      </Form>
    );
  }
}

const CampaignsNewForm = withFormik({
  mapPropsToValues: props => ({
    productImage: props.product || "",
    name: props.name || "",
    description: props.description || "",
    idBrand: props.idBrand || "",
    priceDiscount: props.priceDiscount || "",
    priceRegular: props.priceRegular || "",
    quantity: props.quantity || "",
    startDate: props.startDate || "",
    endDate: props.endDate || "",
    guidelinesImage: props.guidelinesImage || "",
    postGuidelines: props.postGuidelines || "",
    postGuidelinesHashtags: props.postGuidelinesHashtags || "",
    postGuidelineHandles: props.postGuidelineHandles || ""
  }),

  mapValuesToPayload: values => ({
    productImage: values.productImage,
    name: values.name,
    description: values.description,
    idBrand: values.idBrand,
    priceDiscount: values.priceDiscount,
    priceRegular: values.priceRegular,
    quantity: values.quantity,
    startDate: values.startDate,
    endDate: values.endDate,
    guidelinesImage: values.guidelinesImage,
    postGuidelines: values.postGuidelines,
    postGuidelinesHashtags: values.postGuidelinesHashtags,
    postGuidelineHandles: values.postGuidelineHandles
  }),
  validationSchema: Yup.object().shape({
    productImage: Yup.mixed().required("Product image is required"),
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    idBrand: Yup.number()
      .required("Brand is required")
      .positive("Brand must be a positive number"),
    priceDiscount: Yup.number()
      .required("Shiff price is required")
      .positive("Shiff price must be a positive number"),
    priceRegular: Yup.number()
      .required("Regular price is required")
      .positive("Regular price must be a positive number"),
    quantity: Yup.number()
      .required("Quantity is required")
      .positive("Quantity must be a positive number"),
    startDate: Yup.string().required("Start Date is required"),
    endDate: Yup.string().required("End Date is required"),
    guidelinesImage: Yup.mixed().required("Guidelines image is required"),
    postGuidelines: Yup.string().required("Guidelines description is required"),
    postGuidelinesHashtags: Yup.string().required(
      "Guidelines hashtags is required"
    ),
    postGuidelineHandles: Yup.string().required(
      "Guidelines handles is required"
    )
  }),

  handleSubmit(payload, bag) {
    const newCampaign = {
      guid: uuidV1(),
      idUser: 1,
      idCategory: 1,
      productImage: payload.productImage,
      name: payload.name,
      description: payload.description,
      idBrand: payload.idBrand,
      priceDiscount: payload.priceDiscount,
      priceRegular: payload.priceRegular,
      quantity: payload.quantity,
      startDate: moment(payload.startDate).format("YYYY/MM/DD HH:mm:ss"),
      endDate: moment(payload.endDate).format("YYYY/MM/DD HH:mm:ss"),
      guidelinesImage: payload.guidelinesImage,
      postGuidelines: payload.postGuidelines,
      postGuidelinesHashtags: payload.postGuidelinesHashtags,
      postGuidelineHandles: payload.postGuidelineHandles
    };
    bag.setSubmitting(false);
    bag.props.uploadCampaigns(newCampaign);
    bag.resetForm();
    window.confirm("Created new campaign successfully");
  }
})(FormikForm);

export default CampaignsNewForm;
