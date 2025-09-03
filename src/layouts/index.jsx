/*
 * @Descripttion: 
 * @version: 
 * @Author: yangshengpeng
 * @Date: 2025-09-03 17:19:33
 * @LastEditors: yangshengpeng
 * @LastEditTime: 2025-09-03 17:20:10
 */
import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, ColorPicker, Flex, Layout } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { useSettingsStore } from "@/store/settings";

import Content from "./content";
import Sider from "./sider";

export default function MainLayout() {
  const navigate = useNavigate();

  const collapsed = useSettingsStore((state) => state.collapsed);
  const setCollapsed = useSettingsStore((state) => state.setCollapsed);
  const colorPrimary = useSettingsStore((state) => state.colorPrimary);
  const setColorPrimary = useSettingsStore((state) => state.setColorPrimary);

  return (
    <Layout className="min-h-screen">
      {/* 顶部栏 - 占满整个屏幕宽度 */}
      <Layout.Header 
        className="flex items-center justify-between text-white border-b"
        style={{ 
          backgroundColor: colorPrimary.startsWith('#') ? colorPrimary : `#${colorPrimary}`, 
          paddingInline: '16px',
          borderBottomColor: colorPrimary.startsWith('#') ? colorPrimary : `#${colorPrimary}`
        }}
      >
        <div className="flex items-center gap-3">
          <Link
            className="font-bold text-2xl hover:text-current text-white flex items-center"
            to="/"
          >
             React Admin
          </Link>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="text-white hover:text-white"
          />
        </div>
        <Flex gap={16} align="center">
          <ColorPicker
            value={colorPrimary}
            showText={false}
            size="small"
            onChange={(color) => {
              setColorPrimary(color.toHex());
            }}
            className="cursor-pointer"
          />
          <div
            className="flex items-center justify-center gap-1 cursor-pointer text-white"
            onClick={() => {
              navigate("/login");
            }}
          >
            <LogoutOutlined className="text-xl" /> 退出登录
          </div>
        </Flex>
      </Layout.Header>
      
      {/* 下方内容区域：左侧菜单 + 右侧内容 */}
      <Layout hasSider>
        <Sider />
        <Layout>
          <Content />
        </Layout>
      </Layout>
    </Layout>
  );
}
