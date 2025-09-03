import { DownloadOutlined, FullscreenOutlined } from "@ant-design/icons";
import { Button, Card, Select, Switch } from "antd";

const { Option } = Select;

export default function BarCharts() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">柱状图</h1>
      
      <Card 
        title="月度销售额"
        extra={
          <div className="flex gap-2 items-center">
            <span className="text-sm">3D效果:</span>
            <Switch size="small" />
            <Select defaultValue="vertical" size="small" style={{ width: 100 }}>
              <Option value="vertical">垂直</Option>
              <Option value="horizontal">水平</Option>
            </Select>
            <Button size="small" icon={<DownloadOutlined />}>导出</Button>
            <Button size="small" icon={<FullscreenOutlined />}>全屏</Button>
          </div>
        }
        className="mb-6"
      >
        <div className="h-80 bg-gray-50 rounded flex items-center justify-center">
          <div className="text-center">
            <div className="text-gray-500 mb-2">垂直柱状图占位区域</div>
            <div className="text-sm text-gray-400">展示每月销售数据</div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card 
          title="产品类别统计"
          extra={<Button size="small" icon={<DownloadOutlined />}>导出</Button>}
        >
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-500 mb-2">分组柱状图</div>
              <div className="text-sm text-gray-400">按产品类别分组展示</div>
            </div>
          </div>
        </Card>

        <Card 
          title="地区销售排行"
          extra={<Button size="small" icon={<DownloadOutlined />}>导出</Button>}
        >
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-500 mb-2">排行榜柱状图</div>
              <div className="text-sm text-gray-400">各地区销售额排行</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}