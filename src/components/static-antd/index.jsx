/*
 * @Descripttion: 
 * @version: 
 * @Author: yangshengpeng
 * @Date: 2025-09-03 15:48:13
 * @LastEditors: yangshengpeng
 * @LastEditTime: 2025-09-03 15:48:20
 */
import { App } from 'antd';

let message;
let notification;
let modal;

export default function StaticAntd() {
  const staticFunction = App.useApp();
  message = staticFunction.message;
  modal = staticFunction.modal;
  notification = staticFunction.notification;
  return null;
}

// eslint-disable-next-line
export { message, modal, notification };
