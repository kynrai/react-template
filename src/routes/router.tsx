import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'src/pages/home';
import Login from 'src/pages/login';
import NotFound from 'src/pages/not-found';
import Protected from 'src/pages/protected';
import ProtectedRoute from 'src/routes/protected-route';
import * as ROUTES from 'src/routes/routes';

const Router = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.LOGIN} component={Login} />
      <ProtectedRoute exact path={ROUTES.PROTECTED} component={Protected} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;
