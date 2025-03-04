import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-app-2-490o.onrender.com/api",
  withCredentials: true,
});