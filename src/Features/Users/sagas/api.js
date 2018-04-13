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

export const getUsers = () => {
  return axios.get(`${API_URL}/users/me`);
};
