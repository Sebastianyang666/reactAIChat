import { Card, DatePicker, Select, Table } from "antd";
import { useState } from "react";

const { RangePicker } = DatePicker;
const { Option } = Select;

const historyData = [
  {
    key: '1',
    date: '2024-01-15',
    users: 1245,
    pageViews: 5432,
    orders: 89,
    revenue: 15600,
  },
  {
    key: '2',  
    date: '2024-01-14',
    users: 1189,
    pageViews: 4987,
    orders: 76,
    revenue: 14200,
  },
  {
    key: '3',
    date: '2024-01-13', 
    users: 1356,
    pageViews: 6123,
    orders: 102,
    revenue: 18900,
  },
  {
    key: '4',
    date: '2024-01-12',
    users: 1298,
    pageViews: 5678,
    orders: 94,
    revenue: 17300,
  },
];

const columns = [
  {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '用户数',
    dataIndex: 'users',
    key: 'users',
    sorter: (a, b) => a.users - b.users,
  },
  {
    title: '页面浏览量',
    dataIndex: 'pageViews',
    key: 'pageViews',
    sorter: (a, b) => a.pageViews - b.pageViews,
  },
  {
    title: '订单数',
    dataIndex: 'orders',
    key: 'orders',
    sorter: (a, b) => a.orders - b.orders,
  },
  {
    title: '收入 (¥)',
    dataIndex: 'revenue',
    key: 'revenue',
    sorter: (a, b) => a.revenue - b.revenue,
    render: (value) => `¥${value.toLocaleString()}`,
  },
];

export default function HistoryStats() {
  const [timeRange, setTimeRange] = useState('week');

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">历史数据</h1>
      
      <Card className="mb-6">
        <div className="flex flex-wrap gap-4 mb-4">
          <div>
            <span className="mr-2">时间范围:</span>
            <Select 
              value={timeRange} 
              onChange={setTimeRange}
              style={{ width: 120 }}
            >
              <Option value="week">最近一周</Option>
              <Option value="month">最近一月</Option>
              <Option value="quarter">最近三月</Option>
              <Option value="custom">自定义</Option>
            </Select>
          </div>
          {timeRange === 'custom' && (
            <RangePicker />
          )}
        </div>
        
        <Table 
          columns={columns} 
          dataSource={historyData}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `第 ${range[0]}-${range[1]} 条，共 ${total} 条`,
          }}
        />
      </Card>

      <Card title="数据汇总">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-blue-600 mb-2">5,088</div>
            <div className="text-gray-600">总用户数</div>
            <div className="text-sm text-green-600">+8.2%</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-green-600 mb-2">22,220</div>
            <div className="text-gray-600">总浏览量</div>
            <div className="text-sm text-green-600">+12.5%</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-purple-600 mb-2">361</div>
            <div className="text-gray-600">总订单数</div>
            <div className="text-sm text-red-600">-2.1%</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-orange-600 mb-2">¥66,000</div>
            <div className="text-gray-600">总收入</div>
            <div className="text-sm text-green-600">+15.3%</div>
          </div>
        </div>
      </Card>
    </div>
  );
}