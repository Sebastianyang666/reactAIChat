import { Button, DatePicker, Flex, Typography } from "antd";

const { RangePicker } = DatePicker;

export default function LandingPage() {
  return (
    <div>
      <Typography.Title level={3}>Landing Page</Typography.Title>
      <Flex gap={16}>
        <Button type="primary">primary</Button>
        <Button>default</Button>
        <RangePicker />
      </Flex>
    </div>
  );
}
