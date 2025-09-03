/*
 * @Descripttion: 
 * @version: 
 * @Author: yangshengpeng
 * @Date: 2025-08-28 11:32:33
 * @LastEditors: yangshengpeng
 * @LastEditTime: 2025-09-03 15:20:11
 */
import { createBrowserRouter, Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    lazy: async () => ({
      Component: (await import("@/layouts")).default,
    }),
    children: [
      {
        index: true,
        element: <Navigate replace to="/landing" />,
      },
      {
        path: "landing",
        lazy: async () => ({
          Component: (await import("@/pages/landing")).default,
        }),
      },
    ],
  },
];

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.VITE_APP_BASE_URL,
  future: {
    v7_startTransition: true,
  },
});