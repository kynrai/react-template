import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from 'src/configs/history';
import App from 'src/pages/app';
import mainTheme from 'src/themes/main';
import 'typeface-roboto';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <MuiThemeProvider theme={mainTheme}>
    <CssBaseline>
      <Router history={history}>
        <App />
      </Router>
    </CssBaseline>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
