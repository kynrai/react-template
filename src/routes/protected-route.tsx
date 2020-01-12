import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import AuthClient from 'src/libs/auth';
import * as ROUTES from 'src/routes/routes';

const ProtectedRoute: React.FC<RouteProps> = props => {
  if (!AuthClient.isAuthenticated) {
    const { location } = props;
    return <Redirect to={{ pathname: ROUTES.LOGIN, state: { from: location } }} />;
  }
  const { component: Component, ...rest } = props;
  return <Route {...rest} component={Component} />;
};

export default ProtectedRoute;
