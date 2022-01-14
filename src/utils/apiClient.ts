import { DefaultApi } from "../api";
import axios from "axios";

axios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");

    config.headers = token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {};
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export const apiClient = new DefaultApi(
  undefined,
  process.env.REACT_APP_API_BASE_PATH,
  axios
);
