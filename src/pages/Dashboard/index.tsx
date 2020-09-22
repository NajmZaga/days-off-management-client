import React from 'react';
import { IPageProps, ICard } from '../../utils/types';
import { PageTitle } from '../../components/PageTitle';
import { CardsWrapper } from './CardsWrapper';
import { TeamOutlined, UserAddOutlined, CalendarOutlined, SettingOutlined } from '@ant-design/icons';

interface IDashboardProps extends IPageProps {
  
}

export const Dashboard: React.FC<IDashboardProps> = ({
  route,
}) => {

  const cards: ICard[] = [
    {
      title: "Employees List",
      icon: <TeamOutlined />,
      themeColor: 'blue',
      link: '/users',
    },
    {
      title: "Add Employee",
      icon: <UserAddOutlined />,
      themeColor: 'green',
      link: '/add-user',
    },
    {
      title: "Demands List",
      icon: <CalendarOutlined />,
      themeColor: 'red',
      link: '/demands',
    },
    {
      title: "Settings",
      icon: <SettingOutlined />,
      themeColor: 'orange',
      link: '/settings',
    }
  ];
  
  return (
    <div>
      <PageTitle title={ route.title } />
      <CardsWrapper cards={ cards } />
    </div>
  );
};
