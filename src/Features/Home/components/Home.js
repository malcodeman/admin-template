import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Header from "../../Layout/Header";
import companyLogo from "../images/ic_header_company.png";
import desktop from "../images/desktop.jpg";
import { ButtonStyles } from "../../../Core/styles/button";

const Wrapper = styled.div`
  padding 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 25%;
  align-items: center;
  padding: 40px 0;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    padding: 80px;
  }
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h2`
  font-weight: 300;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const CreateCampaignButton = styled(Link)`
  ${ButtonStyles};
  max-width: 256px;
`;

const ImageWrapper = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
  }
`;

const HeroImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Header
          logo={companyLogo}
          text="Welcome to Shiff!"
          company="Sony Inc."
        />
        <Grid>
          <HeroWrapper>
            <Heading>Create your first campaign on Shiff</Heading>
            <Text>
              Set up a campaign for your product, and let Shiff members promote
              and buy your product.
            </Text>
            <CreateCampaignButton to="/campaigns/new">
              Create campaign
            </CreateCampaignButton>
          </HeroWrapper>
          <ImageWrapper>
            <HeroImage src={desktop} />
          </ImageWrapper>
        </Grid>
      </Wrapper>
    );
  }
}

export default Home;
