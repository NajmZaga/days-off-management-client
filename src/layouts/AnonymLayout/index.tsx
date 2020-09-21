import React from 'react';
import { Layout } from 'antd';
import './anonymLayout.scss';

interface IAnonymLayoutProps {}

export const AnonymLayout: React.FC<IAnonymLayoutProps> = ({ children }) => {
  return (
    <Layout className="main-layout">
      {children}
    </Layout>
  )
};
