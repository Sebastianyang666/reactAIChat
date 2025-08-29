/*
 * @Descripttion:
 * @version:
 * @Author: yangshengpeng
 * @Date: 2025-08-27 15:01:50
 * @LastEditors: yangshengpeng
 * @LastEditTime: 2025-08-27 15:02:54
 */
// 提供三个函数
const KEY = 'react-user';

// 设置token
export const setToken = (token) => {
  localStorage.setItem(KEY, token);
};

// 获取token
export const getToken = () => {
  return localStorage.getItem(KEY) || '';
};

// 清除token
export const clearToken = () => {
  localStorage.removeItem(KEY);
};

