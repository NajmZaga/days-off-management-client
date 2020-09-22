import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

interface IAppHeaderProps {
  
}

export const AppHeader: React.FC<IAppHeaderProps> = () => {
  return (
    <Header className="header">
    </Header>
  );
};
