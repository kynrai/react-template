import { AppBar, Toolbar, Typography } from '@material-ui/core';
import * as React from 'react';

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography color="inherit">Header</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
