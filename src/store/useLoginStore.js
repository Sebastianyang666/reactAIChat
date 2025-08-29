/*
 * @Descripttion:
 * @version:
 * @Author: yangshengpeng
 * @Date: 2025-08-27 14:57:22
 * @LastEditors: yangshengpeng
 * @LastEditTime: 2025-08-27 15:00:58
 */
import { create } from 'zustand';

import UserApi from '../api/userApi.js';
import { clearToken,setToken } from '../utils/token.js';
const useLoginStore = create(() => ({
  token: '',
  // 用户登陆
  userLogin: async (userForm) => {
    const { data } = await UserApi.login(userForm);
    if (data.code === 200) {
      localStorage.setItem('react-user', data.data.userInfo);
      setToken(data.data.token);
    } else {
      throw new Error(data.message);
    }
  },
  // 退出登陆
  userLogout: () => {
    clearToken();
    localStorage.removeItem('react-user');
  },
}));

export default useLoginStore;
