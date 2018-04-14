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

export const getBrands = () => {
  return axios.get(`${API_URL}/brands/`);
};

export const postBrands = newBrand => {
  return axios.post(`${API_URL}/brands/`, newBrand);
};
