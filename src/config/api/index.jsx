// src/axiosInstance.js
import axios from "axios";
import landingApis from "./landingApi";
import authApis from "./authApi";
import chatApis from "./chatApi";

const createBackendServer = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3002",
    timeout: 10000, // increased from 1000 — 1s is too short for many networks
    headers: { "Content-Type": "application/json" },
  });

  // request interceptor — arrow functions
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("auth_token");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // response interceptor — arrow functions
  axiosInstance.interceptors.response.use(
    (response) => {
      // Optional: return response.data to simplify callers:
      // return response.data;
      return response;
    },
    (error) => {
      // if (error.response?.status === 401) {
      //   console.error("Unauthorized — consider redirecting to login.");
      //   // (optional) perform logout / redirect
      // }
      return Promise.reject(error.message);
    }
  );

  return {
    ...landingApis(axiosInstance),
    ...authApis(axiosInstance),
    ...chatApis(axiosInstance),
  };
};

const api = createBackendServer();

export default api;
