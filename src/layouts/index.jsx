/*
 * @Descripttion: 
 * @version: 
 * @Author: yangshengpeng
 * @Date: 2025-09-03 15:19:38
 * @LastEditors: yangshengpeng
 * @LastEditTime: 2025-09-03 15:49:15
 */
import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Flex, Layout } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

// import ThemeSwitch from "@/components/theme-switch";
import { useSettingsStore } from "@/store/settings";

import Sider from "./sider";

export default function MainLayout() {
  const navigate = useNavigate();

  const collapsed = useSettingsStore((state) => state.collapsed);
  const setCollapsed = useSettingsStore((state) => state.setCollapsed);

  return (
    <Layout hasSider className="w-screen overflow-hidden">
      <Sider />
      <Layout>
        <Layout.Header className="flex items-center justify-between dark:text-white sticky top-0 z-[999] border-b border-b-gray-200 dark:border-b-gray-700">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="text-inherit hover:text-inherit"
          />
          <Flex gap={16}>
            {/* <ThemeSwitch /> */}
            <div
              className="flex items-center justify-center gap-1 cursor-pointer"
              onClick={() => {
                navigate("/login");
              }}
            >
              <LogoutOutlined className="text-xl" /> 退出登录
            </div>
          </Flex>
        </Layout.Header>
        <Layout.Content className="min-h-[calc(100vh-var(--layout-header-height))] p-4">
          <Outlet /> {/* Outlet是子路由的占位符 */}
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
