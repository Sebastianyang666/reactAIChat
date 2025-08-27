/*
 * @Descripttion:
 * @version:
 * @Author: yangshengpeng
 * @Date: 2025-08-27 15:06:24
 * @LastEditors: yangshengpeng
 * @LastEditTime: 2025-08-27 15:07:17
 */
import instance from './axios';

const post = (url, data) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const get = (url, params) => {
  return new Promise((resolve, reject) => {
    instance
      .get(url, { params })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { post, get };
