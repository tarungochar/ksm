import axios from "axios";

const API_URL = "https://api.example.com";  // Replace with your API base URL

export const getExploreData = () => {
  return axios.get(`${API_URL}/explore`);
};

export const getUserData = () => {
  return axios.get(`${API_URL}/user`);
};
