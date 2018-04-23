export const REQUEST_CAMPAIGNS = "REQUEST_CAMPAIGNS";
export const RECIVE_CAMPAIGNS = "RECIVE_CAMPAIGNS";
export const UPLOAD_CAMPAIGNS = "UPLOAD_CAMPAIGNS";

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
