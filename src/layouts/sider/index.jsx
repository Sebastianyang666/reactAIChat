import { HomeOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// import { useTheme } from "@/components/theme-provider";
import { useSettingsStore } from "@/store/settings";

// import ReactIcon from "@/assets/react.svg?react";

const items = [
  {
    icon: <HomeOutlined />,
    label: <Link to="/landing">首页</Link>,
    key: "/landing",
  },
  {
    icon: <UserOutlined />,
    label: <Link to="/user-management">用户管理</Link>,
    key: "/user-management",
  },
  {
    icon: <VideoCameraOutlined />,
    label: "一级菜单",
    key: "/nav",
    children: [
      {
        key: "/nav/sub-1",
        label: <Link to="/nav/sub-1">二级菜单-1</Link>,
      },
      {
        key: "/nav/sub-2",
        label: <Link to="/nav/sub-2">二级菜单-2</Link>,
      },
    ],
  },
];

// 递归函数，找到匹配的菜单项
const findSelectedKeys = (items, pathname, path = []) => {
  const selectedKeys = [];
  let openKeys = [];

  const travel = (items, pathname, path) => {
    for (const item of items || []) {
      if (item?.key === pathname) {
        selectedKeys.push(item.key);
        openKeys = [...path];
        return;
      }
      if (item.children) {
        path.push(item.key);
        travel(item.children, pathname, path);
        path.pop();
      }
    }
  };

  travel(items, pathname, path);
  return { selectedKeys, openKeys };
};


export default function Sider() {
  const location = useLocation();

  const firstRenderRef = useRef(true);

  const [selectedKeys, setSelectedKeys] = useState([]);
  const [openKeys, setOpenKeys] = useState([]);

  const collapsed = useSettingsStore((state) => state.collapsed);
  const colorPrimary = useSettingsStore((state) => state.colorPrimary);



  useEffect(() => {
    if (location.pathname === "/") return;

    // 首次渲染时，设置默认值
    if (firstRenderRef.current) {
      const { selectedKeys, openKeys } = findSelectedKeys(items, location.pathname);
      setSelectedKeys(selectedKeys);
      setOpenKeys(openKeys);
    }
    // 将首次渲染标记设置为false
    firstRenderRef.current = false;
  }, [location.pathname]);

  return (
    <Layout.Sider
      width={200}
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="overflow-auto"
      style={{ backgroundColor: colorPrimary.startsWith('#') ? colorPrimary : `#${colorPrimary}` }}
    >
      <Menu
        theme="dark"
        mode="inline"
        items={items}
        selectedKeys={selectedKeys}
        onSelect={({ selectedKeys }) => setSelectedKeys(selectedKeys)}
        openKeys={openKeys}
        onOpenChange={(openKeys) => setOpenKeys(openKeys)}
        style={{ 
          height: '100%', 
          borderInlineEnd: 0, 
          backgroundColor: 'rgba(255, 255, 255, 0.2)' 
        }}
      />
    </Layout.Sider>
  );
}
