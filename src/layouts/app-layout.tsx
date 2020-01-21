import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';
import * as React from 'react';
import Header from 'src/components/header';
import Sidebar from 'src/components/sidebar';

const useStyles = makeStyles(theme =>
  createStyles({
    nav: {
      color: 'red',
      border: 'solid',
      maxWidth: 240,
      minWidth: 140,
      height: '100%',
      flex: 1,
    },
    contentCol: {
      color: 'black',
      border: 'solid',
      height: '100%',
      flex: 1,
    },
    appBar: {
      color: 'blue',
      border: 'solid',
      height: 60,
      flex: 1,
      // width: 'auto',
    },
    content: {
      color: 'green',
      border: 'solid',
      height: '100%',
    },
  })
);

const AppLayout: React.FC = () => {
  const classes = useStyles();

  return (
    <Box display="flex">
      <Box className={classes.nav}>
        <Sidebar />
      </Box>
      <Box className={classes.contentCol}>
        <Box className={classes.appBar}>
          <Header />
        </Box>
        <Box className={classes.content}>
          <Typography>Context</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;
