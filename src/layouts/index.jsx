/*
 * @Descripttion: 
 * @version: 
 * @Author: yangshengpeng
 * @Date: 2025-09-03 15:19:38
 * @LastEditors: yangshengpeng
 * @LastEditTime: 2025-09-03 15:19:47
 */
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <nav className="text-white h-14 bg-zinc-800 flex items-center px-4">Main Layout</nav>
      <Outlet /> {/* Outlet是子路由的占位符 */}
    </>
  );
}