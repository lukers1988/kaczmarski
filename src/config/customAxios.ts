import axios, { type AxiosInstance } from 'axios';
import { API_HOST } from './api';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_HOST,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
