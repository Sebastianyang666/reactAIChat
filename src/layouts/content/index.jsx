/*
 * @Descripttion: 
 * @version: 
 * @Author: yangshengpeng
 * @Date: 2025-09-03 16:07:18
 * @LastEditors: yangshengpeng
 * @LastEditTime: 2025-09-03 16:07:36
 */
// layouts/content/index.tsx
import { Layout } from "antd";
import { Outlet, useMatches } from "react-router-dom";

import { PageAnimate } from "@/components/page-animate";

export default function Content() {
  const matches = useMatches();
  const currRouter = matches.at(-1);
  return (
    <Layout.Content className="min-h-[calc(100vh-var(--layout-header-height))] p-4">
    <PageAnimate key={currRouter?.pathname}>
      <Outlet /> {/* Outlet是子路由的占位符 */}
    </PageAnimate>
  </Layout.Content>
  );
}
