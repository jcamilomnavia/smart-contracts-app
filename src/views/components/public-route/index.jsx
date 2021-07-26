/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// import { authIsLoggedIn } from 'modules/auth/selectors';

const PublicRoute = ({ render, ...rest }) => {
  // const isLoggedIn = useSelector(authIsLoggedIn);
  const isLoggedIn = false;
  return (
    <Route
      {...rest}
      render={(otherProps) =>
        isLoggedIn === false ? (
          render(otherProps)
        ) : (
          <Redirect
            to={{
              pathname: '/app',
              state: { from: otherProps.location },
            }}
          />
        )
      }
    />
  );
};

export default PublicRoute;
