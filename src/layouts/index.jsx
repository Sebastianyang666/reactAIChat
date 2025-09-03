/*
 * @Descripttion: 
 * @version: 
 * @Author: yangshengpeng
 * @Date: 2025-09-03 17:19:33
 * @LastEditors: yangshengpeng
 * @LastEditTime: 2025-09-03 17:20:10
 */
import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, ColorPicker, Flex, Layout, Menu } from "antd";
import { useEffect } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";

import { useSettingsStore } from "@/store/settings";

import Content from "./content";

const headerItems = [
  {
    key: 'dashboard',
    label: '数据大盘',
  },
  {
    key: 'analytics',
    label: '分析报告',
  },
  {
    key: 'settings',
    label: '系统设置',
  },
];

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const collapsed = useSettingsStore((state) => state.collapsed);
  const setCollapsed = useSettingsStore((state) => state.setCollapsed);
  const colorPrimary = useSettingsStore((state) => state.colorPrimary);
  const setColorPrimary = useSettingsStore((state) => state.setColorPrimary);
  const activeTopNav = useSettingsStore((state) => state.activeTopNav);
  const setActiveTopNav = useSettingsStore((state) => state.setActiveTopNav);

  // 监听路径变化，自动设置或清除头部菜单高亮
  useEffect(() => {
    const path = location.pathname;
    const topNavKey = headerItems.find(item => path.startsWith(`/${item.key}`))?.key;
    
    if (topNavKey && topNavKey !== activeTopNav) {
      setActiveTopNav(topNavKey);
    } else if (!topNavKey && activeTopNav) {
      setActiveTopNav("");
    }
  }, [location.pathname, activeTopNav, setActiveTopNav]);

  return (
    <Layout className="min-h-screen">
      {/* 顶部栏 - 占满整个屏幕宽度 */}
      <Layout.Header 
        style={{ 
          display: 'flex', 
          alignItems: 'center',
          backgroundColor: colorPrimary.startsWith('#') ? colorPrimary : `#${colorPrimary}`,
          position: 'relative',
        }}
      >
        {/* 半透明覆盖层 */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            zIndex: 0,
          }}
        />
        <div className="flex items-center gap-4" style={{ position: 'relative', zIndex: 1 }}>
          <Link
            className="font-bold text-2xl text-white hover:text-white flex items-center"
            to="/"
            onClick={() => setActiveTopNav("")}
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
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[activeTopNav]}
          items={headerItems}
          onSelect={({ key }) => {
            setActiveTopNav(key);
            navigate(`/${key}`);
          }}
          style={{ flex: 1, minWidth: 0, backgroundColor: 'transparent', position: 'relative', zIndex: 1 }}
          className="border-0"
        />
        <Flex gap={16} align="center" style={{ position: 'relative', zIndex: 1 }}>
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
      
      {/* 下方内容区域 */}
      <Layout>
        <Content />
      </Layout>
    </Layout>
  );
}
