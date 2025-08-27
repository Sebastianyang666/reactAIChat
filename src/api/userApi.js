/*
 * @Descripttion:
 * @version:
 * @Author: yangshengpeng
 * @Date: 2025-08-27 15:07:53
 * @LastEditors: yangshengpeng
 * @LastEditTime: 2025-08-27 15:08:46
 */
import http from '../utils/http';

// 用户登陆
const login = (data) => {
  return http.post('/user/login', data);
};
// 获取用户分页信息
const getUserList = (params) => {
  return http.get('/user/list', params);
};

export default {
  login,
  getUserList,
};
