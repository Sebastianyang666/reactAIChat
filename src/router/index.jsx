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
      {
        path: "dashboard",
        lazy: async () => ({
          Component: (await import("@/pages/dashboard")).default,
        }),
        children: [
          {
            path: "overview",
            lazy: async () => ({
              Component: (await import("@/pages/dashboard/overview")).default,
            }),
          },
          {
            path: "stats/realtime",
            lazy: async () => ({
              Component: (await import("@/pages/dashboard/stats/realtime")).default,
            }),
          },
          {
            path: "stats/history",
            lazy: async () => ({
              Component: (await import("@/pages/dashboard/stats/history")).default,
            }),
          },
          {
            path: "charts/line",
            lazy: async () => ({
              Component: (await import("@/pages/dashboard/charts/line")).default,
            }),
          },
          {
            path: "charts/bar",
            lazy: async () => ({
              Component: (await import("@/pages/dashboard/charts/bar")).default,
            }),
          },
          {
            path: "charts/pie",
            lazy: async () => ({
              Component: (await import("@/pages/dashboard/charts/pie")).default,
            }),
          },
        ],
      },
      {
        path: "analytics",
        lazy: async () => ({
          Component: (await import("@/pages/analytics")).default,
        }),
      },
      {
        path: "settings",
        lazy: async () => ({
          Component: (await import("@/pages/settings")).default,
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