import axios from "axios";

const service = axios.create({
  baseURL: "https://641d4a37b556e431a87feee0.mockapi.io",
  timeout: 5000,
});

export default service;
