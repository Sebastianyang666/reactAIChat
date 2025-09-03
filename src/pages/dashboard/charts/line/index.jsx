import { DownloadOutlined, FullscreenOutlined } from "@ant-design/icons";
import { Button, Card, Select } from "antd";

const { Option } = Select;

export default function LineCharts() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">折线图</h1>
      
      <Card 
        title="用户增长趋势"
        extra={
          <div className="flex gap-2">
            <Select defaultValue="month" size="small" style={{ width: 100 }}>
              <Option value="day">日</Option>
              <Option value="week">周</Option>
              <Option value="month">月</Option>
            </Select>
            <Button size="small" icon={<DownloadOutlined />}>导出</Button>
            <Button size="small" icon={<FullscreenOutlined />}>全屏</Button>
          </div>
        }
        className="mb-6"
      >
        <div className="h-80 bg-gray-50 rounded flex items-center justify-center">
          <div className="text-center">
            <div className="text-gray-500 mb-2">折线图占位区域</div>
            <div className="text-sm text-gray-400">这里可以集成 ECharts 或 Chart.js 等图表库</div>
          </div>
        </div>
      </Card>

      <Card 
        title="销售额趋势对比"
        extra={
          <div className="flex gap-2">
            <Select defaultValue="compare" size="small" style={{ width: 120 }}>
              <Option value="single">单一数据</Option>
              <Option value="compare">对比分析</Option>
            </Select>
            <Button size="small" icon={<DownloadOutlined />}>导出</Button>
          </div>
        }
      >
        <div className="h-80 bg-gray-50 rounded flex items-center justify-center">
          <div className="text-center">
            <div className="text-gray-500 mb-2">多条折线图对比</div>
            <div className="text-sm text-gray-400">支持多个数据系列的对比展示</div>
          </div>
        </div>
      </Card>
    </div>
  );
}