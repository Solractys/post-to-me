import axios from "axios";

export const api = axios.create({
  baseURL: "https://post-to-me-production.up.railway.app/api",
  withCredentials: true,
});
