/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { batch } from 'react-redux';
import equal from 'fast-deep-equal';
import PrivateRoute from 'views/components/private-route';
import PublicRoute from 'views/components/public-route';

class RouteWithSubRoutes extends PureComponent {
  componentDidMount() {
    const {
      actions,
      store: { dispatch },
      computedMatch: { params },
    } = this.props;

    if (actions) {
      batch(() => {
        actions.forEach((action) => {
          dispatch(action(params));
        });
      });
    }
  }

  componentDidUpdate(prevProps) {
    const {
      actions,
      actionsDidUpdate,
      store: { dispatch },
      computedMatch: { params },
    } = this.props;
    const {
      computedMatch: { params: prevParams },
    } = prevProps;

    if (!equal(prevParams, params)) {
      if (actionsDidUpdate) {
        batch(() => {
          actionsDidUpdate.forEach((action) => {
            dispatch(action(params));
          });
        });
      }
      if (actions) {
        batch(() => {
          actions.forEach((action) => {
            dispatch(action(params));
          });
        });
      }
    }
  }

  componentWillUnmount() {
    const {
      actionsUnMount,
      store: { dispatch },
      computedMatch: { params },
    } = this.props;

    if (actionsUnMount) {
      batch(() => {
        actionsUnMount.forEach((action) => {
          dispatch(action(params));
        });
      });
    }
  }

  render() {
    const {
      component: Component,
      exact,
      path,
      routes,
      privated,
      published,
      store,
      ...rest
    } = this.props;

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
                  <RouteWithSubRoutes
                    key={route.path}
                    store={store}
                    {...route}
                  />
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
  }
}

const RouteConfig = ({ routes, store }) => (
  <Switch>
    {routes.map((route) => (
      <RouteWithSubRoutes key={route.path} store={store} {...route} />
    ))}
  </Switch>
);

export default RouteConfig;
