import axios from "axios";

axios.interceptors.request.use(
  config => {
    if (localStorage.getItem("token") === null) {
      console.log("No token");
    } else {
      config.headers.authorization = localStorage.getItem("token");
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

const API_URL = process.env.REACT_APP_API_URL;

export const getCampaigns = () => {
  return axios.get(`${API_URL}/campaigns/`);
};

export const postCampaigns = newCampaign => {
  return axios.post(`${API_URL}/campaigns/`, newCampaign);
};

export const postCampaignsProductImage = (campaignID, productImage) => {
  let formData = new FormData();
  formData.append("image", productImage);
  return axios.post(`${API_URL}/campaigns/${campaignID}/images`, formData);
};

export const postCampaignsGuidelinesImage = (campaignID, guidelinesImage) => {
  let formData = new FormData();
  formData.append("image", guidelinesImage);
  return axios.post(
    `${API_URL}/campaigns/${campaignID}/images/post-guidline`,
    formData
  );
};
