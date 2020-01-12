import { Box, createStyles, makeStyles } from '@material-ui/core';
import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import NavBar from 'src/components/navbar';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
    },
    navbar: { flex: 1 },
    route: { flex: 3 },
  })
);

const NavLayout: React.FC<RouteProps> = ({ children, ...rest }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.navbar}>
        <NavBar />
      </Box>
      <Box className={classes.route}>
        <Route {...rest}>{children}</Route>
      </Box>
    </Box>
  );
};

export default NavLayout;
