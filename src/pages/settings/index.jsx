import { Button,Switch, Table } from "antd";

const settingsData = [
  {
    key: '1',
    setting: '邮件通知',
    description: '接收系统邮件通知',
    enabled: true,
  },
  {
    key: '2',
    setting: '短信提醒',
    description: '接收重要事项短信提醒',
    enabled: false,
  },
  {
    key: '3',
    setting: '自动备份',
    description: '每日自动备份数据',
    enabled: true,
  },
  {
    key: '4',
    setting: '深色模式',
    description: '使用深色主题',
    enabled: false,
  },
];

const columns = [
  {
    title: '设置项',
    dataIndex: 'setting',
    key: 'setting',
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: '状态',
    dataIndex: 'enabled',
    key: 'enabled',
    render: (enabled) => (
      <Switch checked={enabled} />
    ),
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <Button type="link">编辑</Button>
    ),
  },
];

export default function Settings() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">系统设置</h1>
      <div className="bg-white rounded-lg shadow">
        <Table 
          columns={columns} 
          dataSource={settingsData} 
          pagination={false}
          size="large"
        />
      </div>
      <p className="mt-4 text-gray-600">
        这个页面只显示表格，没有侧边栏 - 演示了不同页面可以有不同的布局需求
      </p>
    </div>
  );
}