'use client';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, App as AntApp } from 'antd';
import antTheme from '../../../styles/antTheme';

/** Wires Ant Design's SSR style registry + theme tokens for the whole app. */
export default function AntdProvider({ children }) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={antTheme}>
        <AntApp>{children}</AntApp>
      </ConfigProvider>
    </AntdRegistry>
  );
}
