import axios from 'axios';

export const MyAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URI,
});
