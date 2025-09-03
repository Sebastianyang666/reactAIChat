import { Badge, Card, Progress,Table } from "antd";

const realtimeData = [
  {
    key: '1',
    metric: '在线用户数',
    value: 1287,
    change: '+5.2%',
    status: 'success',
    progress: 78,
  },
  {
    key: '2',
    metric: '页面浏览量/分钟',
    value: 4532,
    change: '+12.1%',
    status: 'success', 
    progress: 92,
  },
  {
    key: '3',
    metric: '服务器响应时间',
    value: '245ms',
    change: '+8.3%',
    status: 'warning',
    progress: 65,
  },
  {
    key: '4',
    metric: 'API调用次数/秒',
    value: 89,
    change: '-2.1%',
    status: 'error',
    progress: 45,
  },
];

const columns = [
  {
    title: '指标名称',
    dataIndex: 'metric',
    key: 'metric',
  },
  {
    title: '当前值',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: '变化率',
    dataIndex: 'change',
    key: 'change',
    render: (text, record) => (
      <Badge 
        status={record.status} 
        text={text}
      />
    ),
  },
  {
    title: '状态',
    dataIndex: 'progress',
    key: 'progress',
    render: (progress, record) => (
      <Progress 
        percent={progress} 
        size="small" 
        status={record.status === 'error' ? 'exception' : record.status === 'warning' ? 'active' : 'success'}
      />
    ),
  },
];

export default function RealtimeStats() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">实时数据</h1>
      
      <Card title="实时监控面板" className="mb-6">
        <p className="mb-4 text-gray-600">以下数据每30秒自动刷新</p>
        <Table 
          columns={columns} 
          dataSource={realtimeData} 
          pagination={false}
          size="middle"
        />
      </Card>

      <Card title="系统状态">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-green-600 mb-2">正常</div>
            <div className="text-gray-600">数据库连接</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-green-600 mb-2">正常</div>
            <div className="text-gray-600">缓存服务</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-yellow-600 mb-2">警告</div>
            <div className="text-gray-600">磁盘空间</div>
          </div>
        </div>
      </Card>
    </div>
  );
}