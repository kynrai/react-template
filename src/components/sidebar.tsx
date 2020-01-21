import { createStyles, Drawer, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core';
import { Dashboard, Lock } from '@material-ui/icons';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from 'src/routes/routes';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawerPaper: {
      whiteSpace: 'nowrap',
      width: 240,
    },
    activeLink: {
      color: 'red',
    },
  })
);

const Sidebar: React.FC = () => {
  const classes = useStyles();

  const links = [
    { linkText: 'Home', to: ROUTES.HOME, icon: Dashboard, exact: true },
    { linkText: 'Login', to: ROUTES.LOGIN, icon: Lock, exact: false },
    { linkText: 'Protected', to: ROUTES.PROTECTED, icon: Lock, exact: false },
  ];
  return (
    <>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Typography>Site</Typography>
        {links.map(({ linkText, to, icon: Icon, exact }) => (
          <ListItem
            button
            key={linkText}
            component={NavLink}
            to={to}
            exact={exact}
            activeClassName={classes.activeLink}
          >
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={linkText} />
          </ListItem>
        ))}
      </Drawer>
    </>
  );
};

export default Sidebar;
