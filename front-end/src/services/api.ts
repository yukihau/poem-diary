import axios from "axios";

const baseURL = process.env.BACK_URL || 'http://localhost:3001';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api;
