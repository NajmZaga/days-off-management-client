import React from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';

import { IRoute } from '../../utils/types';
import { IPageProps } from '../../utils/types';

interface IProps {
  component: React.ComponentType<RouteComponentProps<any> & IPageProps> | React.ComponentType;
  isCollapsibleLayout?: boolean;
  isPublic?: boolean;
  isAuthorized: boolean;
  title: string;
  withProps: {
    route: IRoute;
  };
}

export const ProtectedRoute: React.FC<IProps & RouteProps> = ({ component: Component, isPublic, isAuthorized, withProps, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        const { path } = {...rest};
        if (isPublic || isAuthorized) return <Component {...props} { ...withProps } />;
        return <Redirect to={{ pathname: '/login', state: path }} />;
      }}
    />
  );
};
