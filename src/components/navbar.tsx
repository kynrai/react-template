import { createStyles, Drawer, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core';
import { Dashboard, Lock } from '@material-ui/icons';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from 'src/routes/routes';

const useStyles = makeStyles(theme =>
  createStyles({
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: 240,
    },
    activeLink: {
      color: 'red',
    },
  })
);

const NavBar: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Typography>Fluit</Typography>
        <ListItem button key="Home" component={NavLink} to="/" exact activeClassName={classes.activeLink}>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button key="Login" component={NavLink} to={ROUTES.LOGIN} activeClassName={classes.activeLink}>
          <ListItemIcon>
            <Lock />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
      </Drawer>
    </>
  );
};

export default NavBar;
