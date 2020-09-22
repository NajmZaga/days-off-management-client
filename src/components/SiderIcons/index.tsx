import React from 'react';
import { TeamOutlined, UserAddOutlined } from '@ant-design/icons';

interface ISiderIconsProps {
  type: 'team' | 'add-user';
}

export const SiderIcons: React.FC<ISiderIconsProps> = ({
  type
}) => {
  switch (type) {
    case 'team':
      return <TeamOutlined />;

    case 'add-user':
      return <UserAddOutlined />;
  }
};
