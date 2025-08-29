/*
 * @Descripttion:
 * @version:
 * @Author: yangshengpeng
 * @Date: 2025-08-27 14:48:17
 * @LastEditors: yangshengpeng
 * @LastEditTime: 2025-08-27 15:29:40
 */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
const Login = React.lazy(() => import('../pages/login.jsx'));
// const Blog = React.lazy(() => import('../pages/blog/index.jsx'));
// const User = React.lazy(() => import('../pages/user/index.jsx'));
// const Home = React.lazy(() => import('../pages/home/index.jsx'));
// const Welcome = React.lazy(() => import('../pages/welcome.jsx'));
// const NotFound = React.lazy(() => import('../pages/notFound.jsx'));

const routes = createBrowserRouter([
  {
    path: '/login',
    Component: Login,
  },
  // {
  //   path: '/',
  //   Component: Home,
  //   children: [
  //     {
  //       index: true,
  //       Component: Welcome,
  //     },
  //     {
  //       path: '/blog',
  //       Component: Blog,
  //     },
  //     {
  //       path: '/user',
  //       Component: User,
  //     },
  //     {
  //       path: '*',
  //       Component: NotFound,
  //     },
  //   ],
  // },
]);

export default routes;
