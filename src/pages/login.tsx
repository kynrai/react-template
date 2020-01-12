import { Box, Button, Typography } from '@material-ui/core';
import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
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
      {AuthClient.isAuthenticated ? (
        <Typography variant="body1">You are already logged in</Typography>
      ) : (
        <Typography variant="body1">You must log in to view the page at {from.pathname}</Typography>
      )}
      <Button onClick={login}>Log in</Button>
      <Button onClick={logout}>Log Out</Button>
    </Box>
  );
};

export default Login;
