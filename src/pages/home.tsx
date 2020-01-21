import { TextField, Typography } from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';

const RedH1 = styled(Typography)`
  color: red;
`;

const Home: React.FC = () => {
  return (
    <>
      <RedH1 variant="h1">Home page</RedH1>
      <TextField color="primary" />
    </>
  );
};

export default Home;
