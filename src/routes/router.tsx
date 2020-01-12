import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavLayout from 'src/layouts/nav-layout';
import Home from 'src/pages/home';
import Login from 'src/pages/login';
import NotFound from 'src/pages/not-found';
import Protected from 'src/pages/protected';
import ProtectedRoute from 'src/routes/protected-route';
import * as ROUTES from 'src/routes/routes';

const Router = () => {
  return (
    <Switch>
      <NavLayout exact path={ROUTES.HOME}>
        <Home />
      </NavLayout>
      <NavLayout path={ROUTES.LOGIN}>
        <Login />
      </NavLayout>
      <ProtectedRoute path={ROUTES.PROTECTED} component={Protected} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;
