import { ShoppingCartOutlined,TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

import { useSettingsStore } from "@/store/settings";

const analyticsMenuItems = [
  {
    icon: <UserOutlined />,
    label: <Link to="/analytics/users">用户分析</Link>,
    key: "/analytics/users",
  },
  {
    icon: <TeamOutlined />,
    label: <Link to="/analytics/behavior">行为分析</Link>,
    key: "/analytics/behavior",
  },
  {
    icon: <ShoppingCartOutlined />,
    label: <Link to="/analytics/conversion">转化分析</Link>,
    key: "/analytics/conversion",
  },
];

export default function Analytics() {
  const collapsed = useSettingsStore((state) => state.collapsed);
  const colorPrimary = useSettingsStore((state) => state.colorPrimary);

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
          items={analyticsMenuItems}
          style={{ 
            height: '100%', 
            borderInlineEnd: 0, 
            backgroundColor: 'rgba(255, 255, 255, 0.2)' 
          }}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Content className="p-6">
          <h1 className="text-2xl font-bold mb-6">分析报告</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p>这里是分析报告页面内容，左侧有专门的分析菜单</p>
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}