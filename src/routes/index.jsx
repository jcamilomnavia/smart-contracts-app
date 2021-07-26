/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from 'views/components/private-route';
import PublicRoute from 'views/components/public-route';

const RouteWithSubRoutes = ({
  component: Component,
  exact,
  path,
  routes,
  privated,
  published,
  store,
  ...rest
}) => {
  let RouterFinal = Route;
  if (privated) {
    RouterFinal = PrivateRoute;
  }
  if (published) {
    RouterFinal = PublicRoute;
  }

  if (routes) {
    return (
      <RouterFinal
        exact={exact}
        path={path}
        render={(routeProps) => (
          <Component {...routeProps} {...rest}>
            <Switch>
              {routes.map((route) => (
                <RouteWithSubRoutes key={route.path} store={store} {...route} />
              ))}
            </Switch>
          </Component>
        )}
      />
    );
  }

  return (
    <RouterFinal
      exact={exact}
      path={path}
      render={(routeProps) => <Component {...routeProps} {...rest} />}
    />
  );
};

const RouteConfig = ({ routes, store }) => (
  <Switch>
    {routes.map((route) => (
      <RouteWithSubRoutes key={route.path} store={store} {...route} />
    ))}
  </Switch>
);

export default RouteConfig;
