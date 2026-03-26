import axios from 'axios';
import { BASE_URL } from './constant';

const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

let isRefreshing = false;
let refreshPromise = null;

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error?.config;
    const status = error?.response?.status;

    if (!originalRequest || status !== 401 || originalRequest._retry) {
      throw error;
    }

    // Avoid refresh recursion for auth refresh endpoint itself.
    if (originalRequest.url?.includes('/auth/refresh')) {
      throw error;
    }

    originalRequest._retry = true;

    if (!isRefreshing) {
      isRefreshing = true;
      refreshPromise = apiClient.post('/auth/refresh').finally(() => {
        isRefreshing = false;
      });
    }

    try {
      await refreshPromise;
      return apiClient(originalRequest);
    } catch (refreshError) {
      throw refreshError;
    }
  }
);

export default apiClient;
