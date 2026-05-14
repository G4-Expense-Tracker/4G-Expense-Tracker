import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.VITE_APP_BASE_URL,
  withCredentials: true,
});