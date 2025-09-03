/*
 * @Descripttion: 
 * @version: 
 * @Author: yangshengpeng
 * @Date: 2025-08-27 14:06:51
 * @LastEditors: yangshengpeng
 * @LastEditTime: 2025-09-03 15:25:34
 */
import { RouterProvider } from "react-router-dom";

import { router } from "@/router";

export default function App() {
  return <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />;
}
