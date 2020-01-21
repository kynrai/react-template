import { Box, Button, Typography } from '@material-ui/core';
import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import LoginForm from 'src/components/login-form';
import AuthClient from 'src/libs/auth';
import * as ROUTES from 'src/routes/routes';

const Login: React.FC = () => {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: ROUTES.HOME } };

  let login = () => {
    AuthClient.authenticate(() => {
      history.replace(from);
    });
  };

  let logout = () => {
    AuthClient.signout(() => {
      history.replace(ROUTES.HOME);
    });
  };

  return (
    <Box>
      <Typography variant="body1">
        {AuthClient.isAuthenticated
          ? 'You are already logged in'
          : `You must log in to view the page at ${from.pathname}`}
      </Typography>
      <Button onClick={logout}>Log Out</Button>
      <LoginForm onClick={login} />
    </Box>
  );
};

export default Login;
