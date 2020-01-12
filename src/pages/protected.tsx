import { Box, Button, Typography } from '@material-ui/core';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import AuthClient from 'src/libs/auth';
import * as ROUTES from 'src/routes/routes';

const Protected: React.FC = () => {
  let history = useHistory();
  let logout = () => {
    AuthClient.signout(() => {
      history.replace(ROUTES.HOME);
    });
  };

  return (
    <Box>
      <Typography variant="h1">Protected page</Typography>
      <Button onClick={logout}>Log Out</Button>
    </Box>
  );
};

export default Protected;
