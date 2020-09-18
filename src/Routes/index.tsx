import flattenDeep from 'lodash/flattenDeep';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ILayout, IRoute } from '../utils/types';
import { ProtectedRoute } from './ProtectedRoute';

interface IRoutesProps {
  authorized: boolean;
}

export const getFlattenedRoutes = (routes?: IRoute[]): IRoute[] => {
  if (!routes) return [];
  return flattenDeep(routes.map(({ routes: subRoutes, ...rest }) => [rest, getFlattenedRoutes(subRoutes)]));
};

export const generateRoutes = (mainRoutes: ILayout[]) => {
  const Routes: React.FC<IRoutesProps> = ({ authorized }) => {

    const layouts = mainRoutes.map(({ layout: Layout, routes }, index) => {
      const subRoutes = getFlattenedRoutes(routes);

      return (
        <Route key={index} path={subRoutes.filter(r => r.path).map(r => r.path!)} exact={subRoutes.some(r => r.exact)}>
          <Layout>
            <Switch>
              {subRoutes.map(r => {
                return (
                  r.path &&
                  r.component && (
                    <ProtectedRoute
                      exact={!!r.exact}
                      path={r.path}
                      key={`${index}-${r.path}`}
                      isAuthorized={authorized}
                      component={r.component}
                      isPublic={!!r.isPublic}
                      title={ r.title }
                      withProps={{
                        route: r,
                      }}
                    />
                  )
                );
              })}
            </Switch>
          </Layout>
        </Route>
      );
    });
    return <Switch>{layouts}</Switch>;
  };

  return Routes;
};
