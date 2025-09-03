import { DownloadOutlined, FullscreenOutlined } from "@ant-design/icons";
import { Button, Card, Radio,Select } from "antd";

const { Option } = Select;

export default function PieCharts() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">饼图</h1>
      
      <Card 
        title="用户来源分析"
        extra={
          <div className="flex gap-2 items-center">
            <Radio.Group size="small" defaultValue="pie">
              <Radio.Button value="pie">饼图</Radio.Button>
              <Radio.Button value="doughnut">环形图</Radio.Button>
            </Radio.Group>
            <Button size="small" icon={<DownloadOutlined />}>导出</Button>
            <Button size="small" icon={<FullscreenOutlined />}>全屏</Button>
          </div>
        }
        className="mb-6"
      >
        <div className="h-80 bg-gray-50 rounded flex items-center justify-center">
          <div className="text-center">
            <div className="text-gray-500 mb-2">饼图占位区域</div>
            <div className="text-sm text-gray-400">显示各渠道用户占比</div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card 
          title="设备类型分布"
          extra={
            <Select defaultValue="all" size="small" style={{ width: 100 }}>
              <Option value="all">全部</Option>
              <Option value="mobile">移动端</Option>
              <Option value="desktop">桌面端</Option>
            </Select>
          }
        >
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-500 mb-2">设备分布饼图</div>
              <div className="text-sm text-gray-400">移动端 vs 桌面端</div>
            </div>
          </div>
        </Card>

        <Card 
          title="年龄段分析"
          extra={<Button size="small">查看详情</Button>}
        >
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-500 mb-2">年龄段环形图</div>
              <div className="text-sm text-gray-400">用户年龄结构分析</div>
            </div>
          </div>
        </Card>
      </div>

      <Card title="数据概览" className="mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">45.2%</div>
            <div className="text-gray-600">直接访问</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">23.8%</div>
            <div className="text-gray-600">搜索引擎</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600">18.9%</div>
            <div className="text-gray-600">社交媒体</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">12.1%</div>
            <div className="text-gray-600">其他渠道</div>
          </div>
        </div>
      </Card>
    </div>
  );
}