/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// import { authIsLoggedIn } from 'modules/auth/selectors';

const PrivateRoute = ({ render, ...rest }) => {
  // const isLoggedIn = useSelector(authIsLoggedIn);
  const isLoggedIn = true;
  return (
    <Route
      {...rest}
      render={(otherProps) =>
        isLoggedIn === true ? (
          render(otherProps)
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: otherProps.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
