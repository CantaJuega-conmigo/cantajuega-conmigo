import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VITE_BACKEND_URL || 'http://localhost:5000/api',
});

export default instance;
