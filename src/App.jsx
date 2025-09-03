import "dayjs/locale/zh-cn";

import { App as AntdApp, ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { useSettingsStore } from "./stores/settings";

export default function App() {
  const colorPrimary = useSettingsStore((state) => state.colorPrimary);
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        cssVar: true, // 开启 css 变量
        hashed: false, // 如果你的应用中只存在一个版本的 antd，你可以设置为 false 来进一步减小样式体积。
        token: {
          colorPrimary,
        },
      }}
      componentSize="large"
    >
      <AntdApp>
        <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
      </AntdApp>
    </ConfigProvider>
  );
}
