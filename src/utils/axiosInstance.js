import axios from "axios";
import { getMockResponse } from "./mockData";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || "",
});

// Intercept all requests and return mock data
axiosInstance.interceptors.request.use(async (config) => {
  const { url, method, data } = config;
  
  // Return a "fake" response by forcing a 200 return
  const mockResp = getMockResponse(url, method, data);
  
  // To simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));

  // Use a custom adapter to return mock data instead of making a network call
  config.adapter = async (config) => {
    return new Promise((resolve) => {
      const response = {
        data: mockResp.data,
        status: mockResp.status,
        statusText: "OK",
        headers: {},
        config,
      };
      
      resolve(response);
    });
  };

  return config;
});

export default axiosInstance;
