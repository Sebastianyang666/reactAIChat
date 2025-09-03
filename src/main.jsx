/*
 * @Descripttion:
 * @version:
 * @Author: yangshengpeng
 * @Date: 2025-08-27 14:06:51
 * @LastEditors: yangshengpeng
 * @LastEditTime: 2025-08-28 11:02:49
 */
import "./index.css";

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
