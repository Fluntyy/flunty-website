import axios from "axios";

export const primaryBaseURL = "https://api.flunty.xyz/";
export const fallbackBaseURL = "https://flunty-api.vercel.app/";

export const api = axios.create({
  baseURL: primaryBaseURL,
  timeout: 5000,
});

export let currentBaseURL = primaryBaseURL;

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const config = error.config;

    if (!config || config._usedFallback) {
      return Promise.reject(error);
    }

    const shouldFallback =
      !error.response || error.response.status >= 500;

    if (!shouldFallback) {
      return Promise.reject(error);
    }

    config._usedFallback = true;
    config.baseURL = fallbackBaseURL;
    currentBaseURL = fallbackBaseURL;

    return api.request(config);
  }
);
