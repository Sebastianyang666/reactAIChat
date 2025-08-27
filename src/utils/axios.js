/*
 * @Descripttion:
 * @version:
 * @Author: yangshengpeng
 * @Date: 2025-08-27 15:03:44
 * @LastEditors: yangshengpeng
 * @LastEditTime: 2025-08-27 15:05:12
 */
import axios from 'axios';
import { getToken } from './token';

const request = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 5000,
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
