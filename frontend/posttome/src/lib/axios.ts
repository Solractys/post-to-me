import axios from "axios";

export const api = axios.create({
  baseURL: "https://post-to-me-production.up.railway.app/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Content-Type",
  },
});
