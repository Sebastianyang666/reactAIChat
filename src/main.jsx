/*
 * @Descripttion:
 * @version:
 * @Author: yangshengpeng
 * @Date: 2025-08-27 14:06:51
 * @LastEditors: yangshengpeng
 * @LastEditTime: 2025-08-27 14:55:52
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import routes from './router';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>
);
