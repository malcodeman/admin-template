export const REQUEST_CAMPAIGNS = "REQUEST_CAMPAIGNS";
export const RECIVE_CAMPAIGNS = "RECIVE_CAMPAIGNS";
export const UPLOAD_CAMPAIGNS = "UPLOAD_CAMPAIGNS";
export const UPLOAD_CAMPAIGNS_SUCCEEDED = "UPLOAD_CAMPAIGNS_SUCCEEDED";
export const UPLOAD_CAMPAIGNS_FAILED = "UPLOAD_CAMPAIGNS_FAILED";
export const UPLOAD_PRODUCT_IMAGE_SUCCEEDED = "UPLOAD_PRODUCT_IMAGE_SUCCEEDED";
export const UPLOAD_GUIDELINES_IMAGE_SUCCEEDED =
  "UPLOAD_GUIDELINES_IMAGE_SUCCEEDED";

export const requestCampaigns = () => {
  return {
    type: REQUEST_CAMPAIGNS
  };
};

export const uploadCampaigns = newCampaign => {
  return {
    type: UPLOAD_CAMPAIGNS,
    payload: newCampaign
  };
};
