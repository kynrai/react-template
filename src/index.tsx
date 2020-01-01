import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/pages/app';
import * as serviceWorker from './serviceWorker';
import history from 'src/configs/history';
import { Router } from 'react-router-dom';
import 'typeface-roboto';
import { MuiThemeProvider } from '@material-ui/core';
import mainTheme from 'src/themes/main';

ReactDOM.render(
  <MuiThemeProvider theme={mainTheme}>
    <Router history={history}>
      <App />
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
