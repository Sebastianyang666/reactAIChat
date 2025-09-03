import { BarChartOutlined, HomeOutlined, LineChartOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { useSettingsStore } from "@/store/settings";

const dashboardMenuItems = [
  {
    icon: <HomeOutlined />,
    label: "数据概览",
    key: "/dashboard/overview",
  },
  {
    icon: <BarChartOutlined />,
    label: "统计分析",
    key: "/dashboard/stats",
    children: [
      {
        key: "/dashboard/stats/realtime",
        label: "实时数据",
      },
      {
        key: "/dashboard/stats/history",
        label: "历史数据",
      },
    ],
  },
  {
    icon: <LineChartOutlined />,
    label: "图表管理",
    key: "/dashboard/charts",
    children: [
      {
        key: "/dashboard/charts/line",
        label: "折线图",
      },
      {
        key: "/dashboard/charts/bar",
        label: "柱状图",
      },
      {
        key: "/dashboard/charts/pie",
        label: "饼图",
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

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const firstRenderRef = useRef(true);
  
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [openKeys, setOpenKeys] = useState([]);
  
  const collapsed = useSettingsStore((state) => state.collapsed);
  const colorPrimary = useSettingsStore((state) => state.colorPrimary);

  useEffect(() => {
    // 如果是数据大盘根路径，重定向到第一个菜单
    if (location.pathname === "/dashboard") {
      navigate("/dashboard/overview", { replace: true });
      return;
    }

    // 首次渲染时，设置默认值
    if (firstRenderRef.current) {
      const { selectedKeys, openKeys } = findSelectedKeys(dashboardMenuItems, location.pathname);
      setSelectedKeys(selectedKeys);
      setOpenKeys(openKeys);
    }
    firstRenderRef.current = false;
  }, [location.pathname, navigate]);

  return (
    <Layout hasSider>
      <Layout.Sider
        width={200}
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="overflow-auto"
        style={{ 
          backgroundColor: colorPrimary.startsWith('#') ? colorPrimary : `#${colorPrimary}`,
          height: 'calc(100vh - 64px)'
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
          items={dashboardMenuItems}
          selectedKeys={selectedKeys}
          onSelect={({ key, selectedKeys }) => {
            setSelectedKeys(selectedKeys);
            navigate(key);
          }}
          openKeys={openKeys}
          onOpenChange={(openKeys) => setOpenKeys(openKeys)}
          accordion={true}
          style={{ 
            height: '100%', 
            borderInlineEnd: 0, 
            backgroundColor: 'rgba(255, 255, 255, 0.2)' 
          }}
          styles={{
            subMenuItem: {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }
          }}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Content className="p-6">
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}